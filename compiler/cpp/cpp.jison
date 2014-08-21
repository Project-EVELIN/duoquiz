/* This group is used by the C/C++ language parser */
%token AUTO            DOUBLE          INT             STRUCT
%token BREAK           ELSE            LONG            SWITCH
%token CASE            ENUM            REGISTER        TYPEDEF
%token CHAR            EXTERN          RETURN          UNION
%token CONST           FLOAT           SHORT           UNSIGNED
%token CONTINUE        FOR             SIGNED          VOID
%token DEFAULT         GOTO            SIZEOF          VOLATILE
%token DO              IF              STATIC          WHILE
%token BOOL            WCHAR_T          CHAR16_T         CHAR32_T

/* The following are used in C++ only.  ANSI C would call these IDENTIFIERs */
%token NEW             DELETE
%token THIS
%token OPERATOR
%token CLASS
%token PUBLIC           PROTECTED       PRIVATE
%token VIRTUAL          FRIEND
%token INLINE           OVERLOAD
%token TRUE             FALSE

/* ANSI C Grammar suggestions */
%token IDENTIFIER              STRINGliteral
%token FLOATINGconstant        INTEGERconstant        CHARACTERconstant
%token OCTALconstant           HEXconstant

/* New Lexical element, whereas ANSI C suggested non-terminal */
%token TYPEDEFname

/* Multi-Character operators */
%token  ARROW
%token  ICR DECR
%token  LS RS
%token  LE GE EQ NE
%token  ANDAND OROR
%token  ELLIPSIS
%token  CLCL
%token  DOTstar ARROWstar

/* modifying assignment operators */
%token MULTassign  DIVassign    MODassign
%token PLUSassign  MINUSassign
%token LSassign    RSassign
%token ANDassign   ERassign     ORassign

/* preprocessing */
%token PP_IF
%token PP_ELIF
%token PP_ELSE
%token PP_ENDIF
%token PP_IFDEF
%token PP_IFNDEF
%token PP_INCLUDE
%token PP_DEFINE
%token PP_UNDEF
%token PP_ERROR
%token PP_PRAGMA
%token PP_SHARP
%token PP_LINE
%token PP_NEWLINE
%token PP_LPAREN
%token PP_HCHARSEQUENCE
%token PP_QCHARSEQUENCE
%token PP_QUOTE
%token PP_ANYCHAR

%start start_sym

%%

/* starting point required to return AST */
start_sym: translation_unit { return $1;}
        ;

/* PREPROCESSING see http://www.nongnu.org/hcb/#group */
preprocessing_file:

        | group { $$ = $1;}
        ;

group: group_part
        | group group_part {$$ = [$1, $2];}
        ;

group_part: if_section { $$ = $1;}
        | control_line { $$ = $1;}
        | text-line { $$ = $1;}
        | PP_SHARP non_directive {$$ = [$1, $2];}
        ;

if_section: if_group elif_groups else_group endif_line
        | if_group elif_groups endif_line
        | if_group else_group endif_line
        | if_group endif_line
        ;

if_group: PP_SHARP PP_IF constant_expression PP_NEWLINE group_opt
        | PP_SHARP PP_IFDEF identifier PP_NEWLINE group_opt
        | PP_SHARP PP_IFNDEF identifier PP_NEWLINE group_opt
        ;

elif_groups: elif_group
        | elif_group elif_group
        ;

elif_group: PP_SHARP PP_ELIF constant_expression PP_NEWLINE group_opt
        ;

else_group: PP_SHARP PP_ELSE PP_NEWLINE group_opt
        ;

endif_line: PP_SHARP PP_ENDIF PP_NEWLINE
        ;

control_line: PP_SHARP PP_INCLUDE pp_tokens PP_NEWLINE { $$ = [$1, $2, $3];}
        | PP_SHARP PP_DEFINE identifier replacement_list PP_NEWLINE { $$ = [$1, $2, $3, $4];}
        | PP_SHARP PP_DEFINE identifier PP_LPAREN identifier_list_opt ')' replacement_list PP_NEWLINE
        { $$ = yy.parser.createArrayOpt("control_line", [$1, $2, $3, $4, $5, $6, $7]);}
        | PP_SHARP PP_DEFINE identifier PP_LPAREN identifier_list ',' ELLIPSIS ')' replacement_list PP_NEWLINE
        | PP_SHARP PP_UNDEF identifier PP_NEWLINE { $$ = [$1, $2, $3];}
        | PP_SHARP PP_LINE pp_tokens PP_NEWLINE { $$ = [$1, $2, $3];}
        | PP_SHARP PP_ERROR pp_tokens_opt PP_NEWLINE
        { $$ = yy.parser.createArrayOpt("control_line", [$1, $2, $3]);}
        | PP_SHARP PP_PRAGMA pp_tokens_opt PP_NEWLINE
        { $$ = yy.parser.createArrayOpt("control_line", [$1, $2, $3]);}
        | PP_SHARP PP_NEWLINE { $$ = $1;}
        ;

text_line: pp_tokens_opt PP_NEWLINE
        { $$ = yy.parser.createArrayOpt("control_line", [$1, $2]);}
        ;

non_directive: pp_tokens PP_NEWLINE {$$ = [$1, $2];}
        ;

identifier_list:
        | identifier { $$ = yytext; console.log("identifier_list:", yytext);}
        | identifier_list ',' identifier {$$ = [$1, $2, $3]; console.log("identifier_list:", yytext);}
        ;

identifier_list_opt:

        | identifier_list { $$ = $1;}
        ;

pp_tokens: preprocessing_token { $$ = $1;}
        | pp_tokens preprocessing_token {$$ = [$1, $2];}
        ;

/* optional pp_tokens */
pp_tokens_opt:

        | pp_tokens { $$ = $1;}
        ;

/* optional group */
group_opt:

        | group { $$ = $1;}
        ;

replacement_list: pp_tokens_opt { $$ = $1;}
        ;

preprocessing_token: header_name { $$ = $1;}
        | IDENTIFER { $$ = yytext;}
        | pp_number { $$ = $1;}
        | CHARACTERconstant { $$ = $1;}
        | STRINGliteral { $$ = $1;}
        | any_operator { $$ = $1;}
        ;

pp_number: INTEGERconstant { $$ = yytext;}
        | FLOATINGconstant { $$ = yytext;}
        | OCTALconstant { $$ = yytext;}
        | HEXconstant { $$ = yytext;}
        ;

header_name: PP_HCHARSEQUENCE { $$ = yytext;}
        | PP_QCHARSEQUENCEE { $$ = yytext;}
        ;

/* EXCEPTIONS http://www.nongnu.org/hcb/#exception-specification */
/* TODO */

/* use this to return always the text and not IDENTIFIER */
identifier:
        IDENTIFIER {$$=yytext;}
        ;


/* CONSTANTS */
constant:
        INTEGERconstant { $$ = yytext;}
        | FLOATINGconstant { $$ = yytext;}
        | OCTALconstant { $$ = yytext;}
        | HEXconstant { $$ = yytext;}
        | CHARACTERconstant { $$ = yytext;}
        | boolean_constant {$$ = $1;}
        ;

/* http://www.nongnu.org/hcb/#boolean-literal */
boolean_constant: TRUE { $$ = yytext;}
        | FALSE { $$ = yytext;}
        ;

string_literal_list:
        STRINGliteral { $$ = yytext;}
        | string_literal_list STRINGliteral  { $$ = [$1, $2];}
        ;


/* EXPRESSIONS */


    /* Note that I provide  a  "scope_opt_identifier"  that  *cannot* 
    begin  with ::.  This guarantees we have a viable declarator, and 
    helps to disambiguate :: based uses in the grammar.  For example:

            ...
            {
            int (* ::b()); // must be an expression
            int (T::b); // officially a declaration, which fails on constraint grounds

    This *syntax* restriction reflects the current syntax in the ANSI 
    C++ Working Papers.   This  means  that  it  is  *incorrect*  for 
    parsers to misparse the example:

            int (* ::b()); // must be an expression

    as a declaration, and then report a constraint error.

    In contrast, declarations such as:

        class T;
        class A;
        class B;
        main(){
              T( F());  // constraint error: cannot declare local function
              T (A::B::a); // constraint error: cannot declare member as a local value

    are  *parsed*  as  declarations,  and *then* given semantic error 
    reports.  It is incorrect for a parser to "change its mind" based 
    on constraints.  If your C++ compiler claims  that  the  above  2 
    lines are expressions, then *I* claim that they are wrong. */

paren_identifier_declarator:
        scope_opt_identifier {$$ = $1;}
        | scope_opt_complex_name {$$ = $1;}
        | '(' paren_identifier_declarator ')' {$$ = [$1, $2, $3];}
        ;


    /* Note that CLCL IDENTIFIER is NOT part of scope_opt_identifier, 
    but  it  is  part of global_opt_scope_opt_identifier.  It is ONLY 
    valid for referring to an identifier, and NOT valid for declaring 
    (or importing an external declaration of)  an  identifier.   This 
    disambiguates  the  following  code,  which  would  otherwise  be 
    syntactically and semantically ambiguous:

            class base {
                static int i; // element i;
                float member_function(void);
                };
            base i; // global i
            float base::member_function(void) {
                i; // refers to static int element "i" of base
                ::i; // refers to global "i", with type "base"
                    {
                    base :: i; // import of global "i", like "base (::i);"?
                                // OR reference to global??
                    }
                }
        */

