document.body.onload = function(){
	var DEBUG_LEXING = false;
	var input_decl = "int i = 4;";
	var input_prepmain = "#include <stdio.h>\nint main(void){}";
	var input_main = "int main(void){}";
	var input_prep = "#include <stdio.h>\n#define MAX 32\n";
	var input = input_prepmain;

	// initialize lexer
	if(DEBUG_LEXING) {
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
		console.log("\n\nParsing result: ", parse_result);
	} catch(e) {
		console.log(e);
	}
};