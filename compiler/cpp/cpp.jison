%union { }

/*************************************************************************/
/* flex & bison: Text Processing Tools page 142 for more information */
/* more about actions and how to implement them http://www.gnu.org/software/bison/manual/html_node/Actions.html */


/* This group is used by the C/C++ language parser */
%token <value> LE_AUTO            LE_DOUBLE          LE_INT             LE_STRUCT
%token <value> LE_BREAK           LE_ELSE            LE_LONG            LE_SWITCH
%token <value> LE_CASE            LE_ENUM            LE_REGISTER        LE_TYPEDEF
%token <value> LE_CHAR            LE_EXTERN          LE_RETURN          LE_UNION
%token <value> LE_CONST           LE_FLOAT           LE_SHORT           LE_UNSIGNED
%token <value> LE_CONTINUE        LE_FOR             LE_SIGNED          LE_VOID
%token <value> LE_DEFAULT         LE_GOTO            LE_SIZEOF          LE_VOLATILE
%token <value> LE_DO              LE_IF              LE_STATIC          LE_WHILE

/* The following are used in C++ only.  ANSI C would call these IDENTIFIERs */
%token <value> LE_NEW             LE_DELETE
%token <value> LE_THIS
%token <value> LE_OPERATOR
%token <value> LE_CLASS
%token <value> LE_PUBLIC          LE_PROTECTED       LE_PRIVATE
%token <value> LE_VIRTUAL         LE_FRIEND
%token <value> LE_INLINE          LE_OVERLOAD

/* ANSI C Grammar suggestions */
%token <value> LE_IDENTIFIER              LE_STRINGliteral
%token <value> LE_FLOATINGconstant        LE_INTEGERconstant        LE_CHARACTERconstant
%token <value> LE_OCTALconstant           LE_HEXconstant
%token <value> LE_POUNDPOUND LE_CComment LE_CPPComment LE_NAMESPACE

/* New Lexical element, whereas ANSI C suggested non-terminal */
%token LE_TYPEDEFname

/* Multi-Character operators */
%token  <value> LE_ARROW
%token  <value> LE_ICR LE_DECR
%token  <value> LE_LS LE_RS
%token  <value> LE_LE LE_GE LE_EQ LE_NE
%token  <value> LE_ANDAND LE_OROR
%token  <value> LE_ELLIPSIS
%token  <value> LE_CLCL
%token  <value> LE_DOTstar LE_ARROWstar

/* modifying assignment operators */
%token <value> LE_MULTassign  LE_DIVassign    LE_MODassign
%token <value> LE_PLUSassign  LE_MINUSassign
%token <value> LE_LSassign    LE_RSassign
%token <value> LE_ANDassign   LE_ERassign     LE_ORassign
%token <value> LE_TEMPLATE
%token <value> LE_TYPENAME

%start translation_unit

%%
/* Constants */
constant:
        LE_INTEGERconstant {$$ = $1;}
        | LE_FLOATINGconstant {$$ = $1;}
        | LE_OCTALconstant {$$ = $1;}
        | LE_HEXconstant {$$ = $1;}
        | LE_CHARACTERconstant {$$ = $1;}
        ;

string_literal_list:
        LE_STRINGliteral {$$ = $1;}
        | string_literal_list LE_STRINGliteral {$$ = $1.concat($2);}
        ;

paren_identifier_declarator:
        scope_opt_identifier
        | scope_opt_complex_name
        | '(' paren_identifier_declarator ')'
        ;

primary_expression:
        global_opt_scope_opt_identifier
        | global_opt_scope_opt_complex_name
        | LE_THIS
        | constant {$$ = $1;}
        | string_literal_list
        | '(' comma_expression ')'
        ;

non_elaborating_type_specifier:
        sue_type_specifier
        | basic_type_specifier
        | typedef_type_specifier

        | basic_type_name
        | LE_TYPEDEFname
        | global_or_scoped_typedefname
        ;

operator_function_name:
        LE_OPERATOR any_operator
        | LE_OPERATOR type_qualifier_list            operator_function_ptr_opt
        | LE_OPERATOR non_elaborating_type_specifier operator_function_ptr_opt
        ;

operator_function_ptr_opt:
        | unary_modifier        operator_function_ptr_opt
        | asterisk_or_ampersand operator_function_ptr_opt
        ;


    /* List of operators we can overload */
any_operator:
        '+' { $$ = '"+"';}
        | '-'
        | '*'
        | '/'
        | '%'
        | '^'
        | '&'
        | '|'
        | '~'
        | '!'
        | '<'
        | '>'
        | LE_LS
        | LE_RS
        | LE_ANDAND
        | LE_OROR
        | LE_ARROW
        | LE_ARROWstar
        | '.'
        | LE_DOTstar
        | LE_ICR
        | LE_DECR
        | LE_LE
        | LE_GE
        | LE_EQ
        | LE_NE
        | assignment_operator
        | '(' ')'
        | '[' ']'
        | LE_NEW
        | LE_DELETE
        | ','
        ;

