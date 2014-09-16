document.body.onload = function () {
  'use strict';

  function flatten(arr) {
    return arr.reduce(function (prev, cur) {
      var more = [].concat(cur)
        .some(Array.isArray);
      return prev.concat(more ? flatten(cur) : cur);
    }, []);
  }

  var DEBUG_C = true;

  /* all working */
  var input_definitions = [
  "int a;",
  "extern const int c = 1;",
  "int f(int x) { return x+a; }",
  "struct S { int a; int b; }; ",
  "struct X {int x; const int y;};",
  "enum { up, down };",
  "typedef short int small;",
  'char mesg[5] = "help!";',
 ];

  /* access to struct with pointer-> and simple statement not working */
  var structs = [
  "struct s { int i; const int ci; };",
  "struct datum\n { int tag;\char monat[10];\nint jahr; };",
  "struct datum\n { int tag;\char monat[10];\nint jahr; }geburtstag, urlaub;",
  "struct s s;",
  "const struct s cs;",
  "volatile struct s vs;",
  "struct s t1 = { 0 };",
  "int main(void){\nk = t1->n;\n}",
  "int b = 4;\n",
 ];

  /* extern typedef definition not working */
  var input_declarations = [
  "extern int a;",
  "extern const int c;",
  "int f(int);",
  "struct S;",
  "typedef int Int;",
 ];

  var typedef =
    "typedef struct tnode TNODE;\nstruct tnode {\nint count;\nTNODE *left, *right;\n};\nTNODE s, *sp;";

  var input_for = 'int i;\nfor(i=0; i < 10;)\n{\nprintf("%d", i);\n}';

  var input_decl = "static char c = 's';";
  var input_prepmain = "#include <stdio.h>\nint main(){}";
  var input_main = "int main(void){return 0;}";
  var input_prep = "#include <stdio.h>\n#define MAX 32\n";
  var input_empty_declaration = ";";
  var input = structs;

  if (DEBUG_C) {
    var parse_result;
    if (!Array.isArray(input)) {
      // initialize lexer
      var lexer = ansic.lexer.setInput(input);
      lexer.yy = ansic.yy;
      lexer.yy.lexer = lexer;
      lexer.yy.parser = ansic;
      if (typeof lexer.yylloc == 'undefined')
        lexer.yylloc = {};

      // tokenize and show rules and positions
      var rule;
      do {
        rule = lexer.lex();
        console.log(rule, ansic.terminals_[rule], "\n" + lexer.showPosition(),
          "\n");
      } while (rule != 1);


      // try parsing
      try {
        parse_result = ansic.parse(input);
        console.log("\n\nParsing ansic.js result: ", flatten(parse_result),
          parse_result);
      } catch (e) {
        console.log(e.message);
        console.log(e);
      }
    } else {
      var i;
      for (i = 0; i < input.length; i++) {
        console.log(
          "\n========================Start==============================");
        console.log(input[i]);
        console.log(
          "===========================================================");
        try {
          parse_result = ansic.parse(input[i]);
          console.log("Parsing ansic.js result: ", flatten(parse_result),
            parse_result);
        } catch (e) {
          console.log(e.message);
          console.log(e);
        }
        console.log(
          "=============================End============================\n");
      }
    }
  }

};