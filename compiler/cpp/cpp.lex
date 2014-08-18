%{
	var cl_scope_lval;
	var cl_var_lval;
	var cl_func_lval;
	var cl_typedef_lval;

	var currentScope;

	var g_symbols = {};
	var g_macros = {};
	var g_ignoreList = {};
	var gs_useMacroIgnore = false;

	var defineFound = false;

	function isaTYPE(str) {
	return g_symbols.hasOwnProperty(str);
	}

	function isignoredToken(str) {
		if(g_ignoreList.hasOwnProperty(str)) {
			return false;
		} else {
			return g_ignoreList[str] === "";
		}
	}

	function isaMACRO(str) {
		if(gs_useMacroIgnore) {
			return g_macros.hasOwnProperty(str);
		} else {
			return false;
		}
	}

	/* do nothing */
	function WHITE_RETURN(x) {};

	function RETURN_VAL(x) {
		cl_scope_lval = yytext;
		cl_var_lval = yytext;
		cl_func_lval = yytext;
		cl_typedef_lval = yytext;
		return(x);
	}

	function IDENTIFIER_RETURN() {
		if (isaTYPE(yytext)) {
			return RETURN_VAL(parser.symbols_.TYPEDEFname);
		} else if (isaMACRO(yytext)) {
			return RETURN_VAL(parser.symbols_.MACRO);
		} else if (isignoredToken(yytext)) {
			// do nothing
		} else {
			return RETURN_VAL(parser.symbols_.IDENTIFIER);
		}
	}

	/* standard C PArser Keyword */
	function PA_KEYWORD_RETURN(x) {
		return RETURN_VAL(x);
	}

	/* C++ keyword */
	function CPP_KEYWORD_RETURN(x) {
		return PA_KEYWORD_RETURN(x);
	}

	/* both PreProcessor and Parser keyword */
	function PPPA_KEYWORD_RETURN(x) {
		return RETURN_VAL(x);
	}

	function PP_KEYWORD_RETURN(x) {
		IDENTIFIER_RETURN();
	}

	/* PreProcess and Parser operator */
	function PPOP_RETURN(x) {
		return RETURN_VAL(x);
	}

	function NAMED_PPOP_RETURN(x) {
		return RETURN_VAL(x);
	}

	/* a single character operator */
	function ASCIIOP_RETURN(x) {
		return RETURN_VAL(yytext);
	}

	/* a multichar operator, with a name */
	function NAMEDOP_RETURN(x) {
		return RETURN_VAL(x);
	}

	/* some sort of constant */
	function NUMERICAL_RETURN(x) {
		return RETURN_VAL(x);
	}

	/* a string literal */
	function LITERAL_RETURN(x) {
		return RETURN_VAL(x);
	}

	/* C Style comment  */
	function C_COMMENT_RETURN(x) {
		return RETURN_VAL(x);
	}
%}

%option yylineno

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
%x CPP_COMMENT
%x C_COMMENT

%%

"/*" {this.begin("C_COMMENT");}

"//" {this.begin("CPP_COMMENT");}

{horizontal_white}+ {WHITE_RETURN(' ');}

({v_tab}|{c_return}|{form_feed})+ {WHITE_RETURN(' ');}

({horizontal_white}|{v_tab}|{c_return}|{form_feed})*"\n" {WHITE_RETURN('\n');}