type_qualifier_list_opt:
        | type_qualifier_list
        ;

postfix_expression:
        primary_expression
        | postfix_expression '[' comma_expression ']'
        | postfix_expression '(' ')'
        | postfix_expression '(' argument_expression_list ')'
        | postfix_expression '.' member_name
        | postfix_expression LE_ARROW member_name
        | postfix_expression LE_ICR
        | postfix_expression LE_DECR
        | LE_TYPEDEFname                  '(' ')'
        | global_or_scoped_typedefname '(' ')'
        | LE_TYPEDEFname                  '(' argument_expression_list ')'
        | global_or_scoped_typedefname '(' argument_expression_list ')'
        | basic_type_name '(' assignment_expression ')'
        ;
member_name:
        scope_opt_identifier
        | scope_opt_complex_name
        | basic_type_name LE_CLCL '~' basic_type_name
        | declaration_qualifier_list  LE_CLCL '~'   declaration_qualifier_list
        | type_qualifier_list         LE_CLCL '~'   type_qualifier_list
        ;

argument_expression_list:
        assignment_expression
        | argument_expression_list ',' assignment_expression
        ;

unary_expression:
        postfix_expression
        | LE_ICR  unary_expression
        | LE_DECR unary_expression
        | asterisk_or_ampersand cast_expression
        | '-'                   cast_expression
        | '+'                   cast_expression
        | '~'                   cast_expression
        | '!'                   cast_expression
        | LE_SIZEOF unary_expression
        | LE_SIZEOF '(' type_name ')'
        | allocation_expression
        ;

allocation_expression:
        global_opt_scope_opt_operator_new                                    '(' type_name ')'
                operator_new_initializer_opt
        | global_opt_scope_opt_operator_new '(' argument_expression_list ')' '(' type_name ')'
                operator_new_initializer_opt
        | global_opt_scope_opt_operator_new                                  operator_new_type
        | global_opt_scope_opt_operator_new '(' argument_expression_list ')' operator_new_type
        ;

global_opt_scope_opt_operator_new:
        LE_NEW
        | global_or_scope LE_NEW
        ;

operator_new_type:
        type_qualifier_list              operator_new_declarator_opt
                        operator_new_initializer_opt

        | non_elaborating_type_specifier operator_new_declarator_opt
                        operator_new_initializer_opt
        ;

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
        unary_expression
        | '(' type_name ')' cast_expression
        ;

deallocation_expression:
        cast_expression
        | global_opt_scope_opt_delete deallocation_expression
        | global_opt_scope_opt_delete '[' comma_expression ']' deallocation_expression
        | global_opt_scope_opt_delete '[' ']' deallocation_expression
        ;


    /* Following are C++, not ANSI C */
global_opt_scope_opt_delete:
        LE_DELETE
        | global_or_scope LE_DELETE
        ;


    /* Following are C++, not ANSI C */
point_member_expression:
        deallocation_expression
        | point_member_expression LE_DOTstar  deallocation_expression
        | point_member_expression LE_ARROWstar  deallocation_expression
        ;

multiplicative_expression:
        point_member_expression
        | multiplicative_expression '*' point_member_expression
        | multiplicative_expression '/' point_member_expression
        | multiplicative_expression '%' point_member_expression
        ;

additive_expression:
        multiplicative_expression
        | additive_expression '+' multiplicative_expression
        | additive_expression '-' multiplicative_expression
        ;

shift_expression:
        additive_expression
        | shift_expression LE_LS additive_expression
        | shift_expression LE_RS additive_expression
        ;

relational_expression:
        shift_expression
        | relational_expression '<' shift_expression
        | relational_expression '>' shift_expression
        | relational_expression LE_LE  shift_expression
        | relational_expression LE_GE  shift_expression
        ;

equality_expression:
        relational_expression
        | equality_expression LE_EQ relational_expression
        | equality_expression LE_NE relational_expression
        ;

AND_expression:
        equality_expression
        | AND_expression '&' equality_expression {$$ = "[" + $$[$0-2] + ", '&', " + $$[$0] +"]";}
        ;

exclusive_OR_expression:
        AND_expression
        | exclusive_OR_expression '^' AND_expression {$$ = "[" + $$[$0-2] + ", '^', " + $$[$0] +"]";}
        ;

inclusive_OR_expression:
        exclusive_OR_expression
        | inclusive_OR_expression '|' exclusive_OR_expression
        ;

logical_AND_expression:
        inclusive_OR_expression
        | logical_AND_expression LE_ANDAND inclusive_OR_expression
        ;

