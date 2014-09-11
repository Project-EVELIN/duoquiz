/* PREPROCESSING see http://www.nongnu.org/hcb/#group */
preprocessing_file:
/* nothing */
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
        | identifier { $$ = yytext; yy.parser.logRule("identifier_list:", yytext);}
        | identifier_list ',' identifier {$$ = [$1, $2, $3]; yy.parser.logRule("identifier_list:", yytext);}
        ;

identifier_list_opt:

        | identifier_list { $$ = $1; yy.parser.logRule("identifier_list_opt:", yytext);}
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