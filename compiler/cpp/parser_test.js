document.body.onload = function(){
	var DEBUG_CPP = false;
	var DEBUG_EBNF = true;
	var input_decl = "char c = u's';";
	var input_prepmain = "#include <stdio.h>\nint main(void){}";
	var input_main = "int main(void){}";
	var input_prep = "#include <stdio.h>\n#define MAX 32\n";
	var input = input_decl;

	// initialize lexer
	if(DEBUG_CPP) {
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
		}while(rule != 1);
	}

	// try parsing
	try {
		var parse_result = cpp.parse(input);
		console.log("\n\nParsing cpp.js result: ", parse_result);
	} catch(e) {
		console.log(e);
	}

	console.log("\n**** ENBF TEST ***\n");

	/**** ENBF TEST ***/
	// initialize lexer
	if(DEBUG_EBNF) {
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
		}while(rule != 1);
	}

	// try parsing
	try {
		var parse_result = ebnf.parse(input);
		console.log("\n\nParsing ebnf.js result: ", parse_result);
	} catch(e) {
		console.log(e);
	}
};