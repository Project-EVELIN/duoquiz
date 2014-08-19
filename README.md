duoquiz
=======
# Javascript C++ Lexer and Parser

* based on grammar and lex files from: https://github.com/eranif/codelite/tree/master/CxxParser
* generated with jison
* generates AST only


## Parser
Additional information about writing a parser for bison/jison can be found here:
* http://www.gnu.org/software/bison/manual/html_node/Action-Types.html#Action-Types
* http://books.google.de/books?id=3Sr1V5J9_qMC&pg=PA148&lpg=PA148&dq=bison+what+is+$$%5B$0-1%5D&source=bl&ots=WFEyeaiMKT&sig=QMHeuzyF1g0q0Ijg3tlIRKrpX9Y&hl=de&sa=X&ei=ziHvU-r3E9Cp7AbAh4GIBg&ved=0CCMQ6AEwAA#v=onepage&q=%24%24%5B%240-1%5D&f=false
* http://stackoverflow.com/questions/8467150/how-to-get-abstract-syntax-tree-ast-out-of-jison-parser
* http://tldp.org/HOWTO/Lex-YACC-HOWTO-6.html

## Testing
1. Open ```parser.html``` locally
2. Open dev-console and run ```cpp.parse("ÍNPUT-STRING")``` for example ```cpp.parse("int main(void){}")```

## ANTLR
* C2011 grammar https://github.com/antlr/grammars-v4/blob/master/c/C.g4
* ANTLR V4 - does not support javascript target -.-

## Preprocessor
Possible grammar for peg.js for C++ preprocessing
* http://www.coasttocoastresearch.com/interactiveapg/index/sample/cpp
* This is essentially the preprocessor grammar from ISO/IEC 14882:2003(E) , Appendix A.14 written in SABNF notation and rearranged for the prioritized-choice disambiguation rule. The "if-section", "elif-section" and "else-section" rules use syntactic predicates.
* ABNF