primary_expression:
        global_opt_scope_opt_identifier { $$ = $1;}
        | global_opt_scope_opt_complex_name { $$ = $1;}
        | THIS { $$ = $1;}
        | constant { $$ = $1;}
        | string_literal_list { $$ = $1;}
        | '(' comma_expression ')' { $$ = [$1, $2, $3];}
        ;


    /* I had to disallow struct, union, or enum  elaborations  during 
    operator_function_name.   The  ANSI  C++  Working  paper is vague 
    about whether this should be part of the syntax, or a constraint.  
    The ambiguities that resulted were more than LALR  could  handle, 
    so  the  easiest  fix was to be more specific.  This means that I 
    had to in-line expand type_specifier_or_name far  enough  that  I 
    would  be  able to exclude elaborations.  This need is what drove 
    me to distinguish a whole series of tokens based on whether  they 
    include elaborations:

         struct A { ... }

    or simply a reference to an aggregate or enumeration:

         enum A

    The  latter,  as  well  an  non-aggregate  types are what make up 
    non_elaborating_type_specifier */

    /* Note that the following does not include  type_qualifier_list. 
    Hence,   whenever   non_elaborating_type_specifier  is  used,  an 
    adjacent rule is supplied containing type_qualifier_list.  It  is 
    not  generally  possible  to  know  immediately  (i_e., reduce) a 
    type_qualifier_list, as a TYPEDEFname that follows might  not  be 
    part of a type specifier, but might instead be "TYPEDEFname ::*".  
    */

non_elaborating_type_specifier:
        sue_type_specifier { $$ = $1;}
        | basic_type_specifier { $$ = $1;}
        | typedef_type_specifier { $$ = $1;}

        | basic_type_name { $$ = $1;}
        | TYPEDEFname { $$ = $1;}
        | global_or_scoped_typedefname { $$ = $1;}
        ;


    /*  The  following  introduces  MANY  conflicts.   Requiring  and 
    allowing '(' ')' around the `type' when the type is complex would 
    help a lot. */

operator_function_name:
        OPERATOR any_operator
        | OPERATOR type_qualifier_list            operator_function_ptr_opt
        | OPERATOR non_elaborating_type_specifier operator_function_ptr_opt
        ;


    /* The following causes several ambiguities on *  and  &.   These 
    conflicts  would also be removed if parens around the `type' were 
    required in the derivations for operator_function_name */

    /*  Interesting  aside:  The  use  of  right  recursion  in   the 
    production  for  operator_function_ptr_opt gives both the correct 
    parsing, AND removes a conflict!   Right  recursion  permits  the 
    parser  to  defer  reductions  (a.k.a.:  delay  resolution),  and 
    effectively make a second pass! */

operator_function_ptr_opt:
        | unary_modifier        operator_function_ptr_opt { $$ = [$1, $2];}
        | asterisk_or_ampersand operator_function_ptr_opt { $$ = [$1, $2];}
        ;


    /* List of operators we can overload */
any_operator:
        '+' { $$ = yytext;}
        | '-' { $$ = yytext;}
        | '*' { $$ = yytext;}
        | '/' { $$ = yytext;}
        | '%' { $$ = yytext;}
        | '^' { $$ = yytext;}
        | '&' { $$ = yytext;}
        | '|' { $$ = yytext;}
        | '~' { $$ = yytext;}
        | '!' { $$ = yytext;}
        | '<' { $$ = yytext;}
        | '>' { $$ = yytext;}
        | LS { $$ = yytext;}
        | RS { $$ = yytext;}
        | ANDAND { $$ = yytext;}
        | OROR { $$ = yytext;}
        | ARROW { $$ = yytext;}
        | ARROWstar { $$ = yytext;}
        | '.' { $$ = yytext;}
        | DOTstar { $$ = yytext;}
        | ICR { $$ = yytext;}
        | DECR { $$ = yytext;}
        | LE { $$ = yytext;}
        | GE { $$ = yytext;}
        | EQ { $$ = yytext;}
        | NE { $$ = yytext;}
        | assignment_operator { $$ = yytext;}
        | '(' ')' { $$ = yytext;}
        | '[' ']' { $$ = yytext;}
        | NEW { $$ = yytext;}
        | DELETE { $$ = yytext;}
        | ',' { $$ = yytext;}
        ;


    /* The following production for type_qualifier_list was specially 
    placed BEFORE the definition of postfix_expression to  resolve  a 
    reduce-reduce    conflict    set    correctly.    Note   that   a 
    type_qualifier_list is only used  in  a  declaration,  whereas  a 
    postfix_expression is clearly an example of an expression.  Hence 
    we  are helping with the "if it can be a declaration, then it is" 
    rule.  The reduce conflicts are on ')', ',' and '='.  Do not move 
    the following productions */

type_qualifier_list_opt:

        | type_qualifier_list { $$ = $1;}
        ;


    /*  Note  that  the next set of productions in this grammar gives 
    post-increment a higher precedence that pre-increment.   This  is 
    not  clearly  stated  in  the  C++  Reference manual, and is only 
    implied by the grammar in the ANSI C Standard. */

    /* I *DON'T* use  argument_expression_list_opt  to  simplify  the 
    grammar  shown  below.   I am deliberately deferring any decision 
    until    *after*     the     closing     paren,     and     using 
    "argument_expression_list_opt" would commit prematurely.  This is 
    critical to proper conflict resolution. */

    /*  The  {}  in  the following rules allow the parser to tell the 
    lexer to search for the member name  in  the  appropriate  scope, 
    much the way the CLCL operator works.*/

postfix_expression:
        primary_expression { $$ = $1;}
        | postfix_expression '[' comma_expression ']' { $$ = [$1, $2, $3, $4];}
        | postfix_expression '(' ')' { $$ = [$1, $2, $3];}
        | postfix_expression '(' argument_expression_list ')' { $$ = [$1, $2, $3, $4];}
        | postfix_expression '.'   member_name { $$ = [$1, $2, $3];}
        | postfix_expression ARROW member_name { $$ = [$1, $2, $3];}
        | postfix_expression ICR { $$ = [$1, $2];}
        | postfix_expression DECR { $$ = [$1, $2];}
        | TYPEDEFname                  '(' ')' { $$ = [$1, $2, $3];}
        | global_or_scoped_typedefname '(' ')' { $$ = [$1, $2, $3];}
        | TYPEDEFname                  '(' argument_expression_list ')' { $$ = [$1, $2, $3, $4];}
        | global_or_scoped_typedefname '(' argument_expression_list ')' { $$ = [$1, $2, $3, $4];}
        | basic_type_name '(' assignment_expression ')' { $$ = [$1, $2, $3, $4];}
        ;


    /* The last two productions in the next set are questionable, but 
    do not induce any conflicts.  I need to ask X3J16 :  Having  them 
    means that we have complex member function deletes like:

          const unsigned int :: ~ const unsigned int
    */

member_name:
        scope_opt_identifier {$$ = $1;}
        | scope_opt_complex_name {$$ = $1;}
        | basic_type_name CLCL '~' basic_type_name  {$$ = [$1, $2, $3, $4];}

        | declaration_qualifier_list  CLCL '~'   declaration_qualifier_list
        | type_qualifier_list         CLCL '~'   type_qualifier_list
        ;

argument_expression_list:
        assignment_expression { $$ = $1;}
        | argument_expression_list ',' assignment_expression { $$ = [$1, $2, $3];}
        ;

unary_expression:
        postfix_expression { $$ = $1;}
        | ICR  unary_expression { $$ = [$1, $2];}
        | DECR unary_expression { $$ = [$1, $2];}
        | asterisk_or_ampersand cast_expression { $$ = [$1, $2];}
        | '-'                   cast_expression { $$ = [$1, $2];}
        | '+'                   cast_expression { $$ = [$1, $2];}
        | '~'                   cast_expression { $$ = [$1, $2];}
        | '!'                   cast_expression { $$ = [$1, $2];}
        | SIZEOF unary_expression { $$ = [$1, $2];}
        | SIZEOF '(' type_name ')' { $$ = [$1, $2, $3, $4];}
        | allocation_expression { $$ = $1;}
        ;


    /* Note that I could have moved the  newstore  productions  to  a 
    lower  precedence  level  than  multiplication  (binary '*'), and 
    lower than bitwise AND (binary '&').  These moves  are  the  nice 
    way  to  disambiguate a trailing unary '*' or '&' at the end of a 
    freestore expression.  Since the freestore expression (with  such 
    a  grammar  and  hence  precedence  given)  can never be the left 
    operand of a binary '*' or '&', the ambiguity would  be  removed. 
    These  problems  really  surface when the binary operators '*' or 
    '&' are overloaded, but this must be syntactically  disambiguated 
    before the semantic checking is performed...  Unfortunately, I am 
    not  creating  the language, only writing a grammar that reflects 
    its specification, and  hence  I  cannot  change  its  precedence 
    assignments.   If  I  had  my  druthers,  I would probably prefer 
    surrounding the type with parens all the time, and  avoiding  the 
    dangling * and & problem all together.*/

       /* Following are C++, not ANSI C */
allocation_expression:
        global_opt_scope_opt_operator_new                                    '(' type_name ')'
                operator_new_initializer_opt

        | global_opt_scope_opt_operator_new '(' argument_expression_list ')' '(' type_name ')'
                operator_new_initializer_opt

        | global_opt_scope_opt_operator_new                                  operator_new_type
        | global_opt_scope_opt_operator_new '(' argument_expression_list ')' operator_new_type
        ;


       /* Following are C++, not ANSI C */
global_opt_scope_opt_operator_new:
        NEW
        | global_or_scope NEW
        ;

operator_new_type:
        type_qualifier_list              operator_new_declarator_opt
                        operator_new_initializer_opt

        | non_elaborating_type_specifier operator_new_declarator_opt
                        operator_new_initializer_opt
        ;


    /*  Right  recursion  is critical in the following productions to
    avoid a conflict on TYPEDEFname */

operator_new_declarator_opt:

        | operator_new_array_declarator
        | asterisk_or_ampersand operator_new_declarator_opt
        | unary_modifier        operator_new_declarator_opt
        ;

operator_new_array_declarator:
                                        '['                  ']'
        |                               '[' comma_expression ']'
        | operator_new_array_declarator '[' comma_expression ']'
        ;

operator_new_initializer_opt:

        | '('                          ')'
        | '(' argument_expression_list ')'
        ;

