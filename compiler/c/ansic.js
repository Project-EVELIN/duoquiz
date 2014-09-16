/* Jison generated parser */
var ansic = (function(){
var parser = {trace: function trace() {
        Jison.print.apply(null, arguments);
    },
yy: {},
symbols_: {"error":2,"start_sym":3,"translation_unit":4,"primary_expression":5,"identifier":6,"constant":7,"string_literal":8,"(":9,"expression":10,")":11,"postfix_expression":12,"[":13,"]":14,"argument_expression_list":15,".":16,"PTR_OP":17,"INC_OP":18,"DEC_OP":19,"assignment_expression":20,",":21,"unary_expression":22,"unary_operator":23,"cast_expression":24,"SIZEOF":25,"type_name":26,"&":27,"*":28,"+":29,"-":30,"~":31,"!":32,"multiplicative_expression":33,"/":34,"%":35,"additive_expression":36,"shift_expression":37,"LEFT_OP":38,"RIGHT_OP":39,"relational_expression":40,"<":41,">":42,"LE_OP":43,"GE_OP":44,"equality_expression":45,"EQ_OP":46,"NE_OP":47,"and_expression":48,"exclusive_or_expression":49,"^":50,"inclusive_or_expression":51,"|":52,"logical_and_expression":53,"AND_OP":54,"logical_or_expression":55,"OR_OP":56,"conditional_expression":57,"?":58,":":59,"assignment_operator":60,"=":61,"MUL_ASSIGN":62,"DIV_ASSIGN":63,"MOD_ASSIGN":64,"ADD_ASSIGN":65,"SUB_ASSIGN":66,"LEFT_ASSIGN":67,"RIGHT_ASSIGN":68,"AND_ASSIGN":69,"XOR_ASSIGN":70,"OR_ASSIGN":71,"constant_expression":72,"declaration":73,"declaration_specifiers":74,"maybe_typedef_mode":75,";":76,"init_declarator_list":77,"storage_class_specifier":78,"type_specifier":79,"type_qualifier":80,"init_declarator":81,"declarator":82,"initializer":83,"TYPEDEF":84,"EXTERN":85,"STATIC":86,"AUTO":87,"REGISTER":88,"VOID":89,"CHAR":90,"SHORT":91,"INT":92,"LONG":93,"FLOAT":94,"DOUBLE":95,"SIGNED":96,"UNSIGNED":97,"struct_or_union_specifier":98,"enum_specifier":99,"type_name_token":100,"struct_or_union":101,"ns_struct":102,"ns_normal":103,"lbrace":104,"struct_declaration_list":105,"rbrace":106,"STRUCT":107,"UNION":108,"struct_declaration":109,"specifier_qualifier_list":110,"struct_declarator_list":111,"struct_declarator":112,"ENUM":113,"enumerator_list":114,"enumerator":115,"CONST":116,"VOLATILE":117,"pointer":118,"direct_declarator":119,"function_scope":120,"parameter_type_list":121,"type_qualifier_list":122,"parameter_list":123,"ellipsis":124,"parameter_declaration":125,"abstract_declarator":126,"identifier_list":127,"direct_abstract_declarator":128,"initializer_list":129,"statement":130,"labeled_statement":131,"compound_statement":132,"expression_statement":133,"selection_statement":134,"iteration_statement":135,"jump_statement":136,"CASE":137,"DEFAULT":138,"lbrace_scope":139,"rbrace_scope":140,"statement_list":141,"declaration_list":142,"save_position":143,"IF":144,"ELSE":145,"SWITCH":146,"WHILE":147,"DO":148,"FOR":149,"GOTO":150,"CONTINUE":151,"BREAK":152,"RETURN":153,"external_declaration":154,"function_definition":155,"IDENTIFIER":156,"TYPE_NAME":157,"CONSTANT_HEX":158,"CONSTANT_OCTAL":159,"CONSTANT_DECIMAL":160,"CONSTANT_CHAR":161,"CONSTANT_FLOAT":162,"STRING_LITERAL":163,"ELLIPSIS":164,"LBRACE":165,"RBRACE":166,"$accept":0,"$end":1},
terminals_: {2:"error",9:"(",11:")",13:"[",14:"]",16:".",17:"PTR_OP",18:"INC_OP",19:"DEC_OP",21:",",25:"SIZEOF",27:"&",28:"*",29:"+",30:"-",31:"~",32:"!",34:"/",35:"%",38:"LEFT_OP",39:"RIGHT_OP",41:"<",42:">",43:"LE_OP",44:"GE_OP",46:"EQ_OP",47:"NE_OP",50:"^",52:"|",54:"AND_OP",56:"OR_OP",58:"?",59:":",61:"=",62:"MUL_ASSIGN",63:"DIV_ASSIGN",64:"MOD_ASSIGN",65:"ADD_ASSIGN",66:"SUB_ASSIGN",67:"LEFT_ASSIGN",68:"RIGHT_ASSIGN",69:"AND_ASSIGN",70:"XOR_ASSIGN",71:"OR_ASSIGN",76:";",84:"TYPEDEF",85:"EXTERN",86:"STATIC",87:"AUTO",88:"REGISTER",89:"VOID",90:"CHAR",91:"SHORT",92:"INT",93:"LONG",94:"FLOAT",95:"DOUBLE",96:"SIGNED",97:"UNSIGNED",107:"STRUCT",108:"UNION",113:"ENUM",116:"CONST",117:"VOLATILE",137:"CASE",138:"DEFAULT",144:"IF",145:"ELSE",146:"SWITCH",147:"WHILE",148:"DO",149:"FOR",150:"GOTO",151:"CONTINUE",152:"BREAK",153:"RETURN",156:"IDENTIFIER",157:"TYPE_NAME",158:"CONSTANT_HEX",159:"CONSTANT_OCTAL",160:"CONSTANT_DECIMAL",161:"CONSTANT_CHAR",162:"CONSTANT_FLOAT",163:"STRING_LITERAL",164:"ELLIPSIS",165:"LBRACE",166:"RBRACE"},
productions_: [0,[3,1],[5,1],[5,1],[5,1],[5,3],[12,1],[12,4],[12,3],[12,4],[12,3],[12,3],[12,2],[12,2],[15,1],[15,3],[22,1],[22,2],[22,2],[22,2],[22,2],[22,4],[23,1],[23,1],[23,1],[23,1],[23,1],[23,1],[24,1],[24,4],[33,1],[33,3],[33,3],[33,3],[36,1],[36,3],[36,3],[37,1],[37,3],[37,3],[40,1],[40,3],[40,3],[40,3],[40,3],[45,1],[45,3],[45,3],[48,1],[48,3],[49,1],[49,3],[51,1],[51,3],[53,1],[53,3],[55,1],[55,3],[57,1],[57,5],[20,1],[20,3],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[60,1],[10,1],[10,3],[72,1],[73,3],[73,4],[75,0],[74,1],[74,2],[74,1],[74,2],[74,1],[74,2],[77,1],[77,3],[81,1],[81,3],[78,1],[78,1],[78,1],[78,1],[78,1],[79,1],[79,1],[79,1],[79,1],[79,1],[79,1],[79,1],[79,1],[79,1],[79,1],[79,1],[79,1],[98,7],[98,6],[98,4],[102,0],[103,0],[101,1],[101,1],[105,1],[105,2],[109,3],[110,2],[110,1],[110,2],[110,1],[111,1],[111,3],[112,1],[112,2],[112,3],[99,7],[99,6],[99,4],[114,1],[114,3],[115,1],[115,3],[80,1],[80,1],[82,2],[82,1],[119,1],[119,3],[119,4],[119,3],[119,5],[118,1],[118,2],[118,2],[118,3],[122,1],[122,2],[121,1],[121,3],[123,1],[123,3],[125,2],[125,2],[125,1],[127,1],[127,3],[26,1],[26,2],[126,1],[126,1],[126,2],[128,3],[128,2],[128,3],[128,3],[128,4],[128,2],[128,3],[128,3],[128,4],[83,1],[83,3],[83,4],[129,1],[129,3],[130,1],[130,1],[130,1],[130,1],[130,1],[130,1],[130,1],[131,3],[131,4],[131,3],[132,2],[132,3],[132,3],[132,4],[142,1],[142,2],[141,1],[141,2],[141,3],[143,0],[133,1],[133,2],[134,5],[134,7],[134,5],[135,5],[135,7],[135,6],[135,7],[136,3],[136,2],[136,2],[136,2],[136,3],[4,1],[4,2],[154,1],[154,1],[155,4],[155,2],[120,0],[6,1],[100,1],[7,1],[7,1],[7,1],[7,1],[7,1],[8,1],[124,1],[139,1],[140,1],[104,1],[106,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1:
    parser.yy.R("start_sym : translation_unit");
    return this.$;
  
break;
case 2:
      parser.yy.R("primary_expression : identifier");
      this.$ = $$[$0];
    
break;
case 3:
      parser.yy.R("primary_expression : constant");
      this.$ = $$[$0];
    
break;
case 4:
      parser.yy.R("primary_expression : string_literal");
      this.$ = $$[$0];
    
break;
case 5:
      parser.yy.R("primary_expression : '(' expression ')'");
      this.$ = ['(', $$[$0-1], ')'];
    
break;
case 6:
      parser.yy.R("postfix_expression : primary_expression");
      this.$ = $$[$0];
    
break;
case 7:
      parser.yy.R("postfix_expression : postfix_expression '[' expression ']'");
      this.$ = [$$[$0-3], '[', $$[$0-1], ']'];
    
break;
case 8:
      parser.yy.R("postfix_expression : postfix_expression '(' ')'");
      this.$ = [$$[$0-2], '(', ')'];
    
break;
case 9:
      parser.yy.R("postfix_expression : " +
        "postfix_expression '(' argument_expression_list ')'");
      this.$ = [$$[$0-3], '(', $$[$0-1], ')'];
    
break;
case 10:
      parser.yy.R("postfix_expression : postfix_expression '.' identifier");
      this.$ = [$$[$0-2], '.', $$[$0]];
    
break;
case 11:
      parser.yy.R("postfix_expression : postfix_expression PTR_OP identifier");
      this.$ = [$$[$0-2], '->', $$[$0]];
    
break;
case 12:
      parser.yy.R("postfix_expression : postfix_expression INC_OP");
      this.$ = [$$[$0-1], '++'];
    
break;
case 13:
      parser.yy.R("postfix_expression : postfix_expression DEC_OP");
      this.$ = [$$[$0-1], '--'];
    
break;
case 14:
    parser.yy.R("argument_expression_list : assignment_expression");
    this.$ = $$[$0];
  
break;
case 15:
    parser.yy.R("argument_expression_list : " +
      "argument_expression_list ',' assignment_expression");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 16:
    parser.yy.R("unary_expression : postfix_expression");
    this.$ = $$[$0];
  
break;
case 17:
    parser.yy.R("unary_expression : INC_OP unary_expression");
    this.$ =  ['++', $$[$0]];
  
break;
case 18:
    parser.yy.R("unary_expression : DEC_OP unary_expression");
    this.$ =  ['--', $$[$0]];
  
break;
case 19:
    parser.yy.R("unary_expression : unary_operator cast_expression");
    this.$ =  [$$[$0-1], $$[$0]];
  
break;
case 20:
    parser.yy.R("unary_expression : SIZEOF unary_expression");
    this.$ =  ['sizeof', $$[$0]];
  
break;
case 21:
    parser.yy.R("unary_expression : SIZEOF '(' type_name ')'");
    this.$ = ['sizeof', '(', $$[$0-1], ')'];
  
break;
case 22:
    parser.yy.R("unary_operator : '&'");
    this.$ = '&';
  
break;
case 23:
    parser.yy.R("unary_operator : '*'");
    this.$ = '*';
  
break;
case 24:
    parser.yy.R("unary_operator : '+'");
    this.$ = '+';
  
break;
case 25:
    parser.yy.R("unary_operator : '-'");
    this.$ = '-';
  
break;
case 26:
    parser.yy.R("unary_operator : '~'");
    this.$ = '~';
  
break;
case 27:
    parser.yy.R("unary_operator : '!'");
    this.$ = '!';
  
break;
case 28:
    parser.yy.R("cast_expression : unary_expression");
    this.$ = $$[$0];
  
break;
case 29:
    parser.yy.R("cast_expression : '(' type_name ')' cast_expression");
    this.$ = ['(', $$[$0-2], ')', $$[$0]];
  
break;
case 30:
    parser.yy.R("multiplicative_expression : cast_expression");
    this.$ = $$[$0];
  
break;
case 31:
    parser.yy.R("multiplicative_expression : " +
      "multiplicative_expression '*' cast_expression");
    this.$ = [$$[$0-2], '*', $$[$0]];
  
break;
case 32:
    parser.yy.R("multiplicative_expression : " +
      "multiplicative_expression '/' cast_expression");
    this.$ = [$$[$0-2], '/', $$[$0]];
  
break;
case 33:
    parser.yy.R("multiplicative_expression : " +
      "multiplicative_expression '%' cast_expression");
    this.$ = [$$[$0-2], '%', $$[$0]];
  
break;
case 34:
    parser.yy.R("additive_expression : multiplicative_expression");
    this.$ = $$[$0];
  
break;
case 35:
    parser.yy.R("additive_expression : " +
      "additive_expression '+' multiplicative_expression");
    this.$ = [$$[$0-2], '+', $$[$0]];
  
break;
case 36:
    parser.yy.R("additive_expression : " +
      "additive_expression '-' multiplicative_expression");
    this.$ = [$$[$0-2], '-', $$[$0]];
  
break;
case 37:
    parser.yy.R("shift_expression : additive_expression");
    this.$ = $$[$0];
  
break;
case 38:
    parser.yy.R("shift_expression : shift_expression LEFT_OP additive_expression");
    this.$ = [$$[$0-2], '<<', $$[$0]];
  
break;
case 39:
    parser.yy.R("shift_expression : shift_expression RIGHT_OP additive_expression");
    this.$ = [$$[$0-2], '>>', $$[$0]];
  
break;
case 40:
    parser.yy.R("relational_expression : shift_expression");
    this.$ = $$[$0];
  
break;
case 41:
    parser.yy.R("relational_expression : relational_expression '<' shift_expression");
    this.$ = [$$[$0-2], '<', $$[$0]];
  
break;
case 42:
    parser.yy.R("relational_expression : relational_expression '>' shift_expression");
    this.$ = [$$[$0-2], '>', $$[$0]];
  
break;
case 43:
    parser.yy.R("relational_expression : relational_expression LE_OP shift_expression");
    this.$ = [$$[$0-2], '<=', $$[$0]];
  
break;
case 44:
    parser.yy.R("relational_expression : relational_expression GE_OP shift_expression");
    this.$ = [$$[$0-2], '>=', $$[$0]];
  
break;
case 45:
    parser.yy.R("equality_expression : relational_expression");
    this.$ = $$[$0];
  
break;
case 46:
    parser.yy.R("equality_expression : equality_expression EQ_OP relational_expression");
    this.$ = [$$[$0-2], '==', $$[$0]];
  
break;
case 47:
    parser.yy.R("equality_expression : equality_expression NE_OP relational_expression");
    this.$ = [$$[$0-2], '!=', $$[$0]];
  
break;
case 48:
    parser.yy.R("and_expression : equality_expression");
    this.$ = $$[$0];
  
break;
case 49:
    parser.yy.R("and_expression : and_expression '&' equality_expression");
    this.$ = [$$[$0-2], '&', $$[$0]];
  
break;
case 50:
    parser.yy.R("exclusive_or_expression : and_expression");
    this.$ = $$[$0];
  
break;
case 51:
    parser.yy.R("exclusive_or_expression : exclusive_or_expression '^' and_expression");
    this.$ = [$$[$0-2], '^', $$[$0]];
  
break;
case 52:
    parser.yy.R("inclusive_or_expression : exclusive_or_expression");
    this.$ = $$[$0];
  
break;
case 53:
    parser.yy.R("inclusive_or_expression : " +
      "inclusive_or_expression '|' exclusive_or_expression");
    this.$ = [$$[$0-2], '|', $$[$0]];
  
break;
case 54:
    parser.yy.R("logical_and_expression : inclusive_or_expression");
    this.$ = $$[$0];
  
break;
case 55:
    parser.yy.R("logical_and_expression : logical_and_expression AND_OP inclusive_or_expression");
    this.$ = [$$[$0-2], '&&', $$[$0]];
  
break;
case 56:
    parser.yy.R("logical_or_expression : logical_and_expression");
    this.$ = $$[$0];
  
break;
case 57:
    parser.yy.R("logical_or_expression : " +
      "logical_or_expression OR_OP logical_and_expression");
    this.$ = [$$[$0-2], '||', $$[$0]];
  
break;
case 58:
    parser.yy.R("conditional_expression : logical_or_expression");
    this.$ = $$[$0];
  
break;
case 59:
    parser.yy.R("conditional_expression : " +
      "logical_or_expression '?' expression ':' conditional_expression");
    this.$ = [$$[$0-4], '?', $$[$0-2], ':', $$[$0]];
  
break;
case 60:
    parser.yy.R("assignment_expression : conditional_expression");
    this.$ = $$[$0];
  
break;
case 61:
    parser.yy.R("assignment_expression : " +
      "unary_expression assignment_operator assignment_expression");
    this.$ = [$$[$0-2], $$[$0], $$[$0]];
  
break;
case 62:
    parser.yy.R("assignment_operator : '='");
    this.$ = '=';
  
break;
case 63:
    parser.yy.R("assignment_operator : MUL_ASSIGN");
    this.$ = '*=';
  
break;
case 64:
    parser.yy.R("assignment_operator : DIV_ASSIGN");
    this.$ = '/=';
  
break;
case 65:
    parser.yy.R("assignment_operator : MOD_ASSIGN");
    this.$ = '%=';
  
break;
case 66:
    parser.yy.R("assignment_operator : ADD_ASSIGN");
    this.$ = '+=';
  
break;
case 67:
    parser.yy.R("assignment_operator : SUB_ASSIGN");
    this.$ = '-=';
  
break;
case 68:
    parser.yy.R("assignment_operator : LEFT_ASSIGN");
    this.$ = '<<=';
  
break;
case 69:
    parser.yy.R("assignment_operator : RIGHT_ASSIGN");
    this.$ = '>>=';
  
break;
case 70:
    parser.yy.R("assignment_operator : AND_ASSIGN");
    this.$ = '&=';
  
break;
case 71:
    parser.yy.R("assignment_operator : XOR_ASSIGN");
    this.$ = '^=';
  
break;
case 72:
    parser.yy.R("assignment_operator : OR_ASSIGN");
    this.$ = '|=';
  
break;
case 73:
    parser.yy.R("expression : assignment_expression");
    this.$ = $$[$0];
  
break;
case 74:
    parser.yy.R("expression : expression ',' assignment_expression");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 75:
    parser.yy.R("constant_expression : conditional_expression");
    this.$ = $$[$0];
  
break;
case 76:
    parser.yy.R("declaration : declaration_specifiers ';'");
    // If we were in the typedef mode, revert to the initial mode.
    parser.yy.typedefMode = 0;

    this.$ = [$$[$0-2], ';']; // empty declaration init
  
break;
case 77:
    parser.yy.R("declaration : declaration_specifiers init_declarator_list ';'");

    // If we were in the typedef mode, revert to the initial mode.
    parser.yy.typedefMode = 0;

    this.$ = [$$[$0-3], $$[$0-1], ';']; // non empty declaration init
  
break;
case 78:
    // If we'd seen 'typedef'...
    if (parser.yy.typedefMode === 1)
    {
      // ... then identifiers seen now are types
      ++parser.yy.typedefMode
    }
  
break;
case 79:
    parser.yy.R("declaration_specifiers : storage_class_specifier");
    this.$ = $$[$0];
  
break;
case 80:
    parser.yy.R("declaration_specifiers : " +
      "storage_class_specifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 81:
    parser.yy.R("declaration_specifiers : type_specifier");
    this.$ = $$[$0];
  
break;
case 82:
    parser.yy.R("declaration_specifiers : type_specifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 83:
    parser.yy.R("declaration_specifiers : type_qualifier");
    this.$ = $$[$0];
  
break;
case 84:
    parser.yy.R("declaration_specifiers : type_qualifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 85:
    parser.yy.R("init_declarator_list : init_declarator");
    this.$ = $$[$0];
  
break;
case 86:
    parser.yy.R("init_declarator_list : init_declarator_list ',' init_declarator");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 87:
    parser.yy.R("init_declarator : declarator");
    this.$ = $$[$0];     // no initializer
  
break;
case 88:
    parser.yy.R("init_declarator : declarator '=' initializer");
    this.$ = [$$[$0-2], '=', $$[$0]];
  
break;
case 89:
    parser.yy.R("storage_class_specifier : TYPEDEF");
    parser.yy.typedefMode = 1;
    this.$ = 'typedef';
  
break;
case 90:
    parser.yy.R("storage_class_specifier : EXTERN");
    this.$ = 'extern';
  
break;
case 91:
    parser.yy.R("storage_class_specifier : STATIC");
    this.$ = 'static';
  
break;
case 92:
    parser.yy.R("storage_class_specifier : AUTO");
    this.$ = 'auto';
  
break;
case 93:
    parser.yy.R("storage_class_specifier : REGISTER");
    this.$ = 'register';
  
break;
case 94:
    parser.yy.R("type_specifier : VOID");
    this.$ = 'void';
  
break;
case 95:
    parser.yy.R("type_specifier : CHAR");
    this.$ = 'char';
  
break;
case 96:
    parser.yy.R("type_specifier : SHORT");
    this.$ = 'short';
  
break;
case 97:
    parser.yy.R("type_specifier : INT");
    this.$ = 'int';
  
break;
case 98:
    parser.yy.R("type_specifier : LONG");
    this.$ = 'long';
  
break;
case 99:
    parser.yy.R("type_specifier : FLOAT");
    this.$ = 'float';
  
break;
case 100:
    parser.yy.R("type_specifier : DOUBLE");
    this.$ = 'double';
  
break;
case 101:
    parser.yy.R("type_specifier : SIGNED");
    this.$ = 'signed';
  
break;
case 102:
    parser.yy.R("type_specifier : UNSIGNED");
    this.$ = 'unsigned';
  
break;
case 103:
    parser.yy.R("type_specifier : struct_or_union_specifier");
    this.$ = $$[$0];
  
break;
case 104:
    parser.yy.R("type_specifier : enum_specifier");
    this.$ = $$[$0];
  
break;
case 105:
    parser.yy.R("type_specifier : type_name_token");
    this.$ = $$[$0];
  
break;
case 106:
    parser.yy.R("struct_or_union_specifier : " +
      "struct_or_union identifier lbrace struct_declaration_list rbrace");
    this.$ = [$$[$0-6], $$[$0-4], '{', $$[$0-1], '}'];

    // Add a symbol table entry for this struct (a type)
    parser.yy.types[$$[$0-4].value] = $$[$0-6].value;
  
break;
case 107:
    parser.yy.R("struct_or_union_specifier : " +
      "struct_or_union lbrace struct_declaration_list rbrace");
    this.$ = [$$[$0-5], '{', $$[$0-1], '}'];
  
break;
case 108:
    parser.yy.R("struct_or_union_specifier : struct_or_union identifier");
    this.$ = [$$[$0-3], $$[$0-1]];

    // Add a symbol table entry for this struct
    parser.yy.types[$$[$0-1].value] = $$[$0-3].value;
  
break;
case 109:
    //playground.c.lib.Node.namespace = "struct#";
  
break;
case 110:
    //playground.c.lib.Node.namespace = "";

    // set to true by lexer
    parser.yy.bSawStruct = false;
  
break;
case 111:
    parser.yy.R("struct_or_union : STRUCT");
    this.$ = 'struct';
  
break;
case 112:
    parser.yy.R("struct_or_union : UNION");
    this.$ = 'union';
  
break;
case 113:
    parser.yy.R("struct_declaration_list : struct_declaration");
    this.$ = $$[$0];
  
break;
case 114:
    parser.yy.R("struct_declaration_list : struct_declaration_list struct_declaration");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 115:
    parser.yy.R("struct_declaration : " +
      "specifier_qualifier_list struct_declarator_list ';'");
    this.$ = [$$[$0-2], $$[$0-1], ';'];
  
break;
case 116:
    parser.yy.R("specifier_qualifier_list : type_specifier specifier_qualifier_list");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 117:
    parser.yy.R("specifier_qualifier_list : type_specifier");
    this.$ = $$[$0];
  
break;
case 118:
    parser.yy.R("specifier_qualifier_list : type_qualifier specifier_qualifier_list");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 119:
    parser.yy.R("specifier_qualifier_list : type_qualifier");
    this.$ = $$[$0];
  
break;
case 120:
    parser.yy.R("struct_declarator_list : struct_declarator");
    this.$ = $$[$0];
  
break;
case 121:
    parser.yy.R("struct_declarator_list : struct_declarator_list ',' struct_declarator");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 122:
    parser.yy.R("struct_declarator : declarator");
    this.$ = $$[$0];
  
break;
case 123:
    parser.yy.R("struct_declarator : ':' constant_expression");
    this.$ = [':', $$[$0]];
  
break;
case 124:
    parser.yy.R("struct_declarator : declarator ':' constant_expression");
    this.$ = [$$[$0-2], ':', $$[$0]];
  
break;
case 125:
    parser.yy.R("enum : ENUM identifier lbrace enumerator_list rbrace");
    this.$ = ['enum', $$[$0-4], '{', $$[$0-1],'}'];

    // Add a symbol table entry for this enum (a type)
    parser.yy.types[$$[$0-4].value] = $$[$0-6].value;
  
break;
case 126:
    parser.yy.R("enum : ENUM lbrace enumerator_list rbrace");
    this.$ = ['enum','{', $$[$0-1],'}'];
  
break;
case 127:
    parser.yy.R("enum : ENUM identifier");
    this.$ = ['enum', $$[$0-1],];

    // Add a symbol table entry for this struct
    parser.yy.types[$$[$0-1].value] = $$[$0-3].value;
  
break;
case 128:
    parser.yy.R("enumerator_list : enumerator");
    this.$ = $$[$0];
  
break;
case 129:
    parser.yy.R("enumerator_list : enumerator_list ',' enumerator");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 130:
    parser.yy.R("enumerator : identifier");
    this.$ = $$[$0]; // no initializer
  
break;
case 131:
    parser.yy.R("enumerator : identifier '=' constant_expression");
    this.$ = [$$[$0-2], '=', $$[$0]];
  
break;
case 132:
    parser.yy.R("type_qualifier : CONST");
    this.$ = 'const';
  
break;
case 133:
    parser.yy.R("type_qualifier : VOLATILE");
    this.$ = 'volatile';
  
break;
case 134:
    parser.yy.R("declarator : pointer direct_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 135:
    parser.yy.R("declarator : direct_declarator");
    this.$ = $$[$0];
  
break;
case 136:
    parser.yy.R("direct_declarator : identifier");
    this.$ = $$[$0];
  
break;
case 137:
    parser.yy.R("direct_declarator : '(' declarator ')'");
    this.$ = ['(', $$[$0-1], ')'];
  
break;
case 138:
    parser.yy.R("direct_declarator : direct_declarator '[' constant_expression ']'");
    this.$ = [$$[$0-3], '[', $$[$0-1], ']'];
  
break;
case 139:
    parser.yy.R("direct_declarator : direct_declarator '[' ']'");
    this.$ = [$$[$0-2], '[', ']'];
  
break;
case 140:
    parser.yy.R("direct_declarator : " +
      "direct_declarator '(' parameter_type_list ')'");
    this.$ = [$$[$0-4], $$[$0-3], '(', $$[$0-1], ')'];
  
break;
case 141:
    parser.yy.R("pointer : '*'");
    this.$ = '*';
  
break;
case 142:
    parser.yy.R("pointer : '*' type_qualifier_list");
    this.$ = ['*', $$[$0]];
  
break;
case 143:
    parser.yy.R("pointer : '*' pointer");
    this.$ = ['*', $$[$0]];
  
break;
case 144:
    parser.yy.R("pointer : '*' type_qualifier_list pointer");
    this.$ = ['*', $$[$0-1], $$[$0]];
  
break;
case 145:
    parser.yy.R("type_qualifier_list : type_qualifier");
    this.$ = $$[$0];
  
break;
case 146:
    parser.yy.R("type_qualifier_list : type_qualifier_list type_qualifier");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 147:
    parser.yy.R("parameter_type_list : parameter_list");
    this.$ = $$[$0];
  
break;
case 148:
    parser.yy.R("parameter_type_list : parameter_list ',' ellipsis");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 149:
    parser.yy.R("parameter_list : parameter_declaration");
    this.$ = $$[$0];
  
break;
case 150:
    parser.yy.R("parameter_list : parameter_list ',' parameter_declaration");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 151:
    parser.yy.R("parameter_declaration : declaration_specifiers declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 152:
    parser.yy.R("parameter_declaration : declaration_specifiers abstract_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 153:
    parser.yy.R("parameter_declaration : declaration_specifiers");
    this.$ = $$[$0];
  
break;
case 154:
    parser.yy.R("identifier_list : identifier");
    this.$ = $$[$0];
  
break;
case 155:
    parser.yy.R("identifier_list : identifier_list ',' identifier");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 156:
    parser.yy.R("type_name : specifier_qualifier_list");
    this.$ = $$[$0];
  
break;
case 157:
    parser.yy.R("type_name : specifier_qualifier_list abstract_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 158:
    parser.yy.R("abstract_declarator : pointer");
    this.$ = $$[$0];
  
break;
case 159:
    parser.yy.R("abstract_declarator : direct_abstract_declarator");
    this.$ = $$[$0];
  
break;
case 160:
    parser.yy.R("abstract_declarator : pointer direct_abstract_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 161:
    parser.yy.R("direct_abstract_declarator : '(' abstract_declarator ')'");
    this.$ = ['(', $$[$0-1], ')'];
  
break;
case 162:
    parser.yy.R("direct_abstract_declarator : '[' ']'");
    this.$ = ['[', ']'];
  
break;
case 163:
    parser.yy.R("direct_abstract_declarator : '[' constant_expression ']'");
    this.$ = ['[', $$[$0-1], ']'];
  
break;
case 164:
    parser.yy.R("direct_abstract_declarator : direct_abstract_declarator '[' ']'");
    this.$ = [$$[$0-2], '[', ']'];
  
break;
case 165:
    parser.yy.R("direct_abstract_declarator : " +
      "direct_abstract_declarator '[' constant_expression ']'");
    this.$ = [$$[$0-3], '[', $$[$0-1], ']'];
  
break;
case 166:
    parser.yy.R("direct_abstract_declarator : '(' ')'");
    this.$ = ['(', ')'];
  
break;
case 167:
    parser.yy.R("direct_abstract_declarator : '(' parameter_type_list ')'");
    this.$ = ['(', $$[$0], ')'];
  
break;
case 168:
    parser.yy.R("direct_abstract_declarator : direct_abstract_declarator '(' ')'");
    this.$ = [$$[$0-2], '(', ')'];
  
break;
case 169:
    parser.yy.R("direct_abstract_declarator : " +
      "direct_abstract_declarator '(' parameter_type_list ')'");
    this.$ = [$$[$0-3], '(', $$[$0-1], ')'];
  
break;
case 170:
    parser.yy.R("initializer : assignment_expression");
    this.$ = $$[$0];
  
break;
case 171:
    parser.yy.R("initializer : lbrace initializer_list rbrace");
    this.$ = $$[$0-1];
  
break;
case 172:
    parser.yy.R("initializer : lbrace initializer_list ',' rbrace");
    this.$ = $$[$0-2];
  
break;
case 173:
    parser.yy.R("initializer_list : initializer");
    this.$ = $$[$0];
  
break;
case 174:
    parser.yy.R("initializer_list : initializer_list ',' initializer");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 175:
    parser.yy.R("statement : labeled_statement");
    this.$ = $$[$0];
  
break;
case 176:
    parser.yy.R("statement : compound_statement");
    this.$ = $$[$0];
  
break;
case 177:
    parser.yy.R("statement : expression_statement");
    this.$ = $$[$0];
  
break;
case 178:
    parser.yy.R("statement : selection_statement");
    this.$ = $$[$0];
  
break;
case 179:
    parser.yy.R("statement : iteration_statement");
    this.$ = $$[$0];
  
break;
case 180:
    parser.yy.R("statement : jump_statement");
    this.$ = $$[$0];
  
break;
case 181:
    parser.yy.R("statement : error");
  
break;
case 182:
    parser.yy.R("labeled_statement : identifier ':' statement");
    this.$ = [$$[$0-2], ':', $$[$0]];
  
break;
case 183:
    parser.yy.R("labeled_statement : CASE constant_expression ':' statement");
    this.$ = ['case', $$[$0-2], ':', $$[$0]];
  
break;
case 184:
    parser.yy.R("labeled_statement : DEFAULT ':' statement");
      this.$ = ['default', ':', $$[$0]];
  
break;
case 185:
    parser.yy.R("compound_statement : lbrace_scope rbrace_scope");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 186:
    parser.yy.R("compound_statement : lbrace_scope statement_list rbrace_scope");
    this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
  
break;
case 187:
    parser.yy.R("compound_statement : lbrace_scope declaration_list rbrace_scope");
    this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
  
break;
case 188:
    parser.yy.R("compound_statement : lbrace_scope declaration_list statement_list rbrace_scope");
    this.$ = [$$[$0-3], $$[$0-2], $$[$0-1], $$[$0]];
  
break;
case 189:
    parser.yy.R("declaration_list : declaration");
    this.$ = $$[$0];
  
break;
case 190:
    parser.yy.R("declaration_list : declaration_list declaration");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 191:
    parser.yy.R("statement_list : statement");
    this.$ = $$[$0];
  
break;
case 192:
    parser.yy.R("statement_list : statement_list statement");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 193:
    parser.parseError(
      "Declarations must precede executable statements.",
      { line : yylineno },
      $$[$0-1]);
  
break;
case 194:
    this.$ = parser.lexer.showPosition();
  
break;
case 195:
    parser.yy.R("expression_statement : ';'");
    this.$ = ';';
  
break;
case 196:
    parser.yy.R("expression_statement : expression ';'");
    this.$ = [$$[$0-1], ';'];
  
break;
case 197:
    parser.yy.R("selection_statement : IF '(' expression ')' statement");
    this.$ = ['if', '(', $$[$0-2], ')', $$[$0]];
  
break;
case 198:
    parser.yy.R("selection_statement : IF '(' expression ')' statement ELSE statement");
    this.$ = ['if', '(', $$[$0-4], ')', $$[$0-2], 'else', $$[$0]];
  
break;
case 199:
    parser.yy.R("selection_statement : SWITCH '(' expression ')' statement");
    this.$ = ['switch', '(', $$[$0-2], ')', $$[$0]];
  
break;
case 200:
    parser.yy.R("iteration_statement : WHILE '(' expression ')' statement");
    this.$ = ['while', '(', $$[$0-2], ')', $$[$0]];
  
break;
case 201:
    parser.yy.R("iteration_statement : DO statement WHILE '(' expression ')' ';'");
    this.$ = ['do', $$[$0-5], 'while', '(', $$[$0-2], ')', ';'];
  
break;
case 202:
    parser.yy.R("iteration_statement : FOR '(' expression_statement expression_statement ')' statement");
    this.$ = ['for', $$[$0-3], $$[$0-2], ')', $$[$0]];
  
break;
case 203:
    parser.yy.R("iteration_statement : " +
      "FOR '(' expression_statement expression_statement expression ')' " +
      "statement");
    this.$ = ['for', '(',  $$[$0-4],  $$[$0-2], $$[$0-1], $$[$0] ];
  
break;
case 204:
    parser.yy.R("jump_statement : GOTO identifier ';'");
    this.$ = ['goto', $$[$0-1], ';'];
  
break;
case 205:
    parser.yy.R("jump_statement : CONTINUE ';'");
    this.$ = ['continue', ';'];
  
break;
case 206:
    parser.yy.R("jump_statement : BREAK ';'");
    this.$ = ['break', ';'];
  
break;
case 207:
    parser.yy.R("jump_statement : RETURN ';'");
    this.$ = ['return', ';'];
  
break;
case 208:
    parser.yy.R("jump_statement : RETURN expression ';'");
    this.$ = ['return', $$[$0-1], ';'];
  
break;
case 209:
      parser.yy.R("translation_unit : external_declaration");
      this.$ = $$[$0];
    
break;
case 210:
      parser.yy.R("translation_unit : translation_unit external_declaration");
      this.$ = [$$[$0-1], $$[$0]];
    
break;
case 211:
    parser.yy.R("external_declaration : function_definition");
    this.$ = $$[$0];
  
break;
case 212:
    parser.yy.R("external_declaration : declaration");
    this.$ = $$[$0];
  
break;
case 213:
    parser.yy.R("function_definition : " +
      "declaration_specifiers declarator compound_statement");
    this.$ = [$$[$0-3], $$[$0-1], $$[$0]];
  
break;
case 214:
    parser.yy.R("function_definition : declarator compound_statement");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 215:
    this.$ = $$[$0];
  
break;
case 216:
    if (parser.yy.typedefMode === 2)
    {
      parser.yy.R("identifier : TYPE_DEFINITION (" + yytext + ")");
      this.$ = yytext;
      parser.yy.types[yytext] = 'TYPE_DEFINITION';
    } else {
      parser.yy.R("identifier : IDENTIFIER (" + yytext + ")");
      this.$ = yytext;
    }
  
break;
case 217:
    parser.yy.R("identifier : TYPE_NAME (" + yytext + ")");
    this.$ = yytext;
  
break;
case 218:
    parser.yy.R("constant : CONSTANT_HEX (" + yytext + ")");

    this.$ = $$[$0];
  
break;
case 219:
    parser.yy.R("constant : CONSTANT_OCTAL (" + yytext + ")");

    this.$ = $$[$0];
  
break;
case 220:
    parser.yy.R("constant : CONSTANT_DECIMAL (" + yytext + ")");

    this.$ = $$[$0];
  
break;
case 221:
    parser.yy.R("constant : CONSTANT_CHAR (" + yytext + ")");
    this.$ = $$[$0];
  
break;
case 222:
    parser.yy.R("constant : CONSTANT (" + yytext + ")");
    this.$ = $$[$0];
  
break;
case 223:
    parser.yy.R("string_literal : STRING_LITERAL");
    this.$ = $$[$0];
  
break;
case 224:
    parser.yy.R("ellipsis : ELLIPSIS");
    this.$ = '...';
  
break;
case 225:
    parser.yy.R("lbrace_scope : lbrace");
    this.$ = $$[$0];
  
break;
case 226:
    parser.yy.R("rbrace_scope : rbrace");
    this.$ = $$[$0];
  
break;
case 227:
    parser.yy.R("lbrace : LBRACE");
    this.$ =  $$[$0];
  
break;
case 228:
    parser.yy.R("rbrace : RBRACE");
    this.$ = $$[$0];
  
break;
}
},
table: [{3:1,4:2,6:33,9:[1,34],28:[1,32],73:5,74:6,78:8,79:9,80:10,82:7,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],118:11,119:12,154:3,155:4,156:[1,38],157:[1,37]},{1:[3]},{1:[2,1],6:33,9:[1,34],28:[1,32],73:5,74:6,78:8,79:9,80:10,82:7,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],118:11,119:12,154:41,155:4,156:[1,38],157:[1,37]},{1:[2,209],9:[2,209],28:[2,209],84:[2,209],85:[2,209],86:[2,209],87:[2,209],88:[2,209],89:[2,209],90:[2,209],91:[2,209],92:[2,209],93:[2,209],94:[2,209],95:[2,209],96:[2,209],97:[2,209],107:[2,209],108:[2,209],113:[2,209],116:[2,209],117:[2,209],156:[2,209],157:[2,209]},{1:[2,211],9:[2,211],28:[2,211],84:[2,211],85:[2,211],86:[2,211],87:[2,211],88:[2,211],89:[2,211],90:[2,211],91:[2,211],92:[2,211],93:[2,211],94:[2,211],95:[2,211],96:[2,211],97:[2,211],107:[2,211],108:[2,211],113:[2,211],116:[2,211],117:[2,211],156:[2,211],157:[2,211]},{1:[2,212],9:[2,212],28:[2,212],84:[2,212],85:[2,212],86:[2,212],87:[2,212],88:[2,212],89:[2,212],90:[2,212],91:[2,212],92:[2,212],93:[2,212],94:[2,212],95:[2,212],96:[2,212],97:[2,212],107:[2,212],108:[2,212],113:[2,212],116:[2,212],117:[2,212],156:[2,212],157:[2,212]},{9:[2,78],28:[2,78],75:42,76:[2,78],156:[2,78]},{104:45,132:43,139:44,165:[1,46]},{9:[2,79],11:[2,79],13:[2,79],21:[2,79],28:[2,79],74:47,76:[2,79],78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],156:[2,79],157:[1,37]},{9:[2,81],11:[2,81],13:[2,81],21:[2,81],28:[2,81],74:48,76:[2,81],78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],156:[2,81],157:[1,37]},{9:[2,83],11:[2,83],13:[2,83],21:[2,83],28:[2,83],74:49,76:[2,83],78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],156:[2,83],157:[1,37]},{6:33,9:[1,34],119:50,156:[1,38]},{9:[2,215],11:[2,135],13:[1,51],21:[2,135],59:[2,135],61:[2,135],76:[2,135],120:52,165:[2,135]},{9:[2,89],11:[2,89],13:[2,89],21:[2,89],28:[2,89],76:[2,89],84:[2,89],85:[2,89],86:[2,89],87:[2,89],88:[2,89],89:[2,89],90:[2,89],91:[2,89],92:[2,89],93:[2,89],94:[2,89],95:[2,89],96:[2,89],97:[2,89],107:[2,89],108:[2,89],113:[2,89],116:[2,89],117:[2,89],156:[2,89],157:[2,89]},{9:[2,90],11:[2,90],13:[2,90],21:[2,90],28:[2,90],76:[2,90],84:[2,90],85:[2,90],86:[2,90],87:[2,90],88:[2,90],89:[2,90],90:[2,90],91:[2,90],92:[2,90],93:[2,90],94:[2,90],95:[2,90],96:[2,90],97:[2,90],107:[2,90],108:[2,90],113:[2,90],116:[2,90],117:[2,90],156:[2,90],157:[2,90]},{9:[2,91],11:[2,91],13:[2,91],21:[2,91],28:[2,91],76:[2,91],84:[2,91],85:[2,91],86:[2,91],87:[2,91],88:[2,91],89:[2,91],90:[2,91],91:[2,91],92:[2,91],93:[2,91],94:[2,91],95:[2,91],96:[2,91],97:[2,91],107:[2,91],108:[2,91],113:[2,91],116:[2,91],117:[2,91],156:[2,91],157:[2,91]},{9:[2,92],11:[2,92],13:[2,92],21:[2,92],28:[2,92],76:[2,92],84:[2,92],85:[2,92],86:[2,92],87:[2,92],88:[2,92],89:[2,92],90:[2,92],91:[2,92],92:[2,92],93:[2,92],94:[2,92],95:[2,92],96:[2,92],97:[2,92],107:[2,92],108:[2,92],113:[2,92],116:[2,92],117:[2,92],156:[2,92],157:[2,92]},{9:[2,93],11:[2,93],13:[2,93],21:[2,93],28:[2,93],76:[2,93],84:[2,93],85:[2,93],86:[2,93],87:[2,93],88:[2,93],89:[2,93],90:[2,93],91:[2,93],92:[2,93],93:[2,93],94:[2,93],95:[2,93],96:[2,93],97:[2,93],107:[2,93],108:[2,93],113:[2,93],116:[2,93],117:[2,93],156:[2,93],157:[2,93]},{9:[2,94],11:[2,94],13:[2,94],21:[2,94],28:[2,94],59:[2,94],76:[2,94],84:[2,94],85:[2,94],86:[2,94],87:[2,94],88:[2,94],89:[2,94],90:[2,94],91:[2,94],92:[2,94],93:[2,94],94:[2,94],95:[2,94],96:[2,94],97:[2,94],107:[2,94],108:[2,94],113:[2,94],116:[2,94],117:[2,94],156:[2,94],157:[2,94]},{9:[2,95],11:[2,95],13:[2,95],21:[2,95],28:[2,95],59:[2,95],76:[2,95],84:[2,95],85:[2,95],86:[2,95],87:[2,95],88:[2,95],89:[2,95],90:[2,95],91:[2,95],92:[2,95],93:[2,95],94:[2,95],95:[2,95],96:[2,95],97:[2,95],107:[2,95],108:[2,95],113:[2,95],116:[2,95],117:[2,95],156:[2,95],157:[2,95]},{9:[2,96],11:[2,96],13:[2,96],21:[2,96],28:[2,96],59:[2,96],76:[2,96],84:[2,96],85:[2,96],86:[2,96],87:[2,96],88:[2,96],89:[2,96],90:[2,96],91:[2,96],92:[2,96],93:[2,96],94:[2,96],95:[2,96],96:[2,96],97:[2,96],107:[2,96],108:[2,96],113:[2,96],116:[2,96],117:[2,96],156:[2,96],157:[2,96]},{9:[2,97],11:[2,97],13:[2,97],21:[2,97],28:[2,97],59:[2,97],76:[2,97],84:[2,97],85:[2,97],86:[2,97],87:[2,97],88:[2,97],89:[2,97],90:[2,97],91:[2,97],92:[2,97],93:[2,97],94:[2,97],95:[2,97],96:[2,97],97:[2,97],107:[2,97],108:[2,97],113:[2,97],116:[2,97],117:[2,97],156:[2,97],157:[2,97]},{9:[2,98],11:[2,98],13:[2,98],21:[2,98],28:[2,98],59:[2,98],76:[2,98],84:[2,98],85:[2,98],86:[2,98],87:[2,98],88:[2,98],89:[2,98],90:[2,98],91:[2,98],92:[2,98],93:[2,98],94:[2,98],95:[2,98],96:[2,98],97:[2,98],107:[2,98],108:[2,98],113:[2,98],116:[2,98],117:[2,98],156:[2,98],157:[2,98]},{9:[2,99],11:[2,99],13:[2,99],21:[2,99],28:[2,99],59:[2,99],76:[2,99],84:[2,99],85:[2,99],86:[2,99],87:[2,99],88:[2,99],89:[2,99],90:[2,99],91:[2,99],92:[2,99],93:[2,99],94:[2,99],95:[2,99],96:[2,99],97:[2,99],107:[2,99],108:[2,99],113:[2,99],116:[2,99],117:[2,99],156:[2,99],157:[2,99]},{9:[2,100],11:[2,100],13:[2,100],21:[2,100],28:[2,100],59:[2,100],76:[2,100],84:[2,100],85:[2,100],86:[2,100],87:[2,100],88:[2,100],89:[2,100],90:[2,100],91:[2,100],92:[2,100],93:[2,100],94:[2,100],95:[2,100],96:[2,100],97:[2,100],107:[2,100],108:[2,100],113:[2,100],116:[2,100],117:[2,100],156:[2,100],157:[2,100]},{9:[2,101],11:[2,101],13:[2,101],21:[2,101],28:[2,101],59:[2,101],76:[2,101],84:[2,101],85:[2,101],86:[2,101],87:[2,101],88:[2,101],89:[2,101],90:[2,101],91:[2,101],92:[2,101],93:[2,101],94:[2,101],95:[2,101],96:[2,101],97:[2,101],107:[2,101],108:[2,101],113:[2,101],116:[2,101],117:[2,101],156:[2,101],157:[2,101]},{9:[2,102],11:[2,102],13:[2,102],21:[2,102],28:[2,102],59:[2,102],76:[2,102],84:[2,102],85:[2,102],86:[2,102],87:[2,102],88:[2,102],89:[2,102],90:[2,102],91:[2,102],92:[2,102],93:[2,102],94:[2,102],95:[2,102],96:[2,102],97:[2,102],107:[2,102],108:[2,102],113:[2,102],116:[2,102],117:[2,102],156:[2,102],157:[2,102]},{9:[2,103],11:[2,103],13:[2,103],21:[2,103],28:[2,103],59:[2,103],76:[2,103],84:[2,103],85:[2,103],86:[2,103],87:[2,103],88:[2,103],89:[2,103],90:[2,103],91:[2,103],92:[2,103],93:[2,103],94:[2,103],95:[2,103],96:[2,103],97:[2,103],107:[2,103],108:[2,103],113:[2,103],116:[2,103],117:[2,103],156:[2,103],157:[2,103]},{9:[2,104],11:[2,104],13:[2,104],21:[2,104],28:[2,104],59:[2,104],76:[2,104],84:[2,104],85:[2,104],86:[2,104],87:[2,104],88:[2,104],89:[2,104],90:[2,104],91:[2,104],92:[2,104],93:[2,104],94:[2,104],95:[2,104],96:[2,104],97:[2,104],107:[2,104],108:[2,104],113:[2,104],116:[2,104],117:[2,104],156:[2,104],157:[2,104]},{9:[2,105],11:[2,105],13:[2,105],21:[2,105],28:[2,105],59:[2,105],76:[2,105],84:[2,105],85:[2,105],86:[2,105],87:[2,105],88:[2,105],89:[2,105],90:[2,105],91:[2,105],92:[2,105],93:[2,105],94:[2,105],95:[2,105],96:[2,105],97:[2,105],107:[2,105],108:[2,105],113:[2,105],116:[2,105],117:[2,105],156:[2,105],157:[2,105]},{9:[2,132],11:[2,132],13:[2,132],21:[2,132],28:[2,132],59:[2,132],76:[2,132],84:[2,132],85:[2,132],86:[2,132],87:[2,132],88:[2,132],89:[2,132],90:[2,132],91:[2,132],92:[2,132],93:[2,132],94:[2,132],95:[2,132],96:[2,132],97:[2,132],107:[2,132],108:[2,132],113:[2,132],116:[2,132],117:[2,132],156:[2,132],157:[2,132]},{9:[2,133],11:[2,133],13:[2,133],21:[2,133],28:[2,133],59:[2,133],76:[2,133],84:[2,133],85:[2,133],86:[2,133],87:[2,133],88:[2,133],89:[2,133],90:[2,133],91:[2,133],92:[2,133],93:[2,133],94:[2,133],95:[2,133],96:[2,133],97:[2,133],107:[2,133],108:[2,133],113:[2,133],116:[2,133],117:[2,133],156:[2,133],157:[2,133]},{9:[2,141],11:[2,141],13:[2,141],21:[2,141],28:[1,32],80:55,116:[1,30],117:[1,31],118:54,122:53,156:[2,141]},{9:[2,136],11:[2,136],13:[2,136],21:[2,136],59:[2,136],61:[2,136],76:[2,136],165:[2,136]},{6:33,9:[1,34],28:[1,32],82:56,118:11,119:12,156:[1,38]},{102:57,156:[2,109],165:[2,109]},{102:58,156:[2,109],165:[2,109]},{9:[2,217],11:[2,217],13:[2,217],21:[2,217],28:[2,217],59:[2,217],76:[2,217],84:[2,217],85:[2,217],86:[2,217],87:[2,217],88:[2,217],89:[2,217],90:[2,217],91:[2,217],92:[2,217],93:[2,217],94:[2,217],95:[2,217],96:[2,217],97:[2,217],107:[2,217],108:[2,217],113:[2,217],116:[2,217],117:[2,217],156:[2,217],157:[2,217]},{9:[2,216],11:[2,216],13:[2,216],14:[2,216],16:[2,216],17:[2,216],18:[2,216],19:[2,216],21:[2,216],27:[2,216],28:[2,216],29:[2,216],30:[2,216],34:[2,216],35:[2,216],38:[2,216],39:[2,216],41:[2,216],42:[2,216],43:[2,216],44:[2,216],46:[2,216],47:[2,216],50:[2,216],52:[2,216],54:[2,216],56:[2,216],58:[2,216],59:[2,216],61:[2,216],62:[2,216],63:[2,216],64:[2,216],65:[2,216],66:[2,216],67:[2,216],68:[2,216],69:[2,216],70:[2,216],71:[2,216],76:[2,216],84:[2,216],85:[2,216],86:[2,216],87:[2,216],88:[2,216],89:[2,216],90:[2,216],91:[2,216],92:[2,216],93:[2,216],94:[2,216],95:[2,216],96:[2,216],97:[2,216],107:[2,216],108:[2,216],113:[2,216],116:[2,216],117:[2,216],156:[2,216],157:[2,216],165:[2,216],166:[2,216]},{156:[2,111],165:[2,111]},{156:[2,112],165:[2,112]},{1:[2,210],9:[2,210],28:[2,210],84:[2,210],85:[2,210],86:[2,210],87:[2,210],88:[2,210],89:[2,210],90:[2,210],91:[2,210],92:[2,210],93:[2,210],94:[2,210],95:[2,210],96:[2,210],97:[2,210],107:[2,210],108:[2,210],113:[2,210],116:[2,210],117:[2,210],156:[2,210],157:[2,210]},{6:33,9:[1,34],28:[1,32],76:[1,60],77:61,81:62,82:59,118:11,119:12,156:[1,38]},{1:[2,214],9:[2,214],28:[2,214],84:[2,214],85:[2,214],86:[2,214],87:[2,214],88:[2,214],89:[2,214],90:[2,214],91:[2,214],92:[2,214],93:[2,214],94:[2,214],95:[2,214],96:[2,214],97:[2,214],107:[2,214],108:[2,214],113:[2,214],116:[2,214],117:[2,214],156:[2,214],157:[2,214]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,73:68,74:77,76:[1,81],78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,104:45,106:66,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],130:67,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,140:63,141:64,142:65,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],157:[1,37],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46],166:[1,69]},{2:[2,225],9:[2,225],18:[2,225],19:[2,225],25:[2,225],27:[2,225],28:[2,225],29:[2,225],30:[2,225],31:[2,225],32:[2,225],76:[2,225],84:[2,225],85:[2,225],86:[2,225],87:[2,225],88:[2,225],89:[2,225],90:[2,225],91:[2,225],92:[2,225],93:[2,225],94:[2,225],95:[2,225],96:[2,225],97:[2,225],107:[2,225],108:[2,225],113:[2,225],116:[2,225],117:[2,225],137:[2,225],138:[2,225],144:[2,225],146:[2,225],147:[2,225],148:[2,225],149:[2,225],150:[2,225],151:[2,225],152:[2,225],153:[2,225],156:[2,225],157:[2,225],158:[2,225],159:[2,225],160:[2,225],161:[2,225],162:[2,225],163:[2,225],165:[2,225],166:[2,225]},{2:[2,227],9:[2,227],18:[2,227],19:[2,227],25:[2,227],27:[2,227],28:[2,227],29:[2,227],30:[2,227],31:[2,227],32:[2,227],76:[2,227],84:[2,227],85:[2,227],86:[2,227],87:[2,227],88:[2,227],89:[2,227],90:[2,227],91:[2,227],92:[2,227],93:[2,227],94:[2,227],95:[2,227],96:[2,227],97:[2,227],107:[2,227],108:[2,227],113:[2,227],116:[2,227],117:[2,227],137:[2,227],138:[2,227],144:[2,227],146:[2,227],147:[2,227],148:[2,227],149:[2,227],150:[2,227],151:[2,227],152:[2,227],153:[2,227],156:[2,227],157:[2,227],158:[2,227],159:[2,227],160:[2,227],161:[2,227],162:[2,227],163:[2,227],165:[2,227],166:[2,227]},{9:[2,80],11:[2,80],13:[2,80],21:[2,80],28:[2,80],76:[2,80],156:[2,80]},{9:[2,82],11:[2,82],13:[2,82],21:[2,82],28:[2,82],76:[2,82],156:[2,82]},{9:[2,84],11:[2,84],13:[2,84],21:[2,84],28:[2,84],76:[2,84],156:[2,84]},{9:[2,215],11:[2,134],13:[1,51],21:[2,134],59:[2,134],61:[2,134],76:[2,134],120:52,165:[2,134]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,14:[1,128],18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:129,72:127,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{9:[1,132]},{9:[2,142],11:[2,142],13:[2,142],21:[2,142],28:[1,32],80:134,116:[1,30],117:[1,31],118:133,156:[2,142]},{9:[2,143],11:[2,143],13:[2,143],21:[2,143],156:[2,143]},{9:[2,145],11:[2,145],13:[2,145],21:[2,145],28:[2,145],116:[2,145],117:[2,145],156:[2,145]},{11:[1,135]},{6:136,103:137,156:[1,38],165:[2,110]},{6:138,103:139,156:[1,38],165:[2,110]},{21:[2,87],61:[1,141],76:[2,87],104:45,132:140,139:44,165:[1,46]},{1:[2,76],2:[2,76],9:[2,76],18:[2,76],19:[2,76],25:[2,76],27:[2,76],28:[2,76],29:[2,76],30:[2,76],31:[2,76],32:[2,76],76:[2,76],84:[2,76],85:[2,76],86:[2,76],87:[2,76],88:[2,76],89:[2,76],90:[2,76],91:[2,76],92:[2,76],93:[2,76],94:[2,76],95:[2,76],96:[2,76],97:[2,76],107:[2,76],108:[2,76],113:[2,76],116:[2,76],117:[2,76],137:[2,76],138:[2,76],144:[2,76],146:[2,76],147:[2,76],148:[2,76],149:[2,76],150:[2,76],151:[2,76],152:[2,76],153:[2,76],156:[2,76],157:[2,76],158:[2,76],159:[2,76],160:[2,76],161:[2,76],162:[2,76],163:[2,76],165:[2,76],166:[2,76]},{21:[1,143],76:[1,142]},{21:[2,85],76:[2,85]},{1:[2,185],2:[2,185],9:[2,185],18:[2,185],19:[2,185],25:[2,185],27:[2,185],28:[2,185],29:[2,185],30:[2,185],31:[2,185],32:[2,185],76:[2,185],84:[2,185],85:[2,185],86:[2,185],87:[2,185],88:[2,185],89:[2,185],90:[2,185],91:[2,185],92:[2,185],93:[2,185],94:[2,185],95:[2,185],96:[2,185],97:[2,185],107:[2,185],108:[2,185],113:[2,185],116:[2,185],117:[2,185],137:[2,185],138:[2,185],144:[2,185],145:[2,185],146:[2,185],147:[2,185],148:[2,185],149:[2,185],150:[2,185],151:[2,185],152:[2,185],153:[2,185],156:[2,185],157:[2,185],158:[2,185],159:[2,185],160:[2,185],161:[2,185],162:[2,185],163:[2,185],165:[2,185],166:[2,185]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],84:[2,194],85:[2,194],86:[2,194],87:[2,194],88:[2,194],89:[2,194],90:[2,194],91:[2,194],92:[2,194],93:[2,194],94:[2,194],95:[2,194],96:[2,194],97:[2,194],104:45,106:66,107:[2,194],108:[2,194],113:[2,194],116:[2,194],117:[2,194],130:145,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,140:144,143:146,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],157:[2,194],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46],166:[1,69]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,73:149,74:77,76:[1,81],78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,104:45,106:66,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],130:67,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,140:147,141:148,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],157:[1,37],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46],166:[1,69]},{1:[2,226],2:[2,226],9:[2,226],18:[2,226],19:[2,226],25:[2,226],27:[2,226],28:[2,226],29:[2,226],30:[2,226],31:[2,226],32:[2,226],76:[2,226],84:[2,226],85:[2,226],86:[2,226],87:[2,226],88:[2,226],89:[2,226],90:[2,226],91:[2,226],92:[2,226],93:[2,226],94:[2,226],95:[2,226],96:[2,226],97:[2,226],107:[2,226],108:[2,226],113:[2,226],116:[2,226],117:[2,226],137:[2,226],138:[2,226],144:[2,226],145:[2,226],146:[2,226],147:[2,226],148:[2,226],149:[2,226],150:[2,226],151:[2,226],152:[2,226],153:[2,226],156:[2,226],157:[2,226],158:[2,226],159:[2,226],160:[2,226],161:[2,226],162:[2,226],163:[2,226],165:[2,226],166:[2,226]},{2:[2,191],9:[2,191],18:[2,191],19:[2,191],25:[2,191],27:[2,191],28:[2,191],29:[2,191],30:[2,191],31:[2,191],32:[2,191],76:[2,191],84:[2,191],85:[2,191],86:[2,191],87:[2,191],88:[2,191],89:[2,191],90:[2,191],91:[2,191],92:[2,191],93:[2,191],94:[2,191],95:[2,191],96:[2,191],97:[2,191],107:[2,191],108:[2,191],113:[2,191],116:[2,191],117:[2,191],137:[2,191],138:[2,191],144:[2,191],146:[2,191],147:[2,191],148:[2,191],149:[2,191],150:[2,191],151:[2,191],152:[2,191],153:[2,191],156:[2,191],157:[2,191],158:[2,191],159:[2,191],160:[2,191],161:[2,191],162:[2,191],163:[2,191],165:[2,191],166:[2,191]},{2:[2,189],9:[2,189],18:[2,189],19:[2,189],25:[2,189],27:[2,189],28:[2,189],29:[2,189],30:[2,189],31:[2,189],32:[2,189],76:[2,189],84:[2,189],85:[2,189],86:[2,189],87:[2,189],88:[2,189],89:[2,189],90:[2,189],91:[2,189],92:[2,189],93:[2,189],94:[2,189],95:[2,189],96:[2,189],97:[2,189],107:[2,189],108:[2,189],113:[2,189],116:[2,189],117:[2,189],137:[2,189],138:[2,189],144:[2,189],146:[2,189],147:[2,189],148:[2,189],149:[2,189],150:[2,189],151:[2,189],152:[2,189],153:[2,189],156:[2,189],157:[2,189],158:[2,189],159:[2,189],160:[2,189],161:[2,189],162:[2,189],163:[2,189],165:[2,189],166:[2,189]},{1:[2,228],2:[2,228],9:[2,228],11:[2,228],13:[2,228],18:[2,228],19:[2,228],21:[2,228],25:[2,228],27:[2,228],28:[2,228],29:[2,228],30:[2,228],31:[2,228],32:[2,228],59:[2,228],76:[2,228],84:[2,228],85:[2,228],86:[2,228],87:[2,228],88:[2,228],89:[2,228],90:[2,228],91:[2,228],92:[2,228],93:[2,228],94:[2,228],95:[2,228],96:[2,228],97:[2,228],107:[2,228],108:[2,228],113:[2,228],116:[2,228],117:[2,228],137:[2,228],138:[2,228],144:[2,228],145:[2,228],146:[2,228],147:[2,228],148:[2,228],149:[2,228],150:[2,228],151:[2,228],152:[2,228],153:[2,228],156:[2,228],157:[2,228],158:[2,228],159:[2,228],160:[2,228],161:[2,228],162:[2,228],163:[2,228],165:[2,228],166:[2,228]},{2:[2,175],9:[2,175],18:[2,175],19:[2,175],25:[2,175],27:[2,175],28:[2,175],29:[2,175],30:[2,175],31:[2,175],32:[2,175],76:[2,175],84:[2,175],85:[2,175],86:[2,175],87:[2,175],88:[2,175],89:[2,175],90:[2,175],91:[2,175],92:[2,175],93:[2,175],94:[2,175],95:[2,175],96:[2,175],97:[2,175],107:[2,175],108:[2,175],113:[2,175],116:[2,175],117:[2,175],137:[2,175],138:[2,175],144:[2,175],145:[2,175],146:[2,175],147:[2,175],148:[2,175],149:[2,175],150:[2,175],151:[2,175],152:[2,175],153:[2,175],156:[2,175],157:[2,175],158:[2,175],159:[2,175],160:[2,175],161:[2,175],162:[2,175],163:[2,175],165:[2,175],166:[2,175]},{2:[2,176],9:[2,176],18:[2,176],19:[2,176],25:[2,176],27:[2,176],28:[2,176],29:[2,176],30:[2,176],31:[2,176],32:[2,176],76:[2,176],84:[2,176],85:[2,176],86:[2,176],87:[2,176],88:[2,176],89:[2,176],90:[2,176],91:[2,176],92:[2,176],93:[2,176],94:[2,176],95:[2,176],96:[2,176],97:[2,176],107:[2,176],108:[2,176],113:[2,176],116:[2,176],117:[2,176],137:[2,176],138:[2,176],144:[2,176],145:[2,176],146:[2,176],147:[2,176],148:[2,176],149:[2,176],150:[2,176],151:[2,176],152:[2,176],153:[2,176],156:[2,176],157:[2,176],158:[2,176],159:[2,176],160:[2,176],161:[2,176],162:[2,176],163:[2,176],165:[2,176],166:[2,176]},{2:[2,177],9:[2,177],18:[2,177],19:[2,177],25:[2,177],27:[2,177],28:[2,177],29:[2,177],30:[2,177],31:[2,177],32:[2,177],76:[2,177],84:[2,177],85:[2,177],86:[2,177],87:[2,177],88:[2,177],89:[2,177],90:[2,177],91:[2,177],92:[2,177],93:[2,177],94:[2,177],95:[2,177],96:[2,177],97:[2,177],107:[2,177],108:[2,177],113:[2,177],116:[2,177],117:[2,177],137:[2,177],138:[2,177],144:[2,177],145:[2,177],146:[2,177],147:[2,177],148:[2,177],149:[2,177],150:[2,177],151:[2,177],152:[2,177],153:[2,177],156:[2,177],157:[2,177],158:[2,177],159:[2,177],160:[2,177],161:[2,177],162:[2,177],163:[2,177],165:[2,177],166:[2,177]},{2:[2,178],9:[2,178],18:[2,178],19:[2,178],25:[2,178],27:[2,178],28:[2,178],29:[2,178],30:[2,178],31:[2,178],32:[2,178],76:[2,178],84:[2,178],85:[2,178],86:[2,178],87:[2,178],88:[2,178],89:[2,178],90:[2,178],91:[2,178],92:[2,178],93:[2,178],94:[2,178],95:[2,178],96:[2,178],97:[2,178],107:[2,178],108:[2,178],113:[2,178],116:[2,178],117:[2,178],137:[2,178],138:[2,178],144:[2,178],145:[2,178],146:[2,178],147:[2,178],148:[2,178],149:[2,178],150:[2,178],151:[2,178],152:[2,178],153:[2,178],156:[2,178],157:[2,178],158:[2,178],159:[2,178],160:[2,178],161:[2,178],162:[2,178],163:[2,178],165:[2,178],166:[2,178]},{2:[2,179],9:[2,179],18:[2,179],19:[2,179],25:[2,179],27:[2,179],28:[2,179],29:[2,179],30:[2,179],31:[2,179],32:[2,179],76:[2,179],84:[2,179],85:[2,179],86:[2,179],87:[2,179],88:[2,179],89:[2,179],90:[2,179],91:[2,179],92:[2,179],93:[2,179],94:[2,179],95:[2,179],96:[2,179],97:[2,179],107:[2,179],108:[2,179],113:[2,179],116:[2,179],117:[2,179],137:[2,179],138:[2,179],144:[2,179],145:[2,179],146:[2,179],147:[2,179],148:[2,179],149:[2,179],150:[2,179],151:[2,179],152:[2,179],153:[2,179],156:[2,179],157:[2,179],158:[2,179],159:[2,179],160:[2,179],161:[2,179],162:[2,179],163:[2,179],165:[2,179],166:[2,179]},{2:[2,180],9:[2,180],18:[2,180],19:[2,180],25:[2,180],27:[2,180],28:[2,180],29:[2,180],30:[2,180],31:[2,180],32:[2,180],76:[2,180],84:[2,180],85:[2,180],86:[2,180],87:[2,180],88:[2,180],89:[2,180],90:[2,180],91:[2,180],92:[2,180],93:[2,180],94:[2,180],95:[2,180],96:[2,180],97:[2,180],107:[2,180],108:[2,180],113:[2,180],116:[2,180],117:[2,180],137:[2,180],138:[2,180],144:[2,180],145:[2,180],146:[2,180],147:[2,180],148:[2,180],149:[2,180],150:[2,180],151:[2,180],152:[2,180],153:[2,180],156:[2,180],157:[2,180],158:[2,180],159:[2,180],160:[2,180],161:[2,180],162:[2,180],163:[2,180],165:[2,180],166:[2,180]},{2:[2,181],9:[2,181],18:[2,181],19:[2,181],25:[2,181],27:[2,181],28:[2,181],29:[2,181],30:[2,181],31:[2,181],32:[2,181],76:[2,181],84:[2,181],85:[2,181],86:[2,181],87:[2,181],88:[2,181],89:[2,181],90:[2,181],91:[2,181],92:[2,181],93:[2,181],94:[2,181],95:[2,181],96:[2,181],97:[2,181],107:[2,181],108:[2,181],113:[2,181],116:[2,181],117:[2,181],137:[2,181],138:[2,181],144:[2,181],145:[2,181],146:[2,181],147:[2,181],148:[2,181],149:[2,181],150:[2,181],151:[2,181],152:[2,181],153:[2,181],156:[2,181],157:[2,181],158:[2,181],159:[2,181],160:[2,181],161:[2,181],162:[2,181],163:[2,181],165:[2,181],166:[2,181]},{9:[2,78],28:[2,78],75:150,76:[2,78],156:[2,78]},{9:[2,2],13:[2,2],16:[2,2],17:[2,2],18:[2,2],19:[2,2],21:[2,2],27:[2,2],28:[2,2],29:[2,2],30:[2,2],34:[2,2],35:[2,2],38:[2,2],39:[2,2],41:[2,2],42:[2,2],43:[2,2],44:[2,2],46:[2,2],47:[2,2],50:[2,2],52:[2,2],54:[2,2],56:[2,2],58:[2,2],59:[1,151],61:[2,2],62:[2,2],63:[2,2],64:[2,2],65:[2,2],66:[2,2],67:[2,2],68:[2,2],69:[2,2],70:[2,2],71:[2,2],76:[2,2]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:129,72:152,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{59:[1,153]},{2:[2,195],9:[2,195],11:[2,195],18:[2,195],19:[2,195],25:[2,195],27:[2,195],28:[2,195],29:[2,195],30:[2,195],31:[2,195],32:[2,195],76:[2,195],84:[2,195],85:[2,195],86:[2,195],87:[2,195],88:[2,195],89:[2,195],90:[2,195],91:[2,195],92:[2,195],93:[2,195],94:[2,195],95:[2,195],96:[2,195],97:[2,195],107:[2,195],108:[2,195],113:[2,195],116:[2,195],117:[2,195],137:[2,195],138:[2,195],144:[2,195],145:[2,195],146:[2,195],147:[2,195],148:[2,195],149:[2,195],150:[2,195],151:[2,195],152:[2,195],153:[2,195],156:[2,195],157:[2,195],158:[2,195],159:[2,195],160:[2,195],161:[2,195],162:[2,195],163:[2,195],165:[2,195],166:[2,195]},{21:[1,155],76:[1,154]},{9:[1,156]},{9:[1,157]},{9:[1,158]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:159,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{9:[1,160]},{6:161,156:[1,38]},{76:[1,162]},{76:[1,163]},{5:102,6:131,7:110,8:111,9:[1,112],10:165,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,164],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[2,73],14:[2,73],21:[2,73],59:[2,73],76:[2,73]},{11:[2,60],14:[2,60],21:[2,60],59:[2,60],76:[2,60],166:[2,60]},{11:[2,28],14:[2,28],21:[2,28],27:[2,28],28:[2,28],29:[2,28],30:[2,28],34:[2,28],35:[2,28],38:[2,28],39:[2,28],41:[2,28],42:[2,28],43:[2,28],44:[2,28],46:[2,28],47:[2,28],50:[2,28],52:[2,28],54:[2,28],56:[2,28],58:[2,28],59:[2,28],60:166,61:[1,167],62:[1,168],63:[1,169],64:[1,170],65:[1,171],66:[1,172],67:[1,173],68:[1,174],69:[1,175],70:[1,176],71:[1,177],76:[2,28],166:[2,28]},{11:[2,58],14:[2,58],21:[2,58],56:[1,179],58:[1,178],59:[2,58],76:[2,58],166:[2,58]},{9:[1,181],11:[2,16],13:[1,180],14:[2,16],16:[1,182],17:[1,183],18:[1,184],19:[1,185],21:[2,16],27:[2,16],28:[2,16],29:[2,16],30:[2,16],34:[2,16],35:[2,16],38:[2,16],39:[2,16],41:[2,16],42:[2,16],43:[2,16],44:[2,16],46:[2,16],47:[2,16],50:[2,16],52:[2,16],54:[2,16],56:[2,16],58:[2,16],59:[2,16],61:[2,16],62:[2,16],63:[2,16],64:[2,16],65:[2,16],66:[2,16],67:[2,16],68:[2,16],69:[2,16],70:[2,16],71:[2,16],76:[2,16],166:[2,16]},{5:102,6:131,7:110,8:111,9:[1,187],12:96,18:[1,97],19:[1,98],22:186,23:99,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,187],12:96,18:[1,97],19:[1,98],22:188,23:99,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:189,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,191],12:96,18:[1,97],19:[1,98],22:190,23:99,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[2,56],14:[2,56],21:[2,56],54:[1,192],56:[2,56],58:[2,56],59:[2,56],76:[2,56],166:[2,56]},{9:[2,6],11:[2,6],13:[2,6],14:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],21:[2,6],27:[2,6],28:[2,6],29:[2,6],30:[2,6],34:[2,6],35:[2,6],38:[2,6],39:[2,6],41:[2,6],42:[2,6],43:[2,6],44:[2,6],46:[2,6],47:[2,6],50:[2,6],52:[2,6],54:[2,6],56:[2,6],58:[2,6],59:[2,6],61:[2,6],62:[2,6],63:[2,6],64:[2,6],65:[2,6],66:[2,6],67:[2,6],68:[2,6],69:[2,6],70:[2,6],71:[2,6],76:[2,6],166:[2,6]},{9:[2,22],18:[2,22],19:[2,22],25:[2,22],27:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22],32:[2,22],156:[2,22],158:[2,22],159:[2,22],160:[2,22],161:[2,22],162:[2,22],163:[2,22]},{9:[2,23],18:[2,23],19:[2,23],25:[2,23],27:[2,23],28:[2,23],29:[2,23],30:[2,23],31:[2,23],32:[2,23],156:[2,23],158:[2,23],159:[2,23],160:[2,23],161:[2,23],162:[2,23],163:[2,23]},{9:[2,24],18:[2,24],19:[2,24],25:[2,24],27:[2,24],28:[2,24],29:[2,24],30:[2,24],31:[2,24],32:[2,24],156:[2,24],158:[2,24],159:[2,24],160:[2,24],161:[2,24],162:[2,24],163:[2,24]},{9:[2,25],18:[2,25],19:[2,25],25:[2,25],27:[2,25],28:[2,25],29:[2,25],30:[2,25],31:[2,25],32:[2,25],156:[2,25],158:[2,25],159:[2,25],160:[2,25],161:[2,25],162:[2,25],163:[2,25]},{9:[2,26],18:[2,26],19:[2,26],25:[2,26],27:[2,26],28:[2,26],29:[2,26],30:[2,26],31:[2,26],32:[2,26],156:[2,26],158:[2,26],159:[2,26],160:[2,26],161:[2,26],162:[2,26],163:[2,26]},{9:[2,27],18:[2,27],19:[2,27],25:[2,27],27:[2,27],28:[2,27],29:[2,27],30:[2,27],31:[2,27],32:[2,27],156:[2,27],158:[2,27],159:[2,27],160:[2,27],161:[2,27],162:[2,27],163:[2,27]},{11:[2,54],14:[2,54],21:[2,54],52:[1,193],54:[2,54],56:[2,54],58:[2,54],59:[2,54],76:[2,54],166:[2,54]},{9:[2,3],11:[2,3],13:[2,3],14:[2,3],16:[2,3],17:[2,3],18:[2,3],19:[2,3],21:[2,3],27:[2,3],28:[2,3],29:[2,3],30:[2,3],34:[2,3],35:[2,3],38:[2,3],39:[2,3],41:[2,3],42:[2,3],43:[2,3],44:[2,3],46:[2,3],47:[2,3],50:[2,3],52:[2,3],54:[2,3],56:[2,3],58:[2,3],59:[2,3],61:[2,3],62:[2,3],63:[2,3],64:[2,3],65:[2,3],66:[2,3],67:[2,3],68:[2,3],69:[2,3],70:[2,3],71:[2,3],76:[2,3],166:[2,3]},{9:[2,4],11:[2,4],13:[2,4],14:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],21:[2,4],27:[2,4],28:[2,4],29:[2,4],30:[2,4],34:[2,4],35:[2,4],38:[2,4],39:[2,4],41:[2,4],42:[2,4],43:[2,4],44:[2,4],46:[2,4],47:[2,4],50:[2,4],52:[2,4],54:[2,4],56:[2,4],58:[2,4],59:[2,4],61:[2,4],62:[2,4],63:[2,4],64:[2,4],65:[2,4],66:[2,4],67:[2,4],68:[2,4],69:[2,4],70:[2,4],71:[2,4],76:[2,4],166:[2,4]},{5:102,6:131,7:110,8:111,9:[1,112],10:194,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],26:195,27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],110:196,113:[1,36],116:[1,30],117:[1,31],156:[1,38],157:[1,37],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[2,52],14:[2,52],21:[2,52],50:[1,199],52:[2,52],54:[2,52],56:[2,52],58:[2,52],59:[2,52],76:[2,52],166:[2,52]},{9:[2,218],11:[2,218],13:[2,218],14:[2,218],16:[2,218],17:[2,218],18:[2,218],19:[2,218],21:[2,218],27:[2,218],28:[2,218],29:[2,218],30:[2,218],34:[2,218],35:[2,218],38:[2,218],39:[2,218],41:[2,218],42:[2,218],43:[2,218],44:[2,218],46:[2,218],47:[2,218],50:[2,218],52:[2,218],54:[2,218],56:[2,218],58:[2,218],59:[2,218],61:[2,218],62:[2,218],63:[2,218],64:[2,218],65:[2,218],66:[2,218],67:[2,218],68:[2,218],69:[2,218],70:[2,218],71:[2,218],76:[2,218],166:[2,218]},{9:[2,219],11:[2,219],13:[2,219],14:[2,219],16:[2,219],17:[2,219],18:[2,219],19:[2,219],21:[2,219],27:[2,219],28:[2,219],29:[2,219],30:[2,219],34:[2,219],35:[2,219],38:[2,219],39:[2,219],41:[2,219],42:[2,219],43:[2,219],44:[2,219],46:[2,219],47:[2,219],50:[2,219],52:[2,219],54:[2,219],56:[2,219],58:[2,219],59:[2,219],61:[2,219],62:[2,219],63:[2,219],64:[2,219],65:[2,219],66:[2,219],67:[2,219],68:[2,219],69:[2,219],70:[2,219],71:[2,219],76:[2,219],166:[2,219]},{9:[2,220],11:[2,220],13:[2,220],14:[2,220],16:[2,220],17:[2,220],18:[2,220],19:[2,220],21:[2,220],27:[2,220],28:[2,220],29:[2,220],30:[2,220],34:[2,220],35:[2,220],38:[2,220],39:[2,220],41:[2,220],42:[2,220],43:[2,220],44:[2,220],46:[2,220],47:[2,220],50:[2,220],52:[2,220],54:[2,220],56:[2,220],58:[2,220],59:[2,220],61:[2,220],62:[2,220],63:[2,220],64:[2,220],65:[2,220],66:[2,220],67:[2,220],68:[2,220],69:[2,220],70:[2,220],71:[2,220],76:[2,220],166:[2,220]},{9:[2,221],11:[2,221],13:[2,221],14:[2,221],16:[2,221],17:[2,221],18:[2,221],19:[2,221],21:[2,221],27:[2,221],28:[2,221],29:[2,221],30:[2,221],34:[2,221],35:[2,221],38:[2,221],39:[2,221],41:[2,221],42:[2,221],43:[2,221],44:[2,221],46:[2,221],47:[2,221],50:[2,221],52:[2,221],54:[2,221],56:[2,221],58:[2,221],59:[2,221],61:[2,221],62:[2,221],63:[2,221],64:[2,221],65:[2,221],66:[2,221],67:[2,221],68:[2,221],69:[2,221],70:[2,221],71:[2,221],76:[2,221],166:[2,221]},{9:[2,222],11:[2,222],13:[2,222],14:[2,222],16:[2,222],17:[2,222],18:[2,222],19:[2,222],21:[2,222],27:[2,222],28:[2,222],29:[2,222],30:[2,222],34:[2,222],35:[2,222],38:[2,222],39:[2,222],41:[2,222],42:[2,222],43:[2,222],44:[2,222],46:[2,222],47:[2,222],50:[2,222],52:[2,222],54:[2,222],56:[2,222],58:[2,222],59:[2,222],61:[2,222],62:[2,222],63:[2,222],64:[2,222],65:[2,222],66:[2,222],67:[2,222],68:[2,222],69:[2,222],70:[2,222],71:[2,222],76:[2,222],166:[2,222]},{9:[2,223],11:[2,223],13:[2,223],14:[2,223],16:[2,223],17:[2,223],18:[2,223],19:[2,223],21:[2,223],27:[2,223],28:[2,223],29:[2,223],30:[2,223],34:[2,223],35:[2,223],38:[2,223],39:[2,223],41:[2,223],42:[2,223],43:[2,223],44:[2,223],46:[2,223],47:[2,223],50:[2,223],52:[2,223],54:[2,223],56:[2,223],58:[2,223],59:[2,223],61:[2,223],62:[2,223],63:[2,223],64:[2,223],65:[2,223],66:[2,223],67:[2,223],68:[2,223],69:[2,223],70:[2,223],71:[2,223],76:[2,223],166:[2,223]},{11:[2,50],14:[2,50],21:[2,50],27:[1,200],50:[2,50],52:[2,50],54:[2,50],56:[2,50],58:[2,50],59:[2,50],76:[2,50],166:[2,50]},{11:[2,48],14:[2,48],21:[2,48],27:[2,48],46:[1,201],47:[1,202],50:[2,48],52:[2,48],54:[2,48],56:[2,48],58:[2,48],59:[2,48],76:[2,48],166:[2,48]},{11:[2,45],14:[2,45],21:[2,45],27:[2,45],41:[1,203],42:[1,204],43:[1,205],44:[1,206],46:[2,45],47:[2,45],50:[2,45],52:[2,45],54:[2,45],56:[2,45],58:[2,45],59:[2,45],76:[2,45],166:[2,45]},{11:[2,40],14:[2,40],21:[2,40],27:[2,40],38:[1,207],39:[1,208],41:[2,40],42:[2,40],43:[2,40],44:[2,40],46:[2,40],47:[2,40],50:[2,40],52:[2,40],54:[2,40],56:[2,40],58:[2,40],59:[2,40],76:[2,40],166:[2,40]},{11:[2,37],14:[2,37],21:[2,37],27:[2,37],29:[1,209],30:[1,210],38:[2,37],39:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37],46:[2,37],47:[2,37],50:[2,37],52:[2,37],54:[2,37],56:[2,37],58:[2,37],59:[2,37],76:[2,37],166:[2,37]},{11:[2,34],14:[2,34],21:[2,34],27:[2,34],28:[1,211],29:[2,34],30:[2,34],34:[1,212],35:[1,213],38:[2,34],39:[2,34],41:[2,34],42:[2,34],43:[2,34],44:[2,34],46:[2,34],47:[2,34],50:[2,34],52:[2,34],54:[2,34],56:[2,34],58:[2,34],59:[2,34],76:[2,34],166:[2,34]},{11:[2,30],14:[2,30],21:[2,30],27:[2,30],28:[2,30],29:[2,30],30:[2,30],34:[2,30],35:[2,30],38:[2,30],39:[2,30],41:[2,30],42:[2,30],43:[2,30],44:[2,30],46:[2,30],47:[2,30],50:[2,30],52:[2,30],54:[2,30],56:[2,30],58:[2,30],59:[2,30],76:[2,30],166:[2,30]},{14:[1,214]},{9:[2,139],11:[2,139],13:[2,139],21:[2,139],59:[2,139],61:[2,139],76:[2,139],165:[2,139]},{14:[2,75],21:[2,75],59:[2,75],76:[2,75],166:[2,75]},{11:[2,28],14:[2,28],21:[2,28],27:[2,28],28:[2,28],29:[2,28],30:[2,28],34:[2,28],35:[2,28],38:[2,28],39:[2,28],41:[2,28],42:[2,28],43:[2,28],44:[2,28],46:[2,28],47:[2,28],50:[2,28],52:[2,28],54:[2,28],56:[2,28],58:[2,28],59:[2,28],61:[2,28],62:[2,28],63:[2,28],64:[2,28],65:[2,28],66:[2,28],67:[2,28],68:[2,28],69:[2,28],70:[2,28],71:[2,28],76:[2,28],166:[2,28]},{9:[2,2],11:[2,2],13:[2,2],14:[2,2],16:[2,2],17:[2,2],18:[2,2],19:[2,2],21:[2,2],27:[2,2],28:[2,2],29:[2,2],30:[2,2],34:[2,2],35:[2,2],38:[2,2],39:[2,2],41:[2,2],42:[2,2],43:[2,2],44:[2,2],46:[2,2],47:[2,2],50:[2,2],52:[2,2],54:[2,2],56:[2,2],58:[2,2],59:[2,2],61:[2,2],62:[2,2],63:[2,2],64:[2,2],65:[2,2],66:[2,2],67:[2,2],68:[2,2],69:[2,2],70:[2,2],71:[2,2],76:[2,2],166:[2,2]},{74:218,78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],121:215,123:216,125:217,157:[1,37]},{9:[2,144],11:[2,144],13:[2,144],21:[2,144],156:[2,144]},{9:[2,146],11:[2,146],13:[2,146],21:[2,146],28:[2,146],116:[2,146],117:[2,146],156:[2,146]},{9:[2,137],11:[2,137],13:[2,137],21:[2,137],59:[2,137],61:[2,137],76:[2,137],165:[2,137]},{9:[2,110],11:[2,110],13:[2,110],21:[2,110],28:[2,110],59:[2,110],76:[2,110],84:[2,110],85:[2,110],86:[2,110],87:[2,110],88:[2,110],89:[2,110],90:[2,110],91:[2,110],92:[2,110],93:[2,110],94:[2,110],95:[2,110],96:[2,110],97:[2,110],103:219,107:[2,110],108:[2,110],113:[2,110],116:[2,110],117:[2,110],156:[2,110],157:[2,110],165:[2,110]},{104:220,165:[1,46]},{9:[2,110],11:[2,110],13:[2,110],21:[2,110],28:[2,110],59:[2,110],76:[2,110],84:[2,110],85:[2,110],86:[2,110],87:[2,110],88:[2,110],89:[2,110],90:[2,110],91:[2,110],92:[2,110],93:[2,110],94:[2,110],95:[2,110],96:[2,110],97:[2,110],103:221,107:[2,110],108:[2,110],113:[2,110],116:[2,110],117:[2,110],156:[2,110],157:[2,110],165:[2,110]},{104:222,165:[1,46]},{1:[2,213],9:[2,213],28:[2,213],84:[2,213],85:[2,213],86:[2,213],87:[2,213],88:[2,213],89:[2,213],90:[2,213],91:[2,213],92:[2,213],93:[2,213],94:[2,213],95:[2,213],96:[2,213],97:[2,213],107:[2,213],108:[2,213],113:[2,213],116:[2,213],117:[2,213],156:[2,213],157:[2,213]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],20:224,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,83:223,104:225,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{1:[2,77],2:[2,77],9:[2,77],18:[2,77],19:[2,77],25:[2,77],27:[2,77],28:[2,77],29:[2,77],30:[2,77],31:[2,77],32:[2,77],76:[2,77],84:[2,77],85:[2,77],86:[2,77],87:[2,77],88:[2,77],89:[2,77],90:[2,77],91:[2,77],92:[2,77],93:[2,77],94:[2,77],95:[2,77],96:[2,77],97:[2,77],107:[2,77],108:[2,77],113:[2,77],116:[2,77],117:[2,77],137:[2,77],138:[2,77],144:[2,77],146:[2,77],147:[2,77],148:[2,77],149:[2,77],150:[2,77],151:[2,77],152:[2,77],153:[2,77],156:[2,77],157:[2,77],158:[2,77],159:[2,77],160:[2,77],161:[2,77],162:[2,77],163:[2,77],165:[2,77],166:[2,77]},{6:33,9:[1,34],28:[1,32],81:226,82:227,118:11,119:12,156:[1,38]},{1:[2,186],2:[2,186],9:[2,186],18:[2,186],19:[2,186],25:[2,186],27:[2,186],28:[2,186],29:[2,186],30:[2,186],31:[2,186],32:[2,186],76:[2,186],84:[2,186],85:[2,186],86:[2,186],87:[2,186],88:[2,186],89:[2,186],90:[2,186],91:[2,186],92:[2,186],93:[2,186],94:[2,186],95:[2,186],96:[2,186],97:[2,186],107:[2,186],108:[2,186],113:[2,186],116:[2,186],117:[2,186],137:[2,186],138:[2,186],144:[2,186],145:[2,186],146:[2,186],147:[2,186],148:[2,186],149:[2,186],150:[2,186],151:[2,186],152:[2,186],153:[2,186],156:[2,186],157:[2,186],158:[2,186],159:[2,186],160:[2,186],161:[2,186],162:[2,186],163:[2,186],165:[2,186],166:[2,186]},{2:[2,192],9:[2,192],18:[2,192],19:[2,192],25:[2,192],27:[2,192],28:[2,192],29:[2,192],30:[2,192],31:[2,192],32:[2,192],76:[2,192],84:[2,192],85:[2,192],86:[2,192],87:[2,192],88:[2,192],89:[2,192],90:[2,192],91:[2,192],92:[2,192],93:[2,192],94:[2,192],95:[2,192],96:[2,192],97:[2,192],107:[2,192],108:[2,192],113:[2,192],116:[2,192],117:[2,192],137:[2,192],138:[2,192],144:[2,192],146:[2,192],147:[2,192],148:[2,192],149:[2,192],150:[2,192],151:[2,192],152:[2,192],153:[2,192],156:[2,192],157:[2,192],158:[2,192],159:[2,192],160:[2,192],161:[2,192],162:[2,192],163:[2,192],165:[2,192],166:[2,192]},{73:228,74:77,78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],157:[1,37]},{1:[2,187],2:[2,187],9:[2,187],18:[2,187],19:[2,187],25:[2,187],27:[2,187],28:[2,187],29:[2,187],30:[2,187],31:[2,187],32:[2,187],76:[2,187],84:[2,187],85:[2,187],86:[2,187],87:[2,187],88:[2,187],89:[2,187],90:[2,187],91:[2,187],92:[2,187],93:[2,187],94:[2,187],95:[2,187],96:[2,187],97:[2,187],107:[2,187],108:[2,187],113:[2,187],116:[2,187],117:[2,187],137:[2,187],138:[2,187],144:[2,187],145:[2,187],146:[2,187],147:[2,187],148:[2,187],149:[2,187],150:[2,187],151:[2,187],152:[2,187],153:[2,187],156:[2,187],157:[2,187],158:[2,187],159:[2,187],160:[2,187],161:[2,187],162:[2,187],163:[2,187],165:[2,187],166:[2,187]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],84:[2,194],85:[2,194],86:[2,194],87:[2,194],88:[2,194],89:[2,194],90:[2,194],91:[2,194],92:[2,194],93:[2,194],94:[2,194],95:[2,194],96:[2,194],97:[2,194],104:45,106:66,107:[2,194],108:[2,194],113:[2,194],116:[2,194],117:[2,194],130:145,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,140:229,143:146,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],157:[2,194],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46],166:[1,69]},{2:[2,190],9:[2,190],18:[2,190],19:[2,190],25:[2,190],27:[2,190],28:[2,190],29:[2,190],30:[2,190],31:[2,190],32:[2,190],76:[2,190],84:[2,190],85:[2,190],86:[2,190],87:[2,190],88:[2,190],89:[2,190],90:[2,190],91:[2,190],92:[2,190],93:[2,190],94:[2,190],95:[2,190],96:[2,190],97:[2,190],107:[2,190],108:[2,190],113:[2,190],116:[2,190],117:[2,190],137:[2,190],138:[2,190],144:[2,190],146:[2,190],147:[2,190],148:[2,190],149:[2,190],150:[2,190],151:[2,190],152:[2,190],153:[2,190],156:[2,190],157:[2,190],158:[2,190],159:[2,190],160:[2,190],161:[2,190],162:[2,190],163:[2,190],165:[2,190],166:[2,190]},{6:33,9:[1,34],28:[1,32],76:[1,60],77:61,81:62,82:227,118:11,119:12,156:[1,38]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:230,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{59:[1,231]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:232,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{2:[2,196],9:[2,196],11:[2,196],18:[2,196],19:[2,196],25:[2,196],27:[2,196],28:[2,196],29:[2,196],30:[2,196],31:[2,196],32:[2,196],76:[2,196],84:[2,196],85:[2,196],86:[2,196],87:[2,196],88:[2,196],89:[2,196],90:[2,196],91:[2,196],92:[2,196],93:[2,196],94:[2,196],95:[2,196],96:[2,196],97:[2,196],107:[2,196],108:[2,196],113:[2,196],116:[2,196],117:[2,196],137:[2,196],138:[2,196],144:[2,196],145:[2,196],146:[2,196],147:[2,196],148:[2,196],149:[2,196],150:[2,196],151:[2,196],152:[2,196],153:[2,196],156:[2,196],157:[2,196],158:[2,196],159:[2,196],160:[2,196],161:[2,196],162:[2,196],163:[2,196],165:[2,196],166:[2,196]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],20:233,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],10:234,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],10:235,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],10:236,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{147:[1,237]},{5:102,6:131,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],133:238,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{76:[1,239]},{2:[2,205],9:[2,205],18:[2,205],19:[2,205],25:[2,205],27:[2,205],28:[2,205],29:[2,205],30:[2,205],31:[2,205],32:[2,205],76:[2,205],84:[2,205],85:[2,205],86:[2,205],87:[2,205],88:[2,205],89:[2,205],90:[2,205],91:[2,205],92:[2,205],93:[2,205],94:[2,205],95:[2,205],96:[2,205],97:[2,205],107:[2,205],108:[2,205],113:[2,205],116:[2,205],117:[2,205],137:[2,205],138:[2,205],144:[2,205],145:[2,205],146:[2,205],147:[2,205],148:[2,205],149:[2,205],150:[2,205],151:[2,205],152:[2,205],153:[2,205],156:[2,205],157:[2,205],158:[2,205],159:[2,205],160:[2,205],161:[2,205],162:[2,205],163:[2,205],165:[2,205],166:[2,205]},{2:[2,206],9:[2,206],18:[2,206],19:[2,206],25:[2,206],27:[2,206],28:[2,206],29:[2,206],30:[2,206],31:[2,206],32:[2,206],76:[2,206],84:[2,206],85:[2,206],86:[2,206],87:[2,206],88:[2,206],89:[2,206],90:[2,206],91:[2,206],92:[2,206],93:[2,206],94:[2,206],95:[2,206],96:[2,206],97:[2,206],107:[2,206],108:[2,206],113:[2,206],116:[2,206],117:[2,206],137:[2,206],138:[2,206],144:[2,206],145:[2,206],146:[2,206],147:[2,206],148:[2,206],149:[2,206],150:[2,206],151:[2,206],152:[2,206],153:[2,206],156:[2,206],157:[2,206],158:[2,206],159:[2,206],160:[2,206],161:[2,206],162:[2,206],163:[2,206],165:[2,206],166:[2,206]},{2:[2,207],9:[2,207],18:[2,207],19:[2,207],25:[2,207],27:[2,207],28:[2,207],29:[2,207],30:[2,207],31:[2,207],32:[2,207],76:[2,207],84:[2,207],85:[2,207],86:[2,207],87:[2,207],88:[2,207],89:[2,207],90:[2,207],91:[2,207],92:[2,207],93:[2,207],94:[2,207],95:[2,207],96:[2,207],97:[2,207],107:[2,207],108:[2,207],113:[2,207],116:[2,207],117:[2,207],137:[2,207],138:[2,207],144:[2,207],145:[2,207],146:[2,207],147:[2,207],148:[2,207],149:[2,207],150:[2,207],151:[2,207],152:[2,207],153:[2,207],156:[2,207],157:[2,207],158:[2,207],159:[2,207],160:[2,207],161:[2,207],162:[2,207],163:[2,207],165:[2,207],166:[2,207]},{21:[1,155],76:[1,240]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],20:241,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{9:[2,62],18:[2,62],19:[2,62],25:[2,62],27:[2,62],28:[2,62],29:[2,62],30:[2,62],31:[2,62],32:[2,62],156:[2,62],158:[2,62],159:[2,62],160:[2,62],161:[2,62],162:[2,62],163:[2,62]},{9:[2,63],18:[2,63],19:[2,63],25:[2,63],27:[2,63],28:[2,63],29:[2,63],30:[2,63],31:[2,63],32:[2,63],156:[2,63],158:[2,63],159:[2,63],160:[2,63],161:[2,63],162:[2,63],163:[2,63]},{9:[2,64],18:[2,64],19:[2,64],25:[2,64],27:[2,64],28:[2,64],29:[2,64],30:[2,64],31:[2,64],32:[2,64],156:[2,64],158:[2,64],159:[2,64],160:[2,64],161:[2,64],162:[2,64],163:[2,64]},{9:[2,65],18:[2,65],19:[2,65],25:[2,65],27:[2,65],28:[2,65],29:[2,65],30:[2,65],31:[2,65],32:[2,65],156:[2,65],158:[2,65],159:[2,65],160:[2,65],161:[2,65],162:[2,65],163:[2,65]},{9:[2,66],18:[2,66],19:[2,66],25:[2,66],27:[2,66],28:[2,66],29:[2,66],30:[2,66],31:[2,66],32:[2,66],156:[2,66],158:[2,66],159:[2,66],160:[2,66],161:[2,66],162:[2,66],163:[2,66]},{9:[2,67],18:[2,67],19:[2,67],25:[2,67],27:[2,67],28:[2,67],29:[2,67],30:[2,67],31:[2,67],32:[2,67],156:[2,67],158:[2,67],159:[2,67],160:[2,67],161:[2,67],162:[2,67],163:[2,67]},{9:[2,68],18:[2,68],19:[2,68],25:[2,68],27:[2,68],28:[2,68],29:[2,68],30:[2,68],31:[2,68],32:[2,68],156:[2,68],158:[2,68],159:[2,68],160:[2,68],161:[2,68],162:[2,68],163:[2,68]},{9:[2,69],18:[2,69],19:[2,69],25:[2,69],27:[2,69],28:[2,69],29:[2,69],30:[2,69],31:[2,69],32:[2,69],156:[2,69],158:[2,69],159:[2,69],160:[2,69],161:[2,69],162:[2,69],163:[2,69]},{9:[2,70],18:[2,70],19:[2,70],25:[2,70],27:[2,70],28:[2,70],29:[2,70],30:[2,70],31:[2,70],32:[2,70],156:[2,70],158:[2,70],159:[2,70],160:[2,70],161:[2,70],162:[2,70],163:[2,70]},{9:[2,71],18:[2,71],19:[2,71],25:[2,71],27:[2,71],28:[2,71],29:[2,71],30:[2,71],31:[2,71],32:[2,71],156:[2,71],158:[2,71],159:[2,71],160:[2,71],161:[2,71],162:[2,71],163:[2,71]},{9:[2,72],18:[2,72],19:[2,72],25:[2,72],27:[2,72],28:[2,72],29:[2,72],30:[2,72],31:[2,72],32:[2,72],156:[2,72],158:[2,72],159:[2,72],160:[2,72],161:[2,72],162:[2,72],163:[2,72]},{5:102,6:131,7:110,8:111,9:[1,112],10:242,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:243,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],10:244,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],11:[1,245],12:96,15:246,18:[1,97],19:[1,98],20:247,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{6:248,156:[1,38]},{6:249,156:[1,38]},{9:[2,12],11:[2,12],13:[2,12],14:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],21:[2,12],27:[2,12],28:[2,12],29:[2,12],30:[2,12],34:[2,12],35:[2,12],38:[2,12],39:[2,12],41:[2,12],42:[2,12],43:[2,12],44:[2,12],46:[2,12],47:[2,12],50:[2,12],52:[2,12],54:[2,12],56:[2,12],58:[2,12],59:[2,12],61:[2,12],62:[2,12],63:[2,12],64:[2,12],65:[2,12],66:[2,12],67:[2,12],68:[2,12],69:[2,12],70:[2,12],71:[2,12],76:[2,12],166:[2,12]},{9:[2,13],11:[2,13],13:[2,13],14:[2,13],16:[2,13],17:[2,13],18:[2,13],19:[2,13],21:[2,13],27:[2,13],28:[2,13],29:[2,13],30:[2,13],34:[2,13],35:[2,13],38:[2,13],39:[2,13],41:[2,13],42:[2,13],43:[2,13],44:[2,13],46:[2,13],47:[2,13],50:[2,13],52:[2,13],54:[2,13],56:[2,13],58:[2,13],59:[2,13],61:[2,13],62:[2,13],63:[2,13],64:[2,13],65:[2,13],66:[2,13],67:[2,13],68:[2,13],69:[2,13],70:[2,13],71:[2,13],76:[2,13],166:[2,13]},{11:[2,17],14:[2,17],21:[2,17],27:[2,17],28:[2,17],29:[2,17],30:[2,17],34:[2,17],35:[2,17],38:[2,17],39:[2,17],41:[2,17],42:[2,17],43:[2,17],44:[2,17],46:[2,17],47:[2,17],50:[2,17],52:[2,17],54:[2,17],56:[2,17],58:[2,17],59:[2,17],61:[2,17],62:[2,17],63:[2,17],64:[2,17],65:[2,17],66:[2,17],67:[2,17],68:[2,17],69:[2,17],70:[2,17],71:[2,17],76:[2,17],166:[2,17]},{5:102,6:131,7:110,8:111,9:[1,112],10:194,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[2,18],14:[2,18],21:[2,18],27:[2,18],28:[2,18],29:[2,18],30:[2,18],34:[2,18],35:[2,18],38:[2,18],39:[2,18],41:[2,18],42:[2,18],43:[2,18],44:[2,18],46:[2,18],47:[2,18],50:[2,18],52:[2,18],54:[2,18],56:[2,18],58:[2,18],59:[2,18],61:[2,18],62:[2,18],63:[2,18],64:[2,18],65:[2,18],66:[2,18],67:[2,18],68:[2,18],69:[2,18],70:[2,18],71:[2,18],76:[2,18],166:[2,18]},{11:[2,19],14:[2,19],21:[2,19],27:[2,19],28:[2,19],29:[2,19],30:[2,19],34:[2,19],35:[2,19],38:[2,19],39:[2,19],41:[2,19],42:[2,19],43:[2,19],44:[2,19],46:[2,19],47:[2,19],50:[2,19],52:[2,19],54:[2,19],56:[2,19],58:[2,19],59:[2,19],61:[2,19],62:[2,19],63:[2,19],64:[2,19],65:[2,19],66:[2,19],67:[2,19],68:[2,19],69:[2,19],70:[2,19],71:[2,19],76:[2,19],166:[2,19]},{11:[2,20],14:[2,20],21:[2,20],27:[2,20],28:[2,20],29:[2,20],30:[2,20],34:[2,20],35:[2,20],38:[2,20],39:[2,20],41:[2,20],42:[2,20],43:[2,20],44:[2,20],46:[2,20],47:[2,20],50:[2,20],52:[2,20],54:[2,20],56:[2,20],58:[2,20],59:[2,20],61:[2,20],62:[2,20],63:[2,20],64:[2,20],65:[2,20],66:[2,20],67:[2,20],68:[2,20],69:[2,20],70:[2,20],71:[2,20],76:[2,20],166:[2,20]},{5:102,6:131,7:110,8:111,9:[1,112],10:194,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],26:250,27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],110:196,113:[1,36],116:[1,30],117:[1,31],156:[1,38],157:[1,37],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:251,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:252,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[1,253],21:[1,155]},{11:[1,254]},{9:[1,258],11:[2,156],13:[1,259],28:[1,32],118:256,126:255,128:257},{9:[2,117],11:[2,117],13:[2,117],28:[2,117],59:[2,117],79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],110:260,113:[1,36],116:[1,30],117:[1,31],156:[2,117],157:[1,37]},{9:[2,119],11:[2,119],13:[2,119],28:[2,119],59:[2,119],79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],110:261,113:[1,36],116:[1,30],117:[1,31],156:[2,119],157:[1,37]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:262,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:263,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:264,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:265,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:266,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:267,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:268,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:269,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:270,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:271,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:272,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:273,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:274,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:275,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:276,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{9:[2,138],11:[2,138],13:[2,138],21:[2,138],59:[2,138],61:[2,138],76:[2,138],165:[2,138]},{11:[1,277]},{11:[2,147],21:[1,278]},{11:[2,149],21:[2,149]},{6:33,9:[1,282],11:[2,153],13:[1,259],21:[2,153],28:[1,32],82:279,118:281,119:12,126:280,128:257,156:[1,38]},{9:[2,108],11:[2,108],13:[2,108],21:[2,108],28:[2,108],59:[2,108],76:[2,108],84:[2,108],85:[2,108],86:[2,108],87:[2,108],88:[2,108],89:[2,108],90:[2,108],91:[2,108],92:[2,108],93:[2,108],94:[2,108],95:[2,108],96:[2,108],97:[2,108],104:283,107:[2,108],108:[2,108],113:[2,108],116:[2,108],117:[2,108],156:[2,108],157:[2,108],165:[1,46]},{79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,105:284,107:[1,39],108:[1,40],109:285,110:286,113:[1,36],116:[1,30],117:[1,31],157:[1,37]},{9:[2,127],11:[2,127],13:[2,127],21:[2,127],28:[2,127],59:[2,127],76:[2,127],84:[2,127],85:[2,127],86:[2,127],87:[2,127],88:[2,127],89:[2,127],90:[2,127],91:[2,127],92:[2,127],93:[2,127],94:[2,127],95:[2,127],96:[2,127],97:[2,127],104:287,107:[2,127],108:[2,127],113:[2,127],116:[2,127],117:[2,127],156:[2,127],157:[2,127],165:[1,46]},{6:290,114:288,115:289,156:[1,38]},{21:[2,88],76:[2,88]},{21:[2,170],76:[2,170],166:[2,170]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],20:224,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,83:292,104:225,129:291,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{21:[2,86],76:[2,86]},{21:[2,87],61:[1,141],76:[2,87]},{2:[2,193],9:[2,193],18:[2,193],19:[2,193],25:[2,193],27:[2,193],28:[2,193],29:[2,193],30:[2,193],31:[2,193],32:[2,193],76:[2,193],84:[2,193],85:[2,193],86:[2,193],87:[2,193],88:[2,193],89:[2,193],90:[2,193],91:[2,193],92:[2,193],93:[2,193],94:[2,193],95:[2,193],96:[2,193],97:[2,193],107:[2,193],108:[2,193],113:[2,193],116:[2,193],117:[2,193],137:[2,193],138:[2,193],144:[2,193],146:[2,193],147:[2,193],148:[2,193],149:[2,193],150:[2,193],151:[2,193],152:[2,193],153:[2,193],156:[2,193],157:[2,193],158:[2,193],159:[2,193],160:[2,193],161:[2,193],162:[2,193],163:[2,193],165:[2,193],166:[2,193]},{1:[2,188],2:[2,188],9:[2,188],18:[2,188],19:[2,188],25:[2,188],27:[2,188],28:[2,188],29:[2,188],30:[2,188],31:[2,188],32:[2,188],76:[2,188],84:[2,188],85:[2,188],86:[2,188],87:[2,188],88:[2,188],89:[2,188],90:[2,188],91:[2,188],92:[2,188],93:[2,188],94:[2,188],95:[2,188],96:[2,188],97:[2,188],107:[2,188],108:[2,188],113:[2,188],116:[2,188],117:[2,188],137:[2,188],138:[2,188],144:[2,188],145:[2,188],146:[2,188],147:[2,188],148:[2,188],149:[2,188],150:[2,188],151:[2,188],152:[2,188],153:[2,188],156:[2,188],157:[2,188],158:[2,188],159:[2,188],160:[2,188],161:[2,188],162:[2,188],163:[2,188],165:[2,188],166:[2,188]},{2:[2,182],9:[2,182],18:[2,182],19:[2,182],25:[2,182],27:[2,182],28:[2,182],29:[2,182],30:[2,182],31:[2,182],32:[2,182],76:[2,182],84:[2,182],85:[2,182],86:[2,182],87:[2,182],88:[2,182],89:[2,182],90:[2,182],91:[2,182],92:[2,182],93:[2,182],94:[2,182],95:[2,182],96:[2,182],97:[2,182],107:[2,182],108:[2,182],113:[2,182],116:[2,182],117:[2,182],137:[2,182],138:[2,182],144:[2,182],145:[2,182],146:[2,182],147:[2,182],148:[2,182],149:[2,182],150:[2,182],151:[2,182],152:[2,182],153:[2,182],156:[2,182],157:[2,182],158:[2,182],159:[2,182],160:[2,182],161:[2,182],162:[2,182],163:[2,182],165:[2,182],166:[2,182]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:293,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{2:[2,184],9:[2,184],18:[2,184],19:[2,184],25:[2,184],27:[2,184],28:[2,184],29:[2,184],30:[2,184],31:[2,184],32:[2,184],76:[2,184],84:[2,184],85:[2,184],86:[2,184],87:[2,184],88:[2,184],89:[2,184],90:[2,184],91:[2,184],92:[2,184],93:[2,184],94:[2,184],95:[2,184],96:[2,184],97:[2,184],107:[2,184],108:[2,184],113:[2,184],116:[2,184],117:[2,184],137:[2,184],138:[2,184],144:[2,184],145:[2,184],146:[2,184],147:[2,184],148:[2,184],149:[2,184],150:[2,184],151:[2,184],152:[2,184],153:[2,184],156:[2,184],157:[2,184],158:[2,184],159:[2,184],160:[2,184],161:[2,184],162:[2,184],163:[2,184],165:[2,184],166:[2,184]},{11:[2,74],14:[2,74],21:[2,74],59:[2,74],76:[2,74]},{11:[1,294],21:[1,155]},{11:[1,295],21:[1,155]},{11:[1,296],21:[1,155]},{9:[1,297]},{5:102,6:131,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],133:298,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{2:[2,204],9:[2,204],18:[2,204],19:[2,204],25:[2,204],27:[2,204],28:[2,204],29:[2,204],30:[2,204],31:[2,204],32:[2,204],76:[2,204],84:[2,204],85:[2,204],86:[2,204],87:[2,204],88:[2,204],89:[2,204],90:[2,204],91:[2,204],92:[2,204],93:[2,204],94:[2,204],95:[2,204],96:[2,204],97:[2,204],107:[2,204],108:[2,204],113:[2,204],116:[2,204],117:[2,204],137:[2,204],138:[2,204],144:[2,204],145:[2,204],146:[2,204],147:[2,204],148:[2,204],149:[2,204],150:[2,204],151:[2,204],152:[2,204],153:[2,204],156:[2,204],157:[2,204],158:[2,204],159:[2,204],160:[2,204],161:[2,204],162:[2,204],163:[2,204],165:[2,204],166:[2,204]},{2:[2,208],9:[2,208],18:[2,208],19:[2,208],25:[2,208],27:[2,208],28:[2,208],29:[2,208],30:[2,208],31:[2,208],32:[2,208],76:[2,208],84:[2,208],85:[2,208],86:[2,208],87:[2,208],88:[2,208],89:[2,208],90:[2,208],91:[2,208],92:[2,208],93:[2,208],94:[2,208],95:[2,208],96:[2,208],97:[2,208],107:[2,208],108:[2,208],113:[2,208],116:[2,208],117:[2,208],137:[2,208],138:[2,208],144:[2,208],145:[2,208],146:[2,208],147:[2,208],148:[2,208],149:[2,208],150:[2,208],151:[2,208],152:[2,208],153:[2,208],156:[2,208],157:[2,208],158:[2,208],159:[2,208],160:[2,208],161:[2,208],162:[2,208],163:[2,208],165:[2,208],166:[2,208]},{11:[2,61],14:[2,61],21:[2,61],59:[2,61],76:[2,61],166:[2,61]},{21:[1,155],59:[1,299]},{11:[2,57],14:[2,57],21:[2,57],54:[1,192],56:[2,57],58:[2,57],59:[2,57],76:[2,57],166:[2,57]},{14:[1,300],21:[1,155]},{9:[2,8],11:[2,8],13:[2,8],14:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[2,8],21:[2,8],27:[2,8],28:[2,8],29:[2,8],30:[2,8],34:[2,8],35:[2,8],38:[2,8],39:[2,8],41:[2,8],42:[2,8],43:[2,8],44:[2,8],46:[2,8],47:[2,8],50:[2,8],52:[2,8],54:[2,8],56:[2,8],58:[2,8],59:[2,8],61:[2,8],62:[2,8],63:[2,8],64:[2,8],65:[2,8],66:[2,8],67:[2,8],68:[2,8],69:[2,8],70:[2,8],71:[2,8],76:[2,8],166:[2,8]},{11:[1,301],21:[1,302]},{11:[2,14],21:[2,14]},{9:[2,10],11:[2,10],13:[2,10],14:[2,10],16:[2,10],17:[2,10],18:[2,10],19:[2,10],21:[2,10],27:[2,10],28:[2,10],29:[2,10],30:[2,10],34:[2,10],35:[2,10],38:[2,10],39:[2,10],41:[2,10],42:[2,10],43:[2,10],44:[2,10],46:[2,10],47:[2,10],50:[2,10],52:[2,10],54:[2,10],56:[2,10],58:[2,10],59:[2,10],61:[2,10],62:[2,10],63:[2,10],64:[2,10],65:[2,10],66:[2,10],67:[2,10],68:[2,10],69:[2,10],70:[2,10],71:[2,10],76:[2,10],166:[2,10]},{9:[2,11],11:[2,11],13:[2,11],14:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],21:[2,11],27:[2,11],28:[2,11],29:[2,11],30:[2,11],34:[2,11],35:[2,11],38:[2,11],39:[2,11],41:[2,11],42:[2,11],43:[2,11],44:[2,11],46:[2,11],47:[2,11],50:[2,11],52:[2,11],54:[2,11],56:[2,11],58:[2,11],59:[2,11],61:[2,11],62:[2,11],63:[2,11],64:[2,11],65:[2,11],66:[2,11],67:[2,11],68:[2,11],69:[2,11],70:[2,11],71:[2,11],76:[2,11],166:[2,11]},{11:[1,303]},{11:[2,55],14:[2,55],21:[2,55],52:[1,193],54:[2,55],56:[2,55],58:[2,55],59:[2,55],76:[2,55],166:[2,55]},{11:[2,53],14:[2,53],21:[2,53],50:[1,199],52:[2,53],54:[2,53],56:[2,53],58:[2,53],59:[2,53],76:[2,53],166:[2,53]},{9:[2,5],11:[2,5],13:[2,5],14:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],21:[2,5],27:[2,5],28:[2,5],29:[2,5],30:[2,5],34:[2,5],35:[2,5],38:[2,5],39:[2,5],41:[2,5],42:[2,5],43:[2,5],44:[2,5],46:[2,5],47:[2,5],50:[2,5],52:[2,5],54:[2,5],56:[2,5],58:[2,5],59:[2,5],61:[2,5],62:[2,5],63:[2,5],64:[2,5],65:[2,5],66:[2,5],67:[2,5],68:[2,5],69:[2,5],70:[2,5],71:[2,5],76:[2,5],166:[2,5]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:304,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[2,157]},{9:[1,258],11:[2,158],13:[1,259],128:305},{9:[1,307],11:[2,159],13:[1,306],21:[2,159]},{9:[1,258],11:[1,309],13:[1,259],28:[1,32],74:218,78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],118:256,121:310,123:216,125:217,126:308,128:257,157:[1,37]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,14:[1,311],18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:129,72:312,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{9:[2,116],11:[2,116],13:[2,116],28:[2,116],59:[2,116],156:[2,116]},{9:[2,118],11:[2,118],13:[2,118],28:[2,118],59:[2,118],156:[2,118]},{11:[2,51],14:[2,51],21:[2,51],27:[1,200],50:[2,51],52:[2,51],54:[2,51],56:[2,51],58:[2,51],59:[2,51],76:[2,51],166:[2,51]},{11:[2,49],14:[2,49],21:[2,49],27:[2,49],46:[1,201],47:[1,202],50:[2,49],52:[2,49],54:[2,49],56:[2,49],58:[2,49],59:[2,49],76:[2,49],166:[2,49]},{11:[2,46],14:[2,46],21:[2,46],27:[2,46],41:[1,203],42:[1,204],43:[1,205],44:[1,206],46:[2,46],47:[2,46],50:[2,46],52:[2,46],54:[2,46],56:[2,46],58:[2,46],59:[2,46],76:[2,46],166:[2,46]},{11:[2,47],14:[2,47],21:[2,47],27:[2,47],41:[1,203],42:[1,204],43:[1,205],44:[1,206],46:[2,47],47:[2,47],50:[2,47],52:[2,47],54:[2,47],56:[2,47],58:[2,47],59:[2,47],76:[2,47],166:[2,47]},{11:[2,41],14:[2,41],21:[2,41],27:[2,41],38:[1,207],39:[1,208],41:[2,41],42:[2,41],43:[2,41],44:[2,41],46:[2,41],47:[2,41],50:[2,41],52:[2,41],54:[2,41],56:[2,41],58:[2,41],59:[2,41],76:[2,41],166:[2,41]},{11:[2,42],14:[2,42],21:[2,42],27:[2,42],38:[1,207],39:[1,208],41:[2,42],42:[2,42],43:[2,42],44:[2,42],46:[2,42],47:[2,42],50:[2,42],52:[2,42],54:[2,42],56:[2,42],58:[2,42],59:[2,42],76:[2,42],166:[2,42]},{11:[2,43],14:[2,43],21:[2,43],27:[2,43],38:[1,207],39:[1,208],41:[2,43],42:[2,43],43:[2,43],44:[2,43],46:[2,43],47:[2,43],50:[2,43],52:[2,43],54:[2,43],56:[2,43],58:[2,43],59:[2,43],76:[2,43],166:[2,43]},{11:[2,44],14:[2,44],21:[2,44],27:[2,44],38:[1,207],39:[1,208],41:[2,44],42:[2,44],43:[2,44],44:[2,44],46:[2,44],47:[2,44],50:[2,44],52:[2,44],54:[2,44],56:[2,44],58:[2,44],59:[2,44],76:[2,44],166:[2,44]},{11:[2,38],14:[2,38],21:[2,38],27:[2,38],29:[1,209],30:[1,210],38:[2,38],39:[2,38],41:[2,38],42:[2,38],43:[2,38],44:[2,38],46:[2,38],47:[2,38],50:[2,38],52:[2,38],54:[2,38],56:[2,38],58:[2,38],59:[2,38],76:[2,38],166:[2,38]},{11:[2,39],14:[2,39],21:[2,39],27:[2,39],29:[1,209],30:[1,210],38:[2,39],39:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,39],46:[2,39],47:[2,39],50:[2,39],52:[2,39],54:[2,39],56:[2,39],58:[2,39],59:[2,39],76:[2,39],166:[2,39]},{11:[2,35],14:[2,35],21:[2,35],27:[2,35],28:[1,211],29:[2,35],30:[2,35],34:[1,212],35:[1,213],38:[2,35],39:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35],46:[2,35],47:[2,35],50:[2,35],52:[2,35],54:[2,35],56:[2,35],58:[2,35],59:[2,35],76:[2,35],166:[2,35]},{11:[2,36],14:[2,36],21:[2,36],27:[2,36],28:[1,211],29:[2,36],30:[2,36],34:[1,212],35:[1,213],38:[2,36],39:[2,36],41:[2,36],42:[2,36],43:[2,36],44:[2,36],46:[2,36],47:[2,36],50:[2,36],52:[2,36],54:[2,36],56:[2,36],58:[2,36],59:[2,36],76:[2,36],166:[2,36]},{11:[2,31],14:[2,31],21:[2,31],27:[2,31],28:[2,31],29:[2,31],30:[2,31],34:[2,31],35:[2,31],38:[2,31],39:[2,31],41:[2,31],42:[2,31],43:[2,31],44:[2,31],46:[2,31],47:[2,31],50:[2,31],52:[2,31],54:[2,31],56:[2,31],58:[2,31],59:[2,31],76:[2,31],166:[2,31]},{11:[2,32],14:[2,32],21:[2,32],27:[2,32],28:[2,32],29:[2,32],30:[2,32],34:[2,32],35:[2,32],38:[2,32],39:[2,32],41:[2,32],42:[2,32],43:[2,32],44:[2,32],46:[2,32],47:[2,32],50:[2,32],52:[2,32],54:[2,32],56:[2,32],58:[2,32],59:[2,32],76:[2,32],166:[2,32]},{11:[2,33],14:[2,33],21:[2,33],27:[2,33],28:[2,33],29:[2,33],30:[2,33],34:[2,33],35:[2,33],38:[2,33],39:[2,33],41:[2,33],42:[2,33],43:[2,33],44:[2,33],46:[2,33],47:[2,33],50:[2,33],52:[2,33],54:[2,33],56:[2,33],58:[2,33],59:[2,33],76:[2,33],166:[2,33]},{9:[2,140],11:[2,140],13:[2,140],21:[2,140],59:[2,140],61:[2,140],76:[2,140],165:[2,140]},{74:218,78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],124:313,125:314,157:[1,37],164:[1,315]},{11:[2,151],21:[2,151]},{11:[2,152],21:[2,152]},{6:33,9:[1,282],11:[2,158],13:[1,259],21:[2,158],119:50,128:305,156:[1,38]},{6:33,9:[1,282],11:[1,309],13:[1,259],28:[1,32],74:218,78:8,79:9,80:10,82:56,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],118:281,119:12,121:310,123:216,125:217,126:308,128:257,156:[1,38],157:[1,37]},{79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,105:316,107:[1,39],108:[1,40],109:285,110:286,113:[1,36],116:[1,30],117:[1,31],157:[1,37]},{79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,106:317,107:[1,39],108:[1,40],109:318,110:286,113:[1,36],116:[1,30],117:[1,31],157:[1,37],166:[1,69]},{89:[2,113],90:[2,113],91:[2,113],92:[2,113],93:[2,113],94:[2,113],95:[2,113],96:[2,113],97:[2,113],107:[2,113],108:[2,113],113:[2,113],116:[2,113],117:[2,113],157:[2,113],166:[2,113]},{6:33,9:[1,34],28:[1,32],59:[1,322],82:321,111:319,112:320,118:11,119:12,156:[1,38]},{6:290,114:323,115:289,156:[1,38]},{21:[1,325],106:324,166:[1,69]},{21:[2,128],166:[2,128]},{21:[2,130],61:[1,326],166:[2,130]},{21:[1,328],106:327,166:[1,69]},{21:[2,173],166:[2,173]},{2:[2,183],9:[2,183],18:[2,183],19:[2,183],25:[2,183],27:[2,183],28:[2,183],29:[2,183],30:[2,183],31:[2,183],32:[2,183],76:[2,183],84:[2,183],85:[2,183],86:[2,183],87:[2,183],88:[2,183],89:[2,183],90:[2,183],91:[2,183],92:[2,183],93:[2,183],94:[2,183],95:[2,183],96:[2,183],97:[2,183],107:[2,183],108:[2,183],113:[2,183],116:[2,183],117:[2,183],137:[2,183],138:[2,183],144:[2,183],145:[2,183],146:[2,183],147:[2,183],148:[2,183],149:[2,183],150:[2,183],151:[2,183],152:[2,183],153:[2,183],156:[2,183],157:[2,183],158:[2,183],159:[2,183],160:[2,183],161:[2,183],162:[2,183],163:[2,183],165:[2,183],166:[2,183]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:329,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:330,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:331,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{5:102,6:131,7:110,8:111,9:[1,112],10:332,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],10:334,11:[1,333],12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:335,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{9:[2,7],11:[2,7],13:[2,7],14:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],21:[2,7],27:[2,7],28:[2,7],29:[2,7],30:[2,7],34:[2,7],35:[2,7],38:[2,7],39:[2,7],41:[2,7],42:[2,7],43:[2,7],44:[2,7],46:[2,7],47:[2,7],50:[2,7],52:[2,7],54:[2,7],56:[2,7],58:[2,7],59:[2,7],61:[2,7],62:[2,7],63:[2,7],64:[2,7],65:[2,7],66:[2,7],67:[2,7],68:[2,7],69:[2,7],70:[2,7],71:[2,7],76:[2,7],166:[2,7]},{9:[2,9],11:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],18:[2,9],19:[2,9],21:[2,9],27:[2,9],28:[2,9],29:[2,9],30:[2,9],34:[2,9],35:[2,9],38:[2,9],39:[2,9],41:[2,9],42:[2,9],43:[2,9],44:[2,9],46:[2,9],47:[2,9],50:[2,9],52:[2,9],54:[2,9],56:[2,9],58:[2,9],59:[2,9],61:[2,9],62:[2,9],63:[2,9],64:[2,9],65:[2,9],66:[2,9],67:[2,9],68:[2,9],69:[2,9],70:[2,9],71:[2,9],76:[2,9],166:[2,9]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],20:336,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[2,21],14:[2,21],21:[2,21],27:[2,21],28:[2,21],29:[2,21],30:[2,21],34:[2,21],35:[2,21],38:[2,21],39:[2,21],41:[2,21],42:[2,21],43:[2,21],44:[2,21],46:[2,21],47:[2,21],50:[2,21],52:[2,21],54:[2,21],56:[2,21],58:[2,21],59:[2,21],61:[2,21],62:[2,21],63:[2,21],64:[2,21],65:[2,21],66:[2,21],67:[2,21],68:[2,21],69:[2,21],70:[2,21],71:[2,21],76:[2,21],166:[2,21]},{11:[2,29],14:[2,29],21:[2,29],27:[2,29],28:[2,29],29:[2,29],30:[2,29],34:[2,29],35:[2,29],38:[2,29],39:[2,29],41:[2,29],42:[2,29],43:[2,29],44:[2,29],46:[2,29],47:[2,29],50:[2,29],52:[2,29],54:[2,29],56:[2,29],58:[2,29],59:[2,29],61:[2,29],62:[2,29],63:[2,29],64:[2,29],65:[2,29],66:[2,29],67:[2,29],68:[2,29],69:[2,29],70:[2,29],71:[2,29],76:[2,29],166:[2,29]},{9:[1,307],11:[2,160],13:[1,306],21:[2,160]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,14:[1,337],18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:129,72:338,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{11:[1,339],74:218,78:8,79:9,80:10,84:[1,13],85:[1,14],86:[1,15],87:[1,16],88:[1,17],89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,107:[1,39],108:[1,40],113:[1,36],116:[1,30],117:[1,31],121:340,123:216,125:217,157:[1,37]},{11:[1,341]},{9:[2,166],11:[2,166],13:[2,166],21:[2,166]},{11:[1,342]},{9:[2,162],11:[2,162],13:[2,162],21:[2,162]},{14:[1,343]},{11:[2,148]},{11:[2,150],21:[2,150]},{11:[2,224]},{79:197,80:198,89:[1,18],90:[1,19],91:[1,20],92:[1,21],93:[1,22],94:[1,23],95:[1,24],96:[1,25],97:[1,26],98:27,99:28,100:29,101:35,106:344,107:[1,39],108:[1,40],109:318,110:286,113:[1,36],116:[1,30],117:[1,31],157:[1,37],166:[1,69]},{9:[2,107],11:[2,107],13:[2,107],21:[2,107],28:[2,107],59:[2,107],76:[2,107],84:[2,107],85:[2,107],86:[2,107],87:[2,107],88:[2,107],89:[2,107],90:[2,107],91:[2,107],92:[2,107],93:[2,107],94:[2,107],95:[2,107],96:[2,107],97:[2,107],107:[2,107],108:[2,107],113:[2,107],116:[2,107],117:[2,107],156:[2,107],157:[2,107]},{89:[2,114],90:[2,114],91:[2,114],92:[2,114],93:[2,114],94:[2,114],95:[2,114],96:[2,114],97:[2,114],107:[2,114],108:[2,114],113:[2,114],116:[2,114],117:[2,114],157:[2,114],166:[2,114]},{21:[1,346],76:[1,345]},{21:[2,120],76:[2,120]},{21:[2,122],59:[1,347],76:[2,122]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:129,72:348,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{21:[1,325],106:349,166:[1,69]},{9:[2,126],11:[2,126],13:[2,126],21:[2,126],28:[2,126],59:[2,126],76:[2,126],84:[2,126],85:[2,126],86:[2,126],87:[2,126],88:[2,126],89:[2,126],90:[2,126],91:[2,126],92:[2,126],93:[2,126],94:[2,126],95:[2,126],96:[2,126],97:[2,126],107:[2,126],108:[2,126],113:[2,126],116:[2,126],117:[2,126],156:[2,126],157:[2,126]},{6:290,115:350,156:[1,38]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:129,72:351,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{21:[2,171],76:[2,171],166:[2,171]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],20:224,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,83:353,104:225,106:352,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46],166:[1,69]},{2:[2,197],9:[2,197],18:[2,197],19:[2,197],25:[2,197],27:[2,197],28:[2,197],29:[2,197],30:[2,197],31:[2,197],32:[2,197],76:[2,197],84:[2,197],85:[2,197],86:[2,197],87:[2,197],88:[2,197],89:[2,197],90:[2,197],91:[2,197],92:[2,197],93:[2,197],94:[2,197],95:[2,197],96:[2,197],97:[2,197],107:[2,197],108:[2,197],113:[2,197],116:[2,197],117:[2,197],137:[2,197],138:[2,197],144:[2,197],145:[1,354],146:[2,197],147:[2,197],148:[2,197],149:[2,197],150:[2,197],151:[2,197],152:[2,197],153:[2,197],156:[2,197],157:[2,197],158:[2,197],159:[2,197],160:[2,197],161:[2,197],162:[2,197],163:[2,197],165:[2,197],166:[2,197]},{2:[2,199],9:[2,199],18:[2,199],19:[2,199],25:[2,199],27:[2,199],28:[2,199],29:[2,199],30:[2,199],31:[2,199],32:[2,199],76:[2,199],84:[2,199],85:[2,199],86:[2,199],87:[2,199],88:[2,199],89:[2,199],90:[2,199],91:[2,199],92:[2,199],93:[2,199],94:[2,199],95:[2,199],96:[2,199],97:[2,199],107:[2,199],108:[2,199],113:[2,199],116:[2,199],117:[2,199],137:[2,199],138:[2,199],144:[2,199],145:[2,199],146:[2,199],147:[2,199],148:[2,199],149:[2,199],150:[2,199],151:[2,199],152:[2,199],153:[2,199],156:[2,199],157:[2,199],158:[2,199],159:[2,199],160:[2,199],161:[2,199],162:[2,199],163:[2,199],165:[2,199],166:[2,199]},{2:[2,200],9:[2,200],18:[2,200],19:[2,200],25:[2,200],27:[2,200],28:[2,200],29:[2,200],30:[2,200],31:[2,200],32:[2,200],76:[2,200],84:[2,200],85:[2,200],86:[2,200],87:[2,200],88:[2,200],89:[2,200],90:[2,200],91:[2,200],92:[2,200],93:[2,200],94:[2,200],95:[2,200],96:[2,200],97:[2,200],107:[2,200],108:[2,200],113:[2,200],116:[2,200],117:[2,200],137:[2,200],138:[2,200],144:[2,200],145:[2,200],146:[2,200],147:[2,200],148:[2,200],149:[2,200],150:[2,200],151:[2,200],152:[2,200],153:[2,200],156:[2,200],157:[2,200],158:[2,200],159:[2,200],160:[2,200],161:[2,200],162:[2,200],163:[2,200],165:[2,200],166:[2,200]},{11:[1,355],21:[1,155]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:356,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{11:[1,357],21:[1,155]},{11:[2,59],14:[2,59],21:[2,59],59:[2,59],76:[2,59],166:[2,59]},{11:[2,15],21:[2,15]},{9:[2,164],11:[2,164],13:[2,164],21:[2,164]},{14:[1,358]},{9:[2,168],11:[2,168],13:[2,168],21:[2,168]},{11:[1,359]},{9:[2,161],11:[2,161],13:[2,161],21:[2,161]},{9:[2,167],11:[2,167],13:[2,167],21:[2,167]},{9:[2,163],11:[2,163],13:[2,163],21:[2,163]},{9:[2,106],11:[2,106],13:[2,106],21:[2,106],28:[2,106],59:[2,106],76:[2,106],84:[2,106],85:[2,106],86:[2,106],87:[2,106],88:[2,106],89:[2,106],90:[2,106],91:[2,106],92:[2,106],93:[2,106],94:[2,106],95:[2,106],96:[2,106],97:[2,106],107:[2,106],108:[2,106],113:[2,106],116:[2,106],117:[2,106],156:[2,106],157:[2,106]},{89:[2,115],90:[2,115],91:[2,115],92:[2,115],93:[2,115],94:[2,115],95:[2,115],96:[2,115],97:[2,115],107:[2,115],108:[2,115],113:[2,115],116:[2,115],117:[2,115],157:[2,115],166:[2,115]},{6:33,9:[1,34],28:[1,32],59:[1,322],82:321,112:360,118:11,119:12,156:[1,38]},{5:102,6:131,7:110,8:111,9:[1,112],12:96,18:[1,97],19:[1,98],22:130,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:129,72:361,156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119]},{21:[2,123],76:[2,123]},{9:[2,125],11:[2,125],13:[2,125],21:[2,125],28:[2,125],59:[2,125],76:[2,125],84:[2,125],85:[2,125],86:[2,125],87:[2,125],88:[2,125],89:[2,125],90:[2,125],91:[2,125],92:[2,125],93:[2,125],94:[2,125],95:[2,125],96:[2,125],97:[2,125],107:[2,125],108:[2,125],113:[2,125],116:[2,125],117:[2,125],156:[2,125],157:[2,125]},{21:[2,129],166:[2,129]},{21:[2,131],166:[2,131]},{21:[2,172],76:[2,172],166:[2,172]},{21:[2,174],166:[2,174]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:362,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{76:[1,363]},{2:[2,202],9:[2,202],18:[2,202],19:[2,202],25:[2,202],27:[2,202],28:[2,202],29:[2,202],30:[2,202],31:[2,202],32:[2,202],76:[2,202],84:[2,202],85:[2,202],86:[2,202],87:[2,202],88:[2,202],89:[2,202],90:[2,202],91:[2,202],92:[2,202],93:[2,202],94:[2,202],95:[2,202],96:[2,202],97:[2,202],107:[2,202],108:[2,202],113:[2,202],116:[2,202],117:[2,202],137:[2,202],138:[2,202],144:[2,202],145:[2,202],146:[2,202],147:[2,202],148:[2,202],149:[2,202],150:[2,202],151:[2,202],152:[2,202],153:[2,202],156:[2,202],157:[2,202],158:[2,202],159:[2,202],160:[2,202],161:[2,202],162:[2,202],163:[2,202],165:[2,202],166:[2,202]},{2:[1,76],5:102,6:78,7:110,8:111,9:[1,112],10:82,12:96,18:[1,97],19:[1,98],20:92,22:94,23:99,24:126,25:[1,100],27:[1,103],28:[1,104],29:[1,105],30:[1,106],31:[1,107],32:[1,108],33:125,36:124,37:123,40:122,45:121,48:120,49:113,51:109,53:101,55:95,57:93,76:[1,81],104:45,130:364,131:70,132:71,133:72,134:73,135:74,136:75,137:[1,79],138:[1,80],139:44,144:[1,83],146:[1,84],147:[1,85],148:[1,86],149:[1,87],150:[1,88],151:[1,89],152:[1,90],153:[1,91],156:[1,38],158:[1,114],159:[1,115],160:[1,116],161:[1,117],162:[1,118],163:[1,119],165:[1,46]},{9:[2,165],11:[2,165],13:[2,165],21:[2,165]},{9:[2,169],11:[2,169],13:[2,169],21:[2,169]},{21:[2,121],76:[2,121]},{21:[2,124],76:[2,124]},{2:[2,198],9:[2,198],18:[2,198],19:[2,198],25:[2,198],27:[2,198],28:[2,198],29:[2,198],30:[2,198],31:[2,198],32:[2,198],76:[2,198],84:[2,198],85:[2,198],86:[2,198],87:[2,198],88:[2,198],89:[2,198],90:[2,198],91:[2,198],92:[2,198],93:[2,198],94:[2,198],95:[2,198],96:[2,198],97:[2,198],107:[2,198],108:[2,198],113:[2,198],116:[2,198],117:[2,198],137:[2,198],138:[2,198],144:[2,198],145:[2,198],146:[2,198],147:[2,198],148:[2,198],149:[2,198],150:[2,198],151:[2,198],152:[2,198],153:[2,198],156:[2,198],157:[2,198],158:[2,198],159:[2,198],160:[2,198],161:[2,198],162:[2,198],163:[2,198],165:[2,198],166:[2,198]},{2:[2,201],9:[2,201],18:[2,201],19:[2,201],25:[2,201],27:[2,201],28:[2,201],29:[2,201],30:[2,201],31:[2,201],32:[2,201],76:[2,201],84:[2,201],85:[2,201],86:[2,201],87:[2,201],88:[2,201],89:[2,201],90:[2,201],91:[2,201],92:[2,201],93:[2,201],94:[2,201],95:[2,201],96:[2,201],97:[2,201],107:[2,201],108:[2,201],113:[2,201],116:[2,201],117:[2,201],137:[2,201],138:[2,201],144:[2,201],145:[2,201],146:[2,201],147:[2,201],148:[2,201],149:[2,201],150:[2,201],151:[2,201],152:[2,201],153:[2,201],156:[2,201],157:[2,201],158:[2,201],159:[2,201],160:[2,201],161:[2,201],162:[2,201],163:[2,201],165:[2,201],166:[2,201]},{2:[2,203],9:[2,203],18:[2,203],19:[2,203],25:[2,203],27:[2,203],28:[2,203],29:[2,203],30:[2,203],31:[2,203],32:[2,203],76:[2,203],84:[2,203],85:[2,203],86:[2,203],87:[2,203],88:[2,203],89:[2,203],90:[2,203],91:[2,203],92:[2,203],93:[2,203],94:[2,203],95:[2,203],96:[2,203],97:[2,203],107:[2,203],108:[2,203],113:[2,203],116:[2,203],117:[2,203],137:[2,203],138:[2,203],144:[2,203],145:[2,203],146:[2,203],147:[2,203],148:[2,203],149:[2,203],150:[2,203],151:[2,203],152:[2,203],153:[2,203],156:[2,203],157:[2,203],158:[2,203],159:[2,203],160:[2,203],161:[2,203],162:[2,203],163:[2,203],165:[2,203],166:[2,203]}],
defaultActions: {255:[2,157],313:[2,148],315:[2,224]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    var ranges = this.lexer.options && this.lexer.options.ranges;

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        _handle_error:
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            var errStr = '';
            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state === 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol == 2 ? null : symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};


parser.yy.R = function(entry) {
  console.log(entry);
};


parser.yy.bSawStruct = false;

parser.yy.typedefMode = 0;
parser.yy.types = {};

parser.yy.isType = function(type) {
  if(!type || !type.length || type.length === 0) {
    return false;
  }

  return parser.yy.types.hasOwnProperty(type);
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:this.begin("C_COMMENT");
break;
case 1:this.begin("CPP_COMMENT");
break;
case 2:
break;
case 3:
break;
case 4: 
break;
case 5: 
break;
case 6: return(parser.symbols_.AUTO); 
break;
case 7: return(parser.symbols_.BREAK); 
break;
case 8: return(parser.symbols_.CASE); 
break;
case 9: return(parser.symbols_.CHAR); 
break;
case 10: return(parser.symbols_.CONST); 
break;
case 11: return(parser.symbols_.CONTINUE); 
break;
case 12: return(parser.symbols_.DEFAULT); 
break;
case 13: return(parser.symbols_.DO); 
break;
case 14: return(parser.symbols_.DOUBLE); 
break;
case 15: return(parser.symbols_.ELSE); 
break;
case 16: return(parser.symbols_.ENUM); 
break;
case 17: return(parser.symbols_.EXTERN); 
break;
case 18: return(parser.symbols_.FLOAT); 
break;
case 19: return(parser.symbols_.FOR); 
break;
case 20: return(parser.symbols_.GOTO); 
break;
case 21: return(parser.symbols_.IF); 
break;
case 22: return(parser.symbols_.INT); 
break;
case 23: return(parser.symbols_.LONG); 
break;
case 24: return(parser.symbols_.REGISTER); 
break;
case 25: return(parser.symbols_.RETURN); 
break;
case 26: return(parser.symbols_.SHORT); 
break;
case 27: return(parser.symbols_.SIGNED); 
break;
case 28: return(parser.symbols_.SIZEOF); 
break;
case 29: return(parser.symbols_.STATIC); 
break;
case 30:
              parser.yy.bSawStruct = true;
              return(parser.symbols_.STRUCT);
            
break;
case 31: return(parser.symbols_.SWITCH); 
break;
case 32: return(parser.symbols_.TYPEDEF); 
break;
case 33:
              parser.yy.bSawStruct = true;
              return(parser.symbols_.UNION);
            
break;
case 34: return(parser.symbols_.UNSIGNED); 
break;
case 35: return(parser.symbols_.VOID); 
break;
case 36: return(parser.symbols_.VOLATILE); 
break;
case 37: return(parser.symbols_.WHILE); 
break;
case 38:
                var isType;

                isType = parser.yy.isType(yy_.yytext);
                return (isType &&
                        ! parser.yy.bSawStruct
                        ? parser.symbols_.TYPE_NAME
                        : parser.symbols_.IDENTIFIER);
              
break;
case 39: return(parser.symbols_.CONSTANT_FLOAT); 
break;
case 40: return(parser.symbols_.CONSTANT_HEX); 
break;
case 41: return(parser.symbols_.CONSTANT_OCTAL); 
break;
case 42: return(parser.symbols_.CONSTANT_DECIMAL); 
break;
case 43: return(parser.symbols_.CONSTANT_CHAR); 
break;
case 44: return(parser.symbols_.STRING_LITERAL); 
break;
case 45: return(parser.symbols_.ELLIPSIS); 
break;
case 46: return(parser.symbols_.RIGHT_ASSIGN); 
break;
case 47: return(parser.symbols_.LEFT_ASSIGN); 
break;
case 48: return(parser.symbols_.ADD_ASSIGN); 
break;
case 49: return(parser.symbols_.SUB_ASSIGN); 
break;
case 50: return(parser.symbols_.MUL_ASSIGN); 
break;
case 51: return(parser.symbols_.DIV_ASSIGN); 
break;
case 52: return(parser.symbols_.MOD_ASSIGN); 
break;
case 53: return(parser.symbols_.AND_ASSIGN); 
break;
case 54: return(parser.symbols_.XOR_ASSIGN); 
break;
case 55: return(parser.symbols_.OR_ASSIGN); 
break;
case 56: return(parser.symbols_.RIGHT_OP); 
break;
case 57: return(parser.symbols_.LEFT_OP); 
break;
case 58: return(parser.symbols_.INC_OP); 
break;
case 59: return(parser.symbols_.DEC_OP); 
break;
case 60: return(parser.symbols_.PTR_OP); 
break;
case 61: return(parser.symbols_.AND_OP); 
break;
case 62: return(parser.symbols_.OR_OP); 
break;
case 63: return(parser.symbols_.LE_OP); 
break;
case 64: return(parser.symbols_.GE_OP); 
break;
case 65: return(parser.symbols_.EQ_OP); 
break;
case 66: return(parser.symbols_.NE_OP); 
break;
case 67: return(';'); 
break;
case 68: return(parser.symbols_.LBRACE); 
break;
case 69: return(parser.symbols_.RBRACE); 
break;
case 70: return(','); 
break;
case 71: return(':'); 
break;
case 72: return('='); 
break;
case 73: return('('); 
break;
case 74: return(')'); 
break;
case 75: return('['); 
break;
case 76: return(']'); 
break;
case 77: return('.'); 
break;
case 78: return('&'); 
break;
case 79: return('!'); 
break;
case 80: return('~'); 
break;
case 81: return('-'); 
break;
case 82: return('+'); 
break;
case 83: return('*'); 
break;
case 84: return('/'); 
break;
case 85: return('%'); 
break;
case 86: return('<'); 
break;
case 87: return('>'); 
break;
case 88: return('^'); 
break;
case 89: return('|'); 
break;
case 90: return('?'); 
break;
case 91: this.begin("PREPR"); return('#');
break;
case 92: return(parser.symbols_.LBRACE); 
break;
case 93: return(parser.symbols_.RBRACE); 
break;
case 94: return('['); 
break;
case 95: return(']'); 
break;
case 96: this.begin("PREPR"); return('#');
break;
case 97: return(parser.symbols_.AND_OP); 
break;
case 98: return('|'); 
break;
case 99: return(parser.symbols_.OR_OP); 
break;
case 100: return('^'); 
break;
case 101: return('~'); 
break;
case 102: return('&'); 
break;
case 103: return(parser.symbols_.AND_ASSIGN); 
break;
case 104: return(parser.symbols_.OR_ASSIGN); 
break;
case 105: return(parser.symbols_.XOR_ASSIGN); 
break;
case 106: return('!'); 
break;
case 107: return(parser.symbols_.NE_OP); 
break;
case 108:this.begin("INITIAL"); return "PP_NEWLINE";
break;
case 109:this.begin("WRAP_PREP");
break;
case 110: 
break;
case 111:return "PP_LPAREN";
break;
case 112:return "PP_QUOTE";
break;
case 113:return "PP_INCLUDE";
break;
case 114:return "PP_UNDEF";
break;
case 115:return "PP_LINE";
break;
case 116:return "PP_PRAGMA";
break;
case 117:return "PP_DEFINE";
break;
case 118:return "PP_DEFINED";
break;
case 119:return "PP_IFDEF";
break;
case 120:return "PP_IFNDEF";
break;
case 121:return "PP_IF";
break;
case 122:return "PP_ELSE";
break;
case 123:return "PP_ENDIF";
break;
case 124:return "PP_ELIF";
break;
case 125:return "PP_ERROR";
break;
case 126:return "IDENTIFIER";
break;
case 127:return "DECIMAL_LITERAL";
break;
case 128:return "OCTAL_LITERAL";
break;
case 129:return "HEXADECIMAL_LITERAL";
break;
case 130:return "FLOATING_LITERAL";
break;
case 131:return "CHARACTER_LITERAL";
break;
case 132:return "STRING_LITERAL";
break;
case 133:return "PP_QCHARSEQUENCE";
break;
case 134:return "PP_HCHARSEQUENCE";
break;
case 135:return "PP_ANYCHAR";
break;
case 136:this.begin("PREPR");
break;
case 137:return "IDENTIFIER";
break;
case 138:this.begin("INITIAL");
break;
case 139:return(parser.symbols_.CPP_COMMENT);
break;
case 140:this.begin("INITIAL");
break;
case 141:return(parser.symbols_.C_COMMENT);
break;
}
};
lexer.rules = [/^(?:\/\*)/,/^(?:\/\/)/,/^(?:([ ]|([\011]))+)/,/^(?:(([\013])|([\015])|([\014]))+)/,/^(?:(([ ]|([\011]))|([\013])|([\015])|([\014]))*\\n\b)/,/^(?:([\n]))/,/^(?:auto\b)/,/^(?:break\b)/,/^(?:case\b)/,/^(?:char\b)/,/^(?:const\b)/,/^(?:continue\b)/,/^(?:default\b)/,/^(?:do\b)/,/^(?:double\b)/,/^(?:else\b)/,/^(?:enum\b)/,/^(?:extern\b)/,/^(?:float\b)/,/^(?:for\b)/,/^(?:goto\b)/,/^(?:if\b)/,/^(?:int\b)/,/^(?:long\b)/,/^(?:register\b)/,/^(?:return\b)/,/^(?:short\b)/,/^(?:signed\b)/,/^(?:sizeof\b)/,/^(?:static\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:typedef\b)/,/^(?:union\b)/,/^(?:unsigned\b)/,/^(?:void\b)/,/^(?:volatile\b)/,/^(?:while\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/,/^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:((u|U|L))?(('))(\\.|[^\\(('))])+((')))/,/^(?:((u|u8|U|L))?"(\\.|[^\\"])*")/,/^(?:\.\.\.)/,/^(?:>>=)/,/^(?:<<=)/,/^(?:\+=)/,/^(?:-=)/,/^(?:\*=)/,/^(?:\/=)/,/^(?:%=)/,/^(?:&=)/,/^(?:\^=)/,/^(?:\|=)/,/^(?:>>)/,/^(?:<<)/,/^(?:\+\+)/,/^(?:--)/,/^(?:->)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:!=)/,/^(?:;)/,/^(?:(\{))/,/^(?:(\}))/,/^(?:,)/,/^(?::)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:(\[))/,/^(?:(\]))/,/^(?:\.)/,/^(?:&)/,/^(?:!)/,/^(?:~)/,/^(?:-)/,/^(?:\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:<)/,/^(?:>)/,/^(?:\^)/,/^(?:\|)/,/^(?:\?)/,/^(?:#)/,/^(?:<%)/,/^(?:%>)/,/^(?:<:)/,/^(?::>)/,/^(?:%:)/,/^(?:and\b)/,/^(?:bitor\b)/,/^(?:or\b)/,/^(?:xor\b)/,/^(?:compl\b)/,/^(?:bitand\b)/,/^(?:and_eq\b)/,/^(?:or_eq\b)/,/^(?:xor_eq\b)/,/^(?:not\b)/,/^(?:not_eq\b)/,/^(?:([\n]))/,/^(?:\\)/,/^(?:(([ ]|([\011]))))/,/^(?:(([ ]|([\011])))*\()/,/^(?:["])/,/^(?:include\b)/,/^(?:undef\b)/,/^(?:line\b)/,/^(?:pragma\b)/,/^(?:define\b)/,/^(?:defined\b)/,/^(?:ifdef\b)/,/^(?:ifndef\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:endif\b)/,/^(?:elif\b)/,/^(?:error\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/,/^(?:L?[']([^'\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))+['])/,/^(?:L?["]([^"\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))*["])/,/^(?:["][^\n]*["])/,/^(?:<[^\n]*>)/,/^(?:.)/,/^(?:\n\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:\n\b)/,/^(?:.*)/,/^(?:\*\/)/,/^(?:.*)/];
lexer.conditions = {"C_COMMENT":{"rules":[140,141],"inclusive":false},"CPP_COMMENT":{"rules":[138,139],"inclusive":false},"WRAP_PREP":{"rules":[136,137],"inclusive":false},"PREPR":{"rules":[108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107],"inclusive":true}};

;
return lexer;})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = ansic;
exports.Parser = ansic.Parser;
exports.parse = function () { return ansic.parse.apply(ansic, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    var source, cwd;
    if (typeof process !== 'undefined') {
        source = require('fs').readFileSync(require('path').resolve(args[1]), "utf8");
    } else {
        source = require("file").path(require("file").cwd()).join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}