logical_OR_expression:
        logical_AND_expression
        | logical_OR_expression LE_OROR logical_AND_expression
        ;

conditional_expression:
        logical_OR_expression

        | logical_OR_expression '?' comma_expression ':'
                conditional_expression
        ;

assignment_expression:
        conditional_expression { return this.$;}
        | unary_expression assignment_operator assignment_expression { return this.$;}
        ;

assignment_operator:
        '=' { return this.$;}
        | LE_MULTassign { return this.$;}
        | LE_DIVassign { return this.$;}
        | LE_MODassign { return this.$;}
        | LE_PLUSassign { return this.$;}
        | LE_MINUSassign { return this.$;}
        | LE_LSassign { return this.$;}
        | LE_RSassign { return this.$;}
        | LE_ANDassign { return this.$;}
        | LE_ERassign { return this.$;}
        | LE_ORassign { return this.$;}
        ;

comma_expression:
        assignment_expression
        | comma_expression ',' assignment_expression
        ;

constant_expression:
        conditional_expression
        ;


comma_expression_opt:
        | comma_expression
        ;

declaration:
        declaring_list ';'
        | default_declaring_list ';'
        | sue_declaration_specifier ';'
        | sue_type_specifier ';'
        | sue_type_specifier_elaboration ';'
        ;

default_declaring_list:
        declaration_qualifier_list   identifier_declarator initializer_opt
        | type_qualifier_list        identifier_declarator initializer_opt
        | default_declaring_list ',' identifier_declarator initializer_opt
        | declaration_qualifier_list constructed_identifier_declarator
        | type_qualifier_list        constructed_identifier_declarator
        | default_declaring_list ',' constructed_identifier_declarator
        ;

declaring_list:
        declaration_specifier          declarator initializer_opt
        | type_specifier               declarator initializer_opt
        | basic_type_name              declarator initializer_opt
        | LE_TYPEDEFname                  declarator initializer_opt
        | global_or_scoped_typedefname declarator initializer_opt
        | declaring_list ','           declarator initializer_opt

        | declaration_specifier        constructed_declarator
        | type_specifier               constructed_declarator
        | basic_type_name              constructed_declarator
        | LE_TYPEDEFname                  constructed_declarator
        | global_or_scoped_typedefname constructed_declarator
        | declaring_list ','           constructed_declarator
        ;

constructed_declarator:
        nonunary_constructed_identifier_declarator
        | constructed_paren_typedef_declarator
        | simple_paren_typedef_declarator '(' argument_expression_list ')'

        | simple_paren_typedef_declarator postfixing_abstract_declarator
                                          '(' argument_expression_list ')'

        | constructed_parameter_typedef_declarator
        | asterisk_or_ampersand constructed_declarator
        | unary_modifier        constructed_declarator
        ;

constructed_paren_typedef_declarator:
        '(' paren_typedef_declarator ')'
                    '(' argument_expression_list ')'

        | '(' paren_typedef_declarator ')' postfixing_abstract_declarator
                   '(' argument_expression_list ')'

        | '(' simple_paren_typedef_declarator postfixing_abstract_declarator ')'
                   '(' argument_expression_list ')'

        | '(' LE_TYPEDEFname postfixing_abstract_declarator ')'
                   '(' argument_expression_list ')'
        ;


constructed_parameter_typedef_declarator:
        LE_TYPEDEFname    '(' argument_expression_list ')'

        | LE_TYPEDEFname  postfixing_abstract_declarator
                       '(' argument_expression_list ')'

        | '(' clean_typedef_declarator ')'
                       '(' argument_expression_list ')'

        | '(' clean_typedef_declarator ')'  postfixing_abstract_declarator
                       '(' argument_expression_list ')'
        ;


constructed_identifier_declarator:
        nonunary_constructed_identifier_declarator
        | asterisk_or_ampersand constructed_identifier_declarator
        | unary_modifier        constructed_identifier_declarator
        ;

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
        basic_declaration_specifier
        | sue_declaration_specifier
        | typedef_declaration_specifier
        ;

type_specifier:
        basic_type_specifier
        | sue_type_specifier
        | sue_type_specifier_elaboration
        | typedef_type_specifier
        ;

declaration_qualifier_list:
        storage_class
        | type_qualifier_list storage_class
        | declaration_qualifier_list declaration_qualifier
        ;

type_qualifier_list:
        type_qualifier
        | type_qualifier_list type_qualifier
        ;

declaration_qualifier:
        storage_class
        | type_qualifier
        ;

type_qualifier:
        LE_CONST { this.$ = "'const'";}
        | LE_VOLATILE { this.$ = "'volatile'";}
        ;