```
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; FILE & GROUPS
pp-file             = *group

group               = if-section    /
                      group-line

group-line          = directive control-line  /
                      code-line

code-line           = pp-tokens nl

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; CONTROL LINES
directive           = wsp %d35 wsp        ; "#"
control-line        = null-line           /
                      define-line         /
                      include-line        /
                      undef-line          /
                      pragma-line         /
                      error-line          /
                      line-line           /
                      other-line

other-line          = any nl
null-line           = nl
define-line         = define define-content
include-line        = include include-content
undef-line          = undef undef-content
pragma-line         = pragma pragma-content
error-line          = error error-content
line-line           = line line-content

define-content      = define-simple / define-func / empty-content
include-content     = %d32 wsp header-name nl / empty-content
undef-content       = nl / %d32 pp-tokens nl / empty-content
pragma-content      = nl / %d32 pp-tokens nl / empty-content
error-content       = nl / %d32 pp-tokens nl / empty-content
line-content        = nl / %d32 pp-tokens nl / empty-content
empty-content       = any nl
define-simple       = %d32 wsp macro-name [%d32 pp-tokens] nl
define-func         = %d32 wsp macro-name macro-args [%d32 pp-tokens] nl
macro-name          = nondigit *(nondigit/digit)
macro-arg           = nondigit *(nondigit/digit)
macro-args          = %d40 wsp [macro-arg *(wsp %d44 wsp macro-arg)] %d41

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; IF SECTION
;if-section          = if-begin *if-body !if-end
if-section          = if-begin *(!if-end if-body) if-end
if-begin            = directive (ifndef-line / ifdef-line / if-line)
if-body             = if-section / any-line
if-end              = elif-section / else-section / endif-line
ifndef-line         = ifndef ifndef-expr nl
ifdef-line          = ifdef  ifdef-expr nl
if-line             = if     if-expr nl
ifndef-expr         = pp-tokens
ifdef-expr          = pp-tokens
if-expr             = pp-tokens

                    ; ELIF SECTION
;elif-section        = elif-begin-line *elif-body !elif-end
elif-section        = elif-begin-line *(!elif-end elif-body) elif-end
elif-begin-line     = directive elif if-expr nl
elif-body           = if-section / any-line
elif-end            = elif-section / else-section / endif-line

                    ; ELSE SECTION
;else-section        = else-begin-line *else-body !endif-line
else-section        = else-begin-line *(!endif-line else-body) endif-line
else-begin-line     = directive else pp-tokens nl
else-body           = if-section / any-line
endif-line          = directive endif pp-tokens nl

any-line            = any %d10

                    ; lower case names
if                  = %d105.102
ifdef               = %d105.102.100.101.102
ifndef              = %d105.102.110.100.101.102
elif                = %d101.108.105.102
else                = %d101.108.115.101
endif               = %d101.110.100.105.102
include             = %d105.110.99.108.117.100.101
define              = %d100.101.102.105.110.101
undef               = %d117.110.100.101.102
error               = %d101.114.114.111.114
line                = %d108.105.110.101
pragma              = %d112.114.97.103.109.97

header-name         = header-name-bracket /
                      header-name-quote
header-name-bracket = %d60 filename-bracket %d62 ; <filename>
header-name-quote   = %d34 filename-quote %d34   ; "filename"
filename-bracket    = *(%d32-59/%d61/%d63-126)
filename-quote      = *(%d32-33/%d35-126)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; TOKENS
pp-tokens           = *(wsp pp-token)


                    ; order is important - "first-success" disambiguation
                    ;   - prefer alt-operator to identifier (which would also match an alt-operator)
                    ;   - prefer wide char/string to identifier
                    ;     - (eg wide L' or L" over identifier L followed by ' or ")
                    ;   - prefer pp-number over operator
                    ;     - (eg ".123" = pp-number, not operator ".", followed by "123")
pp-token            = alt-operator             /
                      character-literal        /
                      string-literal           /
                      identifier               /
                      pp-number                /
                      operator                 /
                      other

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; OTHER
                    ; error production - any printing character except space
other               = %d33-126

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ALTERNATE OPERATORS
                    ; ordered longest to shortest
alt-operator        = op-alt-and-assign   /
                      op-alt-xor-assign   /
                      op-alt-notequal     /
                      op-alt-bitand       /
                      op-alt-bitor        /
                      op-alt-or-assign    /
                      op-alt-complement   /
                      op-alt-and          /
                      op-alt-xor          /
                      op-alt-not          /
                      op-alt-or

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; CHARACTER LITERAL
                    ; 2.13.2 character literals
character-literal   = (%d39/%d76.39) *c-char-seq %d39
c-char-seq          = any-c-char / %d92 (escape-sequence / uni-char-name)
any-c-char          = %d32-38 / %d40-91 / %d93-126
escape-sequence     = simple-escape-seq /
                      octal-escape-seq  /
                      hex-escape-seq
simple-escape-seq   = %d39 / %d34 / %d63 / %d92 / %d97-98 / %d102 / %d110 / %d114/ %d116 / %d118
                    ;   '      "      ?      \      a-b       f       n       r      t       v
octal-escape-seq    = 1*3%d48-55 ; 0-7
hex-escape-seq      = %d120 1*(%d48-57 / %d65-70 / %d97-102)
;                       x     (0-9     / a-f     / a-f)
uni-char-name       = %d117 4(%d48-57 / %d65-70 / %d97-102) /
                      %d85  8(%d48-57 / %d65-70 / %d97-102)
                    ; u 4hexdigit or u 8hexdigit

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; STRING LITERAL
                    ; 2.13.4 string literals
string-literal      = (%d34/%d76.34) *s-char-seq %d34
s-char-seq          = any-s-char / %d92 (escape-sequence / uni-char-name)
any-s-char          = %d32-33 / %d35-91 / %d93-126

                    ; 2.10 identifiers
identifier          = nondigit *(nondigit / digit)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; PP-NUMBER
                    ; 2.9 preprocessing numbers
;pp-number           = (digit / "." digit) *(digit / ("e" sign) / "." / nondigit)
digit               = %d48-57
                    ;   0 -9
nondigit            = "_" / %d65-90 / %d97-122
                    ; underscore + upper alpha + lower alpha
sign                = %d43 / %d45
                    ;   +  /  -
;number          = float / integer
pp-number          = float / integer

integer         = (decimal / octal / hex) [int-suffix]
decimal         = non-zero-digit *digit
non-zero-digit  = %d49-57
;digit           = %d48-57
int-suffix      = ("l" ["u"]) / ("u" ["l"]) ; case insensitive intended
octal           = %d48 *%d48-55
hex             = %d48 "x" *hex-digit
hex-digit       = digit /
                  %d65-70 /
                  %d97-102

float           = (dig-seq exponent [float-suffix]) /
                  (fraction [exponent] [float-suffix])
dig-seq         = 1*digit
exponent        = "e" [%d43/%d45] dig-seq
float-suffix    = "f" / "l"
fraction        = ([dig-seq] %d46 dig-seq) /
                  (dig-seq %d46)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
                    ; OPERATOR
                    ; ordered longest to shortest
operator            = op-alt-poundpound   /
                      op-elipsis          /
                      op-lshift-assign    /
                      op-rshift-assign    /
                      op-pointerstar      /
                      op-alt-lcbrac       /
                      op-alt-rcbrac       /
                      op-alt-lsbrac       /
                      op-alt-rsbrac       /
                      op-alt-pound        /
                      op-poundpound       /
                      op-coloncolon       /
                      op-periodstar       /
                      op-plus-assign      /
                      op-minus-assign     /
                      op-star-assign      /
                      op-divide-assign    /
                      op-mod-assign       /
                      op-xor-assign       /
                      op-and-assign       /
                      op-or-assign        /
                      op-lshift           /
                      op-rshift           /
                      op-equals           /
                      op-notequal         /
                      op-lessorequal      /
                      op-greaterorequal   /
                      op-and              /
                      op-or               /
                      op-increment        /
                      op-decrement        /
                      op-pointer          /
                      op-lcbrac           /
                      op-rcbrac           /
                      op-lsbrac           /
                      op-rsbrac           /
                      op-pound            /
                      op-lparen           /
                      op-rparen           /
                      op-semi             /
                      op-colon            /
                      op-question         /
                      op-period           /
                      op-plus             /
                      op-minus            /
                      op-star             /
                      op-divide           /
                      op-mod              /
                      op-xor              /
                      op-bitand           /
                      op-bitor            /
                      op-complement       /
                      op-not              /
                      op-assign           /
                      op-lessthan         /
                      op-greaterthan      /
                      op-comma

; threes
op-elipsis          = %d46.46.46 ; ...
op-lshift-assign    = %d60.60.61 ; <<=
op-rshift-assign    = %d62.62.61 ; >>=
op-pointerstar      = %d45.62.42 ; ->*

; twos
op-poundpound       = %d35.35 ; ##
op-coloncolon       = %d58.58 ; ::
op-periodstar       = %d46.42 ; .*
op-plus-assign      = %d43.61 ; +=
op-minus-assign     = %d45.61 ; -=
op-star-assign      = %d42.61 ; *=
op-divide-assign    = %d47.61 ; /=
op-mod-assign       = %d37.61 ; %=
op-xor-assign       = %d94.61 ; ^=
op-and-assign       = %d38.61 ; &=
op-or-assign        = %d124.61 ; |=
op-lshift           = %d60.60 ; <<
op-rshift           = %d62.62 ; >>
op-equals           = %d61.61 ; ==
op-notequal         = %d33.61 ; !=
op-lessorequal      = %d60.61 ; <=
op-greaterorequal   = %d62.61 ; >=
op-and              = %d38.38 ; &&
op-or               = %d124.124 ; ||
op-increment        = %d43.43 ; ++
op-decrement        = %d45.45 ; --
op-pointer          = %d45.62 ; ->

; ones
op-lcbrac           = %d123 ; {
op-rcbrac           = %d125 ; }
op-lsbrac           = %d91 ; [
op-rsbrac           = %d93 ; ]
op-pound            = %d35 ; #
op-lparen           = %d40 ; (
op-rparen           = %d41 ; )
op-semi             = %d59 ; ;
op-colon            = %d58 ; :
op-question         = %d63 ; ?
op-period           = %d46 ; .
op-plus             = %d43 ; +
op-minus            = %d45 ; -
op-star             = %d42 ; *
op-divide           = %d47 ; /
op-mod              = %d37 ; %
op-xor              = %d94 ; ^
op-bitand           = %d38 ; &
op-bitor            = %d124 ; |
op-complement       = %d126 ; ~
op-not              = %d33 ; !
op-assign           = %d61 ; =
op-lessthan         = %d60 ; <
op-greaterthan      = %d62 ; >
op-comma            = %d44 ; ,

                    ; alternate operators
op-alt-lcbrac       = %d60.37       ; <%
op-alt-rcbrac       = %d37.62       ; %>
op-alt-lsbrac       = %d60.58       ; <:
op-alt-rsbrac       = %d58.62       ; :>
op-alt-pound        = %d37.58       ; %:
op-alt-poundpound   = %d37.58.37.58 ; %:%:

                    ; lower case only
op-alt-and-assign   = %d97.110.100.95.101.113 ; "and-eq"
op-alt-xor-assign   = %d120.111.114.95.101.113 ; "xor-eq"
op-alt-notequal     = %d110.111.116.95.101.113 ; "not-eq"
op-alt-bitand       = %d98.105.116.97.110.100 ; "bitand"
op-alt-bitor        = %d98.105.116.111.114 ; "bitor"
op-alt-or-assign    = %d111.114.95.101.113 ; "or-eq"
op-alt-complement   = %d99.111.109.112.108 ; "compl"
op-alt-and          = %d97.110.100 ; "and"
op-alt-xor          = %d120.111.114 ; "xor"
op-alt-not          = %d110.111.116 ; "not"
op-alt-or           = %d111.114 ; "or"

                    ; separators
wsp                 = *%d32
nl                  = *%d32 %d10
any                 = *%d32-126
```