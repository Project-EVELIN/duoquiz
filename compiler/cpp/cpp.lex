NL                      [\n]
identifier [a-zA-Z_][0-9a-zA-Z_]*

exponent_part [eE][-+]?[0-9]+
fractional_constant ([0-9]*"."[0-9]+)|([0-9]+".")
floating_constant (({fractional_constant}{exponent_part}?)|([0-9]+{exponent_part}))[FfLl]?

integer_suffix_opt ([uU]?[lL]?)|([lL][uU])
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

%s typedef_mode
%x PREPR
%x WRAP_PREP

%%
{SLASH}{SLASH}.* { }
{SLASH}{STAR}({SLASH}|(.|{NL})|{STAR}+(.|{NL}))*?{STAR}+{SLASH} { }

"auto"      { return(parser.symbols_.LE_AUTO); }
"break"			{ return(parser.symbols_.LE_BREAK); }
"case"			{ return(parser.symbols_.LE_CASE); }
"char"			{ return(parser.symbols_.LE_CHAR); }
"const"			{ return(parser.symbols_.LE_CONST); }
"continue"		{ return(parser.symbols_.LE_CONTINUE); }
"default"   { return(parser.symbols_.LE_DEFAULT); }
"define"   { return("define"); }
"defined"		{ return("defined"); }
"do"			{ return(parser.symbols_.LE_DO); }
"double"    { return(parser.symbols_.LE_DOUBLE); }
"elif"		{ return("elif"); }
"else"      { return(parser.symbols_.LE_ELSE); }
"endif"     { return("endif"); }
"error"			{ return(parser.symbols_.LE_ERROR); }
"enum"			{ return(parser.symbols_.LE_ENUM); }
"extern"		{ return(parser.symbols_.LE_EXTERN); }
"float"			{ return(parser.symbols_.LE_FLOAT); }
"for"			{ return(parser.symbols_.LE_FOR); }
"goto"			{ return(parser.symbols_.LE_GOTO); }
"if"      { return(parser.symbols_.LE_IF); }
"ifdef"      { return("ifdef"); }
"ifndef"      { return("ifndef"); }
"include"			{ return(parser.symbols_.LE_INCLUDE); }
"int"				{ return(parser.symbols_.LE_INT); }
"line"			{ return("line"); }
"long"      { return(parser.symbols_.LE_LONG); }
"bool"			{ return(parser.symbols_.LE_BOOL); }
"pragma"    { return("pragma"); }
"register"	{ return(parser.symbols_.LE_REGISTER); }
"return"		{ return(parser.symbols_.LE_RETURN); }
"short"			{ return(parser.symbols_.LE_SHORT); }
"signed"		{ return(parser.symbols_.LE_SIGNED); }
"sizeof"		{ return(parser.symbols_.LE_SIZEOF); }
"static"		{ return(parser.symbols_.LE_STATIC); }
"struct"		{ return(parser.symbols_.LE_STRUCT); }
"switch"		{ return(parser.symbols_.LE_SWITCH); }
"typedef"   { return(parser.symbols_.LE_TYPEDEF); }
"undef"		  { return("undef"); }
"union" 		{ return(parser.symbols_.LE_UNION); }
"unsigned"		{ return(parser.symbols_.LE_UNSIGNED); }
"void"			{ return(parser.symbols_.LE_VOID); }
"volatile"		{ return(parser.symbols_.LE_VOLATILE); }
"while"     { return(parser.symbols_.LE_WHILE); }
"time_t"     { return(parser.symbols_.LE_TIME_T); }
"size_t"			{ return(parser.symbols_.LE_SIZE_T); }

