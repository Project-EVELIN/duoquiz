document.body.onload = function() {
	var DEBUG_CPP = true;
	var DEBUG_EBNF = false;
	var EBNF = false;

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

	var input_decl = "static char c = 's';";
	var input_prepmain = "#include <stdio.h>\nint main(){}";
	var input_main = "int main(){return 0;}";
	var input_prep = "#include <stdio.h>\n#define MAX 32\n";
	var input_empty_declaration = ";";
	var input_extern_linkage_specification = "extern \"string-literal\" {}";
	var input = input_definitions;

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
				arr.push([rule, lexer.yytext]);
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
			console.log(lexToFlatArray(ebnf, input[i]));
		}
	} else {
		console.log(lexToFlatArray(ebnf, input));
	}

	if (!Array.isArray(input)) {
		// initialize lexer
		if (DEBUG_CPP) {
			var lexer = cpp.lexer.setInput(input);
			lexer.yy = cpp.yy;
			lexer.yy.lexer = lexer;
			lexer.yy.parser = cpp;
			if (typeof lexer.yylloc == 'undefined')
				lexer.yylloc = {};

			// tokenize and show rules and positions
			var rule;
			do {
				rule = lexer.lex();
				console.log(rule, cpp.terminals_[rule], "\n" + lexer.showPosition(), "\n");
			} while (rule != 1);
		}

		// try parsing
		try {
			var parse_result = cpp.parse(input);
			console.log("\n\nParsing cpp.js result: ", parse_result);
		} catch (e) {
			console.log(e);
		}
	} else {
		var i;
		for (i = 0; i < input.length; i++) {
			try {
				var parse_result = cpp.parse(input[i]);
				console.log("\n\nParsing cpp.js result: ", parse_result, "input: " + input[i]);
			} catch (e) {
				console.log(e);
			}
		}
	}

	if (EBNF) {
		console.log("\n**** ENBF TEST ***\n");

		/**** ENBF TEST ***/
		// initialize lexer
		// try parsing
		if (Array.isArray(input)) {
			var i;
			for (i = 0; i < input.length; i++) {
				try {
					var parse_result = ebnf.parse(input[i]);
					console.log("\n\nParsing ebnf.js result: ", parse_result);
				} catch (e) {
					console.log(e);
				}
			}
		} else {
			if (DEBUG_EBNF) {
				var lexer = ebnf.lexer.setInput(input);
				lexer.yy = ebnf.yy;
				lexer.yy.lexer = lexer;
				lexer.yy.parser = ebnf;
				if (typeof lexer.yylloc == 'undefined')
					lexer.yylloc = {};

				// tokenize and show rules and positions
				var rule;
				do {
					rule = lexer.lex();
					console.log(rule, ebnf.terminals_[rule], "\n" + lexer.showPosition(), "\n");
				} while (rule != 1);
			}

			try {
				var parse_result = ebnf.parse(input);
				console.log("\n\nParsing ebnf.js result: ", parse_result);
			} catch (e) {
				console.log(e);
			}
		}
	}
};