cast_expression:
        unary_expression {$$ = $1;}
        | '(' type_name ')' cast_expression {$$ = [$1, $2, $3, $4];}
        ;


    /* Following are C++, not ANSI C */
deallocation_expression:
        cast_expression  {$$ = $1;}
        | global_opt_scope_opt_delete deallocation_expression
        | global_opt_scope_opt_delete '[' comma_expression ']' deallocation_expression  /* archaic C++, what a concept */
        | global_opt_scope_opt_delete '[' ']' deallocation_expression
        ;


    /* Following are C++, not ANSI C */
global_opt_scope_opt_delete:
        DELETE
        | global_or_scope DELETE
        ;


    /* Following are C++, not ANSI C */
point_member_expression:
        deallocation_expression {$$ = $1;}
        | point_member_expression DOTstar  deallocation_expression
        | point_member_expression ARROWstar  deallocation_expression
        ;

multiplicative_expression:
        point_member_expression {$$ = $1;}
        | multiplicative_expression '*' point_member_expression {$$ = [$1, $2, $3];}
        | multiplicative_expression '/' point_member_expression {$$ = [$1, $2, $3];}
        | multiplicative_expression '%' point_member_expression {$$ = [$1, $2, $3];}
        ;

additive_expression:
        multiplicative_expression {$$ = $1;}
        | additive_expression '+' multiplicative_expression {$$ = [$1, $2, $3]; console.log("additive_expression '+'")}
        | additive_expression '-' multiplicative_expression {$$ = [$1, $2, $3];}
        ;

shift_expression:
        additive_expression {$$ = $1;}
        | shift_expression LS additive_expression {$$ = [$1, $2, $3];}
        | shift_expression RS additive_expression {$$ = [$1, $2, $3];}
        ;

relational_expression:
        shift_expression {$$ = $1;}
        | relational_expression '<' shift_expression {$$ = [$1, $2, $3];}
        | relational_expression '>' shift_expression {$$ = [$1, $2, $3];}
        | relational_expression LE  shift_expression {$$ = [$1, $2, $3];}
        | relational_expression GE  shift_expression {$$ = [$1, $2, $3];}
        ;

equality_expression:
        relational_expression {$$ = $1;}
        | equality_expression EQ relational_expression {$$ = [$1, $2, $3];}
        | equality_expression NE relational_expression {$$ = [$1, $2, $3];}
        ;

AND_expression:
        equality_expression {$$ = $1;}
        | AND_expression '&' equality_expression {$$ = [$1, $2, $3];}
        ;

exclusive_OR_expression:
        AND_expression {$$ = $1;}
        | exclusive_OR_expression '^' AND_expression {$$ = [$1, $2, $3];}
        ;

inclusive_OR_expression:
        exclusive_OR_expression {$$ = $1;}
        | inclusive_OR_expression '|' exclusive_OR_expression {$$ = [$1, $2, $3];}
        ;

logical_AND_expression:
        inclusive_OR_expression {$$ = $1;}
        | logical_AND_expression ANDAND inclusive_OR_expression {$$ = [$1, $2, $3];}
        ;

logical_OR_expression:
        logical_AND_expression {$$ = $1;}
        | logical_OR_expression OROR logical_AND_expression {$$ = [$1, $2, $3];}
        ;

conditional_expression:
        logical_OR_expression {$$ = $1;}

        | logical_OR_expression '?' comma_expression ':'
                conditional_expression {$$ = [$1, $2, $3, $4, $5];}
        ;

assignment_expression:
        conditional_expression { $$ = $1;}
        | unary_expression assignment_operator assignment_expression { $$ = [$1, $2, $3];}
        ;

assignment_operator:
        '=' { $$ = "="; console.log("assignment_operator: =");}
        | MULTassign {$$ = yytext;}
        | DIVassign {$$ = yytext;}
        | MODassign {$$ = yytext;}
        | PLUSassign {$$ = yytext;}
        | MINUSassign {$$ = yytext;}
        | LSassign {$$ = yytext;}
        | RSassign {$$ = yytext;}
        | ANDassign {$$ = yytext;}
        | ERassign {$$ = yytext;}
        | ORassign {$$ = yytext;}
        ;

comma_expression:
        assignment_expression { $$ = $1;}
        | comma_expression ',' assignment_expression { $$ = [$1, $2, $3];}
        ;

constant_expression:
        conditional_expression { $$ = $1;}
        ;


    /* The following was used for clarity */
comma_expression_opt:

        | comma_expression { $$ = $1;}
        ;


/* DECLARATIONS */


    /*  The  following are notably different from the ANSI C Standard 
    specified grammar, but  are  present  in  my  ANSI  C  compatible 
    grammar.  The changes were made to disambiguate typedefs presence 
    in   declaration_specifiers   (vs.    in   the   declarator   for 
    redefinition); to allow struct/union/enum/class tag  declarations 
    without  declarators,  and  to  better  reflect  the  parsing  of 
    declarations    (declarators    must     be     combined     with 
    declaration_specifiers  ASAP, so that they can immediately become 
    visible in the current scope). */

declaration:
        declaring_list ';' { $$ = [$1, $2];}
        | default_declaring_list ';' { $$ = [$1, $2];}
        | sue_declaration_specifier ';' { $$ = [$1, $2];}
        | sue_type_specifier ';' { $$ = [$1, $2];}
        | sue_type_specifier_elaboration ';' { $$ = [$1, $2];}
        ;


    /* Note that if a typedef were  redeclared,  then  a  declaration 
    specifier  must be supplied (re: ANSI C spec).  The following are 
    declarations wherein no declaration_specifier  is  supplied,  and 
    hence the 'default' must be used.  An example of this is

        const a;

    which by default, is the same as:

        const int a;

    `a' must NOT be a typedef in the above example. */


    /*  The  presence of `{}' in the following rules indicates points 
    at which the symbol table MUST be updated so that  the  tokenizer 
    can  IMMEDIATELY  continue  to  maintain  the  proper distinction 
    between a TYPEDEFname and an IDENTIFIER. */

default_declaring_list:
        declaration_qualifier_list   identifier_declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        | type_qualifier_list        identifier_declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        | default_declaring_list ',' identifier_declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3, $4])}

        | declaration_qualifier_list constructed_identifier_declarator {$$ = [$1, $2];}
        | type_qualifier_list        constructed_identifier_declarator {$$ = [$1, $2];}
        | default_declaring_list ',' constructed_identifier_declarator {$$ = [$1, $2, $3];}
        ;


    /* Note how type_qualifier_list is  NOT  used  in  the  following 
    productions.    Qualifiers   are   NOT   sufficient  to  redefine 
    typedef-names (as prescribed by the ANSI C standard).*/

declaring_list:
        declaration_specifier          declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        | type_specifier               declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        | basic_type_name              declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        | TYPEDEFname                  declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        | global_or_scoped_typedefname declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        | declaring_list ','           declarator initializer_opt {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}

        | declaration_specifier        constructed_declarator {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2])}
        | type_specifier               constructed_declarator {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2])}
        | basic_type_name              constructed_declarator {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2])}
        | TYPEDEFname                  constructed_declarator {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2])}
        | global_or_scoped_typedefname constructed_declarator {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2])}
        | declaring_list ','           constructed_declarator {$$ = yy.parser.createArrayOpt("translation_unit", [$1, $2, $3])}
        ;


    /* Declarators with  parenthesized  initializers  present  a  big 
    problem.  Typically  a  declarator  that looks like: "*a(...)" is 
    supposed to bind FIRST to the "(...)", and then to the "*".  This 
    binding  presumes  that  the  "(...)" stuff is a prototype.  With 
    constructed declarators, we must (officially) finish the  binding 
    to the "*" (finishing forming a good declarator) and THEN connect 
    with  the argument list. Unfortunately, by the time we realize it 
    is an argument list (and not a  prototype)  we  have  pushed  the 
    separate  declarator  tokens  "*"  and  "a"  onto  the yacc stack 
    WITHOUT combining them. The solution is to use odd productions to 
    carry  the  incomplete  declarator  along  with   the   "argument 
    expression  list" back up the yacc stack.  We would then actually 
    instantiate the symbol table after we have  fully  decorated  the 
    symbol  with all the leading "*" stuff.  Actually, since we don't 
    have all the type information in one spot till  we  reduce  to  a 
    declaring_list,  this delay is not a problem.  Note that ordinary 
    initializers REQUIRE (ANSI C Standard) that the symbol be  placed 
    into  the symbol table BEFORE its initializer is read, but in the 
    case of parenthesized initializers,  this  is  not  possible  (we 
    don't  even  know  we  have  an  initializer till have passed the 
    opening "(". ) */

constructed_declarator:
        nonunary_constructed_identifier_declarator {$$ = $1;}
        | constructed_paren_typedef_declarator {$$ = $1;}
        | simple_paren_typedef_declarator '(' argument_expression_list ')'

        | simple_paren_typedef_declarator postfixing_abstract_declarator '(' argument_expression_list ')' {$$ = [$1, $2, $3, $4, $5];}

        | constructed_parameter_typedef_declarator {$$ = $1;}
        | asterisk_or_ampersand constructed_declarator {$$ = [$1, $2];}
        | unary_modifier        constructed_declarator {$$ = [$1, $2];}
        ;

constructed_paren_typedef_declarator:
        '(' paren_typedef_declarator ')'
                    '(' argument_expression_list ')'

        | '(' paren_typedef_declarator ')' postfixing_abstract_declarator
                   '(' argument_expression_list ')'

        | '(' simple_paren_typedef_declarator postfixing_abstract_declarator ')'
                   '(' argument_expression_list ')'

        | '(' TYPEDEFname postfixing_abstract_declarator ')'
                   '(' argument_expression_list ')'
        ;