auto        { return(PA_KEYWORD_RETURN(parser.symbols_.AUTO));}
"break"			{ return(PA_KEYWORD_RETURN(parser.symbols_.BREAK));}
"case"			{ return(PA_KEYWORD_RETURN(parser.symbols_.CASE));}
"char"			{ return(PA_KEYWORD_RETURN(parser.symbols_.CHAR));}
"const"			{ return(PA_KEYWORD_RETURN(parser.symbols_.CONST));}
"continue"	{ return(PA_KEYWORD_RETURN(parser.symbols_.CONTINUE));}
"default"   { return(PA_KEYWORD_RETURN(parser.symbols_.DEFAULT));}
"define"    { return(PPOP_RETURN(parser.symbols_.PP_DEFINE));}
"defined"		{ return(PPOP_RETURN(parser.symbols_.PP_DEFINED));}
"do"			  { return(PA_KEYWORD_RETURN(parser.symbols_.DO));}
"double"    { return(PA_KEYWORD_RETURN(parser.symbols_.DOUBLE));}
"elif"		  { return(PPOP_RETURN(parser.symbols_.PP_ELIF));}
"else"      { return(PPPA_KEYWORD_RETURN(parser.symbols_.ELSE));}
"endif"     { return(PPOP_RETURN(parser.symbols_.PP_ENDIF));}
"error"			{ return(PP_KEYWORD_RETURN(parser.symbols_.ERROR));}
"enum"			{ return(PA_KEYWORD_RETURN(parser.symbols_.ENUM));}
"extern"		{ return(PA_KEYWORD_RETURN(parser.symbols_.EXTERN));}
"float"			{ return(PA_KEYWORD_RETURN(parser.symbols_.FLOAT));}
"for"			  { return(PA_KEYWORD_RETURN(parser.symbols_.FOR));}
"goto"			{ return(PA_KEYWORD_RETURN(parser.symbols_.GOTO));}
"if"        { return(PPPA_KEYWORD_RETURN(parser.symbols_.IF));}
"ifdef"     { return(PPOP_RETURN(parser.symbols_.PP_IFDEF));}
"ifndef"    { return(PPOP_RETURN(parser.symbols_.PP_IFNDEF));}
"include"		{ return(PPOP_RETURN(parser.symbols_.PP_INCLUDE));}
"int"				{ return(PA_KEYWORD_RETURN(parser.symbols_.INT));}
"line"			{ return(PPOP_RETURN(parser.symbols_.PP_LINE));}
"long"      { return(PA_KEYWORD_RETURN(parser.symbols_.LONG));}
"bool"			{ return(PA_KEYWORD_RETURN(parser.symbols_.BOOL));}
"pragma"    { return(PPOP_RETURN(parser.symbols_.PP_PRAGMA));}
"register"	{ return(PA_KEYWORD_RETURN(parser.symbols_.REGISTER));}
"return"		{ return(PA_KEYWORD_RETURN(parser.symbols_.RETURN));}
"short"			{ return(PA_KEYWORD_RETURN(parser.symbols_.SHORT));}
"signed"		{ return(PA_KEYWORD_RETURN(parser.symbols_.SIGNED));}
"sizeof"		{ return(PA_KEYWORD_RETURN(parser.symbols_.SIZEOF));}
"static"		{ return(PA_KEYWORD_RETURN(parser.symbols_.STATIC));}
"struct"		{ return(PA_KEYWORD_RETURN(parser.symbols_.STRUCT));}
"switch"		{ return(PA_KEYWORD_RETURN(parser.symbols_.SWITCH));}
"typedef"   { return(PA_KEYWORD_RETURN(parser.symbols_.TYPEDEF));}
"undef"		  { return(PPOP_RETURN(parser.symbols_.PP_UNDEF));}
"union" 		{ return(PA_KEYWORD_RETURN(parser.symbols_.UNION));}
"unsigned"	{ return(PA_KEYWORD_RETURN(parser.symbols_.UNSIGNED));}
"void"			{ return(PA_KEYWORD_RETURN(parser.symbols_.VOID));}
"volatile"	{ return(PA_KEYWORD_RETURN(parser.symbols_.VOLATILE));}
"while"     { return(PA_KEYWORD_RETURN(parser.symbols_.WHILE));}
"time_t"    {PA_KEYWORD_RETURN("time_t");}
"size_t"    {PA_KEYWORD_RETURN("size_t");}

