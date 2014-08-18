document.body.onload = function(){
var lexer = cpp.lexer.setInput("int i = 4;");
    lexer.yy = cpp.yy;
    lexer.yy.lexer = lexer;
    lexer.yy.parser = cpp;
    if (typeof lexer.yylloc == 'undefined')
        lexer.yylloc = {};
var rule;
  do {
  	rule = lexer.lex();
  	console.log(rule);
  	console.log(cpp.terminals_[rule]);
  	console.log(lexer.showPosition());
  }while(rule != 1);

};