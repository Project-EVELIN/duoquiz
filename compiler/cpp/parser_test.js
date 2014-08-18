document.body.onload = function(){
	var input_decl = "int i = 4;";
	var input_main = "#include <stdio.h>\n int main(void){}";
	var input = input_main;

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
	console.log(parse_result);
};