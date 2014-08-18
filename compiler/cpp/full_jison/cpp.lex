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
			RETURN_VAL(parser.symbols_.LE_TYPEDEFname);
		} else if (isaMACRO(yytext)) {
			RETURN_VAL(parser.symbols_.LE_MACRO);
		} else if (isignoredToken(yytext)) {
			// do nothing
		} else {
			RETURN_VAL(parser.symbols_.LE_IDENTIFIER);
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

	/* both PreProcessor and PArser keyword */
	function PPPA_KEYWORD_RETURN(x) {
		return RETURN_VAL(x);
	}

	function PP_KEYWORD_RETURN(x) {
		IDENTIFIER_RETURN();
	}

	/* PreProcess and Parser operator */
	function PPOP_RETURN(x) {
		return RETURN_VAL(yytext);
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

auto      { return(PA_KEYWORD_RETURN(parser.symbols_.LE_AUTO));}
"break"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_BREAK));}
"case"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_CASE));}
"char"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_CHAR));}
"const"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_CONST));}
"continue"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_CONTINUE));}
"default"   { return(PA_KEYWORD_RETURN(parser.symbols_.LE_DEFAULT));}
"define"   { return("define");}
"defined"		{ return("defined");}
"do"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_DO));}
"double"    { return(PA_KEYWORD_RETURN(parser.symbols_.LE_DOUBLE));}
"elif"		{ return("elif");}
"else"      { return(PPPA_KEYWORD_RETURN(parser.symbols_.LE_ELSE));}
"endif"     { return("endif");}
"error"			{ return(PP_KEYWORD_RETURN(parser.symbols_.LE_ERROR));}
"enum"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_ENUM));}
"extern"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_EXTERN));}
"float"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_FLOAT));}
"for"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_FOR));}
"goto"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_GOTO));}
"if"      { return(PPPA_KEYWORD_RETURN(parser.symbols_.LE_IF));}
"ifdef"      { return("ifdef");}
"ifndef"      { return("ifndef");}
"include"			{ return(PP_KEYWORD_RETURN(parser.symbols_.LE_INCLUDE));}
"int"				{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_INT));}
"line"			{ return("line");}
"long"      { return(PA_KEYWORD_RETURN(parser.symbols_.LE_LONG));}
"bool"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_BOOL));}
"pragma"    { return("pragma");}
"register"	{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_REGISTER));}
"return"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_RETURN));}
"short"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_SHORT));}
"signed"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_SIGNED));}
"sizeof"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_SIZEOF));}
"static"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_STATIC));}
"struct"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_STRUCT));}
"switch"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_SWITCH));}
"typedef"   { return(PA_KEYWORD_RETURN(parser.symbols_.LE_TYPEDEF));}
"undef"		  { return("undef");}
"union" 		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_UNION));}
"unsigned"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_UNSIGNED));}
"void"			{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_VOID));}
"volatile"		{ return(PA_KEYWORD_RETURN(parser.symbols_.LE_VOLATILE));}
"while"     { return(PA_KEYWORD_RETURN(parser.symbols_.LE_WHILE));}
"time_t"    {PA_KEYWORD_RETURN("time_t");}
"size_t"    {PA_KEYWORD_RETURN("size_t");}

"class"      { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_CLASS));}
"namespace"  { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_NAMESPACE));}
"delete"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_DELETE));}
"friend"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_FRIEND));}
"inline"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_INLINE));}
"new"        { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_NEW));}
"operator"   { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_OPERATOR));}
"overload"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_OVERLOAD));}
"protected"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_PROTECTED));}
"private"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_PRIVATE));}
"public"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_PUBLIC));}
"this"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_THIS));}
"virtual"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_VIRTUAL));}
"template"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_TEMPLATE));}
"typename"     { return(CPP_KEYWORD_RETURN(parser.symbols_.LE_TYPENAME));}
"dynamic_cast"     {return(CPP_KEYWORD_RETURN(parser.symbols_.LE_DYNAMIC_CAST));}
"static_cast"     {return(CPP_KEYWORD_RETURN(parser.symbols_.LE_STATIC_CAST));}
"const_cast"     {return(CPP_KEYWORD_RETURN(parser.symbols_.LE_CONST_CAST));}
"reinterpret_cast"     {return(CPP_KEYWORD_RETURN(parser.symbols_.LE_REINTERPRET_CAST));}
"using"     {return(CPP_KEYWORD_RETURN(parser.symbols_.LE_USING));}
"throw"     {return(CPP_KEYWORD_RETURN(parser.symbols_.LE_THROW));}
"catch"     {return(CPP_KEYWORD_RETURN(parser.symbols_.LE_CATCH));}
"__declspec"     {return(CPP_KEYWORD_RETURN("__declspec"));}
"dllimport"     {return(CPP_KEYWORD_RETURN("dllimport"));}
"dllexport"     {return(CPP_KEYWORD_RETURN("dllexport"));}

{identifier} { return(IDENTIFIER_RETURN());}

{decimal_constant}  {return parser.symbols_.LE_INTEGERconstant;}
{octal_constant}    {return parser.symbols_.LE_OCTALconstant;}
{hex_constant}      {return parser.symbols_.LE_HEXconstant;}
{floating_constant} {return parser.symbols_.LE_FLOATINGconstant;}

"L"?[']{c_char}+[']     {return parser.symbols_.LE_CHARACTERconstant;}


"L"?["]{s_char}*["]     {return parser.symbols_.LE_STRINGliteral;}

"..."			{ return(NAMEDOP_RETURN(parser.symbols_.LE_ELLIPSIS));}
">>="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_RSassign));}
"<<="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_LSassign));}
"+="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_PLUSassign));}
"-="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_MINUSassign));}
"*="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_MULTassign));}
"/="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_DIVassign));}
"%="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_MODassign));}
"&="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_ANDassign));}
"^="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_ERassign));}
"|="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_ORassign));}
">>"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_RS));}
"<<"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_LS));}
"++"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_ICR));}
"--"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_DECR));}
"->"      { return(NAMEDOP_RETURN(parser.symbols_.LE_ARROW));}
"->*"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_ARROWstar));}
"&&"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_ANDAND));}
"||"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_OROR));}
"<="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_LE));}
">="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_GE));}
"=="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_EQ));}
"!="			{ return(NAMEDOP_RETURN(parser.symbols_.LE_NE));}
".*"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_DOTstar));}
"::"			{ return(NAMEDOP_RETURN(parser.symbols_.LE_CLCL));}
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
^({horizontal_white})*"#"		{ this.begin("PREPR");}

<PREPR>\n		{ this.begin("INITIAL");}
<PREPR>\\		{ this.begin("WRAP_PREP");}
<PREPR>define	{return("define");}
<WRAP_PREP>\n	{ this.begin("PREPR");}
<WRAP_PREP>{identifier} {}
<PREPR>{identifier} {}
<WRAP_PREP>.	{}
<PREPR>.			{}
<CPP_COMMENT>\n 	{this.begin("INITIAL");}
<CPP_COMMENT>.	 	{}
<C_COMMENT>"*/" 	{this.begin("INITIAL");}
<C_COMMENT>.	  	{}
%%