"class"      { return(parser.symbols_.LE_CLASS); }
"namespace"  { return(parser.symbols_.LE_NAMESPACE); }
"delete"     { return(parser.symbols_.LE_DELETE); }
"friend"     { return(parser.symbols_.LE_FRIEND); }
"inline"     { return(parser.symbols_.LE_INLINE); }
"new"        { return(parser.symbols_.LE_NEW); }
"operator"   { return(parser.symbols_.LE_OPERATOR); }
"overload"     { return(parser.symbols_.LE_OVERLOAD); }
"protected"     { return(parser.symbols_.LE_PROTECTED); }
"private"     { return(parser.symbols_.LE_PRIVATE); }
"public"     { return(parser.symbols_.LE_PUBLIC); }
"this"     { return(parser.symbols_.LE_THIS); }
"virtual"     { return(parser.symbols_.LE_VIRTUAL); }
"template"     { return(parser.symbols_.LE_TEMPLATE); }
"typename"     { return(parser.symbols_.LE_TYPENAME); }
"dynamic_cast"     { return(parser.symbols_.LE_DYNAMIC_CAST); }
"static_cast"     { return(parser.symbols_.LE_STATIC_CAST); }
"const_cast"     { return(parser.symbols_.LE_CONST_CAST); }
"reinterpret_cast"     { return(parser.symbols_.LE_REINTERPRET_CAST); }
"using"     { return(parser.symbols_.LE_USING); }
"throw"     { return(parser.symbols_.LE_THROW); }
"catch"     { return(parser.symbols_.LE_CATCH); }

{identifier} { return(parser.symbols_.LE_IDENTIFIER); }

{decimal_constant}  { return parser.symbols_.LE_INTEGERconstant; }
{octal_constant}    { return parser.symbols_.LE_OCTALconstant; }
{hex_constant}      { return parser.symbols_.LE_HEXconstant; }
{floating_constant} { return parser.symbols_.LE_FLOATINGconstant; }

"L"?[']{c_char}+[']     { return parser.symbols_.LE_CHARACTERconstant; }


"L"?["]{s_char}*["]     { return parser.symbols_.LE_STRINGliteral; }

"..."			{ return(parser.symbols_.LE_ELLIPSIS); }
">>="			{ return(parser.symbols_.LE_RSassign); }
"<<="			{ return(parser.symbols_.LE_LSassign); }
"+="			{ return(parser.symbols_.LE_PLUSassign); }
"-="			{ return(parser.symbols_.LE_MINUSassign); }
"*="			{ return(parser.symbols_.LE_MULTassign); }
"/="			{ return(parser.symbols_.LE_DIVassign); }
"%="			{ return(parser.symbols_.LE_MODassign); }
"&="			{ return(parser.symbols_.LE_ANDassign); }
"^="			{ return(parser.symbols_.LE_ERassign); }
"|="			{ return(parser.symbols_.LE_ORassign); }
">>"			{ return(parser.symbols_.LE_RS); }
"<<"			{ return(parser.symbols_.LE_LS); }
"++"			{ return(parser.symbols_.LE_ICR); }
"--"			{ return(parser.symbols_.LE_DECR); }
"->"      { return(parser.symbols_.LE_ARROW); }
"->*"			{ return(parser.symbols_.LE_ARROWstar); }
"&&"			{ return(parser.symbols_.LE_ANDAND); }
"||"			{ return(parser.symbols_.LE_OROR); }
"<="			{ return(parser.symbols_.LE_LE); }
">="			{ return(parser.symbols_.LE_GE); }
"=="			{ return(parser.symbols_.LE_EQ); }
"!="			{ return(parser.symbols_.LE_NE); }
".*"			{ return(parser.symbols_.LE_DOTstar); }
"::"			{ return(parser.symbols_.LE_CLCL); }
";"			{ return(';'); }
"{"			{ return(parser.symbols_.LE_LC); }
"}"			{ return(parser.symbols_.LE_RC); }
","			{ return(','); }
":"			{ return(':'); }
"="			{ return('='); }
"("			{ return('('); }
")"			{ return(')'); }
"["			{ return('['); }
"]"			{ return(']'); }
"."			{ return('.'); }
"&"			{ return('&'); }
"!"			{ return('!'); }
"~"			{ return('~'); }
"-"			{ return('-'); }
"+"			{ return('+'); }
"*"			{ return('*'); }
"/"			{ return('/'); }
"%"			{ return('%'); }
"<"			{ return('<'); }
">"			{ return('>'); }
"^"			{ return("^"); }
"|"			{ return('|'); }
"?"			{ return('?'); }
^"#"		{ this.begin("PREPR"); }

<PREPR>\n		{ this.begin("INITIAL"); }
<PREPR>\\		{ this.begin("WRAP_PREP"); }
<PREPR>define	{ }
<WRAP_PREP>\n	{ this.begin("PREPR"); }
<WRAP_PREP>{identifier}  { }
<PREPR>{identifier} { }
<WRAP_PREP>.	{ }
<PREPR>.			{ }
%%