constructed_parameter_typedef_declarator:
        TYPEDEFname    '(' argument_expression_list ')' {$$ = [$1, $2, $3, $4];}

        | TYPEDEFname  postfixing_abstract_declarator '(' argument_expression_list ')'  {$$ = [$1, $2, $3, $4, $5];}

        | '(' clean_typedef_declarator ')' '(' argument_expression_list ')' {$$ = [$1, $2, $3, $4, $5, $6];}

        | '(' clean_typedef_declarator ')'  postfixing_abstract_declarator '(' argument_expression_list ')' {$$ = [$1, $2, $3, $4, $5, $6, $7];}
        ;


constructed_identifier_declarator:
        nonunary_constructed_identifier_declarator {$$ = $1;}
        | asterisk_or_ampersand constructed_identifier_declarator {$$ = [$1, $2];}
        | unary_modifier        constructed_identifier_declarator {$$ = [$1, $2];}
        ;


    /* The following are restricted to NOT  begin  with  any  pointer 
    operators.   This  includes both "*" and "T::*" modifiers.  Aside 
    from  this  restriction,   the   following   would   have   been: 
    identifier_declarator '(' argument_expression_list ')' */

nonunary_constructed_identifier_declarator:
        paren_identifier_declarator   '(' argument_expression_list ')'

        | paren_identifier_declarator postfixing_abstract_declarator
                       '(' argument_expression_list ')'

        | '(' unary_identifier_declarator ')'
                       '(' argument_expression_list ')'

        | '(' unary_identifier_declarator ')' postfixing_abstract_declarator
                       '(' argument_expression_list ')'
        ;


declaration_specifier:
        basic_declaration_specifier {$$ = $1;}
        | sue_declaration_specifier {$$ = $1;}
        | typedef_declaration_specifier {$$ = $1;}
        ;

type_specifier:
        basic_type_specifier {$$ = $1;}
        | sue_type_specifier {$$ = $1;}
        | sue_type_specifier_elaboration {$$ = $1;}
        | typedef_type_specifier {$$ = $1;}
        ;

declaration_qualifier_list:
        storage_class {$$ = $1;}
        | type_qualifier_list storage_class {$$ = [$1, $2];}
        | declaration_qualifier_list declaration_qualifier {$$ = [$1, $2];}
        ;

type_qualifier_list:
        type_qualifier {$$ = $1;}
        | type_qualifier_list type_qualifier {$$ = [$1, $2];}
        ;

declaration_qualifier:
        storage_class {$$ = $1;}
        | type_qualifier {$$ = $1;}
        ;

type_qualifier:
        CONST {$$ = $1;}
        | VOLATILE {$$ = $1;}
        ;

basic_declaration_specifier:
        declaration_qualifier_list    basic_type_name {$$ = [$1, $2];}
        | basic_type_specifier        storage_class {$$ = [$1, $2];}
        | basic_type_name             storage_class {$$ = [$1, $2];}
        | basic_declaration_specifier declaration_qualifier {$$ = [$1, $2];}
        | basic_declaration_specifier basic_type_name {$$ = [$1, $2];}
        ;

basic_type_specifier:
        type_qualifier_list    basic_type_name {$$ = [$1, $2];}
        | basic_type_name      basic_type_name {$$ = [$1, $2];}
        | basic_type_name      type_qualifier {$$ = [$1, $2];}
        | basic_type_specifier type_qualifier {$$ = [$1, $2];}
        | basic_type_specifier basic_type_name {$$ = [$1, $2];}
        ;

sue_declaration_specifier:
        declaration_qualifier_list       elaborated_type_name {$$ = [$1, $2];}
        | declaration_qualifier_list     elaborated_type_name_elaboration {$$ = [$1, $2];}
        | sue_type_specifier             storage_class {$$ = [$1, $2];}
        | sue_type_specifier_elaboration storage_class {$$ = [$1, $2];}
        | sue_declaration_specifier      declaration_qualifier {$$ = [$1, $2];}
        ;

sue_type_specifier_elaboration:
        elaborated_type_name_elaboration {$$ = $1;}
        | type_qualifier_list elaborated_type_name_elaboration {$$ = [$1, $2];}
        | sue_type_specifier_elaboration type_qualifier {$$ = [$1, $2];}
        ;

sue_type_specifier:
        elaborated_type_name {$$ = $1;}
        | type_qualifier_list elaborated_type_name {$$ = [$1, $2];}
        | sue_type_specifier type_qualifier {$$ = [$1, $2];}
        ;

typedef_declaration_specifier:
        declaration_qualifier_list   TYPEDEFname {$$ = [$1, $2];}
        | declaration_qualifier_list global_or_scoped_typedefname {$$ = [$1, $2];}

        | typedef_type_specifier       storage_class {$$ = [$1, $2];}
        | TYPEDEFname                  storage_class {$$ = [$1, $2];}
        | global_or_scoped_typedefname storage_class {$$ = [$1, $2];}

        | typedef_declaration_specifier declaration_qualifier {$$ = [$1, $2];}
        ;

typedef_type_specifier:
        type_qualifier_list      TYPEDEFname {$$ = [$1, $2];}
        | type_qualifier_list    global_or_scoped_typedefname {$$ = [$1, $2];}

        | TYPEDEFname                  type_qualifier {$$ = [$1, $2];}
        | global_or_scoped_typedefname type_qualifier {$$ = [$1, $2];}

        | typedef_type_specifier type_qualifier {$$ = [$1, $2];}
        ;


/*  There  are  really  several distinct sets of storage_classes. The 
sets vary depending on whether the declaration is at file scope, is a 
declaration within a struct/class, is within a function body, or in a 
function declaration/definition (prototype  parameter  declarations).  
They   are   grouped  here  to  simplify  the  grammar,  and  can  be 
semantically checked.  Note that this  approach  tends  to  ease  the 
syntactic restrictions in the grammar slightly, but allows for future 
language  development,  and tends to provide superior diagnostics and 
error recovery (i_e.: a syntax error does not disrupt the parse).


                File    File    Member  Member  Local   Local  Formal
                Var     Funct   Var     Funct   Var     Funct  Params
TYPEDEF         x       x       x       x       x       x
EXTERN          x       x                       x       x
STATIC          x       x       x       x       x
REGISTER                                        x              x
FRIEND                                  x
OVERLOAD                x               x               x
INLINE                  x               x               x
VIRTUAL                                 x               x

AUTO has been removed in C++0x and placed in simple-type-specifier 
*/

storage_class:
        EXTERN { $$ = $1;}
        | TYPEDEF { $$ = $1;}
        | STATIC { $$ = $1;}
        | REGISTER { $$ = $1;}
        | FRIEND { $$ = $1;}
        | OVERLOAD { $$ = $1;}
        | INLINE { $$ = $1;}
        | VIRTUAL { $$ = $1;}
        ;

basic_type_name:
        INT { $$ = $1;}
        | CHAR { $$ = $1;}
        | SHORT { $$ = $1;}
        | LONG { $$ = $1;}
        | FLOAT { $$ = $1;}
        | DOUBLE { $$ = $1;}
        | SIGNED { $$ = $1;}
        | UNSIGNED { $$ = $1;}
        | VOID { $$ = $1;}
        | BOOL { $$ = $1;}
        | CHAR32_T { $$ = $1;}
        | CHAR16_T { $$ = $1;}
        | WCHAR_T { $$ = $1;}
        | AUTO { $$ = $1;}
        ;

elaborated_type_name_elaboration:
        aggregate_name_elaboration { $$ = $1;}
        | enum_name_elaboration { $$ = $1;}
        ;

elaborated_type_name:
        aggregate_name { $$ = $1;}
        | enum_name { $$ = $1;}
        ;


    /* Since the expression "new type_name" MIGHT use  an  elaborated 
    type  and a derivation, it MIGHT have a ':'.  This fact conflicts 
    with the requirement that a new expression can be placed  between 
    a '?' and a ':' in a conditional expression (at least it confuses 
    LR(1)   parsers).   Hence   the   aggregate_name_elaboration   is 
    responsible for a series of SR conflicts on ':'.*/

    /* The intermediate actions {}  represent  points  at  which  the 
    database  of  typedef  names  must  be  updated  in C++.  This is 
    critical to the lexer, which must begin to tokenize based on this 
    new information. */

aggregate_name_elaboration:
        aggregate_name derivation_opt  '{' member_declaration_list_opt '}' { $$ = [$1, $2, $3, $4, $5];}
        | aggregate_key derivation_opt '{' member_declaration_list_opt '}' { $$ = [$1, $2, $3, $4, $5];}
        ;


    /* We distinguish between the above, which  support  elaboration, 
    and  this  set  of  productions  so  that  we can provide special 
    declaration specifiers for operator_new_type, and for  conversion 
    functions.  Note that without this restriction a large variety of 
    conflicts  appear  when  processing  operator_new and conversions 
    operators (which can be  followed  by  a  ':'  in  a  ternary  ?: 
    expression) */

    /*  Note that at the end of each of the following rules we should 
    be sure that the tag name is  in,  or  placed  in  the  indicated 
    scope.   If  no  scope  is  specified, then we must add it to our 
    current scope IFF it cannot  be  found  in  an  external  lexical 
    scope. */

aggregate_name:
                             aggregate_key tag_name { $$ = [$1, $2];}
        | global_scope scope aggregate_key tag_name { $$ = [$1, $2, $3, $4];}
        | global_scope       aggregate_key tag_name { $$ = [$1, $2, $3];}
        | scope              aggregate_key tag_name { $$ = [$1, $2, $3];}
        ;

derivation_opt:

        | ':' derivation_list { $$ = [$1, $2];}
        ;

derivation_list:
        parent_class { $$ = $1;}
        | derivation_list ',' parent_class { $$ = [$1, $2, $3];}
        ;

parent_class:
                                       global_opt_scope_opt_typedefname
        | VIRTUAL access_specifier_opt global_opt_scope_opt_typedefname
        | access_specifier virtual_opt global_opt_scope_opt_typedefname
        ;

virtual_opt:

        | VIRTUAL { $$ = $1;}
        ;

access_specifier_opt:

        | access_specifier { $$ = $1;}
        ;