basic_declaration_specifier:
        declaration_qualifier_list    basic_type_name
        | basic_type_specifier        storage_class
        | basic_type_name             storage_class
        | basic_declaration_specifier declaration_qualifier
        | basic_declaration_specifier basic_type_name
        ;

basic_type_specifier:
        type_qualifier_list    basic_type_name
        | basic_type_name      basic_type_name
        | basic_type_name      type_qualifier
        | basic_type_specifier type_qualifier
        | basic_type_specifier basic_type_name
        ;

sue_declaration_specifier:
        declaration_qualifier_list       elaborated_type_name
        | declaration_qualifier_list     elaborated_type_name_elaboration
        | sue_type_specifier             storage_class
        | sue_type_specifier_elaboration storage_class
        | sue_declaration_specifier      declaration_qualifier
        ;

sue_type_specifier_elaboration:
        elaborated_type_name_elaboration
        | type_qualifier_list elaborated_type_name_elaboration
        | sue_type_specifier_elaboration type_qualifier
        ;

sue_type_specifier:
        elaborated_type_name
        | type_qualifier_list elaborated_type_name
        | sue_type_specifier type_qualifier
        ;

typedef_declaration_specifier:
        declaration_qualifier_list   LE_TYPEDEFname
        | declaration_qualifier_list global_or_scoped_typedefname

        | typedef_type_specifier       storage_class
        | LE_TYPEDEFname                  storage_class
        | global_or_scoped_typedefname storage_class

        | typedef_declaration_specifier declaration_qualifier
        ;

typedef_type_specifier:
        type_qualifier_list      LE_TYPEDEFname
        | type_qualifier_list    global_or_scoped_typedefname

        | LE_TYPEDEFname                  type_qualifier
        | global_or_scoped_typedefname type_qualifier

        | typedef_type_specifier type_qualifier
        ;

storage_class:
        LE_EXTERN { $$ = "'extern'";}
        | LE_TYPEDEF { $$ = "'typedef'";}
        | LE_STATIC { $$ = "'static'";}
        | LE_AUTO { $$ = "'auto'";}
        | LE_REGISTER { $$ = "'register'";}
        | LE_FRIEND { $$ = "'friend'";}
        | LE_OVERLOAD { $$ = "'overload'";}
        | LE_INLINE { $$ = "'inline'";}
        | LE_VIRTUAL { $$ = "'virtual'";}
        ;

basic_type_name:
        LE_INT {$$ = "'int'";}
        | LE_CHAR {$$ = "'char'";}
        | LE_SHORT {$$ = "'short'";}
        | LE_LONG {$$ = "'long'";}
        | LE_FLOAT {$$ = "'float'";}
        | LE_DOUBLE {$$ = "'double'";}
        | LE_SIGNED {$$ = "'signed'";}
        | LE_UNSIGNED {$$ = "'unsigned'";}
        | LE_VOID {$$ = "'void'";}
        ;

elaborated_type_name_elaboration:
        aggregate_name_elaboration
        | enum_name_elaboration
        ;

elaborated_type_name:
        aggregate_name
        | enum_name
        ;

aggregate_name_elaboration:
        aggregate_name derivation_opt  '{' member_declaration_list_opt '}'
        | aggregate_key derivation_opt '{' member_declaration_list_opt '}'
        ;

aggregate_name:
                             aggregate_key tag_name
        | global_scope scope aggregate_key tag_name
        | global_scope       aggregate_key tag_name
        | scope              aggregate_key tag_name
        ;

derivation_opt:
        | ':' derivation_list
        ;

derivation_list:
        parent_class
        | derivation_list ',' parent_class
        ;

parent_class:
                                       global_opt_scope_opt_typedefname
        | LE_VIRTUAL access_specifier_opt global_opt_scope_opt_typedefname
        | access_specifier virtual_opt global_opt_scope_opt_typedefname
        ;

virtual_opt:
        | LE_VIRTUAL
        ;

access_specifier_opt:
        | access_specifier
        ;

access_specifier:
        LE_PUBLIC
        | LE_PRIVATE
        | LE_PROTECTED
        ;

aggregate_key:
        LE_STRUCT {this.$ = "'struct'";}
        | LE_UNION {this.$ = "'union'";}
        | LE_CLASS {this.$ = "'class'";}
        ;

member_declaration_list_opt:
        | member_declaration_list_opt member_declaration
        ;

member_declaration:
        member_declaring_list ';'
        | member_default_declaring_list ';'

        | access_specifier ':'

        | new_function_definition
        | constructor_function_in_class

        | sue_type_specifier
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

member_declaring_list:
        type_specifier                 declarator member_pure_opt
        | basic_type_name              declarator member_pure_opt

        | global_or_scoped_typedefname declarator member_pure_opt
        | member_conflict_declaring_item
        | member_declaring_list ','    declarator member_pure_opt

        | type_specifier                bit_field_declarator
        | basic_type_name               bit_field_declarator
        | LE_TYPEDEFname                   bit_field_declarator
        | global_or_scoped_typedefname  bit_field_declarator
        | declaration_specifier         bit_field_declarator
        | member_declaring_list ','     bit_field_declarator
        ;

