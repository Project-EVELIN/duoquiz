document.body.onload = function () {
  'use strict';
  Array.prototype.flatten = function () {
    return this.reduce(function (prev, cur) {
      var more = [].concat(cur)
        .some(Array.isArray);
      return prev.concat(more ? cur.flatten() : cur);
    }, []);
  };

  var DEBUG_C = true;

  var input_definitions = [
  "int a;",
  "extern const int c = 1;",
  "int f(int x) { return x+a; }",
  "struct S { int a; int b; }; ",
  "struct X {int x; const int y; x(0) { }};",
  "enum { up, down };",
  "typedef short int small;",
  '"char mesg[5] = "help!"',
 ];

  var structs = [
  "struct s { int i; const int ci; };",
  "struct datum\n { int tag;\char monat[10];\nint jahr; };",
  "struct datum\n { int tag;\char monat[10];\nint jahr; }geburtstag, urlaub;",
  "struct s s;",
  "const struct s cs;",
  "volatile struct s vs;",
  "struct s t1 = { 0 };",
  "t1->ndd = 4;",
  "b = 4;",
 ];

  var input_declarations = [
  "extern int a;",
  "extern const int c;",
  "int f(int);",
  "struct S;",
  "typedef int Int;",
  "extern X anotherX;",
 ];


  var input_decl = "static char c = 's';";
  var input_prepmain = "#include <stdio.h>\nint main(){}";
  var input_main = "int main(){return 0;}";
  var input_prep = "#include <stdio.h>\n#define MAX 32\n";
  var input_empty_declaration = ";";
  var input_extern_linkage_specification = "extern \"string-literal\" {}";
  var input = "struct datum\n{ int tag;char monat[10];int jahr; };";

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
        console.log("\n\nParsing ansic.js result: ", parse_result);
      } catch (e) {
        console.log(e);
      }
    } else {
      var i;
      for (i = 0; i < input.length; i++) {
        console.log(
          "\n=========================================================");
        try {
          parse_result = ansic.parse(input[i]);
          console.log("Parsing ansic.js result: ", parse_result.flatten(),
            "input: " +
            input[i]);
        } catch (e) {
          console.log(e);
        }
        console.log(
          "=========================================================\n");
      }
    }
  }

};