access_specifier:
        PUBLIC { $$ = $1;}
        | PRIVATE { $$ = $1;}
        | PROTECTED { $$ = $1;}
        ;

aggregate_key:
        STRUCT { $$ = $1;}
        | UNION { $$ = $1;}
        | CLASS { $$ = $1;}
        ;


    /* Note that an empty list is ONLY allowed under C++. The grammar 
    can  be modified so that this stands out.  The trick is to define 
    member_declaration_list, and have that referenced for non-trivial 
    lists. */

member_declaration_list_opt:

        | member_declaration_list_opt member_declaration
        ;

member_declaration:
        member_declaring_list ';'
        | member_default_declaring_list ';'

        | access_specifier ':'

        | new_function_definition
        | constructor_function_in_class

        | sue_type_specifier             ';'
        | sue_type_specifier_elaboration ';'
        | identifier_declarator          ';'

        | typedef_declaration_specifier ';'
        | sue_declaration_specifier ';'
        ;

member_default_declaring_list:
        type_qualifier_list
                identifier_declarator member_pure_opt

        | declaration_qualifier_list
                identifier_declarator member_pure_opt

        | member_default_declaring_list ','
                identifier_declarator member_pure_opt

        | type_qualifier_list                bit_field_identifier_declarator
        | declaration_qualifier_list         bit_field_identifier_declarator
        | member_default_declaring_list ','  bit_field_identifier_declarator
        ;


    /* There is a conflict when "struct A" is used as  a  declaration 
    specifier,  and  there  is a chance that a bit field name will be 
    provided.  To fix this syntactically would require distinguishing 
    non_elaborating_declaration_specifiers   the   way   I    handled 
    non_elaborating_type_specifiers.   I   think  this  should  be  a 
    constraint error anyway :-). */

member_declaring_list:
        type_specifier                 declarator member_pure_opt
        | basic_type_name              declarator member_pure_opt

        | global_or_scoped_typedefname declarator member_pure_opt
        | member_conflict_declaring_item
        | member_declaring_list ','    declarator member_pure_opt

        | type_specifier                bit_field_declarator
        | basic_type_name               bit_field_declarator
        | TYPEDEFname                   bit_field_declarator
        | global_or_scoped_typedefname  bit_field_declarator
        | declaration_specifier         bit_field_declarator
        | member_declaring_list ','     bit_field_declarator
        ;


    /* The following conflict with constructors-
      member_conflict_declaring_item:
        TYPEDEFname             declarator member_pure_opt
        | declaration_specifier declarator member_pure_opt /* C++, not ANSI C * /
        ;
    so we inline expand declarator to get the following productions...
    */
member_conflict_declaring_item:
        TYPEDEFname             identifier_declarator            member_pure_opt
        | TYPEDEFname           parameter_typedef_declarator     member_pure_opt
        | TYPEDEFname           simple_paren_typedef_declarator  member_pure_opt

        | declaration_specifier identifier_declarator            member_pure_opt
        | declaration_specifier parameter_typedef_declarator     member_pure_opt
        | declaration_specifier simple_paren_typedef_declarator  member_pure_opt

        | member_conflict_paren_declaring_item
        ;


    /* The following still conflicts with constructors-
      member_conflict_paren_declaring_item:
        TYPEDEFname             paren_typedef_declarator     member_pure_opt
        | declaration_specifier paren_typedef_declarator     member_pure_opt
        ;
    so paren_typedef_declarator is expanded inline to get...*/

member_conflict_paren_declaring_item:
        TYPEDEFname   asterisk_or_ampersand
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | TYPEDEFname unary_modifier
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | TYPEDEFname asterisk_or_ampersand
                '(' TYPEDEFname ')'                     member_pure_opt
        | TYPEDEFname unary_modifier
                '(' TYPEDEFname ')'                     member_pure_opt
        | TYPEDEFname asterisk_or_ampersand
                 paren_typedef_declarator               member_pure_opt
        | TYPEDEFname unary_modifier
                 paren_typedef_declarator               member_pure_opt

        | declaration_specifier asterisk_or_ampersand
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | declaration_specifier unary_modifier
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | declaration_specifier asterisk_or_ampersand
                '(' TYPEDEFname ')'                     member_pure_opt
        | declaration_specifier unary_modifier
                '(' TYPEDEFname ')'                     member_pure_opt
        | declaration_specifier asterisk_or_ampersand
                paren_typedef_declarator                member_pure_opt
        | declaration_specifier unary_modifier
                paren_typedef_declarator                member_pure_opt

        | member_conflict_paren_postfix_declaring_item
        ;


    /* but we still have the following conflicts with constructors-
   member_conflict_paren_postfix_declaring_item:
      TYPEDEFname             postfix_paren_typedef_declarator member_pure_opt
      | declaration_specifier postfix_paren_typedef_declarator member_pure_opt
      ;
    so we expand paren_postfix_typedef inline and get...*/

member_conflict_paren_postfix_declaring_item:
        TYPEDEFname     '(' paren_typedef_declarator ')'
                                                           member_pure_opt
        | TYPEDEFname   '(' simple_paren_typedef_declarator
                        postfixing_abstract_declarator ')' member_pure_opt
        | TYPEDEFname   '(' TYPEDEFname
                        postfixing_abstract_declarator ')' member_pure_opt
        | TYPEDEFname   '(' paren_typedef_declarator ')'
                        postfixing_abstract_declarator     member_pure_opt

        | declaration_specifier '(' paren_typedef_declarator ')'
                                                           member_pure_opt
        | declaration_specifier '(' simple_paren_typedef_declarator
                        postfixing_abstract_declarator ')' member_pure_opt
        | declaration_specifier '(' TYPEDEFname
                        postfixing_abstract_declarator ')' member_pure_opt
        | declaration_specifier '(' paren_typedef_declarator ')'
                        postfixing_abstract_declarator     member_pure_opt
        ;
    /* ...and we are done.  Now all  the  conflicts  appear  on  ';',
    which can be semantically evaluated/disambiguated */


member_pure_opt:

        | '=' OCTALconstant
        ;


    /*  Note  that  bit  field  names, where redefining TYPEDEFnames, 
    cannot be parenthesized in C++ (due to  ambiguities),  and  hence 
    this  part of the grammar is simpler than ANSI C. :-) The problem 
    occurs because:

         TYPEDEFname ( TYPEDEFname) : .....

    doesn't look like a bit field, rather it looks like a constructor 
    definition! */

bit_field_declarator:
        bit_field_identifier_declarator
        | TYPEDEFname ':' constant_expression
        ;


    /* The actions taken in the "{}" above and below are intended  to 
    allow  the  symbol  table  to  be  updated when the declarator is 
    complete.  It is critical for code like:

            foo : sizeof(foo + 1);
    */

bit_field_identifier_declarator:
                                   ':' constant_expression
        | identifier_declarator ':' constant_expression
        ;

enum_name_elaboration:
        global_opt_scope_opt_enum_key '{' enumerator_list '}'
        | enum_name                   '{' enumerator_list '}'
        ;


    /* As with structures, the distinction between "elaborating"  and 
    "non-elaborating"  enum  types  is  maintained.  In actuality, it 
    probably does not cause much in the way of conflicts, since a ':' 
    is not allowed.  For symmetry, we maintain the distinction.   The 
    {}  actions are intended to allow the symbol table to be updated.  
    These updates are significant to code such as:

        enum A { first=sizeof(A)};
    */

enum_name:
        global_opt_scope_opt_enum_key tag_name { $$ = [$1, $2];}
        ;

global_opt_scope_opt_enum_key:
        ENUM { $$ = $1;}
        | global_or_scope ENUM { $$ = [$1, $2];}
        ;

enumerator_list:
        enumerator_list_no_trailing_comma { $$ = $1;}
        | enumerator_list_no_trailing_comma ',' { $$ = [$1, $2];}
        ;


    /* Note that we do not need to rush to add an enumerator  to  the 
    symbol  table  until  *AFTER* the enumerator_value_opt is parsed. 
    The enumerated value is only in scope  AFTER  its  definition  is 
    complete.   Hence the following is legal: "enum {a, b=a+10};" but 
    the following is (assuming no external matching of names) is  not 
    legal:  "enum {c, d=sizeof(d)};" ("d" not defined when sizeof was 
    applied.) This is  notably  contrasted  with  declarators,  which 
    enter scope as soon as the declarator is complete. */

enumerator_list_no_trailing_comma:
        enumerator_name enumerator_value_opt { $$ = [$1, $2];}
        | enumerator_list_no_trailing_comma ',' enumerator_name enumerator_value_opt { $$ = [$1, $2, $3, $4];}
        ;

enumerator_name:
        identifier { $$ = $1;}
        | TYPEDEFname { $$ = $1;}
        ;

enumerator_value_opt:

        | '=' constant_expression { $$ = [$1, $2];}
        ;


    /*  We special case the lone type_name which has no storage class 
    (even though it should be an example of  a  parameter_type_list). 
    This helped to disambiguate type-names in parenthetical casts.*/

parameter_type_list:
        '(' ')'                             type_qualifier_list_opt { $$ = [$1, $2, $3];}
        | '(' type_name ')'                 type_qualifier_list_opt { $$ = [$1, $2, $3, $4];}
        | '(' type_name initializer ')'     type_qualifier_list_opt { $$ = [$1, $2, $3, $4];}
        | '(' named_parameter_type_list ')' type_qualifier_list_opt { $$ = [$1, $2, $3, $4];}
        ;


    /* The following are used in old style function definitions, when 
    a complex return type includes the "function returning" modifier. 
    Note  the  subtle  distinction  from  parameter_type_list.  These 
    parameters are NOT the parameters for the function being defined, 
    but are simply part of the type definition.  An example would be:

        int(*f(   a  ))(float) long a; {...}

    which is equivalent to the full new style definition:

        int(*f(long a))(float) {...}

    The   type   list    `(float)'    is    an    example    of    an 
    old_parameter_type_list.   The  bizarre point here is that an old 
    function definition declarator can be followed by  a  type  list, 
    which  can  start  with a qualifier `const'.  This conflicts with 
    the new syntactic construct for const member  functions!?!  As  a 
    result,  an  old  style function definition cannot be used in all 
    cases for a member function.  */

