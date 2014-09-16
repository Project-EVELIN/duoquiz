/**
 * Tokens for ANSI C
 *
 * Copyright (c) 2013 Derrell Lipman
 * modified by Michael Ebert
 *
 * License:
 *   GPL Version 2: http://www.gnu.org/licenses/gpl-2.0.html
 */

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

%%
"/*" {this.begin("C_COMMENT");}
"//" {this.begin("CPP_COMMENT");}

{horizontal_white}+ {}
({v_tab}|{c_return}|{form_feed})+ {}
({horizontal_white}|{v_tab}|{c_return}|{form_feed})*"\n" { }
{NL}        { }

"auto"			{ return(parser.symbols_.AUTO); }
"break"			{ return(parser.symbols_.BREAK); }
"case"			{ return(parser.symbols_.CASE); }
"char"			{ return(parser.symbols_.CHAR); }
"const"			{ return(parser.symbols_.CONST); }
"continue"	{ return(parser.symbols_.CONTINUE); }
"default"		{ return(parser.symbols_.DEFAULT); }
"do"			  { return(parser.symbols_.DO); }
"double"		{ return(parser.symbols_.DOUBLE); }
"else"			{ return(parser.symbols_.ELSE); }
"enum"			{ return(parser.symbols_.ENUM); }
"extern"		{ return(parser.symbols_.EXTERN); }
"float"			{ return(parser.symbols_.FLOAT); }
"for"			  { return(parser.symbols_.FOR); }
"goto"			{ return(parser.symbols_.GOTO); }
"if"			  { return(parser.symbols_.IF); }
"int"			  { return(parser.symbols_.INT); }
"long"			{ return(parser.symbols_.LONG); }
"register"	{ return(parser.symbols_.REGISTER); }
"return"		{ return(parser.symbols_.RETURN); }
"short"			{ return(parser.symbols_.SHORT); }
"signed"		{ return(parser.symbols_.SIGNED); }
"sizeof"		{ return(parser.symbols_.SIZEOF); }
"static"		{ return(parser.symbols_.STATIC); }
"struct"		{
              parser.yy.bSawStruct = true;
              return(parser.symbols_.STRUCT);
            }
"switch"		{ return(parser.symbols_.SWITCH); }
"typedef"		{ return(parser.symbols_.TYPEDEF); }
"union" 		{
              parser.yy.bSawStruct = true;
              return(parser.symbols_.UNION);
            }
"unsigned"	{ return(parser.symbols_.UNSIGNED); }
"void"			{ return(parser.symbols_.VOID); }
"volatile"	{ return(parser.symbols_.VOLATILE); }
"restrict"	{ return(parser.symbols_.RESTRICT); }
"while"			{ return(parser.symbols_.WHILE); }
"_Alignof"	{ return(parser.symbols_._ALIGNOF); }
"_Alignas"	{ return(parser.symbols_._ALIGNAS); }
"_Noreturn"	{ return(parser.symbols_._NORETURN); }
"inline"	{ return(parser.symbols_.INLINE); }

{identifier}	{
                var isType;

                isType = parser.yy.isType(yytext);
                return (isType &&
                        ! parser.yy.bSawStruct
                        ? parser.symbols_.TYPE_NAME
                        : parser.symbols_.IDENTIFIER);
              }

{floating_constant}		        { return(parser.symbols_.CONSTANT_FLOAT); }
{hex_constant}			          { return(parser.symbols_.CONSTANT_HEX); }
{octal_constant}		          { return(parser.symbols_.CONSTANT_OCTAL); }
{decimal_constant}		        { return(parser.symbols_.CONSTANT_DECIMAL); }
{CP}?{SQ}(\\.|[^\\{SQ}])+{SQ}	{ return(parser.symbols_.CONSTANT_CHAR); }
{SP}?\"(\\.|[^\\"])*\"	     	{ return(parser.symbols_.STRING_LITERAL); }

