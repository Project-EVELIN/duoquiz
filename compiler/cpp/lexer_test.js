document.body.onload = function() {
	'use strict';

	var input_definitions = [
		"int a;",
		"extern const int c = 1;",
		"int f(int x) { return x+a; }",
		"struct S { int a; int b; }; ",
		"struct X {int x;static int y;X(): x(0) { }\};",
		"int X::y = 1;",
		"enum { up, down };",
		"namespace N { int d; }",
		"namespace N1 = N;",
		"X anX; "
	];

	var input_declarations = [
		"extern int a;",
		"extern const int c;",
		"int f(int);",
		"struct S;",
		"typedef int Int;",
		"extern X anotherX;",
		"typedef int Int;",
		"using N::d;",
	];

	var cin_variations = [
		"cin = cin + 1;",
		"cin >> b;",
		"std::cin >> b;",
	];

	var input_decl = "static char c = 's';";
	var input_prepmain = "#include <stdio.h>\nint main(){}";
	var input_main = "int main(){return 0;}";
	var input_prep = "#include <stdio.h>\n#define MAX 32\n";
	var input_empty_declaration = ";";
	var input_extern_linkage_specification = "extern \"string-literal\" {}";
	var input = cin_variations;

	/* 	Tokenizes the given input and pushes each token in an array
	 * 	@argument grammar:	jison generated javascript, must include lexer
	 *		@argument input: 		string
	 */
	function lexToFlatArray(grammar, input) {
		var arr = [];

		var lexer = grammar.lexer.setInput(input);
		lexer.yy = grammar.yy;
		lexer.yy.lexer = lexer;
		lexer.yy.parser = grammar;
		if (typeof lexer.yylloc == 'undefined')
			lexer.yylloc = {};

		// tokenize and show rules and positions
		var rule;
		do {
			rule = lexer.lex();
			//console.log(rule, grammar.terminals_[rule], "\n" + lexer.showPosition(), "\n");
			if (grammar.terminals_[rule] !== undefined) {
				arr.push(grammar.terminals_[rule]);
			} else if (rule === 1) {
				// do nothing, EOF
			} else if (rule === "IDENTIFIER" || rule === "DECIMAL_LITERAL" || rule === "OCTAL_LITERAL" || rule === "HEXADECIMAL_LITERAL" || rule === "FLOATING_LITERAL" || rule === "CHARACTER_LITERAL" || rule === "STRING_LITERAL") {
				arr.push({
					'rule': rule,
					'value': lexer.yytext
				});
			} else {
				arr.push(rule);
			}
		} while (rule != lexer.EOF);

		return arr;
	}

	// this is only lexing and only with enhanced ebnf lexer
	if (Array.isArray(input)) {
		var i;
		for (i = 0; i < input.length; i++) {
			console.log(lexToFlatArray(cpp0x, input[i]));
		}
	} else {
		console.log(lexToFlatArray(cpp0x, input));
	}
};