old_parameter_type_list:
        '(' ')' { $$ = [$1, $2];}
        | '(' type_name ')' { $$ = [$1, $2, $3];}
        | '(' type_name initializer ')' { $$ = [$1, $2, $3, $4];}
        | '(' named_parameter_type_list ')' { $$ = [$1, $2, $3];}
        ;

named_parameter_type_list:
        parameter_list { $$ = $1;}
        | parameter_list comma_opt_ellipsis {$$ = [$1, $2];}
        | type_name comma_opt_ellipsis {$$ = [$1, $2];}
        | type_name initializer comma_opt_ellipsis { $$ = [$1, $2, $3];}
        | ELLIPSIS { $$ = $1;}
        ;

comma_opt_ellipsis:
        ELLIPSIS { $$ = $1;}
        | ',' ELLIPSIS {$$ = [$1, $2];}
        ;

parameter_list:
        non_casting_parameter_declaration { $$ = $1;}
        | non_casting_parameter_declaration initializer {$$ = [$1, $2];}
        | type_name             ',' parameter_declaration { $$ = [$1, $2, $3];}
        | type_name initializer ',' parameter_declaration { $$ = [$1, $2, $3];}
        | parameter_list        ',' parameter_declaration { $$ = [$1, $2, $3];}
        ;


    /* There is some very subtle disambiguation going  on  here.   Do 
    not be tempted to make further use of the following production in 
    parameter_list,  or else the conflict count will grow noticeably. 
    Specifically, the next set  of  rules  has  already  been  inline 
    expanded for the first parameter in a parameter_list to support a 
    deferred disambiguation. The subtle disambiguation has to do with 
    contexts where parameter type lists look like old-style-casts. */

parameter_declaration:
        type_name { $$ = $1;}
        | type_name                         initializer {$$ = [$1, $2];}
        | non_casting_parameter_declaration { $$ = $1;}
        | non_casting_parameter_declaration initializer {$$ = [$1, $2];}
        ;


    /* There is an LR ambiguity between old-style parenthesized casts 
    and parameter-type-lists.  This tends to happen in contexts where 
    either  an  expression or a parameter-type-list is possible.  For 
    example, assume that T is an  externally  declared  type  in  the 
    code:

           int (T ((int

    it might continue:

           int (T ((int)0));

    which would make it:

           (int) (T) (int)0 ;

    which  is  an  expression,  consisting  of  a  series  of  casts.  
    Alternatively, it could be:

           int (T ((int a)));

    which would make it the redeclaration of T, equivalent to:

           int T (dummy_name (int a));

    if we see a type that either has a named variable (in  the  above 
    case "a"), or a storage class like:

           int (T ((int register

    then  we  know  it  can't  be  a cast, and it is "forced" to be a 
    parameter_list.

    It is not yet clear that the ANSI C++ committee would  decide  to 
    place this disambiguation into the syntax, rather than leaving it 
    as  a  constraint check (i.e., a valid parser would have to parse 
    everything as though it were  a  parameter  list  (in  these  odd 
    contexts),  and  then  give an error if is to a following context 
    (like "0" above) that invalidated this syntax evaluation. */

    /* One big thing implemented here is that a TYPEDEFname CANNOT be 
    redeclared when we don't have declaration_specifiers! Notice that 
    when we do use a TYPEDEFname based declarator, only the "special" 
    (non-ambiguous  in  this  context)  typedef_declarator  is  used. 
    Everything else that is "missing" shows up as a type_name. */

non_casting_parameter_declaration:
        declaration_specifier {$$ = $1;}
        | declaration_specifier abstract_declarator {$$ = [$1, $2];}
        | declaration_specifier identifier_declarator {$$ = [$1, $2];}
        | declaration_specifier parameter_typedef_declarator {$$ = [$1, $2];}

        | declaration_qualifier_list {$$ = $1;}
        | declaration_qualifier_list abstract_declarator {$$ = [$1, $2];}
        | declaration_qualifier_list identifier_declarator {$$ = [$1, $2];}

        | type_specifier identifier_declarator {$$ = [$1, $2];}
        | type_specifier parameter_typedef_declarator {$$ = [$1, $2];}

        | basic_type_name identifier_declarator {$$ = [$1, $2];}
        | basic_type_name parameter_typedef_declarator {$$ = [$1, $2];}

        | TYPEDEFname                   identifier_declarator {$$ = [$1, $2];}
        | TYPEDEFname                   parameter_typedef_declarator {$$ = [$1, $2];}

        | global_or_scoped_typedefname  identifier_declarator {$$ = [$1, $2];}
        | global_or_scoped_typedefname  parameter_typedef_declarator {$$ = [$1, $2];}

        | type_qualifier_list identifier_declarator {$$ = [$1, $2];}
        ;

type_name:
        type_specifier {$$ = $1;}
        | basic_type_name {$$ = $1;}
        | TYPEDEFname {$$ = $1;}
        | global_or_scoped_typedefname {$$ = $1;}
        | type_qualifier_list {$$ = $1;}

        | type_specifier               abstract_declarator {$$ = [$1, $2];}
        | basic_type_name              abstract_declarator {$$ = [$1, $2];}
        | TYPEDEFname                  abstract_declarator {$$ = [$1, $2];}
        | global_or_scoped_typedefname abstract_declarator {$$ = [$1, $2];}
        | type_qualifier_list          abstract_declarator {$$ = [$1, $2];}
        ;

initializer_opt:

        | initializer {$$ = $1;}
        ;

initializer:
        '=' initializer_group {$$ = [$1, $2];}
        ;

initializer_group:
        '{' initializer_list '}' {$$ = [$1, $2, $3];}
        | '{' initializer_list ',' '}' {$$ = [$1, $2, $3, $4];}
        | assignment_expression {$$ = $1;}
        ;

initializer_list:
        initializer_group {$$ = $1;}
        | initializer_list ',' initializer_group {$$ = [$1, $2, $3];}
        ;


/* STATEMENTS */

statement:
        labeled_statement { $$ = $1;}
        | compound_statement { $$ = $1;}
        | expression_statement { $$ = $1;}
        | selection_statement { $$ = $1;}
        | iteration_statement { $$ = $1;}
        | jump_statement { $$ = $1;}
        | declaration { $$ = $1;}
        ;

labeled_statement:
        label                      ':' statement
        | CASE constant_expression ':' statement
        | DEFAULT                  ':' statement
        ;


    /*  I sneak declarations into statement_list to support C++.  The 
    grammar is a little clumsy this  way,  but  the  violation  of  C 
    syntax is heavily localized */

compound_statement:
        '{' statement_list_opt '}' { $$ = [$1, $2, $3];}
        ;

declaration_list:
        declaration { $$ = $1;}
        | declaration_list declaration  { $$ = [$1, $2];}
        ;

statement_list_opt:

        | statement_list_opt statement { $$ = [$1, $2];}
        ;

expression_statement:
        comma_expression_opt ';'
        ;

selection_statement:
          IF '(' comma_expression ')' statement
        | IF '(' comma_expression ')' statement ELSE statement
        | SWITCH '(' comma_expression ')' statement
        ;

iteration_statement:
        WHILE '(' comma_expression_opt ')' statement
        | DO statement WHILE '(' comma_expression ')' ';'

        | FOR '(' comma_expression_opt ';' comma_expression_opt ';'
                comma_expression_opt ')' statement

        | FOR '(' declaration        comma_expression_opt ';'
                comma_expression_opt ')' statement
        ;

jump_statement:
        GOTO label                     ';'
        | CONTINUE                     ';'
        | BREAK                        ';'
        | RETURN comma_expression_opt  ';' {$$ = ['return', $2];}
        ;


    /*  The  following  actions should update the symbol table in the 
    "label" name space */

label:
        identifier {$$ = $1;}
        | TYPEDEFname {$$ = yytext;}
        ;


/* EXTERNAL DEFINITIONS */

translation_unit:

        | translation_unit external_definition
        { $$ = yy.parser.createArrayOpt("translation_unit", [$1, $2]);}
        ;

external_definition:
        function_declaration {$$ = $1;}
        | function_definition {$$ = $1;}
        | declaration {$$ = $1;}
        | linkage_specifier function_declaration {$$ = [$1, $2];}
        | linkage_specifier function_definition {$$ = [$1, $2];}
        | linkage_specifier declaration {$$ = [$1, $2];}
        | linkage_specifier '{' translation_unit '}' {$$ = [$1, $2, $3, $4];}
        | preprocessing_file { $$ = $1;}
        ;

linkage_specifier:
        EXTERN STRINGliteral {$$ = $1;}
        ;


    /* Note that declaration_specifiers are left out of the following 
    function declarations.  Such omission is illegal in ANSI C. It is 
    sometimes necessary in C++, in instances  where  no  return  type 
    should be specified (e_g., a conversion operator).*/

function_declaration:
        identifier_declarator ';' { $$ = [$1, $2];}
        | constructor_function_declaration ';' { $$ = [$1, $2];}
        ;

function_definition:
        new_function_definition { $$ = $1;}
        | old_function_definition { $$ = $1;}
        | constructor_function_definition { $$ = $1;}
        ;


    /* Note that in ANSI C, function definitions *ONLY* are presented 
    at file scope.  Hence, if there is a typedefname  active,  it  is 
    illegal  to  redeclare  it  (there  is no enclosing scope at file 
    scope).

    In  contrast,  C++  allows   function   definitions   at   struct 
    elaboration scope, and allows tags that are defined at file scope 
    (and  hence  look like typedefnames) to be redeclared to function 
    calls.  Hence several of the rules are "partially C++  only".   I 
    could  actually  build separate rules for typedef_declarators and 
    identifier_declarators, and mention that  the  typedef_declarator 
    rules represent the C++ only features.

    In  some  sense,  this  is  haggling, as I could/should have left 
    these as constraints in the ANSI C grammar, rather than as syntax 
    requirements.  */