"..."			{ return(parser.symbols_.ELLIPSIS); }
">>="			{ return(parser.symbols_.RIGHT_ASSIGN); }
"<<="			{ return(parser.symbols_.LEFT_ASSIGN); }
"+="			{ return(parser.symbols_.ADD_ASSIGN); }
"-="			{ return(parser.symbols_.SUB_ASSIGN); }
"*="			{ return(parser.symbols_.MUL_ASSIGN); }
"/="			{ return(parser.symbols_.DIV_ASSIGN); }
"%="			{ return(parser.symbols_.MOD_ASSIGN); }
"&="			{ return(parser.symbols_.AND_ASSIGN); }
"^="			{ return(parser.symbols_.XOR_ASSIGN); }
"|="			{ return(parser.symbols_.OR_ASSIGN); }
">>"			{ return(parser.symbols_.RIGHT_OP); }
"<<"			{ return(parser.symbols_.LEFT_OP); }
"++"			{ return(parser.symbols_.INC_OP); }
"--"			{ return(parser.symbols_.DEC_OP); }
"->"			{ return(parser.symbols_.PTR_OP); }
"&&"			{ return(parser.symbols_.AND_OP); }
"||"			{ return(parser.symbols_.OR_OP); }
"<="			{ return(parser.symbols_.LE_OP); }
">="			{ return(parser.symbols_.GE_OP); }
"=="			{ return(parser.symbols_.EQ_OP); }
"!="			{ return(parser.symbols_.NE_OP); }
";"			  { return(';'); }
("{")   	{ return(parser.symbols_.LBRACE); }
("}")     { return(parser.symbols_.RBRACE); }
","			  { return(','); }
":"			  { return(':'); }
"="			  { return('='); }
"("			  { return('('); }
")"			  { return(')'); }
("[")   	{ return('['); }
("]")     { return(']'); }
"."			  { return('.'); }
"&"			  { return('&'); }
"!"			  { return('!'); }
"~"			  { return('~'); }
"-"			  { return('-'); }
"+"			  { return('+'); }
"*"			  { return('*'); }
"/"			  { return('/'); }
"%"			  { return('%'); }
"<"			  { return('<'); }
">"			  { return('>'); }
"^"			  { return('^'); }
"|"			  { return('|'); }
"?"			  { return('?'); }
"#"			  { this.begin("PREPR"); return('#');}

/* lex.digraph */
/* is this realy necessary? */
"<%"						{ return(parser.symbols_.LBRACE); }
"%>"						{ return(parser.symbols_.RBRACE); }
"<:"						{ return('['); }
":>"						{ return(']'); }
"%:"						{ this.begin("PREPR"); return('#');}
"and"						{ return(parser.symbols_.AND_OP); }
"bitor"					{ return('|'); }
"or"						{ return(parser.symbols_.OR_OP); }
"xor"						{ return('^'); }
"compl"					{ return('~'); }
"bitand"				{ return('&'); }
"and_eq"				{ return(parser.symbols_.AND_ASSIGN); }
"or_eq"					{ return(parser.symbols_.OR_ASSIGN); }
"xor_eq"				{ return(parser.symbols_.XOR_ASSIGN); }
"not"						{ return('!'); }
"not_eq"				{ return(parser.symbols_.NE_OP); }

/* lex.preprocessor */
<PREPR>{NL}												{this.begin("INITIAL"); return "PP_NEWLINE";}
<PREPR>\\													{this.begin("WRAP_PREP");}
<PREPR>({horizontal_white})				{ }
<PREPR>({horizontal_white})*"("		{return "PP_LPAREN";}

<PREPR>["]												{return "PP_QUOTE";}
<PREPR>"include"									{return "PP_INCLUDE";}
<PREPR>"undef"										{return "PP_UNDEF";}
<PREPR>"line"											{return "PP_LINE";}
<PREPR>"pragma"										{return "PP_PRAGMA";}
<PREPR>"define"  									{return "PP_DEFINE";}
<PREPR>"defined"									{return "PP_DEFINED";}
<PREPR>"ifdef"										{return "PP_IFDEF";}
<PREPR>"ifndef"										{return "PP_IFNDEF";}
<PREPR>"if"												{return "PP_IF";}
<PREPR>"else"											{return "PP_ELSE";}
<PREPR>"endif"										{return "PP_ENDIF";}
<PREPR>"elif"											{return "PP_ELIF";}
<PREPR>"error"										{return "PP_ERROR";}
<PREPR>{identifier}								{return "IDENTIFIER";}
<PREPR>{decimal_constant}					{return "DECIMAL_LITERAL";}
<PREPR>{octal_constant}						{return "OCTAL_LITERAL";}
<PREPR>{hex_constant}							{return "HEXADECIMAL_LITERAL";}
<PREPR>{floating_constant}				{return "FLOATING_LITERAL";}
<PREPR>"L"?[']{c_char}+[']				{return "CHARACTER_LITERAL";}
<PREPR>"L"?["]{s_char}*["]				{return "STRING_LITERAL";}
<PREPR>["][^\n]*["]								{return "PP_QCHARSEQUENCE";}
<PREPR>"<"[^\n]*">"								{return "PP_HCHARSEQUENCE";}
<PREPR>.													{return "PP_ANYCHAR";}

<WRAP_PREP>\n											{this.begin("PREPR");}
<WRAP_PREP>{identifier}						{return "IDENTIFIER";}

<CPP_COMMENT>\n 									{this.begin("INITIAL");}
<CPP_COMMENT>.*									{return(parser.symbols_.CPP_COMMENT);}
<C_COMMENT>"*/"										{this.begin("INITIAL");}
<C_COMMENT>.*										{return(parser.symbols_.C_COMMENT);}

%%