member_conflict_declaring_item:
        LE_TYPEDEFname             identifier_declarator            member_pure_opt
        | LE_TYPEDEFname           parameter_typedef_declarator     member_pure_opt
        | LE_TYPEDEFname           simple_paren_typedef_declarator  member_pure_opt

        | declaration_specifier identifier_declarator            member_pure_opt
        | declaration_specifier parameter_typedef_declarator     member_pure_opt
        | declaration_specifier simple_paren_typedef_declarator  member_pure_opt

        | member_conflict_paren_declaring_item
        ;

member_conflict_paren_declaring_item:
        LE_TYPEDEFname   asterisk_or_ampersand
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | LE_TYPEDEFname unary_modifier
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | LE_TYPEDEFname asterisk_or_ampersand
                '(' LE_TYPEDEFname ')'                     member_pure_opt
        | LE_TYPEDEFname unary_modifier
                '(' LE_TYPEDEFname ')'                     member_pure_opt
        | LE_TYPEDEFname asterisk_or_ampersand
                 paren_typedef_declarator               member_pure_opt
        | LE_TYPEDEFname unary_modifier
                 paren_typedef_declarator               member_pure_opt

        | declaration_specifier asterisk_or_ampersand
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | declaration_specifier unary_modifier
                '(' simple_paren_typedef_declarator ')' member_pure_opt
        | declaration_specifier asterisk_or_ampersand
                '(' LE_TYPEDEFname ')'                     member_pure_opt
        | declaration_specifier unary_modifier
                '(' LE_TYPEDEFname ')'                     member_pure_opt
        | declaration_specifier asterisk_or_ampersand
                paren_typedef_declarator                member_pure_opt
        | declaration_specifier unary_modifier
                paren_typedef_declarator                member_pure_opt

        | member_conflict_paren_postfix_declaring_item
        ;

member_conflict_paren_postfix_declaring_item:
        LE_TYPEDEFname     '(' paren_typedef_declarator ')'
                                                           member_pure_opt
        | LE_TYPEDEFname   '(' simple_paren_typedef_declarator
                        postfixing_abstract_declarator ')' member_pure_opt
        | LE_TYPEDEFname   '(' LE_TYPEDEFname
                        postfixing_abstract_declarator ')' member_pure_opt
        | LE_TYPEDEFname   '(' paren_typedef_declarator ')'
                        postfixing_abstract_declarator     member_pure_opt

        | declaration_specifier '(' paren_typedef_declarator ')'
                                                           member_pure_opt
        | declaration_specifier '(' simple_paren_typedef_declarator
                        postfixing_abstract_declarator ')' member_pure_opt
        | declaration_specifier '(' LE_TYPEDEFname
                        postfixing_abstract_declarator ')' member_pure_opt
        | declaration_specifier '(' paren_typedef_declarator ')'
                        postfixing_abstract_declarator     member_pure_opt
        ;

member_pure_opt:
        | '=' LE_OCTALconstant
        ;

bit_field_declarator:
        bit_field_identifier_declarator
        | LE_TYPEDEFname ':' constant_expression
        ;

bit_field_identifier_declarator:
                                   ':' constant_expression
        | identifier_declarator ':' constant_expression
        ;

enum_name_elaboration:
        global_opt_scope_opt_enum_key '{' enumerator_list '}'
        | enum_name                   '{' enumerator_list '}'
        ;

enum_name:
        global_opt_scope_opt_enum_key tag_name
        ;

global_opt_scope_opt_enum_key:
        LE_ENUM
        | global_or_scope LE_ENUM
        ;

enumerator_list:
        enumerator_list_no_trailing_comma
        | enumerator_list_no_trailing_comma ','
        ;

enumerator_list_no_trailing_comma:
        enumerator_name enumerator_value_opt
        | enumerator_list_no_trailing_comma ',' enumerator_name enumerator_value_opt
        ;

enumerator_name:
        LE_IDENTIFIER
        | LE_TYPEDEFname
        ;

enumerator_value_opt:
        | '=' constant_expression
        ;

parameter_type_list:
        '(' ')'                             type_qualifier_list_opt
        | '(' type_name ')'                 type_qualifier_list_opt
        | '(' type_name initializer ')'     type_qualifier_list_opt
        | '(' named_parameter_type_list ')' type_qualifier_list_opt
        ;

old_parameter_type_list:
        '(' ')'
        | '(' type_name ')'
        | '(' type_name initializer ')'
        | '(' named_parameter_type_list ')'
        ;