new_function_definition:
                                       identifier_declarator compound_statement { $$ = [$1, $2];}
        | declaration_specifier                   declarator compound_statement { $$ = [$1, $2, $3];}
        | type_specifier                          declarator compound_statement { $$ = [$1, $2, $3];}
        | basic_type_name                         declarator compound_statement { $$ = [$1, $2, $3];}
        | TYPEDEFname                             declarator compound_statement { $$ = [$1, $2, $3];}
        | global_or_scoped_typedefname            declarator compound_statement { $$ = [$1, $2, $3];}
        | declaration_qualifier_list   identifier_declarator compound_statement { $$ = [$1, $2, $3];}
        | type_qualifier_list          identifier_declarator compound_statement { $$ = [$1, $2, $3];}
        ;


    /* Note that I do not support redeclaration of TYPEDEFnames  into 
    function  names  as I did in new_function_definitions (see note). 
    Perhaps I should do it, but for now, ignore the issue. Note  that 
    this  is  a  non-problem  with  ANSI  C,  as  tag  names  are not 
    considered TYPEDEFnames. */

old_function_definition:
                                       old_function_declarator old_function_body { $$ = [$1, $2];}
        | declaration_specifier        old_function_declarator old_function_body { $$ = [$1, $2, $3];}
        | type_specifier               old_function_declarator old_function_body { $$ = [$1, $2, $3];}
        | basic_type_name              old_function_declarator old_function_body { $$ = [$1, $2, $3];}
        | TYPEDEFname                  old_function_declarator old_function_body { $$ = [$1, $2, $3];}
        | global_or_scoped_typedefname old_function_declarator old_function_body { $$ = [$1, $2, $3];}
        | declaration_qualifier_list   old_function_declarator old_function_body { $$ = [$1, $2, $3];}
        | type_qualifier_list          old_function_declarator old_function_body { $$ = [$1, $2, $3];}
        ;

old_function_body:
        declaration_list compound_statement { $$ = [$1, $2];}
        | compound_statement { $$ = $1;}
        ;


    /*    Verify    via    constraints     that     the     following 
        declaration_specifier           is          really          a 
        typedef_declaration_specifier, consisting of:

        ... TYPEDEFname :: TYPEDEFname

    optionally *preceded* by a "inline" keyword.   Use  care  not  to 
    support "inline" as a postfix!

    Similarly, the global_or_scoped_typedefname must be:

        ... TYPEDEFname :: TYPEDEFname

    with matching names at the end of the list.

    We  use the more general form to prevent a syntax conflict with a 
    typical    function    definition    (which    won't    have    a 
    constructor_init_list) */

constructor_function_definition:
        global_or_scoped_typedefname parameter_type_list
                     constructor_init_list_opt compound_statement

        | declaration_specifier      parameter_type_list
                     constructor_init_list_opt compound_statement
        ;


    /*  Same  comments  as  seen  for constructor_function_definition 
    apply here */

constructor_function_declaration:
        global_or_scoped_typedefname parameter_type_list

        | declaration_specifier      parameter_type_list
        ;


    /* The following use of declaration_specifiers are made to  allow 
    for  a TYPEDEFname preceded by an INLINE modifier. This fact must 
    be verified semantically.  It should also be  verified  that  the 
    TYPEDEFname  is  ACTUALLY  the  class name being elaborated. Note 
    that we could break out typedef_declaration_specifier from within 
    declaration_specifier, and we  might  narrow  down  the  conflict 
    region a bit. A second alternative (to what is done) for cleaning 
    up  this  stuff  is  to  let the tokenizer specially identify the 
    current class being elaborated as a special token, and not just a 
    typedefname. Unfortunately, things would get very  confusing  for 
    the  lexer,  as  we may pop into enclosed tag elaboration scopes; 
    into function definitions; or into both recursively! */

    /* I should make the following  rules  easier  to  annotate  with 
    scope  entry  and exit actions.  Note how hard it is to establish 
    the scope when you don't even know what the decl_spec is!! It can 
    be done with $-1 hacking, but I should not encourage users to  do 
    this directly. */

constructor_function_in_class:
        declaration_specifier   constructor_parameter_list_and_body
        | TYPEDEFname           constructor_parameter_list_and_body
        ;


    /* The following conflicts with member declarations-
    constructor_parameter_list_and_body:
          parameter_type_list ';'
          | parameter_type_list constructor_init_list_opt compound_statement
          ;
    so parameter_type_list was expanded inline to get */

constructor_parameter_list_and_body:
          '('                           ')' type_qualifier_list_opt ';'
        | '(' type_name initializer     ')' type_qualifier_list_opt ';'
        | '(' named_parameter_type_list ')' type_qualifier_list_opt ';'
        | '('                           ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement
        | '(' type_name initializer     ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement
        | '(' named_parameter_type_list ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | constructor_conflicting_parameter_list_and_body
        ;


    /* The following conflicted with member declaration-
    constructor_conflicting_parameter_list_and_body:
        '('   type_name ')'                 type_qualifier_list_opt ';'
        | '(' type_name ')'                 type_qualifier_list_opt
                constructor_init_list_opt compound_statement
        ;
    so type_name was inline expanded to get the following... */


    /*  Note  that by inline expanding type_qualifier_opt in a few of 
    the following rules I can transform 3  RR  conflicts  into  3  SR 
    conflicts.  Since  all the conflicts have a look ahead of ';', it 
    doesn't  really  matter  (also,  there  are  no   bad   LALR-only 
    components in the conflicts) */

constructor_conflicting_parameter_list_and_body:
        '(' type_specifier                 ')' type_qualifier_list_opt
                ';'
        | '(' basic_type_name              ')' type_qualifier_list_opt
                ';'

        | '(' TYPEDEFname                  ')' type_qualifier_list_opt
                ';'

        | '(' global_or_scoped_typedefname ')' type_qualifier_list_opt
                ';'

        | '(' type_qualifier_list          ')' type_qualifier_list_opt
                ';'


        | '(' type_specifier               abstract_declarator ')' type_qualifier_list_opt
                ';'
        | '(' basic_type_name              abstract_declarator ')' type_qualifier_list_opt
                ';'

        | '(' global_or_scoped_typedefname abstract_declarator ')' type_qualifier_list_opt
                ';'
        | '(' type_qualifier_list          abstract_declarator ')' type_qualifier_list_opt
                ';'


        | '(' type_specifier               ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' basic_type_name              ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' TYPEDEFname                  ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' global_or_scoped_typedefname ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' type_qualifier_list           ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement


        | '(' type_specifier  abstract_declarator ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' basic_type_name abstract_declarator ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' global_or_scoped_typedefname abstract_declarator ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' type_qualifier_list          abstract_declarator ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | constructor_conflicting_typedef_declarator
        ;


    /* The following have ambiguities with member declarations-
    constructor_conflicting_typedef_declarator:
      '(' TYPEDEFname abstract_declarator ')' type_qualifier_list_opt
                ';'
      |  '(' TYPEDEFname abstract_declarator ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement
      ;
    which can be deferred by expanding abstract_declarator, and in two
    cases parameter_qualifier_list, resulting in ...*/

constructor_conflicting_typedef_declarator:
        '(' TYPEDEFname unary_abstract_declarator          ')' type_qualifier_list_opt
                ';'

        | '(' TYPEDEFname unary_abstract_declarator       ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' TYPEDEFname postfix_abstract_declarator     ')' type_qualifier_list_opt
                ';'

        | '(' TYPEDEFname postfix_abstract_declarator     ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement


        | '(' TYPEDEFname postfixing_abstract_declarator  ')' type_qualifier_list_opt
                ';'

        | '(' TYPEDEFname postfixing_abstract_declarator  ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement
        ;


constructor_init_list_opt:

        | constructor_init_list
        ;

constructor_init_list:
        ':' constructor_init
        | constructor_init_list ',' constructor_init
        ;

constructor_init:
        identifier   '(' argument_expression_list ')'
        | identifier '('                          ')'

        | TYPEDEFname '(' argument_expression_list ')'
        | TYPEDEFname '('                          ')'
        | global_or_scoped_typedefname '(' argument_expression_list ')'
        | global_or_scoped_typedefname '('                          ')'

        | '(' argument_expression_list ')'
        | '(' ')'
        ;

declarator:
        identifier_declarator { $$ = $1;}
        | typedef_declarator { $$ = $1;}
        ;

typedef_declarator:
        paren_typedef_declarator { $$ = $1;}
        | simple_paren_typedef_declarator { $$ = $1;}
        | parameter_typedef_declarator { $$ = $1;}
        ;

parameter_typedef_declarator:
        TYPEDEFname { $$ = $1;}
        | TYPEDEFname postfixing_abstract_declarator { $$ = [$1, $2];}
        | clean_typedef_declarator { $$ = $1;}
        ;


    /*  The  following  have  at  least  one  '*'or '&'.  There is no 
    (redundant) '(' between the '*'/'&'  and  the  TYPEDEFname.  This 
    definition  is  critical  in  that  a redundant paren that it too 
    close to the TYPEDEFname (i.e.,  nothing  between  them  at  all) 
    would  make  the TYPEDEFname into a parameter list, rather than a 
    declarator.*/

clean_typedef_declarator:
        clean_postfix_typedef_declarator { $$ = $1;}
        | asterisk_or_ampersand parameter_typedef_declarator { $$ = [$1, $2];}
        | unary_modifier        parameter_typedef_declarator { $$ = [$1, $2];}
        ;

clean_postfix_typedef_declarator:
        '('   clean_typedef_declarator ')' { $$ = [$1, $2, $3];}
        | '(' clean_typedef_declarator ')' postfixing_abstract_declarator { $$ = [$1, $2, $3, $4];}
        ;


    /* The following have a redundant '(' placed immediately  to  the 
    left  of the TYPEDEFname.  This opens up the possibility that the 
    TYPEDEFname is really the start of a parameter list, and *not*  a 
    declarator*/

