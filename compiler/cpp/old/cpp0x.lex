%lex
/* Those are helper groups */
CP					("u"|"U"|"L")
SP					("u"|"u8"|"U"|"L")
SQ					("'")
NL					[\n]

identifier	[a-zA-Z_][0-9a-zA-Z_]*

exponent_part [eE][-+]?[0-9]+
fractional_constant ([0-9]*"."[0-9]+)|([0-9]+".")
floating_constant (({fractional_constant}{exponent_part}?)|([0-9]+{exponent_part}))[FfLl]?

integer_suffix_opt ([uU]?[lL]{0,2})|([lL]{1,2}[uU])
decimal_constant [1-9][0-9]*{integer_suffix_opt}
octal_constant "0"[0-7]*{integer_suffix_opt}
hex_constant "0"[xX][0-9a-fA-F]+{integer_suffix_opt}

simple_escape [abfnrtv'"?\\]
octal_escape  [0-7]{1,3}
hex_escape "x"[0-9a-fA-F]+

escape_sequence [\\]({simple_escape}|{octal_escape}|{hex_escape})
c_char [^'\\\n]|{escape_sequence}
s_char [^"\\\n]|{escape_sequence}

h_tab [\011]
form_feed [\014]
v_tab [\013]
c_return [\015]

horizontal_white [ ]|{h_tab}

%x PREPR
%x WRAP_PREP
%x CPP_COMMENT
%x C_COMMENT

%options flex case-insensitive

%%
/* starting */
"/*" {this.begin("C_COMMENT");}
"//" {this.begin("CPP_COMMENT");}
{horizontal_white}+ {}
({v_tab}|{c_return}|{form_feed})+ {}
({horizontal_white}|{v_tab}|{c_return}|{form_feed})*"\n" { }

/* lex.digraph */
/* is this realy necessary? */
"<%"						return "{"
"%>"						return "}"
"<:"						return "["
":>"						return "]"
"%:"						return "#"
"%:%:"					return "##"
"and"						return "ANDAND"
"bitor"					return "|"
"or"						return "OROR"
"xor"						return "^"
"compl"					return "~"
"bitand"				return "&"
"and_eq"				return "ANDassign"
"or_eq"					return "ORassign"
"xor_eq"				return "XORassign"
"not"						return "!"
"not_eq"				return "NE"

/* lex.token */

/* lex.token.keyword */
"alignas"				return "ALIGNAS"
"alignof"				return "ALIGNOF"
"asm"						return "ASM"
"auto"					return "AUTO"
"bool"					return "BOOL"
"break"					return "BREAK"
"case"					return "CASE"
"catch"					return "CATCH"
"char"					return "CHAR"
"char16_t"			return "CHAR16_T"
"char32_t"			return "CHAR32_T"
"class"					return "CLASS"
"const"					return "CONST"
"constexpr"			return "CONSTEXPR"
"const_cast"		return "CONST_CAST"
"continue"			return "CONTINUE"
"decltype"			return "DECLTYPE"
"default"				return "DEFAULT"
"delete"				return "DELETE"
"do"						return "DO"
"double"				return "DOUBLE"
"dynamic_cast"	return "DYNAMIC_CAST"
"else"					return "ELSE"
"enum"					return "ENUM"
"explicit"			return "EXPLICIT"
"export"				return "EXPORT"
"extern"				return "EXTERN"
"false"					return "FALSE"
"final"					return "FINAL"
"float"					return "FLOAT"
"for"						return "FOR"
"friend"				return "FRIEND"
"goto"					return "GOTO"
"if"						return "IF"
"inline"				return "INLINE"
"int"						return "INT"
"long"					return "LONG"
"mutable"				return "MUTABLE"
"namespace"			return "NAMESPACE"
"new"						return "NEW"
"noexcept"			return "NOEXCEPT"
"nullptr"				return "NULLPTR"
"operator"			return "OPERATOR"
"override"			return "OVERRIDE"
"private"				return "PRIVATE"
"protected"			return "PROTECTED"
"public"				return "PUBLIC"
"register"			return "REGISTER"
"reinterpret_cast"	return "REINTERPRET_CAST"
"return"				return "RETURN"
"short"					return "SHORT"
"signed"				return "SIGNED"
"sizeof"				return "SIZEOF"
"static"				return "STATIC"
"static_assert"	return "STATIC_ASSERT"
"static_cast"		return "STATIC_CAST"
"struct"				return "STRUCT"
"switch"				return "SWITCH"
"template"			return "TEMPLATE"
"this"					return "THIS"
"thread_local"	return "THREAD_LOCAL"
"throw"					return "THROW"
"true"					return "TRUE"
"try"						return "TRY"
"typedef"				return "TYPEDEF"
"typeid"				return "TYPEID"
"typename"			return "TYPENAME"
"union"					return "UNION"
"unsigned"			return "UNSIGNED"
"using"					return "USING"
"virtual"				return "VIRTUAL"
"void"					return "VOID"
"volatile"			return "VOLATILE"
"wchar_t"				return "WCHAR_T"
"while"					return "WHILE"

/* lex.token.identifier */
{identifier}		return "IDENTIFIER"

/* lex.token.literal */
{decimal_constant}				return "DECIMAL_LITERAL"
{octal_constant}					return "OCTAL_LITERAL"
{hex_constant}						return "HEXADECIMAL_LITERAL"
{floating_constant}				return "FLOATING_LITERAL"

{CP}?{SQ}(\\.|[^\\{SQ}])+{SQ}	return "CHARACTER_LITERAL"
{SP}?\"(\\.|[^\\"])*\"					return "STRING_LITERAL"

/* lex.token.operator */

/* preprocessing-op-or-punc */
"{"						return '{'
"}"						return '}'
"["						return '['
"]"						return ']'
"##"					return '##'
"("						return '('
")"						return ')'
";"						return ';'
":"						return ':'
"..."					return 'ELLIPSIS'
"?"						return '?'
"::"					return 'CLCL'
"."						return '.'
".*"					return 'DOTSTAR'
'+'						return '+'
'-'						return '-'
'*'						return '*'
'/'						return '/'
'%'						return '%'
'^'						return '^'
'&'						return '&'
'|'						return '|'
'~'						return '~'
'!'						return '!'
'!'						return '!'
'='						return '='
'<'						return '<'
'>'						return '>'
'+='					return 'ADDassign'
'-='					return 'SUBassign'
'*='					return 'MULTassign'
'/='					return 'DIVassign'
'%='					return 'MODassign'
'^='					return 'ERassign'
'&='					return 'ANDassign'
'|='					return 'ORassign'
'<<'					return 'LS'
'>>'					return 'RS'
'<<='					return 'LSassign'
'>>='					return 'RSassign'
'=='					return 'EQ'
'!='					return 'NE'
'<='					return 'LE'
'>='					return 'GE'
'&&'					return 'ANDAND'
'||'					return 'OROR'
'++'					return 'INC'
'--'					return 'DEC'
","						return ','
"->*"					return 'ARROWstar'
"->"					return 'ARROW'
"0"						return '0'
"#"						this.begin("PREPR"); return '#';



/* lex.token.punctuator */

/* lex.ext not supported currently, no used-defined-literals */

/* lex.preprocessor */
<PREPR>{NL}												%{ this.begin("INITIAL"); return "PP_NEWLINE";%}
<PREPR>\\													this.begin("WRAP_PREP")
<PREPR>({horizontal_white})				{ }
<PREPR>({horizontal_white})*"("		return "PP_LPAREN"

<PREPR>["]												return "PP_QUOTE"
<PREPR>"include"									return "PP_INCLUDE"
<PREPR>"undef"										return "PP_UNDEF"
<PREPR>"line"											return "PP_LINE"
<PREPR>"pragma"										return "PP_PRAGMA"
<PREPR>"define"  									return "PP_DEFINE"
<PREPR>"defined"									return "PP_DEFINED"
<PREPR>"ifdef"										return "PP_IFDEF"
<PREPR>"ifndef"										return "PP_IFNDEF"
<PREPR>"if"												return "PP_IF"
<PREPR>"else"											return "PP_ELSE"
<PREPR>"endif"										return "PP_ENDIF"
<PREPR>"elif"											return "PP_ELIF"
<PREPR>"error"										return "PP_ERROR"
<PREPR>{identifier}								return "IDENTIFIER"
<PREPR>{decimal_constant}					return "DECIMAL_LITERAL"
<PREPR>{octal_constant}						return "OCTAL_LITERAL"
<PREPR>{hex_constant}							return "HEXADECIMAL_LITERAL"
<PREPR>{floating_constant}				return "FLOATING_LITERAL"
<PREPR>"L"?[']{c_char}+[']				return "CHARACTER_LITERAL"
<PREPR>"L"?["]{s_char}*["]				return "STRING_LITERAL"
<PREPR>["][^\n]*["]								return "PP_QCHARSEQUENCE"
<PREPR>"<"[^\n]*">"								return "PP_HCHARSEQUENCE"
<PREPR>.													return "PP_ANYCHAR"

<WRAP_PREP>\n											this.begin("PREPR")
<WRAP_PREP>{identifier}						return "IDENTIFIER"
<CPP_COMMENT>\n 									this.begin("INITIAL")
<CPP_COMMENT>.										return("")
<C_COMMENT>"*/"										this.begin("INITIAL")
<C_COMMENT>.											return("")
/lex