named_parameter_type_list:
        parameter_list
        | parameter_list comma_opt_ellipsis
        | type_name comma_opt_ellipsis
        | type_name initializer comma_opt_ellipsis
        | LE_ELLIPSIS
        ;

comma_opt_ellipsis:
        LE_ELLIPSIS
        | ',' LE_ELLIPSIS
        ;

parameter_list:
        non_casting_parameter_declaration
        | non_casting_parameter_declaration initializer
        | type_name             ',' parameter_declaration
        | type_name initializer ',' parameter_declaration
        | parameter_list        ',' parameter_declaration
        ;

parameter_declaration:
        type_name
        | type_name                         initializer
        | non_casting_parameter_declaration
        | non_casting_parameter_declaration initializer
        ;

non_casting_parameter_declaration:
        declaration_specifier
        | declaration_specifier abstract_declarator
        | declaration_specifier identifier_declarator
        | declaration_specifier parameter_typedef_declarator

        | declaration_qualifier_list
        | declaration_qualifier_list abstract_declarator
        | declaration_qualifier_list identifier_declarator

        | type_specifier identifier_declarator
        | type_specifier parameter_typedef_declarator

        | basic_type_name identifier_declarator
        | basic_type_name parameter_typedef_declarator

        | LE_TYPEDEFname                   identifier_declarator
        | LE_TYPEDEFname                   parameter_typedef_declarator

        | global_or_scoped_typedefname  identifier_declarator
        | global_or_scoped_typedefname  parameter_typedef_declarator

        | type_qualifier_list identifier_declarator
        ;

type_name:
        type_specifier {$$ = $1;}
        | basic_type_name {$$ = $1;}
        | LE_TYPEDEFname {$$ = $1;}
        | global_or_scoped_typedefname {$$ = $1;}
        | type_qualifier_list {$$ = $1;}
        | type_specifier               abstract_declarator
        | basic_type_name              abstract_declarator
        | LE_TYPEDEFname                  abstract_declarator
        | global_or_scoped_typedefname abstract_declarator
        | type_qualifier_list          abstract_declarator
        ;

initializer_opt:
        | initializer {$$ = $1;}
        ;

initializer:
        '=' initializer_group  {$$ = $1 + " " + $2;}
        ;

initializer_group:
        '{' initializer_list '}'
        | '{' initializer_list ',' '}'
        | assignment_expression {$$ = $1;}
        ;

initializer_list:
        initializer_group {$$ = $1;}
        | initializer_list ',' initializer_group {$$ = $1 + "," + $3;}
        ;

statement:
        labeled_statement {$$ = $1;}
        | compound_statement {$$ = $1;}
        | expression_statement {$$ = $1;}
        | selection_statement {$$ = $1;}
        | iteration_statement {$$ = $1;}
        | jump_statement {$$ = $1;}
        | declaration {$$ = $1;}
        ;

labeled_statement:
        label                      ':' statement
        | LE_CASE constant_expression ':' statement
        | LE_DEFAULT                  ':' statement
        ;

compound_statement:
        '{' statement_list_opt '}'
        ;

declaration_list:
        declaration  {$$ = $1;}
        | declaration_list declaration  {$$ = $1 + " " + $2;}
        ;

statement_list_opt:
        | statement_list_opt statement
        ;

expression_statement:
        comma_expression_opt ';'
        ;

selection_statement:
          LE_IF '(' comma_expression ')' statement
        | LE_IF '(' comma_expression ')' statement LE_ELSE statement
        | LE_SWITCH '(' comma_expression ')' statement
        ;

iteration_statement:
        LE_WHILE '(' comma_expression_opt ')' statement
        | LE_DO statement LE_WHILE '(' comma_expression ')' ';'

        | LE_FOR '(' comma_expression_opt ';' comma_expression_opt ';'
                comma_expression_opt ')' statement

        | LE_FOR '(' declaration        comma_expression_opt ';'
                comma_expression_opt ')' statement
        ;

jump_statement:
        LE_GOTO label                     ';'  {$$ = $1 + " " + $2;}
        | LE_CONTINUE                     ';'  {$$ = $1;}
        | LE_BREAK                        ';'  {$$ = $1;}
        | LE_RETURN comma_expression_opt  ';'  {$$ = $1 + " " + $2;}
        ;

label:
        LE_IDENTIFIER
        | LE_TYPEDEFname
        ;

translation_unit:
        | translation_unit external_definition {return $1 + " " + $2;}
        ;

external_definition:
        function_declaration {$$ = $1;}
        | function_definition {$$ = $1;}
        | declaration {$$ = $1;}
        | linkage_specifier function_declaration {$$ = $1 + " " + $2;}
        | linkage_specifier function_definition {$$ = $1 + " " + $2;}
        | linkage_specifier declaration {$$ = $1 + " " + $2;}
        | linkage_specifier '{' translation_unit '}' {$$ = $1 + "{" + $3 + "}";}
        ;