paren_typedef_declarator:
        postfix_paren_typedef_declarator { $$ = $1;}
        | asterisk_or_ampersand '(' simple_paren_typedef_declarator ')' { $$ = [$1, $2, $3, $4];}
        | unary_modifier        '(' simple_paren_typedef_declarator ')' { $$ = [$1, $2, $3, $4];}
        | asterisk_or_ampersand '(' TYPEDEFname ')' { $$ = [$1, $2, $3, $4];}
        | unary_modifier        '(' TYPEDEFname ')' { $$ = [$1, $2, $3, $4];}
        | asterisk_or_ampersand paren_typedef_declarator { $$ = [$1, $2];}
        | unary_modifier        paren_typedef_declarator { $$ = [$1, $2];}
        ;

postfix_paren_typedef_declarator:
        '(' paren_typedef_declarator ')' { $$ = [$1, $2, $3];}
        | '(' simple_paren_typedef_declarator postfixing_abstract_declarator ')' { $$ = [$1, $2, $3, $4];}
        | '(' TYPEDEFname postfixing_abstract_declarator ')' { $$ = [$1, $2, $3, $4];}
        | '(' paren_typedef_declarator ')' postfixing_abstract_declarator { $$ = [$1, $2, $3, $4];}
        ;


    /*  The following excludes lone TYPEDEFname to help in a conflict 
    resolution.  We have special cased lone  TYPEDEFname  along  side 
    all uses of simple_paren_typedef_declarator */

simple_paren_typedef_declarator:
        '(' TYPEDEFname ')' { $$ = [$1, $2, $3];}
        | '(' simple_paren_typedef_declarator ')' { $$ = [$1, $2, $3];}
        ;

identifier_declarator:
        unary_identifier_declarator { $$ = $1;}
        | paren_identifier_declarator {$$ = $1;}
        ;


    /*  The  following  allows  "function return array of" as well as 
    "array of function returning".  It COULD be cleaned  up  the  way 
    abstract  declarators  have been.  This change might make it hard 
    to recover from user's syntax errors, whereas now they appear  as 
    simple constraint errors. */

unary_identifier_declarator:
        postfix_identifier_declarator { $$ = $1;}
        | asterisk_or_ampersand identifier_declarator { $$ = [$1, $2];}
        | unary_modifier        identifier_declarator { $$ = [$1, $2];}
        ;

postfix_identifier_declarator:
        paren_identifier_declarator           postfixing_abstract_declarator { $$ = [$1, $2];}
        | '(' unary_identifier_declarator ')' { $$ = [$1, $2, $3];}
        | '(' unary_identifier_declarator ')' postfixing_abstract_declarator { $$ = [$1, $2, $3, $4];}
        ;

old_function_declarator:
        postfix_old_function_declarator { $$ = $1;}
        | asterisk_or_ampersand old_function_declarator { $$ = [$1, $2];}
        | unary_modifier      old_function_declarator { $$ = [$1, $2];}
        ;


    /*  ANSI  C  section  3.7.1  states  "An identifier declared as a 
    typedef name shall not be redeclared as a parameter".  Hence  the 
    following is based only on IDENTIFIERs.

    Instead  of identifier_lists, an argument_expression_list is used 
    in  old  style  function   definitions.    The   ambiguity   with 
    constructors   required   the  use  of  argument  lists,  with  a 
    constraint verification of the list (e_g.: check to see that  the 
    "expressions" consisted of lone identifiers).

    An interesting ambiguity appeared:
        const constant=5;
        int foo(constant) ...

    Is  this an old function definition or constructor?  The decision 
    is made later by THIS grammar based on trailing context :-). This 
    ambiguity is probably what caused many parsers to give up on  old 
    style function definitions. */

postfix_old_function_declarator:
        paren_identifier_declarator '(' argument_expression_list ')' { $$ = [$1, $2, $3, $4];}
        | '(' old_function_declarator ')' { $$ = [$1, $2, $3];}
        | '(' old_function_declarator ')' old_postfixing_abstract_declarator { $$ = [$1, $2, $3, $4];}
        ;

old_postfixing_abstract_declarator:
        array_abstract_declarator { $$ = $1;}
        | old_parameter_type_list { $$ = $1;}
        ;

abstract_declarator:
        unary_abstract_declarator { $$ = $1;}
        | postfix_abstract_declarator { $$ = $1;}
        | postfixing_abstract_declarator { $$ = $1;}
        ;

postfixing_abstract_declarator:
        array_abstract_declarator { $$ = $1;}
        | parameter_type_list { $$ = $1;}
        ;

array_abstract_declarator:
        '[' ']' { $$ = [$1, $2];}
        | '[' constant_expression ']' { $$ = [$1, $2, $3];}
        | array_abstract_declarator '[' constant_expression ']' { $$ = [$1, $2, $3, $4];}
        ;

unary_abstract_declarator:
        asterisk_or_ampersand { $$ = $1;}
        | unary_modifier { $$ = $1;}
        | asterisk_or_ampersand abstract_declarator { $$ = [$1, $2];}
        | unary_modifier        abstract_declarator { $$ = [$1, $2];}
        ;

postfix_abstract_declarator:
        '(' unary_abstract_declarator ')' { $$ = [$1, $2, $3];}
        | '(' postfix_abstract_declarator ')' { $$ = [$1, $2, $3];}
        | '(' postfixing_abstract_declarator ')' { $$ = [$1, $2, $3];}
        | '(' unary_abstract_declarator ')' postfixing_abstract_declarator { $$ = [$1, $2, $3, $4];}
        ;

asterisk_or_ampersand:
        '*' { $$ = $1;}
        | '&' { $$ = $1;}
        ;

unary_modifier:
        scope '*' type_qualifier_list_opt { $$ = [$1, $2, $3];}
        | asterisk_or_ampersand type_qualifier_list { $$ = [$1, $2];}
        ;



/* NESTED SCOPE SUPPORT */


    /*  The  actions taken in the rules that follow involve notifying 
    the lexer that it should use the scope specified to determine  if 
    the  next  IDENTIFIER  token is really a TYPEDEFname token.  Note 
    that the actions must be taken before the parse has a  chance  to 
    "look-ahead" at the token that follows the "::", and hence should 
    be  done  during  a  reduction to "scoping_name" (which is always 
    followed by CLCL).  Since we are defining an  LR(1)  grammar,  we 
    are  assured  that  an action specified *before* the :: will take 
    place before the :: is shifted, and hence before the  token  that 
    follows the CLCL is scanned/lexed. */

    /*  Note that at the end of each of the following rules we should 
    be sure that the tag name is  in,  or  placed  in  the  indicated 
    scope.   If  no  scope  is  specified, then we must add it to our 
    current scope IFF it cannot  be  found  in  an  external  lexical 
    scope. */

scoping_name:
        tag_name
        | aggregate_key tag_name
        ;

scope:
        scoping_name CLCL
        | scope scoping_name  CLCL
        ;


    /*  Don't try to simplify the count of non-terminals by using one 
    of the other definitions of  "IDENTIFIER  or  TYPEDEFname"  (like 
    "label").   If you reuse such a non-terminal, 2 RR conflicts will 
    appear. The conflicts are LALR-only. The underlying cause of  the 
    LALR-only   conflict   is  that  labels,  are  followed  by  ':'.  
    Similarly, structure elaborations which provide a derivation have 
    have ':' just  after  tag_name  This  reuse,  with  common  right 
    context, is too much for an LALR parser. */

tag_name:
        identifier {$$ = $1;}
        | TYPEDEFname
        ;

global_scope:
        CLCL
        ;

global_or_scope:
        global_scope
        | scope
        | global_scope scope
        ;


    /*  The  following can be used in an identifier based declarator. 
    (Declarators  that  redefine  an  existing  TYPEDEFname   require 
    special  handling,  and are not included here).  In addition, the 
    following are valid "identifiers" in  an  expression,  whereas  a 
    TYPEDEFname is NOT.*/

scope_opt_identifier:
                identifier {$$ = $1;}
        | scope identifier {$$ = [$1, $2];}
        ;

scope_opt_complex_name:
                complex_name
        | scope complex_name
        ;

complex_name:
        '~' TYPEDEFname
        | operator_function_name
        ;


    /*  Note that the derivations for global_opt_scope_opt_identifier 
    and global_opt_scope_opt_complex_name must be  placed  after  the 
    derivation:

       paren_identifier_declarator : scope_opt_identifier

    There  are several states with RR conflicts on "(", ")", and "[".  
    In these states we give up and assume a declaration, which  means 
    resolving   in  favor  of  paren_identifier_declarator.  This  is 
    basically the "If it can be  a  declaration  rule...",  with  our 
    finite cut off. */

global_opt_scope_opt_identifier:
        global_scope scope_opt_identifier
        |            scope_opt_identifier
        ;

global_opt_scope_opt_complex_name:
        global_scope scope_opt_complex_name
        |            scope_opt_complex_name
        ;


    /*  Note  that we exclude a lone TYPEDEFname.  When all alone, it 
    gets involved in a lot of ambiguities (re: function like cast  vs 
    declaration),   and  hence  must  be  special  cased  in  several 
    contexts. Note that generally every use of scoped_typedefname  is 
    accompanied by a parallel production using lone TYPEDEFname */

scoped_typedefname:
        scope TYPEDEFname
        ;

global_or_scoped_typedefname:
                       scoped_typedefname
        | global_scope scoped_typedefname
        | global_scope TYPEDEFname
        ;

global_opt_scope_opt_typedefname:
        TYPEDEFname
        | global_or_scoped_typedefname
        ;

%%
parser.createArrayOpt = function(rule, arr) {
    var obj = [];
    var i;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] !== undefined) obj.push(arr[i]);
    }
    //console.log(rule, arr, obj);
    return obj;
};