"class"      { return(CPP_KEYWORD_RETURN(parser.symbols_.CLASS));}
"namespace"  { return(CPP_KEYWORD_RETURN(parser.symbols_.NAMESPACE));}
"delete"     { return(CPP_KEYWORD_RETURN(parser.symbols_.DELETE));}
"friend"     { return(CPP_KEYWORD_RETURN(parser.symbols_.FRIEND));}
"inline"     { return(CPP_KEYWORD_RETURN(parser.symbols_.INLINE));}
"new"        { return(CPP_KEYWORD_RETURN(parser.symbols_.NEW));}
"operator"   { return(CPP_KEYWORD_RETURN(parser.symbols_.OPERATOR));}
"overload"   { return(CPP_KEYWORD_RETURN(parser.symbols_.OVERLOAD));}
"protected"  { return(CPP_KEYWORD_RETURN(parser.symbols_.PROTECTED));}
"private"    { return(CPP_KEYWORD_RETURN(parser.symbols_.PRIVATE));}
"public"     { return(CPP_KEYWORD_RETURN(parser.symbols_.PUBLIC));}
"this"     	 { return(CPP_KEYWORD_RETURN(parser.symbols_.THIS));}
"virtual"    { return(CPP_KEYWORD_RETURN(parser.symbols_.VIRTUAL));}
"template"   { return(CPP_KEYWORD_RETURN(parser.symbols_.TEMPLATE));}
"typename"   { return(CPP_KEYWORD_RETURN(parser.symbols_.TYPENAME));}
"dynamic_cast" {return(CPP_KEYWORD_RETURN(parser.symbols_.DYNAMIC_CAST));}
"static_cast"  {return(CPP_KEYWORD_RETURN(parser.symbols_.STATIC_CAST));}
"const_cast"   {return(CPP_KEYWORD_RETURN(parser.symbols_.CONST_CAST));}
"reinterpret_cast"     {return(CPP_KEYWORD_RETURN(parser.symbols_.REINTERPRET_CAST));}
"using"      {return(CPP_KEYWORD_RETURN(parser.symbols_.USING));}
"throw"      {return(CPP_KEYWORD_RETURN(parser.symbols_.THROW));}
"catch"      {return(CPP_KEYWORD_RETURN(parser.symbols_.CATCH));}
"__declspec" {return(CPP_KEYWORD_RETURN("__declspec"));}
"dllimport"  {return(CPP_KEYWORD_RETURN("dllimport"));}
"dllexport"  {return(CPP_KEYWORD_RETURN("dllexport"));}

{identifier} { return(IDENTIFIER_RETURN());}

{decimal_constant}  {return parser.symbols_.INTEGERconstant;}
{octal_constant}    {return parser.symbols_.OCTALconstant;}
{hex_constant}      {return parser.symbols_.HEXconstant;}
{floating_constant} {return parser.symbols_.FLOATINGconstant;}

"L"?[']{c_char}+[']     {return parser.symbols_.CHARACTERconstant;}


"L"?["]{s_char}*["]     {return parser.symbols_.STRINGliteral;}

