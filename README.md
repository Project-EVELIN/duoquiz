duoquiz
=======
# Javascript C++ Lexer and Parser

* based on grammar and lex files from: https://github.com/eranif/codelite/tree/master/CxxParser
* generated with jison
* generates AST only


## Parser
Additional information about writing a parser for bison/jison can be found here:
* http://www.gnu.org/software/bison/manual/html_node/Action-Types.html#Action-Types
* http://books.google.de/books?id=3Sr1V5J9_qMC&pg=PA148&lpg=PA148&dq=bison+what+is+$$%5B$0-1%5D&source=bl&ots=WFEyeaiMKT&sig=QMHeuzyF1g0q0Ijg3tlIRKrpX9Y&hl=de&sa=X&ei=ziHvU-r3E9Cp7AbAh4GIBg&ved=0CCMQ6AEwAA#v=onepage&q=%24%24%5B%240-1%5D&f=false

## Testing
1. Open ```parser.html``` locally
2. Open dev-console and run ```cpp.parse("ÍNPUT-STRING")``` for example ```cpp.parse("int main(void){}")```