linkage_specifier:
        LE_EXTERN LE_STRINGliteral {$$ = $1 + " " + $2;}
        ;

function_declaration:
        identifier_declarator ';' {$$ = $1 + "" + $2;}
        | constructor_function_declaration ';' {$$ = $1 + "" + $2;}
        ;

function_definition:
        new_function_definition {$$ = $1;}
        | old_function_definition {$$ = $1;}
        | constructor_function_definition {$$ = $1;}
        ;

new_function_definition:
                                       identifier_declarator compound_statement
        | declaration_specifier                   declarator compound_statement
        | type_specifier                          declarator compound_statement
        | basic_type_name                         declarator compound_statement
        | LE_TYPEDEFname                             declarator compound_statement
        | global_or_scoped_typedefname            declarator compound_statement
        | declaration_qualifier_list   identifier_declarator compound_statement
        | type_qualifier_list          identifier_declarator compound_statement
        ;

old_function_definition:
                                       old_function_declarator old_function_body
        | declaration_specifier        old_function_declarator old_function_body
        | type_specifier               old_function_declarator old_function_body
        | basic_type_name              old_function_declarator old_function_body
        | LE_TYPEDEFname                  old_function_declarator old_function_body
        | global_or_scoped_typedefname old_function_declarator old_function_body
        | declaration_qualifier_list   old_function_declarator old_function_body
        | type_qualifier_list          old_function_declarator old_function_body
        ;

old_function_body:
        declaration_list compound_statement
        | compound_statement
        ;

constructor_function_definition:
        global_or_scoped_typedefname parameter_type_list
                     constructor_init_list_opt compound_statement

        | declaration_specifier      parameter_type_list
                     constructor_init_list_opt compound_statement
        ;

constructor_function_declaration:
        global_or_scoped_typedefname parameter_type_list
        | declaration_specifier      parameter_type_list
        ;

constructor_function_in_class:
        declaration_specifier   constructor_parameter_list_and_body
        | LE_TYPEDEFname           constructor_parameter_list_and_body
        ;

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

constructor_conflicting_parameter_list_and_body:
        '(' type_specifier                 ')' type_qualifier_list_opt
                ';'
        | '(' basic_type_name              ')' type_qualifier_list_opt
                ';'

        | '(' LE_TYPEDEFname                  ')' type_qualifier_list_opt
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

        | '(' LE_TYPEDEFname                  ')' type_qualifier_list_opt
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

constructor_conflicting_typedef_declarator:
        '(' LE_TYPEDEFname unary_abstract_declarator          ')' type_qualifier_list_opt
                ';'

        | '(' LE_TYPEDEFname unary_abstract_declarator       ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement

        | '(' LE_TYPEDEFname postfix_abstract_declarator     ')' type_qualifier_list_opt
                ';'

        | '(' LE_TYPEDEFname postfix_abstract_declarator     ')' type_qualifier_list_opt
                constructor_init_list_opt compound_statement


        | '(' LE_TYPEDEFname postfixing_abstract_declarator  ')' type_qualifier_list_opt
                ';'

        | '(' LE_TYPEDEFname postfixing_abstract_declarator  ')' type_qualifier_list_opt
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
        LE_IDENTIFIER   '(' argument_expression_list ')'
        | LE_IDENTIFIER '('                          ')'

        | LE_TYPEDEFname '(' argument_expression_list ')'
        | LE_TYPEDEFname '('                          ')'
        | global_or_scoped_typedefname '(' argument_expression_list ')'
        | global_or_scoped_typedefname '('                          ')'

        | '(' argument_expression_list ')'
        | '(' ')'
        ;

declarator:
        identifier_declarator {$$ = $1;}
        | typedef_declarator {$$ = $1;}
        ;

typedef_declarator:
        paren_typedef_declarator {$$ = $1;}
        | simple_paren_typedef_declarator {$$ = $1;}
        | parameter_typedef_declarator {$$ = $1;}
        ;

parameter_typedef_declarator:
        LE_TYPEDEFname {$$ = $1;}
        | LE_TYPEDEFname postfixing_abstract_declarator {$$ = $1 + " " + $2;}
        | clean_typedef_declarator {$$ = $1;}
        ;

clean_typedef_declarator:
        clean_postfix_typedef_declarator
        | asterisk_or_ampersand parameter_typedef_declarator
        | unary_modifier        parameter_typedef_declarator
        ;

clean_postfix_typedef_declarator:
        '('   clean_typedef_declarator ')'
        | '(' clean_typedef_declarator ')' postfixing_abstract_declarator
        ;