"..."			{ return(NAMEDOP_RETURN(parser.symbols_.ELLIPSIS));}
">>="			{ return(NAMEDOP_RETURN(parser.symbols_.RSassign));}
"<<="			{ return(NAMEDOP_RETURN(parser.symbols_.LSassign));}
"+="			{ return(NAMEDOP_RETURN(parser.symbols_.PLUSassign));}
"-="			{ return(NAMEDOP_RETURN(parser.symbols_.MINUSassign));}
"*="			{ return(NAMEDOP_RETURN(parser.symbols_.MULTassign));}
"/="			{ return(NAMEDOP_RETURN(parser.symbols_.DIVassign));}
"%="			{ return(NAMEDOP_RETURN(parser.symbols_.MODassign));}
"&="			{ return(NAMEDOP_RETURN(parser.symbols_.ANDassign));}
"^="			{ return(NAMEDOP_RETURN(parser.symbols_.ERassign));}
"|="			{ return(NAMEDOP_RETURN(parser.symbols_.ORassign));}
">>"			{ return(NAMEDOP_RETURN(parser.symbols_.RS));}
"<<"			{ return(NAMEDOP_RETURN(parser.symbols_.LS));}
"++"			{ return(NAMEDOP_RETURN(parser.symbols_.ICR));}
"--"			{ return(NAMEDOP_RETURN(parser.symbols_.DECR));}
"->"      { return(NAMEDOP_RETURN(parser.symbols_.ARROW));}
"->*"			{ return(NAMEDOP_RETURN(parser.symbols_.ARROWstar));}
"&&"			{ return(NAMEDOP_RETURN(parser.symbols_.ANDAND));}
"||"			{ return(NAMEDOP_RETURN(parser.symbols_.OROR));}
"<="			{ return(NAMEDOP_RETURN(parser.symbols_.LE));}
">="			{ return(NAMEDOP_RETURN(parser.symbols_.GE));}
"=="			{ return(NAMEDOP_RETURN(parser.symbols_.EQ));}
"!="			{ return(NAMEDOP_RETURN(parser.symbols_.NE));}
".*"			{ return(NAMEDOP_RETURN(parser.symbols_.DOTstar));}
"::"			{ return(NAMEDOP_RETURN(parser.symbols_.CLCL));}
";"			{ return(ASCIIOP_RETURN(';'));}
"{"			%{ return(ASCIIOP_RETURN("{"));%}
"}"			%{ return(ASCIIOP_RETURN("}"));%}
","			{ return(PPOP_RETURN(','));}
":"			{ return(ASCIIOP_RETURN(':'));}
"="			{ return(ASCIIOP_RETURN('='));}
"("			{ return(PPOP_RETURN('('));}
")"			{ return(PPOP_RETURN(')'));}
"["			{ return(ASCIIOP_RETURN('['));}
"]"			{ return(ASCIIOP_RETURN(']'));}
"."			{ return(ASCIIOP_RETURN('.'));}
"&"			{ return(ASCIIOP_RETURN('&'));}
"!"			{ return(ASCIIOP_RETURN('!'));}
"~"			{ return(ASCIIOP_RETURN('~'));}
"-"			{ return(ASCIIOP_RETURN('-'));}
"+"			{ return(ASCIIOP_RETURN('+'));}
"*"			{ return(ASCIIOP_RETURN('*'));}
"/"			{ return(ASCIIOP_RETURN('/'));}
"%"			{ return(ASCIIOP_RETURN('%'));}
"<"			{ return(ASCIIOP_RETURN('<'));}
">"			{ return(ASCIIOP_RETURN('>'));}
"^"			{ return(ASCIIOP_RETURN("^"));}
"|"			{ return(ASCIIOP_RETURN('|'));}
"?"			{ return(ASCIIOP_RETURN('?'));}
^({horizontal_white})*"#"		%{ this.begin("PREPR"); return PPOP_RETURN(parser.symbols_.PP_SHARP); %}

<PREPR>\n		%{ this.begin("INITIAL"); return PPOP_RETURN(parser.symbols_.PP_NEWLINE); %}
<PREPR>\\		{ this.begin("WRAP_PREP");}
<PREPR>({horizontal_white})*"("		{ return PPOP_RETURN(parser.symbols_.PP_LPAREN);}
<PREPR>">"	{ return PPOP_RETURN(parser.symbols_.PP_G);}
<PREPR>["]	{ return PPOP_RETURN(parser.symbols_.PP_QUOTE);}
<PREPR>"include" { return(PPOP_RETURN(parser.symbols_.PP_INCLUDE));}
<PREPR>.  	{ return PPOP_RETURN(parser.symbols_.PP_ANYCHAR);}
<WRAP_PREP>\n	{ this.begin("PREPR");}
<WRAP_PREP>{identifier} {return IDENTIFIER_RETURN()}
<PREPR>{identifier} {return IDENTIFIER_RETURN()}
<CPP_COMMENT>\n 	{this.begin("INITIAL");}
<CPP_COMMENT>.	 	{return("");}
<C_COMMENT>"*/" 	{this.begin("INITIAL");}
<C_COMMENT>.	  	{return("");}
%%