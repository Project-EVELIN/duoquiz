document.body.onload = function(){
	var input_decl = "int i = 4;";
	var input_main = "#include <stdio.h>\
	int main(void){}";
	var input_prep = "#include <stdio.h>\n#define MAX 32\n";
	var input = input_prep;

	// initialize lexer
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
		console.log(rule);
		console.log(cpp.terminals_[rule]);
		console.log(lexer.showPosition());
	}while(rule != 1);

	// try parsing
	var parse_result = cpp.parse(input);
	console.log("\n\nParsing result: ", parse_result);
};