paren_typedef_declarator:
        postfix_paren_typedef_declarator
        | asterisk_or_ampersand '(' simple_paren_typedef_declarator ')'
        | unary_modifier        '(' simple_paren_typedef_declarator ')'
        | asterisk_or_ampersand '(' LE_TYPEDEFname ')'
        | unary_modifier        '(' LE_TYPEDEFname ')'
        | asterisk_or_ampersand paren_typedef_declarator
        | unary_modifier        paren_typedef_declarator
        ;

postfix_paren_typedef_declarator:
        '(' paren_typedef_declarator ')'
        | '(' simple_paren_typedef_declarator postfixing_abstract_declarator ')'
        | '(' LE_TYPEDEFname postfixing_abstract_declarator ')'
        | '(' paren_typedef_declarator ')' postfixing_abstract_declarator
        ;


simple_paren_typedef_declarator:
        '(' LE_TYPEDEFname ')'
        | '(' simple_paren_typedef_declarator ')'
        ;

identifier_declarator:
        unary_identifier_declarator {$$ = $1;}
        | paren_identifier_declarator {$$ = $1;}
        ;

unary_identifier_declarator:
        postfix_identifier_declarator {$$ = $1;}
        | asterisk_or_ampersand identifier_declarator {$$ = $1 + "" + $2;}
        | unary_modifier        identifier_declarator {$$ = $1 + "" + $2;}
        ;

postfix_identifier_declarator:
        paren_identifier_declarator           postfixing_abstract_declarator
        | '(' unary_identifier_declarator ')'
        | '(' unary_identifier_declarator ')' postfixing_abstract_declarator
        ;

old_function_declarator:
        postfix_old_function_declarator
        | asterisk_or_ampersand old_function_declarator
        | unary_modifier      old_function_declarator
        ;

postfix_old_function_declarator:
        paren_identifier_declarator '(' argument_expression_list ')'
        | '(' old_function_declarator ')'
        | '(' old_function_declarator ')' old_postfixing_abstract_declarator
        ;

old_postfixing_abstract_declarator:
        array_abstract_declarator
        | old_parameter_type_list
        ;

abstract_declarator:
        unary_abstract_declarator
        | postfix_abstract_declarator
        | postfixing_abstract_declarator
        ;

postfixing_abstract_declarator:
        array_abstract_declarator
        | parameter_type_list
        ;

array_abstract_declarator:
        '[' ']' {$$ = $1 + "" + $2;}
        | '[' constant_expression ']' {$$ = $1 + $2 + $3;}
        | array_abstract_declarator '[' constant_expression ']' {$$ = $1 + $2 + $3 + $4;}
        ;

unary_abstract_declarator:
        asterisk_or_ampersand
        | unary_modifier
        | asterisk_or_ampersand abstract_declarator
        | unary_modifier        abstract_declarator
        ;

postfix_abstract_declarator:
        '(' unary_abstract_declarator ')'
        | '(' postfix_abstract_declarator ')'
        | '(' postfixing_abstract_declarator ')'
        | '(' unary_abstract_declarator ')' postfixing_abstract_declarator
        ;

asterisk_or_ampersand:
        '*'
        | '&'
        ;

unary_modifier:
        scope '*' type_qualifier_list_opt
        | asterisk_or_ampersand type_qualifier_list
        ;



/************************* NESTED SCOPE SUPPORT ******************************/

scoping_name:
        tag_name {$$ = $1;}
        | aggregate_key tag_name {$$ = $1 + " " + $2;}
        ;

scope:
        scoping_name LE_CLCL {$$ = $1 + "" + $2;}
        | scope scoping_name  LE_CLCL {$$ = $1 + "" + $2 + $3;}
        ;

tag_name:
        LE_IDENTIFIER {$$ = $1;}
        | LE_TYPEDEFname {$$ = $1;}
        ;

global_scope:
        LE_CLCL {$$ = $1;}
        ;

global_or_scope:
        global_scope
        | scope
        | global_scope scope
        ;

scope_opt_identifier:
                LE_IDENTIFIER
        | scope LE_IDENTIFIER
        ;

scope_opt_complex_name:
                complex_name
        | scope complex_name
        ;

complex_name:
        '~' LE_TYPEDEFname
        | operator_function_name
        ;

global_opt_scope_opt_identifier:
        global_scope scope_opt_identifier
        |            scope_opt_identifier
        ;

global_opt_scope_opt_complex_name:
        global_scope scope_opt_complex_name
        |            scope_opt_complex_name
        ;

scoped_typedefname:
        scope LE_TYPEDEFname
        ;

global_or_scoped_typedefname:
                       scoped_typedefname
        | global_scope scoped_typedefname
        | global_scope LE_TYPEDEFname
        ;

global_opt_scope_opt_typedefname:
        LE_TYPEDEFname
        | global_or_scoped_typedefname
        ;

%%