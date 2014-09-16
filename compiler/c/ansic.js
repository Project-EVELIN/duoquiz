/* Jison generated parser */
var ansic = (function(){
var parser = {trace: function trace() {
        Jison.print.apply(null, arguments);
    },
yy: {},
symbols_: {"error":2,"start_sym":3,"translation_unit":4,"primary_expression":5,"identifier":6,"constant":7,"string_literal":8,"(":9,"expression":10,")":11,"postfix_expression":12,"[":13,"]":14,"argument_expression_list":15,".":16,"PTR_OP":17,"INC_OP":18,"DEC_OP":19,"type_name":20,"lbrace":21,"initializer_list":22,"rbrace":23,",":24,"assignment_expression":25,"unary_expression":26,"unary_operator":27,"cast_expression":28,"SIZEOF":29,"ALIGNOF":30,"&":31,"*":32,"+":33,"-":34,"~":35,"!":36,"multiplicative_expression":37,"/":38,"%":39,"additive_expression":40,"shift_expression":41,"LEFT_OP":42,"RIGHT_OP":43,"relational_expression":44,"<":45,">":46,"LE_OP":47,"GE_OP":48,"equality_expression":49,"EQ_OP":50,"NE_OP":51,"and_expression":52,"exclusive_or_expression":53,"^":54,"inclusive_or_expression":55,"|":56,"logical_and_expression":57,"AND_OP":58,"logical_or_expression":59,"OR_OP":60,"conditional_expression":61,"?":62,":":63,"assignment_operator":64,"=":65,"MUL_ASSIGN":66,"DIV_ASSIGN":67,"MOD_ASSIGN":68,"ADD_ASSIGN":69,"SUB_ASSIGN":70,"LEFT_ASSIGN":71,"RIGHT_ASSIGN":72,"AND_ASSIGN":73,"XOR_ASSIGN":74,"OR_ASSIGN":75,"constant_expression":76,"declaration":77,"declaration_specifiers":78,"maybe_typedef_mode":79,";":80,"init_declarator_list":81,"storage_class_specifier":82,"type_specifier":83,"type_qualifier":84,"function_specifier":85,"alignment_specifier":86,"INLINE":87,"NORETURN":88,"ALIGNAS":89,"init_declarator":90,"declarator":91,"initializer":92,"TYPEDEF":93,"EXTERN":94,"STATIC":95,"AUTO":96,"REGISTER":97,"VOID":98,"CHAR":99,"SHORT":100,"INT":101,"LONG":102,"FLOAT":103,"DOUBLE":104,"SIGNED":105,"UNSIGNED":106,"struct_or_union_specifier":107,"enum_specifier":108,"type_name_token":109,"struct_or_union":110,"struct_declaration_list":111,"STRUCT":112,"UNION":113,"struct_declaration":114,"specifier_qualifier_list":115,"struct_declarator_list":116,"struct_declarator":117,"ENUM":118,"enumerator_list":119,"enumerator":120,"CONST":121,"VOLATILE":122,"RESTRICT":123,"pointer":124,"direct_declarator":125,"type_qualifier_list":126,"parameter_type_list":127,"identifier_list":128,"parameter_list":129,"ellipsis":130,"parameter_declaration":131,"abstract_declarator":132,"direct_abstract_declarator":133,"statement":134,"labeled_statement":135,"compound_statement":136,"expression_statement":137,"selection_statement":138,"iteration_statement":139,"jump_statement":140,"CASE":141,"DEFAULT":142,"statement_list":143,"declaration_list":144,"save_position":145,"IF":146,"ELSE":147,"SWITCH":148,"WHILE":149,"DO":150,"FOR":151,"GOTO":152,"CONTINUE":153,"BREAK":154,"RETURN":155,"external_declaration":156,"function_definition":157,"IDENTIFIER":158,"TYPE_NAME":159,"CONSTANT_HEX":160,"CONSTANT_OCTAL":161,"CONSTANT_DECIMAL":162,"CONSTANT_CHAR":163,"CONSTANT_FLOAT":164,"STRING_LITERAL":165,"ELLIPSIS":166,"LBRACE":167,"RBRACE":168,"$accept":0,"$end":1},
terminals_: {2:"error",9:"(",11:")",13:"[",14:"]",16:".",17:"PTR_OP",18:"INC_OP",19:"DEC_OP",24:",",29:"SIZEOF",30:"ALIGNOF",31:"&",32:"*",33:"+",34:"-",35:"~",36:"!",38:"/",39:"%",42:"LEFT_OP",43:"RIGHT_OP",45:"<",46:">",47:"LE_OP",48:"GE_OP",50:"EQ_OP",51:"NE_OP",54:"^",56:"|",58:"AND_OP",60:"OR_OP",62:"?",63:":",65:"=",66:"MUL_ASSIGN",67:"DIV_ASSIGN",68:"MOD_ASSIGN",69:"ADD_ASSIGN",70:"SUB_ASSIGN",71:"LEFT_ASSIGN",72:"RIGHT_ASSIGN",73:"AND_ASSIGN",74:"XOR_ASSIGN",75:"OR_ASSIGN",80:";",87:"INLINE",88:"NORETURN",89:"ALIGNAS",93:"TYPEDEF",94:"EXTERN",95:"STATIC",96:"AUTO",97:"REGISTER",98:"VOID",99:"CHAR",100:"SHORT",101:"INT",102:"LONG",103:"FLOAT",104:"DOUBLE",105:"SIGNED",106:"UNSIGNED",112:"STRUCT",113:"UNION",118:"ENUM",121:"CONST",122:"VOLATILE",123:"RESTRICT",141:"CASE",142:"DEFAULT",146:"IF",147:"ELSE",148:"SWITCH",149:"WHILE",150:"DO",151:"FOR",152:"GOTO",153:"CONTINUE",154:"BREAK",155:"RETURN",158:"IDENTIFIER",159:"TYPE_NAME",160:"CONSTANT_HEX",161:"CONSTANT_OCTAL",162:"CONSTANT_DECIMAL",163:"CONSTANT_CHAR",164:"CONSTANT_FLOAT",165:"STRING_LITERAL",166:"ELLIPSIS",167:"LBRACE",168:"RBRACE"},
productions_: [0,[3,1],[5,1],[5,1],[5,1],[5,3],[12,1],[12,4],[12,3],[12,4],[12,3],[12,3],[12,2],[12,2],[12,6],[12,7],[15,1],[15,3],[26,1],[26,2],[26,2],[26,2],[26,2],[26,4],[26,4],[27,1],[27,1],[27,1],[27,1],[27,1],[27,1],[28,1],[28,4],[37,1],[37,3],[37,3],[37,3],[40,1],[40,3],[40,3],[41,1],[41,3],[41,3],[44,1],[44,3],[44,3],[44,3],[44,3],[49,1],[49,3],[49,3],[52,1],[52,3],[53,1],[53,3],[55,1],[55,3],[57,1],[57,3],[59,1],[59,3],[61,1],[61,5],[25,1],[25,3],[64,1],[64,1],[64,1],[64,1],[64,1],[64,1],[64,1],[64,1],[64,1],[64,1],[64,1],[10,1],[10,3],[76,1],[77,3],[77,4],[79,0],[78,1],[78,2],[78,1],[78,2],[78,1],[78,2],[78,1],[78,2],[78,1],[78,2],[85,1],[85,1],[86,4],[86,4],[81,1],[81,3],[90,1],[90,3],[82,1],[82,1],[82,1],[82,1],[82,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[107,5],[107,4],[107,2],[110,1],[110,1],[111,1],[111,2],[114,3],[114,2],[115,2],[115,1],[115,2],[115,1],[116,1],[116,3],[117,1],[117,2],[117,3],[108,5],[108,4],[108,2],[119,1],[119,3],[120,1],[120,3],[84,1],[84,1],[84,1],[91,2],[91,1],[125,1],[125,3],[125,5],[125,4],[125,4],[125,3],[125,6],[125,5],[125,6],[125,5],[125,4],[125,4],[125,4],[125,3],[124,1],[124,2],[124,2],[124,3],[126,1],[126,2],[127,1],[127,3],[129,1],[129,3],[131,2],[131,2],[131,1],[128,1],[128,3],[20,1],[20,2],[132,1],[132,1],[132,2],[133,3],[133,2],[133,3],[133,3],[133,4],[133,2],[133,3],[133,3],[133,4],[92,1],[92,3],[92,4],[22,1],[22,3],[134,1],[134,1],[134,1],[134,1],[134,1],[134,1],[134,1],[135,3],[135,4],[135,3],[136,2],[136,3],[136,3],[136,4],[144,1],[144,2],[143,1],[143,2],[143,3],[145,0],[137,1],[137,2],[138,5],[138,7],[138,5],[139,5],[139,7],[139,6],[139,7],[140,3],[140,2],[140,2],[140,2],[140,3],[4,1],[4,2],[156,1],[156,1],[157,4],[157,2],[6,1],[109,1],[7,1],[7,1],[7,1],[7,1],[7,1],[8,1],[130,1],[21,1],[23,1]],
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
      parser.yy.R("postfix_expression : '(' type_name ')' lbrace initializer_list rbrace");
      this.$ = ['(', $$[$0-4], ')', '{', $$[$0-1], '}'];
    
break;
case 15:
      parser.yy.R("postfix_expression : '(' type_name ')' lbrace initializer_list rbrace ','");
      this.$ = ['(', $$[$0-5], ')', '{', $$[$0-2], '}', ','];
    
break;
case 16:
    parser.yy.R("argument_expression_list : assignment_expression");
    this.$ = $$[$0];
  
break;
case 17:
    parser.yy.R("argument_expression_list : " +
      "argument_expression_list ',' assignment_expression");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 18:
    parser.yy.R("unary_expression : postfix_expression");
    this.$ = $$[$0];
  
break;
case 19:
    parser.yy.R("unary_expression : INC_OP unary_expression");
    this.$ =  ['++', $$[$0]];
  
break;
case 20:
    parser.yy.R("unary_expression : DEC_OP unary_expression");
    this.$ =  ['--', $$[$0]];
  
break;
case 21:
    parser.yy.R("unary_expression : unary_operator cast_expression");
    this.$ =  [$$[$0-1], $$[$0]];
  
break;
case 22:
    parser.yy.R("unary_expression : SIZEOF unary_expression");
    this.$ =  ['sizeof', $$[$0]];
  
break;
case 23:
    parser.yy.R("unary_expression : SIZEOF '(' type_name ')'");
    this.$ = ['sizeof', '(', $$[$0-1], ')'];
  
break;
case 24:
    parser.yy.R("unary_expression : _ALIGNOF '(' type_name ')'");
    this.$ = ['_Alignof', '(', $$[$0-1], ')'];
  
break;
case 25:
    parser.yy.R("unary_operator : '&'");
    this.$ = '&';
  
break;
case 26:
    parser.yy.R("unary_operator : '*'");
    this.$ = '*';
  
break;
case 27:
    parser.yy.R("unary_operator : '+'");
    this.$ = '+';
  
break;
case 28:
    parser.yy.R("unary_operator : '-'");
    this.$ = '-';
  
break;
case 29:
    parser.yy.R("unary_operator : '~'");
    this.$ = '~';
  
break;
case 30:
    parser.yy.R("unary_operator : '!'");
    this.$ = '!';
  
break;
case 31:
    parser.yy.R("cast_expression : unary_expression");
    this.$ = $$[$0];
  
break;
case 32:
    parser.yy.R("cast_expression : '(' type_name ')' cast_expression");
    this.$ = ['(', $$[$0-2], ')', $$[$0]];
  
break;
case 33:
    parser.yy.R("multiplicative_expression : cast_expression");
    this.$ = $$[$0];
  
break;
case 34:
    parser.yy.R("multiplicative_expression : " +
      "multiplicative_expression '*' cast_expression");
    this.$ = [$$[$0-2], '*', $$[$0]];
  
break;
case 35:
    parser.yy.R("multiplicative_expression : " +
      "multiplicative_expression '/' cast_expression");
    this.$ = [$$[$0-2], '/', $$[$0]];
  
break;
case 36:
    parser.yy.R("multiplicative_expression : " +
      "multiplicative_expression '%' cast_expression");
    this.$ = [$$[$0-2], '%', $$[$0]];
  
break;
case 37:
    parser.yy.R("additive_expression : multiplicative_expression");
    this.$ = $$[$0];
  
break;
case 38:
    parser.yy.R("additive_expression : " +
      "additive_expression '+' multiplicative_expression");
    this.$ = [$$[$0-2], '+', $$[$0]];
  
break;
case 39:
    parser.yy.R("additive_expression : " +
      "additive_expression '-' multiplicative_expression");
    this.$ = [$$[$0-2], '-', $$[$0]];
  
break;
case 40:
    parser.yy.R("shift_expression : additive_expression");
    this.$ = $$[$0];
  
break;
case 41:
    parser.yy.R("shift_expression : shift_expression LEFT_OP additive_expression");
    this.$ = [$$[$0-2], '<<', $$[$0]];
  
break;
case 42:
    parser.yy.R("shift_expression : shift_expression RIGHT_OP additive_expression");
    this.$ = [$$[$0-2], '>>', $$[$0]];
  
break;
case 43:
    parser.yy.R("relational_expression : shift_expression");
    this.$ = $$[$0];
  
break;
case 44:
    parser.yy.R("relational_expression : relational_expression '<' shift_expression");
    this.$ = [$$[$0-2], '<', $$[$0]];
  
break;
case 45:
    parser.yy.R("relational_expression : relational_expression '>' shift_expression");
    this.$ = [$$[$0-2], '>', $$[$0]];
  
break;
case 46:
    parser.yy.R("relational_expression : relational_expression LE_OP shift_expression");
    this.$ = [$$[$0-2], '<=', $$[$0]];
  
break;
case 47:
    parser.yy.R("relational_expression : relational_expression GE_OP shift_expression");
    this.$ = [$$[$0-2], '>=', $$[$0]];
  
break;
case 48:
    parser.yy.R("equality_expression : relational_expression");
    this.$ = $$[$0];
  
break;
case 49:
    parser.yy.R("equality_expression : equality_expression EQ_OP relational_expression");
    this.$ = [$$[$0-2], '==', $$[$0]];
  
break;
case 50:
    parser.yy.R("equality_expression : equality_expression NE_OP relational_expression");
    this.$ = [$$[$0-2], '!=', $$[$0]];
  
break;
case 51:
    parser.yy.R("and_expression : equality_expression");
    this.$ = $$[$0];
  
break;
case 52:
    parser.yy.R("and_expression : and_expression '&' equality_expression");
    this.$ = [$$[$0-2], '&', $$[$0]];
  
break;
case 53:
    parser.yy.R("exclusive_or_expression : and_expression");
    this.$ = $$[$0];
  
break;
case 54:
    parser.yy.R("exclusive_or_expression : exclusive_or_expression '^' and_expression");
    this.$ = [$$[$0-2], '^', $$[$0]];
  
break;
case 55:
    parser.yy.R("inclusive_or_expression : exclusive_or_expression");
    this.$ = $$[$0];
  
break;
case 56:
    parser.yy.R("inclusive_or_expression : " +
      "inclusive_or_expression '|' exclusive_or_expression");
    this.$ = [$$[$0-2], '|', $$[$0]];
  
break;
case 57:
    parser.yy.R("logical_and_expression : inclusive_or_expression");
    this.$ = $$[$0];
  
break;
case 58:
    parser.yy.R("logical_and_expression : logical_and_expression AND_OP inclusive_or_expression");
    this.$ = [$$[$0-2], '&&', $$[$0]];
  
break;
case 59:
    parser.yy.R("logical_or_expression : logical_and_expression");
    this.$ = $$[$0];
  
break;
case 60:
    parser.yy.R("logical_or_expression : " +
      "logical_or_expression OR_OP logical_and_expression");
    this.$ = [$$[$0-2], '||', $$[$0]];
  
break;
case 61:
    parser.yy.R("conditional_expression : logical_or_expression");
    this.$ = $$[$0];
  
break;
case 62:
    parser.yy.R("conditional_expression : " +
      "logical_or_expression '?' expression ':' conditional_expression");
    this.$ = [$$[$0-4], '?', $$[$0-2], ':', $$[$0]];
  
break;
case 63:
    parser.yy.R("assignment_expression : conditional_expression");
    this.$ = $$[$0];
  
break;
case 64:
    parser.yy.R("assignment_expression : " +
      "unary_expression assignment_operator assignment_expression");
    this.$ = [$$[$0-2], $$[$0], $$[$0]];
  
break;
case 65:
    parser.yy.R("assignment_operator : '='");
    this.$ = '=';
  
break;
case 66:
    parser.yy.R("assignment_operator : MUL_ASSIGN");
    this.$ = '*=';
  
break;
case 67:
    parser.yy.R("assignment_operator : DIV_ASSIGN");
    this.$ = '/=';
  
break;
case 68:
    parser.yy.R("assignment_operator : MOD_ASSIGN");
    this.$ = '%=';
  
break;
case 69:
    parser.yy.R("assignment_operator : ADD_ASSIGN");
    this.$ = '+=';
  
break;
case 70:
    parser.yy.R("assignment_operator : SUB_ASSIGN");
    this.$ = '-=';
  
break;
case 71:
    parser.yy.R("assignment_operator : LEFT_ASSIGN");
    this.$ = '<<=';
  
break;
case 72:
    parser.yy.R("assignment_operator : RIGHT_ASSIGN");
    this.$ = '>>=';
  
break;
case 73:
    parser.yy.R("assignment_operator : AND_ASSIGN");
    this.$ = '&=';
  
break;
case 74:
    parser.yy.R("assignment_operator : XOR_ASSIGN");
    this.$ = '^=';
  
break;
case 75:
    parser.yy.R("assignment_operator : OR_ASSIGN");
    this.$ = '|=';
  
break;
case 76:
    parser.yy.R("expression : assignment_expression");
    this.$ = $$[$0];
  
break;
case 77:
    parser.yy.R("expression : expression ',' assignment_expression");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 78:
    parser.yy.R("constant_expression : conditional_expression");
    this.$ = $$[$0];
  
break;
case 79:
    parser.yy.R("declaration : declaration_specifiers ';'");
    // If we were in the typedef mode, revert to the initial mode.
    parser.yy.typedefMode = 0;

    this.$ = [$$[$0-2], ';']; // empty declaration init
  
break;
case 80:
    parser.yy.R("declaration : declaration_specifiers init_declarator_list ';'");

    // If we were in the typedef mode, revert to the initial mode.
    parser.yy.typedefMode = 0;

    this.$ = [$$[$0-3], $$[$0-1], ';']; // non empty declaration init
  
break;
case 81:
    // If we'd seen 'typedef'...
    if (parser.yy.typedefMode === 1)
    {
      // ... then identifiers seen now are types
      ++parser.yy.typedefMode
    }
  
break;
case 82:
    parser.yy.R("declaration_specifiers : storage_class_specifier");
    this.$ = $$[$0];
  
break;
case 83:
    parser.yy.R("declaration_specifiers : " +
      "storage_class_specifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 84:
    parser.yy.R("declaration_specifiers : type_specifier");
    this.$ = $$[$0];
  
break;
case 85:
    parser.yy.R("declaration_specifiers : type_specifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 86:
    parser.yy.R("declaration_specifiers : type_qualifier");
    this.$ = $$[$0];
  
break;
case 87:
    parser.yy.R("declaration_specifiers : type_qualifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 88:
    parser.yy.R("declaration_specifiers : function_specifier");
    this.$ = $$[$0];
  
break;
case 89:
    parser.yy.R("declaration_specifiers : function_specifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 90:
    parser.yy.R("declaration_specifiers : alignment_specifier");
    this.$ = $$[$0];
  
break;
case 91:
    parser.yy.R("declaration_specifiers : alignment_specifier declaration_specifiers");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 92:
    parser.yy.R("function_specifier : INLINE");
    this.$ = 'inline';
  
break;
case 93:
    parser.yy.R("function_specifier : _NORETURN");
    this.$ = '_Noreturn';
  
break;
case 94:
    parser.yy.R("alignment_specifier : _ALIGNAS '(' type_name ')'");
    this.$ = ['_Alignas', '(', $$[$0-1], ')'];
  
break;
case 95:
    parser.yy.R("alignment_specifier : _ALIGNAS '(' constant_expression ')'");
    this.$ = ['_Alignas', '(', $$[$0-1], ')'];
  
break;
case 96:
    parser.yy.R("init_declarator_list : init_declarator");
    this.$ = $$[$0];
  
break;
case 97:
    parser.yy.R("init_declarator_list : init_declarator_list ',' init_declarator");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 98:
    parser.yy.R("init_declarator : declarator");
    this.$ = $$[$0];     // no initializer
  
break;
case 99:
    parser.yy.R("init_declarator : declarator '=' initializer");
    this.$ = [$$[$0-2], '=', $$[$0]];
  
break;
case 100:
    parser.yy.R("storage_class_specifier : TYPEDEF");
    parser.yy.typedefMode = 1;
    this.$ = 'typedef';
  
break;
case 101:
    parser.yy.R("storage_class_specifier : EXTERN");
    this.$ = 'extern';
  
break;
case 102:
    parser.yy.R("storage_class_specifier : STATIC");
    this.$ = 'static';
  
break;
case 103:
    parser.yy.R("storage_class_specifier : AUTO");
    this.$ = 'auto';
  
break;
case 104:
    parser.yy.R("storage_class_specifier : REGISTER");
    this.$ = 'register';
  
break;
case 105:
    parser.yy.R("type_specifier : VOID");
    this.$ = 'void';
  
break;
case 106:
    parser.yy.R("type_specifier : CHAR");
    this.$ = 'char';
  
break;
case 107:
    parser.yy.R("type_specifier : SHORT");
    this.$ = 'short';
  
break;
case 108:
    parser.yy.R("type_specifier : INT");
    this.$ = 'int';
  
break;
case 109:
    parser.yy.R("type_specifier : LONG");
    this.$ = 'long';
  
break;
case 110:
    parser.yy.R("type_specifier : FLOAT");
    this.$ = 'float';
  
break;
case 111:
    parser.yy.R("type_specifier : DOUBLE");
    this.$ = 'double';
  
break;
case 112:
    parser.yy.R("type_specifier : SIGNED");
    this.$ = 'signed';
  
break;
case 113:
    parser.yy.R("type_specifier : UNSIGNED");
    this.$ = 'unsigned';
  
break;
case 114:
    parser.yy.R("type_specifier : struct_or_union_specifier");
    this.$ = $$[$0];
  
break;
case 115:
    parser.yy.R("type_specifier : enum_specifier");
    this.$ = $$[$0];
  
break;
case 116:
    parser.yy.R("type_specifier : type_name_token");
    this.$ = $$[$0];
  
break;
case 117:
    parser.yy.R("struct_or_union_specifier : " +
      "struct_or_union identifier lbrace struct_declaration_list rbrace");
    this.$ = [$$[$0-4], $$[$0-3], '{', $$[$0-1], '}'];

    // Add a symbol table entry for this struct (a type)
    parser.yy.types[$$[$0-3].value] = $$[$0-4].value;
    parser.yy.bSawStruct = false;
  
break;
case 118:
    parser.yy.R("struct_or_union_specifier : " +
      "struct_or_union lbrace struct_declaration_list rbrace");
    this.$ = [$$[$0-3], '{', $$[$0-1], '}'];
    parser.yy.bSawStruct = false;
  
break;
case 119:
    parser.yy.R("struct_or_union_specifier : struct_or_union identifier");
    this.$ = [$$[$0-1], $$[$0]];

    // Add a symbol table entry for this struct
    parser.yy.types[$$[$0].value] = $$[$0-1].value;
    parser.yy.bSawStruct = false;
  
break;
case 120:
    parser.yy.R("struct_or_union : STRUCT");
    this.$ = 'struct';
  
break;
case 121:
    parser.yy.R("struct_or_union : UNION");
    this.$ = 'union';
  
break;
case 122:
    parser.yy.R("struct_declaration_list : struct_declaration");
    this.$ = $$[$0];
  
break;
case 123:
    parser.yy.R("struct_declaration_list : struct_declaration_list struct_declaration");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 124:
    parser.yy.R("struct_declaration : " +
      "specifier_qualifier_list struct_declarator_list ';'");
    this.$ = [$$[$0-2], $$[$0-1], ';'];
  
break;
case 125:
    parser.yy.R("struct_declaration : " +
      "specifier_qualifier_list ';'");
    this.$ = [$$[$0-1], ';'];
  
break;
case 126:
    parser.yy.R("specifier_qualifier_list : type_specifier specifier_qualifier_list");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 127:
    parser.yy.R("specifier_qualifier_list : type_specifier");
    this.$ = $$[$0];
  
break;
case 128:
    parser.yy.R("specifier_qualifier_list : type_qualifier specifier_qualifier_list");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 129:
    parser.yy.R("specifier_qualifier_list : type_qualifier");
    this.$ = $$[$0];
  
break;
case 130:
    parser.yy.R("struct_declarator_list : struct_declarator");
    this.$ = $$[$0];
  
break;
case 131:
    parser.yy.R("struct_declarator_list : struct_declarator_list ',' struct_declarator");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 132:
    parser.yy.R("struct_declarator : declarator");
    this.$ = $$[$0];
  
break;
case 133:
    parser.yy.R("struct_declarator : ':' constant_expression");
    this.$ = [':', $$[$0]];
  
break;
case 134:
    parser.yy.R("struct_declarator : declarator ':' constant_expression");
    this.$ = [$$[$0-2], ':', $$[$0]];
  
break;
case 135:
    parser.yy.R("enum : ENUM identifier lbrace enumerator_list rbrace");
    this.$ = ['enum', $$[$0-3], '{', $$[$0-1],'}'];

    // Add a symbol table entry for this enum (a type)
    parser.yy.types[$$[$0-3].value] = $$[$0-4].value;
    parser.yy.bSawStruct = false;
  
break;
case 136:
    parser.yy.R("enum : ENUM lbrace enumerator_list rbrace");
    this.$ = ['enum','{', $$[$0-1],'}'];
    parser.yy.bSawStruct = false;
  
break;
case 137:
    parser.yy.R("enum : ENUM identifier");
    this.$ = ['enum', $$[$0],];

    // Add a symbol table entry for this struct
    parser.yy.types[$$[$0].value] = $$[$0-1].value;
    parser.yy.bSawStruct = false;
  
break;
case 138:
    parser.yy.R("enumerator_list : enumerator");
    this.$ = $$[$0];
  
break;
case 139:
    parser.yy.R("enumerator_list : enumerator_list ',' enumerator");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 140:
    parser.yy.R("enumerator : identifier");
    this.$ = $$[$0]; // no initializer
  
break;
case 141:
    parser.yy.R("enumerator : identifier '=' constant_expression");
    this.$ = [$$[$0-2], '=', $$[$0]];
  
break;
case 142:
    parser.yy.R("type_qualifier : CONST");
    this.$ = 'const';
  
break;
case 143:
    parser.yy.R("type_qualifier : VOLATILE");
    this.$ = 'volatile';
  
break;
case 144:
    parser.yy.R("type_qualifier : RESTRICT");
    this.$ = 'restrict';
  
break;
case 145:
    parser.yy.R("declarator : pointer direct_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 146:
    parser.yy.R("declarator : direct_declarator");
    this.$ = $$[$0];
  
break;
case 147:
    parser.yy.R("direct_declarator : identifier");
    this.$ = $$[$0];
  
break;
case 148:
    parser.yy.R("direct_declarator : '(' declarator ')'");
    this.$ = ['(', $$[$0-1], ')'];
  
break;
case 149:
    parser.yy.R("direct_declarator : direct_declarator '[' type_qualifier_list assignment_expression ']'");
    this.$ = [$$[$0-4], '[', $$[$0-2], $$[$0-1], ']'];
  
break;
case 150:
    parser.yy.R("direct_declarator : direct_declarator '[' assignment_expression ']'");
    this.$ = [$$[$0-3], '[', $$[$0-1], ']'];
  
break;
case 151:
    parser.yy.R("direct_declarator : direct_declarator '[' type_qualifier_list ']'");
    this.$ = [$$[$0-3], '[', $$[$0-1], ']'];
  
break;
case 152:
    parser.yy.R("direct_declarator : direct_declarator '[' ']'");
    this.$ = [$$[$0-2], '[', ']'];
  
break;
case 153:
    parser.yy.R("direct_declarator : direct_declarator '[' STATIC type_qualifier_list assignment_expression ']'");
    this.$ = [$$[$0-5], '[', 'static', $$[$0-2], $$[$0-1], ']'];
  
break;
case 154:
    parser.yy.R("direct_declarator : direct_declarator '[' STATIC assignment_expression ']'");
    this.$ = [$$[$0-4], '[', 'static', $$[$0-1], ']'];
  
break;
case 155:
    parser.yy.R("direct_declarator : direct_declarator '[' type_qualifier_list STATIC assignment_expression ']'");
    this.$ = [$$[$0-5], '[', $$[$0-3], 'STATIC', $$[$0-1], ']'];
  
break;
case 156:
    parser.yy.R("direct_declarator : direct_declarator '[' type_qualifier_list '*' ']'");
    this.$ = [$$[$0-4], '[', $$[$0-2], '*', ']'];
  
break;
case 157:
    parser.yy.R("direct_declarator : direct_declarator '[' '*' ']'");
    this.$ = [$$[$0-3], '[', '*', ']'];
  
break;
case 158:
    parser.yy.R("direct_declarator : " +
      "direct_declarator '(' parameter_type_list ')'");
    this.$ = [$$[$0-3], $$[$0-2], '(', $$[$0], ')'];
  
break;
case 159:
    parser.yy.R("direct_declarator : " +
      "direct_declarator '(' identifier_list ')'");
    this.$ = [$$[$0-3], '(', $$[$0-1], ')'];
  
break;
case 160:
    parser.yy.R("direct_declarator : " +
      "direct_declarator '(' identifier_list ')'");
    this.$ = [$$[$0-2], '(', ')'];
  
break;
case 161:
    parser.yy.R("pointer : '*'");
    this.$ = '*';
  
break;
case 162:
    parser.yy.R("pointer : '*' type_qualifier_list");
    this.$ = ['*', $$[$0]];
  
break;
case 163:
    parser.yy.R("pointer : '*' pointer");
    this.$ = ['*', $$[$0]];
  
break;
case 164:
    parser.yy.R("pointer : '*' type_qualifier_list pointer");
    this.$ = ['*', $$[$0-1], $$[$0]];
  
break;
case 165:
    parser.yy.R("type_qualifier_list : type_qualifier");
    this.$ = $$[$0];
  
break;
case 166:
    parser.yy.R("type_qualifier_list : type_qualifier_list type_qualifier");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 167:
    parser.yy.R("parameter_type_list : parameter_list");
    this.$ = $$[$0];
  
break;
case 168:
    parser.yy.R("parameter_type_list : parameter_list ',' ellipsis");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 169:
    parser.yy.R("parameter_list : parameter_declaration");
    this.$ = $$[$0];
  
break;
case 170:
    parser.yy.R("parameter_list : parameter_list ',' parameter_declaration");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 171:
    parser.yy.R("parameter_declaration : declaration_specifiers declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 172:
    parser.yy.R("parameter_declaration : declaration_specifiers abstract_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 173:
    parser.yy.R("parameter_declaration : declaration_specifiers");
    this.$ = $$[$0];
  
break;
case 174:
    parser.yy.R("identifier_list : identifier");
    this.$ = $$[$0];
  
break;
case 175:
    parser.yy.R("identifier_list : identifier_list ',' identifier");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 176:
    parser.yy.R("type_name : specifier_qualifier_list");
    this.$ = $$[$0];
  
break;
case 177:
    parser.yy.R("type_name : specifier_qualifier_list abstract_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 178:
    parser.yy.R("abstract_declarator : pointer");
    this.$ = $$[$0];
  
break;
case 179:
    parser.yy.R("abstract_declarator : direct_abstract_declarator");
    this.$ = $$[$0];
  
break;
case 180:
    parser.yy.R("abstract_declarator : pointer direct_abstract_declarator");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 181:
    parser.yy.R("direct_abstract_declarator : '(' abstract_declarator ')'");
    this.$ = ['(', $$[$0-1], ')'];
  
break;
case 182:
    parser.yy.R("direct_abstract_declarator : '[' ']'");
    this.$ = ['[', ']'];
  
break;
case 183:
    parser.yy.R("direct_abstract_declarator : '[' constant_expression ']'");
    this.$ = ['[', $$[$0-1], ']'];
  
break;
case 184:
    parser.yy.R("direct_abstract_declarator : direct_abstract_declarator '[' ']'");
    this.$ = [$$[$0-2], '[', ']'];
  
break;
case 185:
    parser.yy.R("direct_abstract_declarator : " +
      "direct_abstract_declarator '[' constant_expression ']'");
    this.$ = [$$[$0-3], '[', $$[$0-1], ']'];
  
break;
case 186:
    parser.yy.R("direct_abstract_declarator : '(' ')'");
    this.$ = ['(', ')'];
  
break;
case 187:
    parser.yy.R("direct_abstract_declarator : '(' parameter_type_list ')'");
    this.$ = ['(', $$[$0], ')'];
  
break;
case 188:
    parser.yy.R("direct_abstract_declarator : direct_abstract_declarator '(' ')'");
    this.$ = [$$[$0-2], '(', ')'];
  
break;
case 189:
    parser.yy.R("direct_abstract_declarator : " +
      "direct_abstract_declarator '(' parameter_type_list ')'");
    this.$ = [$$[$0-3], '(', $$[$0-1], ')'];
  
break;
case 190:
    parser.yy.R("initializer : assignment_expression");
    this.$ = $$[$0];
  
break;
case 191:
    parser.yy.R("initializer : lbrace initializer_list rbrace");
    this.$ = $$[$0-1];
  
break;
case 192:
    parser.yy.R("initializer : lbrace initializer_list ',' rbrace");
    this.$ = $$[$0-2];
  
break;
case 193:
    parser.yy.R("initializer_list : initializer");
    this.$ = $$[$0];
  
break;
case 194:
    parser.yy.R("initializer_list : initializer_list ',' initializer");
    this.$ = [$$[$0-2], ',', $$[$0]];
  
break;
case 195:
    parser.yy.R("statement : labeled_statement");
    this.$ = $$[$0];
  
break;
case 196:
    parser.yy.R("statement : compound_statement");
    this.$ = $$[$0];
  
break;
case 197:
    parser.yy.R("statement : expression_statement");
    this.$ = $$[$0];
  
break;
case 198:
    parser.yy.R("statement : selection_statement");
    this.$ = $$[$0];
  
break;
case 199:
    parser.yy.R("statement : iteration_statement");
    this.$ = $$[$0];
  
break;
case 200:
    parser.yy.R("statement : jump_statement");
    this.$ = $$[$0];
  
break;
case 201:
    parser.yy.R("statement : error");
  
break;
case 202:
    parser.yy.R("labeled_statement : identifier ':' statement");
    this.$ = [$$[$0-2], ':', $$[$0]];
  
break;
case 203:
    parser.yy.R("labeled_statement : CASE constant_expression ':' statement");
    this.$ = ['case', $$[$0-2], ':', $$[$0]];
  
break;
case 204:
    parser.yy.R("labeled_statement : DEFAULT ':' statement");
      this.$ = ['default', ':', $$[$0]];
  
break;
case 205:
    parser.yy.R("compound_statement : lbrace rbrace");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 206:
    parser.yy.R("compound_statement : lbrace statement_list rbrace");
    this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
  
break;
case 207:
    parser.yy.R("compound_statement : lbrace declaration_list rbrace");
    this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
  
break;
case 208:
    parser.yy.R("compound_statement : lbrace declaration_list statement_list rbrace");
    this.$ = [$$[$0-3], $$[$0-2], $$[$0-1], $$[$0]];
  
break;
case 209:
    parser.yy.R("declaration_list : declaration");
    this.$ = $$[$0];
  
break;
case 210:
    parser.yy.R("declaration_list : declaration_list declaration");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 211:
    parser.yy.R("statement_list : statement");
    this.$ = $$[$0];
  
break;
case 212:
    parser.yy.R("statement_list : statement_list statement");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 213:
    parser.parseError(
      "Declarations must precede executable statements.",
      { line : yylineno },
      $$[$0-1]);
  
break;
case 214:
    this.$ = parser.lexer.showPosition();
  
break;
case 215:
    parser.yy.R("expression_statement : ';'");
    this.$ = ';';
  
break;
case 216:
    parser.yy.R("expression_statement : expression ';'");
    this.$ = [$$[$0-1], ';'];
  
break;
case 217:
    parser.yy.R("selection_statement : IF '(' expression ')' statement");
    this.$ = ['if', '(', $$[$0-2], ')', $$[$0]];
  
break;
case 218:
    parser.yy.R("selection_statement : IF '(' expression ')' statement ELSE statement");
    this.$ = ['if', '(', $$[$0-4], ')', $$[$0-2], 'else', $$[$0]];
  
break;
case 219:
    parser.yy.R("selection_statement : SWITCH '(' expression ')' statement");
    this.$ = ['switch', '(', $$[$0-2], ')', $$[$0]];
  
break;
case 220:
    parser.yy.R("iteration_statement : WHILE '(' expression ')' statement");
    this.$ = ['while', '(', $$[$0-2], ')', $$[$0]];
  
break;
case 221:
    parser.yy.R("iteration_statement : DO statement WHILE '(' expression ')' ';'");
    this.$ = ['do', $$[$0-5], 'while', '(', $$[$0-2], ')', ';'];
  
break;
case 222:
    parser.yy.R("iteration_statement : FOR '(' expression_statement expression_statement ')' statement");
    this.$ = ['for', $$[$0-3], $$[$0-2], ')', $$[$0]];
  
break;
case 223:
    parser.yy.R("iteration_statement : " +
      "FOR '(' expression_statement expression_statement expression ')' " +
      "statement");
    this.$ = ['for', '(',  $$[$0-4],  $$[$0-2], $$[$0-1], $$[$0] ];
  
break;
case 224:
    parser.yy.R("jump_statement : GOTO identifier ';'");
    this.$ = ['goto', $$[$0-1], ';'];
  
break;
case 225:
    parser.yy.R("jump_statement : CONTINUE ';'");
    this.$ = ['continue', ';'];
  
break;
case 226:
    parser.yy.R("jump_statement : BREAK ';'");
    this.$ = ['break', ';'];
  
break;
case 227:
    parser.yy.R("jump_statement : RETURN ';'");
    this.$ = ['return', ';'];
  
break;
case 228:
    parser.yy.R("jump_statement : RETURN expression ';'");
    this.$ = ['return', $$[$0-1], ';'];
  
break;
case 229:
      parser.yy.R("translation_unit : external_declaration");
      this.$ = $$[$0];
    
break;
case 230:
      parser.yy.R("translation_unit : translation_unit external_declaration");
      this.$ = [$$[$0-1], $$[$0]];
    
break;
case 231:
    parser.yy.R("external_declaration : function_definition");
    this.$ = $$[$0];
  
break;
case 232:
    parser.yy.R("external_declaration : declaration");
    this.$ = $$[$0];
  
break;
case 233:
    parser.yy.R("function_definition : " +
      "declaration_specifiers declarator compound_statement");
    this.$ = [$$[$0-3], $$[$0-1], $$[$0]];
  
break;
case 234:
    parser.yy.R("function_definition : declarator compound_statement");
    this.$ = [$$[$0-1], $$[$0]];
  
break;
case 235:
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
case 236:
    parser.yy.R("identifier : TYPE_NAME (" + yytext + ")");
    this.$ = yytext;
  
break;
case 237:
    parser.yy.R("constant : CONSTANT_HEX (" + yytext + ")");

    this.$ = $$[$0];
  
break;
case 238:
    parser.yy.R("constant : CONSTANT_OCTAL (" + yytext + ")");

    this.$ = $$[$0];
  
break;
case 239:
    parser.yy.R("constant : CONSTANT_DECIMAL (" + yytext + ")");

    this.$ = $$[$0];
  
break;
case 240:
    parser.yy.R("constant : CONSTANT_CHAR (" + yytext + ")");
    this.$ = $$[$0];
  
break;
case 241:
    parser.yy.R("constant : CONSTANT (" + yytext + ")");
    this.$ = $$[$0];
  
break;
case 242:
    parser.yy.R("string_literal : STRING_LITERAL");
    this.$ = $$[$0];
  
break;
case 243:
    parser.yy.R("ellipsis : ELLIPSIS");
    this.$ = '...';
  
break;
case 244:
    parser.yy.R("lbrace : LBRACE");
    this.$ =  $$[$0];
  
break;
case 245:
    parser.yy.R("rbrace : RBRACE");
    this.$ = $$[$0];
  
break;
}
},
table: [{3:1,4:2,6:39,9:[1,40],32:[1,38],77:5,78:6,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],91:7,93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],124:13,125:14,156:3,157:4,158:[1,44],159:[1,43]},{1:[3]},{1:[2,1],6:39,9:[1,40],32:[1,38],77:5,78:6,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],91:7,93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],124:13,125:14,156:47,157:4,158:[1,44],159:[1,43]},{1:[2,229],9:[2,229],32:[2,229],87:[2,229],88:[2,229],89:[2,229],93:[2,229],94:[2,229],95:[2,229],96:[2,229],97:[2,229],98:[2,229],99:[2,229],100:[2,229],101:[2,229],102:[2,229],103:[2,229],104:[2,229],105:[2,229],106:[2,229],112:[2,229],113:[2,229],118:[2,229],121:[2,229],122:[2,229],123:[2,229],158:[2,229],159:[2,229]},{1:[2,231],9:[2,231],32:[2,231],87:[2,231],88:[2,231],89:[2,231],93:[2,231],94:[2,231],95:[2,231],96:[2,231],97:[2,231],98:[2,231],99:[2,231],100:[2,231],101:[2,231],102:[2,231],103:[2,231],104:[2,231],105:[2,231],106:[2,231],112:[2,231],113:[2,231],118:[2,231],121:[2,231],122:[2,231],123:[2,231],158:[2,231],159:[2,231]},{1:[2,232],9:[2,232],32:[2,232],87:[2,232],88:[2,232],89:[2,232],93:[2,232],94:[2,232],95:[2,232],96:[2,232],97:[2,232],98:[2,232],99:[2,232],100:[2,232],101:[2,232],102:[2,232],103:[2,232],104:[2,232],105:[2,232],106:[2,232],112:[2,232],113:[2,232],118:[2,232],121:[2,232],122:[2,232],123:[2,232],158:[2,232],159:[2,232]},{9:[2,81],32:[2,81],79:48,80:[2,81],158:[2,81]},{21:50,136:49,167:[1,51]},{9:[2,82],11:[2,82],13:[2,82],24:[2,82],32:[2,82],78:52,80:[2,82],82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[2,82],159:[1,43]},{9:[2,84],11:[2,84],13:[2,84],24:[2,84],32:[2,84],78:53,80:[2,84],82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[2,84],159:[1,43]},{9:[2,86],11:[2,86],13:[2,86],24:[2,86],32:[2,86],78:54,80:[2,86],82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[2,86],159:[1,43]},{9:[2,88],11:[2,88],13:[2,88],24:[2,88],32:[2,88],78:55,80:[2,88],82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[2,88],159:[1,43]},{9:[2,90],11:[2,90],13:[2,90],24:[2,90],32:[2,90],78:56,80:[2,90],82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[2,90],159:[1,43]},{6:39,9:[1,40],125:57,158:[1,44]},{9:[1,59],11:[2,146],13:[1,58],24:[2,146],63:[2,146],65:[2,146],80:[2,146],167:[2,146]},{9:[2,100],11:[2,100],13:[2,100],24:[2,100],32:[2,100],80:[2,100],87:[2,100],88:[2,100],89:[2,100],93:[2,100],94:[2,100],95:[2,100],96:[2,100],97:[2,100],98:[2,100],99:[2,100],100:[2,100],101:[2,100],102:[2,100],103:[2,100],104:[2,100],105:[2,100],106:[2,100],112:[2,100],113:[2,100],118:[2,100],121:[2,100],122:[2,100],123:[2,100],158:[2,100],159:[2,100]},{9:[2,101],11:[2,101],13:[2,101],24:[2,101],32:[2,101],80:[2,101],87:[2,101],88:[2,101],89:[2,101],93:[2,101],94:[2,101],95:[2,101],96:[2,101],97:[2,101],98:[2,101],99:[2,101],100:[2,101],101:[2,101],102:[2,101],103:[2,101],104:[2,101],105:[2,101],106:[2,101],112:[2,101],113:[2,101],118:[2,101],121:[2,101],122:[2,101],123:[2,101],158:[2,101],159:[2,101]},{9:[2,102],11:[2,102],13:[2,102],24:[2,102],32:[2,102],80:[2,102],87:[2,102],88:[2,102],89:[2,102],93:[2,102],94:[2,102],95:[2,102],96:[2,102],97:[2,102],98:[2,102],99:[2,102],100:[2,102],101:[2,102],102:[2,102],103:[2,102],104:[2,102],105:[2,102],106:[2,102],112:[2,102],113:[2,102],118:[2,102],121:[2,102],122:[2,102],123:[2,102],158:[2,102],159:[2,102]},{9:[2,103],11:[2,103],13:[2,103],24:[2,103],32:[2,103],80:[2,103],87:[2,103],88:[2,103],89:[2,103],93:[2,103],94:[2,103],95:[2,103],96:[2,103],97:[2,103],98:[2,103],99:[2,103],100:[2,103],101:[2,103],102:[2,103],103:[2,103],104:[2,103],105:[2,103],106:[2,103],112:[2,103],113:[2,103],118:[2,103],121:[2,103],122:[2,103],123:[2,103],158:[2,103],159:[2,103]},{9:[2,104],11:[2,104],13:[2,104],24:[2,104],32:[2,104],80:[2,104],87:[2,104],88:[2,104],89:[2,104],93:[2,104],94:[2,104],95:[2,104],96:[2,104],97:[2,104],98:[2,104],99:[2,104],100:[2,104],101:[2,104],102:[2,104],103:[2,104],104:[2,104],105:[2,104],106:[2,104],112:[2,104],113:[2,104],118:[2,104],121:[2,104],122:[2,104],123:[2,104],158:[2,104],159:[2,104]},{9:[2,105],11:[2,105],13:[2,105],24:[2,105],32:[2,105],63:[2,105],80:[2,105],87:[2,105],88:[2,105],89:[2,105],93:[2,105],94:[2,105],95:[2,105],96:[2,105],97:[2,105],98:[2,105],99:[2,105],100:[2,105],101:[2,105],102:[2,105],103:[2,105],104:[2,105],105:[2,105],106:[2,105],112:[2,105],113:[2,105],118:[2,105],121:[2,105],122:[2,105],123:[2,105],158:[2,105],159:[2,105]},{9:[2,106],11:[2,106],13:[2,106],24:[2,106],32:[2,106],63:[2,106],80:[2,106],87:[2,106],88:[2,106],89:[2,106],93:[2,106],94:[2,106],95:[2,106],96:[2,106],97:[2,106],98:[2,106],99:[2,106],100:[2,106],101:[2,106],102:[2,106],103:[2,106],104:[2,106],105:[2,106],106:[2,106],112:[2,106],113:[2,106],118:[2,106],121:[2,106],122:[2,106],123:[2,106],158:[2,106],159:[2,106]},{9:[2,107],11:[2,107],13:[2,107],24:[2,107],32:[2,107],63:[2,107],80:[2,107],87:[2,107],88:[2,107],89:[2,107],93:[2,107],94:[2,107],95:[2,107],96:[2,107],97:[2,107],98:[2,107],99:[2,107],100:[2,107],101:[2,107],102:[2,107],103:[2,107],104:[2,107],105:[2,107],106:[2,107],112:[2,107],113:[2,107],118:[2,107],121:[2,107],122:[2,107],123:[2,107],158:[2,107],159:[2,107]},{9:[2,108],11:[2,108],13:[2,108],24:[2,108],32:[2,108],63:[2,108],80:[2,108],87:[2,108],88:[2,108],89:[2,108],93:[2,108],94:[2,108],95:[2,108],96:[2,108],97:[2,108],98:[2,108],99:[2,108],100:[2,108],101:[2,108],102:[2,108],103:[2,108],104:[2,108],105:[2,108],106:[2,108],112:[2,108],113:[2,108],118:[2,108],121:[2,108],122:[2,108],123:[2,108],158:[2,108],159:[2,108]},{9:[2,109],11:[2,109],13:[2,109],24:[2,109],32:[2,109],63:[2,109],80:[2,109],87:[2,109],88:[2,109],89:[2,109],93:[2,109],94:[2,109],95:[2,109],96:[2,109],97:[2,109],98:[2,109],99:[2,109],100:[2,109],101:[2,109],102:[2,109],103:[2,109],104:[2,109],105:[2,109],106:[2,109],112:[2,109],113:[2,109],118:[2,109],121:[2,109],122:[2,109],123:[2,109],158:[2,109],159:[2,109]},{9:[2,110],11:[2,110],13:[2,110],24:[2,110],32:[2,110],63:[2,110],80:[2,110],87:[2,110],88:[2,110],89:[2,110],93:[2,110],94:[2,110],95:[2,110],96:[2,110],97:[2,110],98:[2,110],99:[2,110],100:[2,110],101:[2,110],102:[2,110],103:[2,110],104:[2,110],105:[2,110],106:[2,110],112:[2,110],113:[2,110],118:[2,110],121:[2,110],122:[2,110],123:[2,110],158:[2,110],159:[2,110]},{9:[2,111],11:[2,111],13:[2,111],24:[2,111],32:[2,111],63:[2,111],80:[2,111],87:[2,111],88:[2,111],89:[2,111],93:[2,111],94:[2,111],95:[2,111],96:[2,111],97:[2,111],98:[2,111],99:[2,111],100:[2,111],101:[2,111],102:[2,111],103:[2,111],104:[2,111],105:[2,111],106:[2,111],112:[2,111],113:[2,111],118:[2,111],121:[2,111],122:[2,111],123:[2,111],158:[2,111],159:[2,111]},{9:[2,112],11:[2,112],13:[2,112],24:[2,112],32:[2,112],63:[2,112],80:[2,112],87:[2,112],88:[2,112],89:[2,112],93:[2,112],94:[2,112],95:[2,112],96:[2,112],97:[2,112],98:[2,112],99:[2,112],100:[2,112],101:[2,112],102:[2,112],103:[2,112],104:[2,112],105:[2,112],106:[2,112],112:[2,112],113:[2,112],118:[2,112],121:[2,112],122:[2,112],123:[2,112],158:[2,112],159:[2,112]},{9:[2,113],11:[2,113],13:[2,113],24:[2,113],32:[2,113],63:[2,113],80:[2,113],87:[2,113],88:[2,113],89:[2,113],93:[2,113],94:[2,113],95:[2,113],96:[2,113],97:[2,113],98:[2,113],99:[2,113],100:[2,113],101:[2,113],102:[2,113],103:[2,113],104:[2,113],105:[2,113],106:[2,113],112:[2,113],113:[2,113],118:[2,113],121:[2,113],122:[2,113],123:[2,113],158:[2,113],159:[2,113]},{9:[2,114],11:[2,114],13:[2,114],24:[2,114],32:[2,114],63:[2,114],80:[2,114],87:[2,114],88:[2,114],89:[2,114],93:[2,114],94:[2,114],95:[2,114],96:[2,114],97:[2,114],98:[2,114],99:[2,114],100:[2,114],101:[2,114],102:[2,114],103:[2,114],104:[2,114],105:[2,114],106:[2,114],112:[2,114],113:[2,114],118:[2,114],121:[2,114],122:[2,114],123:[2,114],158:[2,114],159:[2,114]},{9:[2,115],11:[2,115],13:[2,115],24:[2,115],32:[2,115],63:[2,115],80:[2,115],87:[2,115],88:[2,115],89:[2,115],93:[2,115],94:[2,115],95:[2,115],96:[2,115],97:[2,115],98:[2,115],99:[2,115],100:[2,115],101:[2,115],102:[2,115],103:[2,115],104:[2,115],105:[2,115],106:[2,115],112:[2,115],113:[2,115],118:[2,115],121:[2,115],122:[2,115],123:[2,115],158:[2,115],159:[2,115]},{9:[2,116],11:[2,116],13:[2,116],24:[2,116],32:[2,116],63:[2,116],80:[2,116],87:[2,116],88:[2,116],89:[2,116],93:[2,116],94:[2,116],95:[2,116],96:[2,116],97:[2,116],98:[2,116],99:[2,116],100:[2,116],101:[2,116],102:[2,116],103:[2,116],104:[2,116],105:[2,116],106:[2,116],112:[2,116],113:[2,116],118:[2,116],121:[2,116],122:[2,116],123:[2,116],158:[2,116],159:[2,116]},{9:[2,142],11:[2,142],13:[2,142],14:[2,142],18:[2,142],19:[2,142],24:[2,142],29:[2,142],30:[2,142],31:[2,142],32:[2,142],33:[2,142],34:[2,142],35:[2,142],36:[2,142],63:[2,142],80:[2,142],87:[2,142],88:[2,142],89:[2,142],93:[2,142],94:[2,142],95:[2,142],96:[2,142],97:[2,142],98:[2,142],99:[2,142],100:[2,142],101:[2,142],102:[2,142],103:[2,142],104:[2,142],105:[2,142],106:[2,142],112:[2,142],113:[2,142],118:[2,142],121:[2,142],122:[2,142],123:[2,142],158:[2,142],159:[2,142],160:[2,142],161:[2,142],162:[2,142],163:[2,142],164:[2,142],165:[2,142]},{9:[2,143],11:[2,143],13:[2,143],14:[2,143],18:[2,143],19:[2,143],24:[2,143],29:[2,143],30:[2,143],31:[2,143],32:[2,143],33:[2,143],34:[2,143],35:[2,143],36:[2,143],63:[2,143],80:[2,143],87:[2,143],88:[2,143],89:[2,143],93:[2,143],94:[2,143],95:[2,143],96:[2,143],97:[2,143],98:[2,143],99:[2,143],100:[2,143],101:[2,143],102:[2,143],103:[2,143],104:[2,143],105:[2,143],106:[2,143],112:[2,143],113:[2,143],118:[2,143],121:[2,143],122:[2,143],123:[2,143],158:[2,143],159:[2,143],160:[2,143],161:[2,143],162:[2,143],163:[2,143],164:[2,143],165:[2,143]},{9:[2,144],11:[2,144],13:[2,144],14:[2,144],18:[2,144],19:[2,144],24:[2,144],29:[2,144],30:[2,144],31:[2,144],32:[2,144],33:[2,144],34:[2,144],35:[2,144],36:[2,144],63:[2,144],80:[2,144],87:[2,144],88:[2,144],89:[2,144],93:[2,144],94:[2,144],95:[2,144],96:[2,144],97:[2,144],98:[2,144],99:[2,144],100:[2,144],101:[2,144],102:[2,144],103:[2,144],104:[2,144],105:[2,144],106:[2,144],112:[2,144],113:[2,144],118:[2,144],121:[2,144],122:[2,144],123:[2,144],158:[2,144],159:[2,144],160:[2,144],161:[2,144],162:[2,144],163:[2,144],164:[2,144],165:[2,144]},{9:[2,92],11:[2,92],13:[2,92],24:[2,92],32:[2,92],80:[2,92],87:[2,92],88:[2,92],89:[2,92],93:[2,92],94:[2,92],95:[2,92],96:[2,92],97:[2,92],98:[2,92],99:[2,92],100:[2,92],101:[2,92],102:[2,92],103:[2,92],104:[2,92],105:[2,92],106:[2,92],112:[2,92],113:[2,92],118:[2,92],121:[2,92],122:[2,92],123:[2,92],158:[2,92],159:[2,92]},{9:[2,93],11:[2,93],13:[2,93],24:[2,93],32:[2,93],80:[2,93],87:[2,93],88:[2,93],89:[2,93],93:[2,93],94:[2,93],95:[2,93],96:[2,93],97:[2,93],98:[2,93],99:[2,93],100:[2,93],101:[2,93],102:[2,93],103:[2,93],104:[2,93],105:[2,93],106:[2,93],112:[2,93],113:[2,93],118:[2,93],121:[2,93],122:[2,93],123:[2,93],158:[2,93],159:[2,93]},{9:[1,60]},{9:[2,161],11:[2,161],13:[2,161],24:[2,161],32:[1,38],84:63,121:[1,32],122:[1,33],123:[1,34],124:62,126:61,158:[2,161]},{9:[2,147],11:[2,147],13:[2,147],24:[2,147],63:[2,147],65:[2,147],80:[2,147],167:[2,147]},{6:39,9:[1,40],32:[1,38],91:64,124:13,125:14,158:[1,44]},{6:65,21:66,158:[1,44],167:[1,51]},{6:67,21:68,158:[1,44],167:[1,51]},{9:[2,236],11:[2,236],13:[2,236],24:[2,236],32:[2,236],63:[2,236],80:[2,236],87:[2,236],88:[2,236],89:[2,236],93:[2,236],94:[2,236],95:[2,236],96:[2,236],97:[2,236],98:[2,236],99:[2,236],100:[2,236],101:[2,236],102:[2,236],103:[2,236],104:[2,236],105:[2,236],106:[2,236],112:[2,236],113:[2,236],118:[2,236],121:[2,236],122:[2,236],123:[2,236],158:[2,236],159:[2,236]},{9:[2,235],11:[2,235],13:[2,235],14:[2,235],16:[2,235],17:[2,235],18:[2,235],19:[2,235],24:[2,235],31:[2,235],32:[2,235],33:[2,235],34:[2,235],38:[2,235],39:[2,235],42:[2,235],43:[2,235],45:[2,235],46:[2,235],47:[2,235],48:[2,235],50:[2,235],51:[2,235],54:[2,235],56:[2,235],58:[2,235],60:[2,235],62:[2,235],63:[2,235],65:[2,235],66:[2,235],67:[2,235],68:[2,235],69:[2,235],70:[2,235],71:[2,235],72:[2,235],73:[2,235],74:[2,235],75:[2,235],80:[2,235],87:[2,235],88:[2,235],89:[2,235],93:[2,235],94:[2,235],95:[2,235],96:[2,235],97:[2,235],98:[2,235],99:[2,235],100:[2,235],101:[2,235],102:[2,235],103:[2,235],104:[2,235],105:[2,235],106:[2,235],112:[2,235],113:[2,235],118:[2,235],121:[2,235],122:[2,235],123:[2,235],158:[2,235],159:[2,235],167:[2,235],168:[2,235]},{158:[2,120],167:[2,120]},{158:[2,121],167:[2,121]},{1:[2,230],9:[2,230],32:[2,230],87:[2,230],88:[2,230],89:[2,230],93:[2,230],94:[2,230],95:[2,230],96:[2,230],97:[2,230],98:[2,230],99:[2,230],100:[2,230],101:[2,230],102:[2,230],103:[2,230],104:[2,230],105:[2,230],106:[2,230],112:[2,230],113:[2,230],118:[2,230],121:[2,230],122:[2,230],123:[2,230],158:[2,230],159:[2,230]},{6:39,9:[1,40],32:[1,38],80:[1,70],81:71,90:72,91:69,124:13,125:14,158:[1,44]},{1:[2,234],9:[2,234],32:[2,234],87:[2,234],88:[2,234],89:[2,234],93:[2,234],94:[2,234],95:[2,234],96:[2,234],97:[2,234],98:[2,234],99:[2,234],100:[2,234],101:[2,234],102:[2,234],103:[2,234],104:[2,234],105:[2,234],106:[2,234],112:[2,234],113:[2,234],118:[2,234],121:[2,234],122:[2,234],123:[2,234],158:[2,234],159:[2,234]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,23:73,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,77:78,78:86,80:[1,90],82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],134:77,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],143:74,144:75,146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],159:[1,43],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51],168:[1,76]},{2:[2,244],9:[2,244],18:[2,244],19:[2,244],29:[2,244],30:[2,244],31:[2,244],32:[2,244],33:[2,244],34:[2,244],35:[2,244],36:[2,244],80:[2,244],87:[2,244],88:[2,244],89:[2,244],93:[2,244],94:[2,244],95:[2,244],96:[2,244],97:[2,244],98:[2,244],99:[2,244],100:[2,244],101:[2,244],102:[2,244],103:[2,244],104:[2,244],105:[2,244],106:[2,244],112:[2,244],113:[2,244],118:[2,244],121:[2,244],122:[2,244],123:[2,244],141:[2,244],142:[2,244],146:[2,244],148:[2,244],149:[2,244],150:[2,244],151:[2,244],152:[2,244],153:[2,244],154:[2,244],155:[2,244],158:[2,244],159:[2,244],160:[2,244],161:[2,244],162:[2,244],163:[2,244],164:[2,244],165:[2,244],167:[2,244],168:[2,244]},{9:[2,83],11:[2,83],13:[2,83],24:[2,83],32:[2,83],80:[2,83],158:[2,83]},{9:[2,85],11:[2,85],13:[2,85],24:[2,85],32:[2,85],80:[2,85],158:[2,85]},{9:[2,87],11:[2,87],13:[2,87],24:[2,87],32:[2,87],80:[2,87],158:[2,87]},{9:[2,89],11:[2,89],13:[2,89],24:[2,89],32:[2,89],80:[2,89],158:[2,89]},{9:[2,91],11:[2,91],13:[2,91],24:[2,91],32:[2,91],80:[2,91],158:[2,91]},{9:[1,59],11:[2,145],13:[1,58],24:[2,145],63:[2,145],65:[2,145],80:[2,145],167:[2,145]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,14:[1,139],18:[1,106],19:[1,107],25:138,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,141],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,84:63,95:[1,140],121:[1,32],122:[1,33],123:[1,34],126:137,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{6:147,11:[1,145],78:149,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],127:143,128:144,129:146,131:148,158:[1,44],159:[1,43]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],20:150,26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:153,76:151,83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],115:152,118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[1,44],159:[1,43],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[2,162],11:[2,162],13:[2,162],24:[2,162],32:[1,38],84:158,121:[1,32],122:[1,33],123:[1,34],124:157,158:[2,162]},{9:[2,163],11:[2,163],13:[2,163],24:[2,163],158:[2,163]},{9:[2,165],11:[2,165],13:[2,165],14:[2,165],18:[2,165],19:[2,165],24:[2,165],29:[2,165],30:[2,165],31:[2,165],32:[2,165],33:[2,165],34:[2,165],35:[2,165],36:[2,165],95:[2,165],121:[2,165],122:[2,165],123:[2,165],158:[2,165],160:[2,165],161:[2,165],162:[2,165],163:[2,165],164:[2,165],165:[2,165]},{11:[1,159]},{9:[2,119],11:[2,119],13:[2,119],21:160,24:[2,119],32:[2,119],63:[2,119],80:[2,119],87:[2,119],88:[2,119],89:[2,119],93:[2,119],94:[2,119],95:[2,119],96:[2,119],97:[2,119],98:[2,119],99:[2,119],100:[2,119],101:[2,119],102:[2,119],103:[2,119],104:[2,119],105:[2,119],106:[2,119],112:[2,119],113:[2,119],118:[2,119],121:[2,119],122:[2,119],123:[2,119],158:[2,119],159:[2,119],167:[1,51]},{83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,111:161,112:[1,45],113:[1,46],114:162,115:163,118:[1,42],121:[1,32],122:[1,33],123:[1,34],159:[1,43]},{9:[2,137],11:[2,137],13:[2,137],21:164,24:[2,137],32:[2,137],63:[2,137],80:[2,137],87:[2,137],88:[2,137],89:[2,137],93:[2,137],94:[2,137],95:[2,137],96:[2,137],97:[2,137],98:[2,137],99:[2,137],100:[2,137],101:[2,137],102:[2,137],103:[2,137],104:[2,137],105:[2,137],106:[2,137],112:[2,137],113:[2,137],118:[2,137],121:[2,137],122:[2,137],123:[2,137],158:[2,137],159:[2,137],167:[1,51]},{6:167,119:165,120:166,158:[1,44]},{21:50,24:[2,98],65:[1,169],80:[2,98],136:168,167:[1,51]},{1:[2,79],2:[2,79],9:[2,79],18:[2,79],19:[2,79],29:[2,79],30:[2,79],31:[2,79],32:[2,79],33:[2,79],34:[2,79],35:[2,79],36:[2,79],80:[2,79],87:[2,79],88:[2,79],89:[2,79],93:[2,79],94:[2,79],95:[2,79],96:[2,79],97:[2,79],98:[2,79],99:[2,79],100:[2,79],101:[2,79],102:[2,79],103:[2,79],104:[2,79],105:[2,79],106:[2,79],112:[2,79],113:[2,79],118:[2,79],121:[2,79],122:[2,79],123:[2,79],141:[2,79],142:[2,79],146:[2,79],148:[2,79],149:[2,79],150:[2,79],151:[2,79],152:[2,79],153:[2,79],154:[2,79],155:[2,79],158:[2,79],159:[2,79],160:[2,79],161:[2,79],162:[2,79],163:[2,79],164:[2,79],165:[2,79],167:[2,79],168:[2,79]},{24:[1,171],80:[1,170]},{24:[2,96],80:[2,96]},{1:[2,205],2:[2,205],9:[2,205],18:[2,205],19:[2,205],29:[2,205],30:[2,205],31:[2,205],32:[2,205],33:[2,205],34:[2,205],35:[2,205],36:[2,205],80:[2,205],87:[2,205],88:[2,205],89:[2,205],93:[2,205],94:[2,205],95:[2,205],96:[2,205],97:[2,205],98:[2,205],99:[2,205],100:[2,205],101:[2,205],102:[2,205],103:[2,205],104:[2,205],105:[2,205],106:[2,205],112:[2,205],113:[2,205],118:[2,205],121:[2,205],122:[2,205],123:[2,205],141:[2,205],142:[2,205],146:[2,205],147:[2,205],148:[2,205],149:[2,205],150:[2,205],151:[2,205],152:[2,205],153:[2,205],154:[2,205],155:[2,205],158:[2,205],159:[2,205],160:[2,205],161:[2,205],162:[2,205],163:[2,205],164:[2,205],165:[2,205],167:[2,205],168:[2,205]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,23:172,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],87:[2,214],88:[2,214],89:[2,214],93:[2,214],94:[2,214],95:[2,214],96:[2,214],97:[2,214],98:[2,214],99:[2,214],100:[2,214],101:[2,214],102:[2,214],103:[2,214],104:[2,214],105:[2,214],106:[2,214],112:[2,214],113:[2,214],118:[2,214],121:[2,214],122:[2,214],123:[2,214],134:173,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],145:174,146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],159:[2,214],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51],168:[1,76]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,23:175,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,77:177,78:86,80:[1,90],82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],134:77,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],143:176,146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],159:[1,43],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51],168:[1,76]},{1:[2,245],2:[2,245],9:[2,245],11:[2,245],13:[2,245],14:[2,245],16:[2,245],17:[2,245],18:[2,245],19:[2,245],24:[2,245],29:[2,245],30:[2,245],31:[2,245],32:[2,245],33:[2,245],34:[2,245],35:[2,245],36:[2,245],38:[2,245],39:[2,245],42:[2,245],43:[2,245],45:[2,245],46:[2,245],47:[2,245],48:[2,245],50:[2,245],51:[2,245],54:[2,245],56:[2,245],58:[2,245],60:[2,245],62:[2,245],63:[2,245],65:[2,245],66:[2,245],67:[2,245],68:[2,245],69:[2,245],70:[2,245],71:[2,245],72:[2,245],73:[2,245],74:[2,245],75:[2,245],80:[2,245],87:[2,245],88:[2,245],89:[2,245],93:[2,245],94:[2,245],95:[2,245],96:[2,245],97:[2,245],98:[2,245],99:[2,245],100:[2,245],101:[2,245],102:[2,245],103:[2,245],104:[2,245],105:[2,245],106:[2,245],112:[2,245],113:[2,245],118:[2,245],121:[2,245],122:[2,245],123:[2,245],141:[2,245],142:[2,245],146:[2,245],147:[2,245],148:[2,245],149:[2,245],150:[2,245],151:[2,245],152:[2,245],153:[2,245],154:[2,245],155:[2,245],158:[2,245],159:[2,245],160:[2,245],161:[2,245],162:[2,245],163:[2,245],164:[2,245],165:[2,245],167:[2,245],168:[2,245]},{2:[2,211],9:[2,211],18:[2,211],19:[2,211],29:[2,211],30:[2,211],31:[2,211],32:[2,211],33:[2,211],34:[2,211],35:[2,211],36:[2,211],80:[2,211],87:[2,211],88:[2,211],89:[2,211],93:[2,211],94:[2,211],95:[2,211],96:[2,211],97:[2,211],98:[2,211],99:[2,211],100:[2,211],101:[2,211],102:[2,211],103:[2,211],104:[2,211],105:[2,211],106:[2,211],112:[2,211],113:[2,211],118:[2,211],121:[2,211],122:[2,211],123:[2,211],141:[2,211],142:[2,211],146:[2,211],148:[2,211],149:[2,211],150:[2,211],151:[2,211],152:[2,211],153:[2,211],154:[2,211],155:[2,211],158:[2,211],159:[2,211],160:[2,211],161:[2,211],162:[2,211],163:[2,211],164:[2,211],165:[2,211],167:[2,211],168:[2,211]},{2:[2,209],9:[2,209],18:[2,209],19:[2,209],29:[2,209],30:[2,209],31:[2,209],32:[2,209],33:[2,209],34:[2,209],35:[2,209],36:[2,209],80:[2,209],87:[2,209],88:[2,209],89:[2,209],93:[2,209],94:[2,209],95:[2,209],96:[2,209],97:[2,209],98:[2,209],99:[2,209],100:[2,209],101:[2,209],102:[2,209],103:[2,209],104:[2,209],105:[2,209],106:[2,209],112:[2,209],113:[2,209],118:[2,209],121:[2,209],122:[2,209],123:[2,209],141:[2,209],142:[2,209],146:[2,209],148:[2,209],149:[2,209],150:[2,209],151:[2,209],152:[2,209],153:[2,209],154:[2,209],155:[2,209],158:[2,209],159:[2,209],160:[2,209],161:[2,209],162:[2,209],163:[2,209],164:[2,209],165:[2,209],167:[2,209],168:[2,209]},{2:[2,195],9:[2,195],18:[2,195],19:[2,195],29:[2,195],30:[2,195],31:[2,195],32:[2,195],33:[2,195],34:[2,195],35:[2,195],36:[2,195],80:[2,195],87:[2,195],88:[2,195],89:[2,195],93:[2,195],94:[2,195],95:[2,195],96:[2,195],97:[2,195],98:[2,195],99:[2,195],100:[2,195],101:[2,195],102:[2,195],103:[2,195],104:[2,195],105:[2,195],106:[2,195],112:[2,195],113:[2,195],118:[2,195],121:[2,195],122:[2,195],123:[2,195],141:[2,195],142:[2,195],146:[2,195],147:[2,195],148:[2,195],149:[2,195],150:[2,195],151:[2,195],152:[2,195],153:[2,195],154:[2,195],155:[2,195],158:[2,195],159:[2,195],160:[2,195],161:[2,195],162:[2,195],163:[2,195],164:[2,195],165:[2,195],167:[2,195],168:[2,195]},{2:[2,196],9:[2,196],18:[2,196],19:[2,196],29:[2,196],30:[2,196],31:[2,196],32:[2,196],33:[2,196],34:[2,196],35:[2,196],36:[2,196],80:[2,196],87:[2,196],88:[2,196],89:[2,196],93:[2,196],94:[2,196],95:[2,196],96:[2,196],97:[2,196],98:[2,196],99:[2,196],100:[2,196],101:[2,196],102:[2,196],103:[2,196],104:[2,196],105:[2,196],106:[2,196],112:[2,196],113:[2,196],118:[2,196],121:[2,196],122:[2,196],123:[2,196],141:[2,196],142:[2,196],146:[2,196],147:[2,196],148:[2,196],149:[2,196],150:[2,196],151:[2,196],152:[2,196],153:[2,196],154:[2,196],155:[2,196],158:[2,196],159:[2,196],160:[2,196],161:[2,196],162:[2,196],163:[2,196],164:[2,196],165:[2,196],167:[2,196],168:[2,196]},{2:[2,197],9:[2,197],18:[2,197],19:[2,197],29:[2,197],30:[2,197],31:[2,197],32:[2,197],33:[2,197],34:[2,197],35:[2,197],36:[2,197],80:[2,197],87:[2,197],88:[2,197],89:[2,197],93:[2,197],94:[2,197],95:[2,197],96:[2,197],97:[2,197],98:[2,197],99:[2,197],100:[2,197],101:[2,197],102:[2,197],103:[2,197],104:[2,197],105:[2,197],106:[2,197],112:[2,197],113:[2,197],118:[2,197],121:[2,197],122:[2,197],123:[2,197],141:[2,197],142:[2,197],146:[2,197],147:[2,197],148:[2,197],149:[2,197],150:[2,197],151:[2,197],152:[2,197],153:[2,197],154:[2,197],155:[2,197],158:[2,197],159:[2,197],160:[2,197],161:[2,197],162:[2,197],163:[2,197],164:[2,197],165:[2,197],167:[2,197],168:[2,197]},{2:[2,198],9:[2,198],18:[2,198],19:[2,198],29:[2,198],30:[2,198],31:[2,198],32:[2,198],33:[2,198],34:[2,198],35:[2,198],36:[2,198],80:[2,198],87:[2,198],88:[2,198],89:[2,198],93:[2,198],94:[2,198],95:[2,198],96:[2,198],97:[2,198],98:[2,198],99:[2,198],100:[2,198],101:[2,198],102:[2,198],103:[2,198],104:[2,198],105:[2,198],106:[2,198],112:[2,198],113:[2,198],118:[2,198],121:[2,198],122:[2,198],123:[2,198],141:[2,198],142:[2,198],146:[2,198],147:[2,198],148:[2,198],149:[2,198],150:[2,198],151:[2,198],152:[2,198],153:[2,198],154:[2,198],155:[2,198],158:[2,198],159:[2,198],160:[2,198],161:[2,198],162:[2,198],163:[2,198],164:[2,198],165:[2,198],167:[2,198],168:[2,198]},{2:[2,199],9:[2,199],18:[2,199],19:[2,199],29:[2,199],30:[2,199],31:[2,199],32:[2,199],33:[2,199],34:[2,199],35:[2,199],36:[2,199],80:[2,199],87:[2,199],88:[2,199],89:[2,199],93:[2,199],94:[2,199],95:[2,199],96:[2,199],97:[2,199],98:[2,199],99:[2,199],100:[2,199],101:[2,199],102:[2,199],103:[2,199],104:[2,199],105:[2,199],106:[2,199],112:[2,199],113:[2,199],118:[2,199],121:[2,199],122:[2,199],123:[2,199],141:[2,199],142:[2,199],146:[2,199],147:[2,199],148:[2,199],149:[2,199],150:[2,199],151:[2,199],152:[2,199],153:[2,199],154:[2,199],155:[2,199],158:[2,199],159:[2,199],160:[2,199],161:[2,199],162:[2,199],163:[2,199],164:[2,199],165:[2,199],167:[2,199],168:[2,199]},{2:[2,200],9:[2,200],18:[2,200],19:[2,200],29:[2,200],30:[2,200],31:[2,200],32:[2,200],33:[2,200],34:[2,200],35:[2,200],36:[2,200],80:[2,200],87:[2,200],88:[2,200],89:[2,200],93:[2,200],94:[2,200],95:[2,200],96:[2,200],97:[2,200],98:[2,200],99:[2,200],100:[2,200],101:[2,200],102:[2,200],103:[2,200],104:[2,200],105:[2,200],106:[2,200],112:[2,200],113:[2,200],118:[2,200],121:[2,200],122:[2,200],123:[2,200],141:[2,200],142:[2,200],146:[2,200],147:[2,200],148:[2,200],149:[2,200],150:[2,200],151:[2,200],152:[2,200],153:[2,200],154:[2,200],155:[2,200],158:[2,200],159:[2,200],160:[2,200],161:[2,200],162:[2,200],163:[2,200],164:[2,200],165:[2,200],167:[2,200],168:[2,200]},{2:[2,201],9:[2,201],18:[2,201],19:[2,201],29:[2,201],30:[2,201],31:[2,201],32:[2,201],33:[2,201],34:[2,201],35:[2,201],36:[2,201],80:[2,201],87:[2,201],88:[2,201],89:[2,201],93:[2,201],94:[2,201],95:[2,201],96:[2,201],97:[2,201],98:[2,201],99:[2,201],100:[2,201],101:[2,201],102:[2,201],103:[2,201],104:[2,201],105:[2,201],106:[2,201],112:[2,201],113:[2,201],118:[2,201],121:[2,201],122:[2,201],123:[2,201],141:[2,201],142:[2,201],146:[2,201],147:[2,201],148:[2,201],149:[2,201],150:[2,201],151:[2,201],152:[2,201],153:[2,201],154:[2,201],155:[2,201],158:[2,201],159:[2,201],160:[2,201],161:[2,201],162:[2,201],163:[2,201],164:[2,201],165:[2,201],167:[2,201],168:[2,201]},{9:[2,81],32:[2,81],79:178,80:[2,81],158:[2,81]},{9:[2,2],13:[2,2],16:[2,2],17:[2,2],18:[2,2],19:[2,2],24:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],38:[2,2],39:[2,2],42:[2,2],43:[2,2],45:[2,2],46:[2,2],47:[2,2],48:[2,2],50:[2,2],51:[2,2],54:[2,2],56:[2,2],58:[2,2],60:[2,2],62:[2,2],63:[1,179],65:[2,2],66:[2,2],67:[2,2],68:[2,2],69:[2,2],70:[2,2],71:[2,2],72:[2,2],73:[2,2],74:[2,2],75:[2,2],80:[2,2]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:153,76:180,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{63:[1,181]},{2:[2,215],9:[2,215],11:[2,215],18:[2,215],19:[2,215],29:[2,215],30:[2,215],31:[2,215],32:[2,215],33:[2,215],34:[2,215],35:[2,215],36:[2,215],80:[2,215],87:[2,215],88:[2,215],89:[2,215],93:[2,215],94:[2,215],95:[2,215],96:[2,215],97:[2,215],98:[2,215],99:[2,215],100:[2,215],101:[2,215],102:[2,215],103:[2,215],104:[2,215],105:[2,215],106:[2,215],112:[2,215],113:[2,215],118:[2,215],121:[2,215],122:[2,215],123:[2,215],141:[2,215],142:[2,215],146:[2,215],147:[2,215],148:[2,215],149:[2,215],150:[2,215],151:[2,215],152:[2,215],153:[2,215],154:[2,215],155:[2,215],158:[2,215],159:[2,215],160:[2,215],161:[2,215],162:[2,215],163:[2,215],164:[2,215],165:[2,215],167:[2,215],168:[2,215]},{24:[1,183],80:[1,182]},{9:[1,184]},{9:[1,185]},{9:[1,186]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:187,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{9:[1,188]},{6:189,158:[1,44]},{80:[1,190]},{80:[1,191]},{5:112,6:142,7:121,8:122,9:[1,113],10:193,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,192],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{11:[2,76],14:[2,76],24:[2,76],63:[2,76],80:[2,76]},{11:[2,63],14:[2,63],24:[2,63],63:[2,63],80:[2,63],168:[2,63]},{11:[2,31],14:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],34:[2,31],38:[2,31],39:[2,31],42:[2,31],43:[2,31],45:[2,31],46:[2,31],47:[2,31],48:[2,31],50:[2,31],51:[2,31],54:[2,31],56:[2,31],58:[2,31],60:[2,31],62:[2,31],63:[2,31],64:194,65:[1,195],66:[1,196],67:[1,197],68:[1,198],69:[1,199],70:[1,200],71:[1,201],72:[1,202],73:[1,203],74:[1,204],75:[1,205],80:[2,31],168:[2,31]},{11:[2,61],14:[2,61],24:[2,61],60:[1,207],62:[1,206],63:[2,61],80:[2,61],168:[2,61]},{9:[1,209],11:[2,18],13:[1,208],14:[2,18],16:[1,210],17:[1,211],18:[1,212],19:[1,213],24:[2,18],31:[2,18],32:[2,18],33:[2,18],34:[2,18],38:[2,18],39:[2,18],42:[2,18],43:[2,18],45:[2,18],46:[2,18],47:[2,18],48:[2,18],50:[2,18],51:[2,18],54:[2,18],56:[2,18],58:[2,18],60:[2,18],62:[2,18],63:[2,18],65:[2,18],66:[2,18],67:[2,18],68:[2,18],69:[2,18],70:[2,18],71:[2,18],72:[2,18],73:[2,18],74:[2,18],75:[2,18],80:[2,18],168:[2,18]},{5:112,6:142,7:121,8:122,9:[1,215],12:105,18:[1,106],19:[1,107],26:214,27:108,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,215],12:105,18:[1,106],19:[1,107],26:216,27:108,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:217,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,219],12:105,18:[1,106],19:[1,107],26:218,27:108,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[1,220]},{11:[2,59],14:[2,59],24:[2,59],58:[1,221],60:[2,59],62:[2,59],63:[2,59],80:[2,59],168:[2,59]},{9:[2,6],11:[2,6],13:[2,6],14:[2,6],16:[2,6],17:[2,6],18:[2,6],19:[2,6],24:[2,6],31:[2,6],32:[2,6],33:[2,6],34:[2,6],38:[2,6],39:[2,6],42:[2,6],43:[2,6],45:[2,6],46:[2,6],47:[2,6],48:[2,6],50:[2,6],51:[2,6],54:[2,6],56:[2,6],58:[2,6],60:[2,6],62:[2,6],63:[2,6],65:[2,6],66:[2,6],67:[2,6],68:[2,6],69:[2,6],70:[2,6],71:[2,6],72:[2,6],73:[2,6],74:[2,6],75:[2,6],80:[2,6],168:[2,6]},{5:112,6:142,7:121,8:122,9:[1,113],10:223,12:105,18:[1,106],19:[1,107],20:222,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],115:152,118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[1,44],159:[1,43],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[2,25],18:[2,25],19:[2,25],29:[2,25],30:[2,25],31:[2,25],32:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25],158:[2,25],160:[2,25],161:[2,25],162:[2,25],163:[2,25],164:[2,25],165:[2,25]},{9:[2,26],18:[2,26],19:[2,26],29:[2,26],30:[2,26],31:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],158:[2,26],160:[2,26],161:[2,26],162:[2,26],163:[2,26],164:[2,26],165:[2,26]},{9:[2,27],18:[2,27],19:[2,27],29:[2,27],30:[2,27],31:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],158:[2,27],160:[2,27],161:[2,27],162:[2,27],163:[2,27],164:[2,27],165:[2,27]},{9:[2,28],18:[2,28],19:[2,28],29:[2,28],30:[2,28],31:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],158:[2,28],160:[2,28],161:[2,28],162:[2,28],163:[2,28],164:[2,28],165:[2,28]},{9:[2,29],18:[2,29],19:[2,29],29:[2,29],30:[2,29],31:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],158:[2,29],160:[2,29],161:[2,29],162:[2,29],163:[2,29],164:[2,29],165:[2,29]},{9:[2,30],18:[2,30],19:[2,30],29:[2,30],30:[2,30],31:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],158:[2,30],160:[2,30],161:[2,30],162:[2,30],163:[2,30],164:[2,30],165:[2,30]},{11:[2,57],14:[2,57],24:[2,57],56:[1,224],58:[2,57],60:[2,57],62:[2,57],63:[2,57],80:[2,57],168:[2,57]},{9:[2,3],11:[2,3],13:[2,3],14:[2,3],16:[2,3],17:[2,3],18:[2,3],19:[2,3],24:[2,3],31:[2,3],32:[2,3],33:[2,3],34:[2,3],38:[2,3],39:[2,3],42:[2,3],43:[2,3],45:[2,3],46:[2,3],47:[2,3],48:[2,3],50:[2,3],51:[2,3],54:[2,3],56:[2,3],58:[2,3],60:[2,3],62:[2,3],63:[2,3],65:[2,3],66:[2,3],67:[2,3],68:[2,3],69:[2,3],70:[2,3],71:[2,3],72:[2,3],73:[2,3],74:[2,3],75:[2,3],80:[2,3],168:[2,3]},{9:[2,4],11:[2,4],13:[2,4],14:[2,4],16:[2,4],17:[2,4],18:[2,4],19:[2,4],24:[2,4],31:[2,4],32:[2,4],33:[2,4],34:[2,4],38:[2,4],39:[2,4],42:[2,4],43:[2,4],45:[2,4],46:[2,4],47:[2,4],48:[2,4],50:[2,4],51:[2,4],54:[2,4],56:[2,4],58:[2,4],60:[2,4],62:[2,4],63:[2,4],65:[2,4],66:[2,4],67:[2,4],68:[2,4],69:[2,4],70:[2,4],71:[2,4],72:[2,4],73:[2,4],74:[2,4],75:[2,4],80:[2,4],168:[2,4]},{11:[2,55],14:[2,55],24:[2,55],54:[1,225],56:[2,55],58:[2,55],60:[2,55],62:[2,55],63:[2,55],80:[2,55],168:[2,55]},{9:[2,237],11:[2,237],13:[2,237],14:[2,237],16:[2,237],17:[2,237],18:[2,237],19:[2,237],24:[2,237],31:[2,237],32:[2,237],33:[2,237],34:[2,237],38:[2,237],39:[2,237],42:[2,237],43:[2,237],45:[2,237],46:[2,237],47:[2,237],48:[2,237],50:[2,237],51:[2,237],54:[2,237],56:[2,237],58:[2,237],60:[2,237],62:[2,237],63:[2,237],65:[2,237],66:[2,237],67:[2,237],68:[2,237],69:[2,237],70:[2,237],71:[2,237],72:[2,237],73:[2,237],74:[2,237],75:[2,237],80:[2,237],168:[2,237]},{9:[2,238],11:[2,238],13:[2,238],14:[2,238],16:[2,238],17:[2,238],18:[2,238],19:[2,238],24:[2,238],31:[2,238],32:[2,238],33:[2,238],34:[2,238],38:[2,238],39:[2,238],42:[2,238],43:[2,238],45:[2,238],46:[2,238],47:[2,238],48:[2,238],50:[2,238],51:[2,238],54:[2,238],56:[2,238],58:[2,238],60:[2,238],62:[2,238],63:[2,238],65:[2,238],66:[2,238],67:[2,238],68:[2,238],69:[2,238],70:[2,238],71:[2,238],72:[2,238],73:[2,238],74:[2,238],75:[2,238],80:[2,238],168:[2,238]},{9:[2,239],11:[2,239],13:[2,239],14:[2,239],16:[2,239],17:[2,239],18:[2,239],19:[2,239],24:[2,239],31:[2,239],32:[2,239],33:[2,239],34:[2,239],38:[2,239],39:[2,239],42:[2,239],43:[2,239],45:[2,239],46:[2,239],47:[2,239],48:[2,239],50:[2,239],51:[2,239],54:[2,239],56:[2,239],58:[2,239],60:[2,239],62:[2,239],63:[2,239],65:[2,239],66:[2,239],67:[2,239],68:[2,239],69:[2,239],70:[2,239],71:[2,239],72:[2,239],73:[2,239],74:[2,239],75:[2,239],80:[2,239],168:[2,239]},{9:[2,240],11:[2,240],13:[2,240],14:[2,240],16:[2,240],17:[2,240],18:[2,240],19:[2,240],24:[2,240],31:[2,240],32:[2,240],33:[2,240],34:[2,240],38:[2,240],39:[2,240],42:[2,240],43:[2,240],45:[2,240],46:[2,240],47:[2,240],48:[2,240],50:[2,240],51:[2,240],54:[2,240],56:[2,240],58:[2,240],60:[2,240],62:[2,240],63:[2,240],65:[2,240],66:[2,240],67:[2,240],68:[2,240],69:[2,240],70:[2,240],71:[2,240],72:[2,240],73:[2,240],74:[2,240],75:[2,240],80:[2,240],168:[2,240]},{9:[2,241],11:[2,241],13:[2,241],14:[2,241],16:[2,241],17:[2,241],18:[2,241],19:[2,241],24:[2,241],31:[2,241],32:[2,241],33:[2,241],34:[2,241],38:[2,241],39:[2,241],42:[2,241],43:[2,241],45:[2,241],46:[2,241],47:[2,241],48:[2,241],50:[2,241],51:[2,241],54:[2,241],56:[2,241],58:[2,241],60:[2,241],62:[2,241],63:[2,241],65:[2,241],66:[2,241],67:[2,241],68:[2,241],69:[2,241],70:[2,241],71:[2,241],72:[2,241],73:[2,241],74:[2,241],75:[2,241],80:[2,241],168:[2,241]},{9:[2,242],11:[2,242],13:[2,242],14:[2,242],16:[2,242],17:[2,242],18:[2,242],19:[2,242],24:[2,242],31:[2,242],32:[2,242],33:[2,242],34:[2,242],38:[2,242],39:[2,242],42:[2,242],43:[2,242],45:[2,242],46:[2,242],47:[2,242],48:[2,242],50:[2,242],51:[2,242],54:[2,242],56:[2,242],58:[2,242],60:[2,242],62:[2,242],63:[2,242],65:[2,242],66:[2,242],67:[2,242],68:[2,242],69:[2,242],70:[2,242],71:[2,242],72:[2,242],73:[2,242],74:[2,242],75:[2,242],80:[2,242],168:[2,242]},{11:[2,53],14:[2,53],24:[2,53],31:[1,226],54:[2,53],56:[2,53],58:[2,53],60:[2,53],62:[2,53],63:[2,53],80:[2,53],168:[2,53]},{11:[2,51],14:[2,51],24:[2,51],31:[2,51],50:[1,227],51:[1,228],54:[2,51],56:[2,51],58:[2,51],60:[2,51],62:[2,51],63:[2,51],80:[2,51],168:[2,51]},{11:[2,48],14:[2,48],24:[2,48],31:[2,48],45:[1,229],46:[1,230],47:[1,231],48:[1,232],50:[2,48],51:[2,48],54:[2,48],56:[2,48],58:[2,48],60:[2,48],62:[2,48],63:[2,48],80:[2,48],168:[2,48]},{11:[2,43],14:[2,43],24:[2,43],31:[2,43],42:[1,233],43:[1,234],45:[2,43],46:[2,43],47:[2,43],48:[2,43],50:[2,43],51:[2,43],54:[2,43],56:[2,43],58:[2,43],60:[2,43],62:[2,43],63:[2,43],80:[2,43],168:[2,43]},{11:[2,40],14:[2,40],24:[2,40],31:[2,40],33:[1,235],34:[1,236],42:[2,40],43:[2,40],45:[2,40],46:[2,40],47:[2,40],48:[2,40],50:[2,40],51:[2,40],54:[2,40],56:[2,40],58:[2,40],60:[2,40],62:[2,40],63:[2,40],80:[2,40],168:[2,40]},{11:[2,37],14:[2,37],24:[2,37],31:[2,37],32:[1,237],33:[2,37],34:[2,37],38:[1,238],39:[1,239],42:[2,37],43:[2,37],45:[2,37],46:[2,37],47:[2,37],48:[2,37],50:[2,37],51:[2,37],54:[2,37],56:[2,37],58:[2,37],60:[2,37],62:[2,37],63:[2,37],80:[2,37],168:[2,37]},{11:[2,33],14:[2,33],24:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],38:[2,33],39:[2,33],42:[2,33],43:[2,33],45:[2,33],46:[2,33],47:[2,33],48:[2,33],50:[2,33],51:[2,33],54:[2,33],56:[2,33],58:[2,33],60:[2,33],62:[2,33],63:[2,33],80:[2,33],168:[2,33]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,14:[1,241],18:[1,106],19:[1,107],25:240,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,243],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,84:158,95:[1,242],121:[1,32],122:[1,33],123:[1,34],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{14:[1,244]},{9:[2,152],11:[2,152],13:[2,152],24:[2,152],63:[2,152],65:[2,152],80:[2,152],167:[2,152]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],25:246,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,84:63,121:[1,32],122:[1,33],123:[1,34],126:245,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[2,26],14:[1,247],18:[2,26],19:[2,26],29:[2,26],30:[2,26],31:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],158:[2,26],160:[2,26],161:[2,26],162:[2,26],163:[2,26],164:[2,26],165:[2,26]},{9:[2,2],11:[2,2],13:[2,2],14:[2,2],16:[2,2],17:[2,2],18:[2,2],19:[2,2],24:[2,2],31:[2,2],32:[2,2],33:[2,2],34:[2,2],38:[2,2],39:[2,2],42:[2,2],43:[2,2],45:[2,2],46:[2,2],47:[2,2],48:[2,2],50:[2,2],51:[2,2],54:[2,2],56:[2,2],58:[2,2],60:[2,2],62:[2,2],63:[2,2],65:[2,2],66:[2,2],67:[2,2],68:[2,2],69:[2,2],70:[2,2],71:[2,2],72:[2,2],73:[2,2],74:[2,2],75:[2,2],80:[2,2],168:[2,2]},{11:[1,248]},{11:[1,249],24:[1,250]},{9:[2,160],11:[2,160],13:[2,160],24:[2,160],63:[2,160],65:[2,160],80:[2,160],167:[2,160]},{11:[2,167],24:[1,251]},{11:[2,174],24:[2,174]},{11:[2,169],24:[2,169]},{6:39,9:[1,256],11:[2,173],13:[1,257],24:[2,173],32:[1,38],91:252,124:254,125:14,132:253,133:255,158:[1,44]},{11:[1,258]},{11:[1,259]},{9:[1,262],11:[2,176],13:[1,257],32:[1,38],124:261,132:260,133:255},{11:[2,78],14:[2,78],24:[2,78],63:[2,78],80:[2,78],168:[2,78]},{9:[2,127],11:[2,127],13:[2,127],32:[2,127],63:[2,127],80:[2,127],83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],115:263,118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[2,127],159:[1,43]},{9:[2,129],11:[2,129],13:[2,129],32:[2,129],63:[2,129],80:[2,129],83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],115:264,118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[2,129],159:[1,43]},{11:[2,31],14:[2,31],24:[2,31],31:[2,31],32:[2,31],33:[2,31],34:[2,31],38:[2,31],39:[2,31],42:[2,31],43:[2,31],45:[2,31],46:[2,31],47:[2,31],48:[2,31],50:[2,31],51:[2,31],54:[2,31],56:[2,31],58:[2,31],60:[2,31],62:[2,31],63:[2,31],65:[2,31],66:[2,31],67:[2,31],68:[2,31],69:[2,31],70:[2,31],71:[2,31],72:[2,31],73:[2,31],74:[2,31],75:[2,31],80:[2,31],168:[2,31]},{9:[2,164],11:[2,164],13:[2,164],24:[2,164],158:[2,164]},{9:[2,166],11:[2,166],13:[2,166],14:[2,166],18:[2,166],19:[2,166],24:[2,166],29:[2,166],30:[2,166],31:[2,166],32:[2,166],33:[2,166],34:[2,166],35:[2,166],36:[2,166],95:[2,166],121:[2,166],122:[2,166],123:[2,166],158:[2,166],160:[2,166],161:[2,166],162:[2,166],163:[2,166],164:[2,166],165:[2,166]},{9:[2,148],11:[2,148],13:[2,148],24:[2,148],63:[2,148],65:[2,148],80:[2,148],167:[2,148]},{83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,111:265,112:[1,45],113:[1,46],114:162,115:163,118:[1,42],121:[1,32],122:[1,33],123:[1,34],159:[1,43]},{23:266,83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],114:267,115:163,118:[1,42],121:[1,32],122:[1,33],123:[1,34],159:[1,43],168:[1,76]},{98:[2,122],99:[2,122],100:[2,122],101:[2,122],102:[2,122],103:[2,122],104:[2,122],105:[2,122],106:[2,122],112:[2,122],113:[2,122],118:[2,122],121:[2,122],122:[2,122],123:[2,122],159:[2,122],168:[2,122]},{6:39,9:[1,40],32:[1,38],63:[1,272],80:[1,269],91:271,116:268,117:270,124:13,125:14,158:[1,44]},{6:167,119:273,120:166,158:[1,44]},{23:274,24:[1,275],168:[1,76]},{24:[2,138],168:[2,138]},{24:[2,140],65:[1,276],168:[2,140]},{1:[2,233],9:[2,233],32:[2,233],87:[2,233],88:[2,233],89:[2,233],93:[2,233],94:[2,233],95:[2,233],96:[2,233],97:[2,233],98:[2,233],99:[2,233],100:[2,233],101:[2,233],102:[2,233],103:[2,233],104:[2,233],105:[2,233],106:[2,233],112:[2,233],113:[2,233],118:[2,233],121:[2,233],122:[2,233],123:[2,233],158:[2,233],159:[2,233]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],21:279,25:278,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,92:277,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{1:[2,80],2:[2,80],9:[2,80],18:[2,80],19:[2,80],29:[2,80],30:[2,80],31:[2,80],32:[2,80],33:[2,80],34:[2,80],35:[2,80],36:[2,80],80:[2,80],87:[2,80],88:[2,80],89:[2,80],93:[2,80],94:[2,80],95:[2,80],96:[2,80],97:[2,80],98:[2,80],99:[2,80],100:[2,80],101:[2,80],102:[2,80],103:[2,80],104:[2,80],105:[2,80],106:[2,80],112:[2,80],113:[2,80],118:[2,80],121:[2,80],122:[2,80],123:[2,80],141:[2,80],142:[2,80],146:[2,80],148:[2,80],149:[2,80],150:[2,80],151:[2,80],152:[2,80],153:[2,80],154:[2,80],155:[2,80],158:[2,80],159:[2,80],160:[2,80],161:[2,80],162:[2,80],163:[2,80],164:[2,80],165:[2,80],167:[2,80],168:[2,80]},{6:39,9:[1,40],32:[1,38],90:280,91:281,124:13,125:14,158:[1,44]},{1:[2,206],2:[2,206],9:[2,206],18:[2,206],19:[2,206],29:[2,206],30:[2,206],31:[2,206],32:[2,206],33:[2,206],34:[2,206],35:[2,206],36:[2,206],80:[2,206],87:[2,206],88:[2,206],89:[2,206],93:[2,206],94:[2,206],95:[2,206],96:[2,206],97:[2,206],98:[2,206],99:[2,206],100:[2,206],101:[2,206],102:[2,206],103:[2,206],104:[2,206],105:[2,206],106:[2,206],112:[2,206],113:[2,206],118:[2,206],121:[2,206],122:[2,206],123:[2,206],141:[2,206],142:[2,206],146:[2,206],147:[2,206],148:[2,206],149:[2,206],150:[2,206],151:[2,206],152:[2,206],153:[2,206],154:[2,206],155:[2,206],158:[2,206],159:[2,206],160:[2,206],161:[2,206],162:[2,206],163:[2,206],164:[2,206],165:[2,206],167:[2,206],168:[2,206]},{2:[2,212],9:[2,212],18:[2,212],19:[2,212],29:[2,212],30:[2,212],31:[2,212],32:[2,212],33:[2,212],34:[2,212],35:[2,212],36:[2,212],80:[2,212],87:[2,212],88:[2,212],89:[2,212],93:[2,212],94:[2,212],95:[2,212],96:[2,212],97:[2,212],98:[2,212],99:[2,212],100:[2,212],101:[2,212],102:[2,212],103:[2,212],104:[2,212],105:[2,212],106:[2,212],112:[2,212],113:[2,212],118:[2,212],121:[2,212],122:[2,212],123:[2,212],141:[2,212],142:[2,212],146:[2,212],148:[2,212],149:[2,212],150:[2,212],151:[2,212],152:[2,212],153:[2,212],154:[2,212],155:[2,212],158:[2,212],159:[2,212],160:[2,212],161:[2,212],162:[2,212],163:[2,212],164:[2,212],165:[2,212],167:[2,212],168:[2,212]},{77:282,78:86,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],159:[1,43]},{1:[2,207],2:[2,207],9:[2,207],18:[2,207],19:[2,207],29:[2,207],30:[2,207],31:[2,207],32:[2,207],33:[2,207],34:[2,207],35:[2,207],36:[2,207],80:[2,207],87:[2,207],88:[2,207],89:[2,207],93:[2,207],94:[2,207],95:[2,207],96:[2,207],97:[2,207],98:[2,207],99:[2,207],100:[2,207],101:[2,207],102:[2,207],103:[2,207],104:[2,207],105:[2,207],106:[2,207],112:[2,207],113:[2,207],118:[2,207],121:[2,207],122:[2,207],123:[2,207],141:[2,207],142:[2,207],146:[2,207],147:[2,207],148:[2,207],149:[2,207],150:[2,207],151:[2,207],152:[2,207],153:[2,207],154:[2,207],155:[2,207],158:[2,207],159:[2,207],160:[2,207],161:[2,207],162:[2,207],163:[2,207],164:[2,207],165:[2,207],167:[2,207],168:[2,207]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,23:283,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],87:[2,214],88:[2,214],89:[2,214],93:[2,214],94:[2,214],95:[2,214],96:[2,214],97:[2,214],98:[2,214],99:[2,214],100:[2,214],101:[2,214],102:[2,214],103:[2,214],104:[2,214],105:[2,214],106:[2,214],112:[2,214],113:[2,214],118:[2,214],121:[2,214],122:[2,214],123:[2,214],134:173,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],145:174,146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],159:[2,214],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51],168:[1,76]},{2:[2,210],9:[2,210],18:[2,210],19:[2,210],29:[2,210],30:[2,210],31:[2,210],32:[2,210],33:[2,210],34:[2,210],35:[2,210],36:[2,210],80:[2,210],87:[2,210],88:[2,210],89:[2,210],93:[2,210],94:[2,210],95:[2,210],96:[2,210],97:[2,210],98:[2,210],99:[2,210],100:[2,210],101:[2,210],102:[2,210],103:[2,210],104:[2,210],105:[2,210],106:[2,210],112:[2,210],113:[2,210],118:[2,210],121:[2,210],122:[2,210],123:[2,210],141:[2,210],142:[2,210],146:[2,210],148:[2,210],149:[2,210],150:[2,210],151:[2,210],152:[2,210],153:[2,210],154:[2,210],155:[2,210],158:[2,210],159:[2,210],160:[2,210],161:[2,210],162:[2,210],163:[2,210],164:[2,210],165:[2,210],167:[2,210],168:[2,210]},{6:39,9:[1,40],32:[1,38],80:[1,70],81:71,90:72,91:281,124:13,125:14,158:[1,44]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:284,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{63:[1,285]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:286,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{2:[2,216],9:[2,216],11:[2,216],18:[2,216],19:[2,216],29:[2,216],30:[2,216],31:[2,216],32:[2,216],33:[2,216],34:[2,216],35:[2,216],36:[2,216],80:[2,216],87:[2,216],88:[2,216],89:[2,216],93:[2,216],94:[2,216],95:[2,216],96:[2,216],97:[2,216],98:[2,216],99:[2,216],100:[2,216],101:[2,216],102:[2,216],103:[2,216],104:[2,216],105:[2,216],106:[2,216],112:[2,216],113:[2,216],118:[2,216],121:[2,216],122:[2,216],123:[2,216],141:[2,216],142:[2,216],146:[2,216],147:[2,216],148:[2,216],149:[2,216],150:[2,216],151:[2,216],152:[2,216],153:[2,216],154:[2,216],155:[2,216],158:[2,216],159:[2,216],160:[2,216],161:[2,216],162:[2,216],163:[2,216],164:[2,216],165:[2,216],167:[2,216],168:[2,216]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],25:287,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],10:288,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],10:289,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],10:290,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{149:[1,291]},{5:112,6:142,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],137:292,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{80:[1,293]},{2:[2,225],9:[2,225],18:[2,225],19:[2,225],29:[2,225],30:[2,225],31:[2,225],32:[2,225],33:[2,225],34:[2,225],35:[2,225],36:[2,225],80:[2,225],87:[2,225],88:[2,225],89:[2,225],93:[2,225],94:[2,225],95:[2,225],96:[2,225],97:[2,225],98:[2,225],99:[2,225],100:[2,225],101:[2,225],102:[2,225],103:[2,225],104:[2,225],105:[2,225],106:[2,225],112:[2,225],113:[2,225],118:[2,225],121:[2,225],122:[2,225],123:[2,225],141:[2,225],142:[2,225],146:[2,225],147:[2,225],148:[2,225],149:[2,225],150:[2,225],151:[2,225],152:[2,225],153:[2,225],154:[2,225],155:[2,225],158:[2,225],159:[2,225],160:[2,225],161:[2,225],162:[2,225],163:[2,225],164:[2,225],165:[2,225],167:[2,225],168:[2,225]},{2:[2,226],9:[2,226],18:[2,226],19:[2,226],29:[2,226],30:[2,226],31:[2,226],32:[2,226],33:[2,226],34:[2,226],35:[2,226],36:[2,226],80:[2,226],87:[2,226],88:[2,226],89:[2,226],93:[2,226],94:[2,226],95:[2,226],96:[2,226],97:[2,226],98:[2,226],99:[2,226],100:[2,226],101:[2,226],102:[2,226],103:[2,226],104:[2,226],105:[2,226],106:[2,226],112:[2,226],113:[2,226],118:[2,226],121:[2,226],122:[2,226],123:[2,226],141:[2,226],142:[2,226],146:[2,226],147:[2,226],148:[2,226],149:[2,226],150:[2,226],151:[2,226],152:[2,226],153:[2,226],154:[2,226],155:[2,226],158:[2,226],159:[2,226],160:[2,226],161:[2,226],162:[2,226],163:[2,226],164:[2,226],165:[2,226],167:[2,226],168:[2,226]},{2:[2,227],9:[2,227],18:[2,227],19:[2,227],29:[2,227],30:[2,227],31:[2,227],32:[2,227],33:[2,227],34:[2,227],35:[2,227],36:[2,227],80:[2,227],87:[2,227],88:[2,227],89:[2,227],93:[2,227],94:[2,227],95:[2,227],96:[2,227],97:[2,227],98:[2,227],99:[2,227],100:[2,227],101:[2,227],102:[2,227],103:[2,227],104:[2,227],105:[2,227],106:[2,227],112:[2,227],113:[2,227],118:[2,227],121:[2,227],122:[2,227],123:[2,227],141:[2,227],142:[2,227],146:[2,227],147:[2,227],148:[2,227],149:[2,227],150:[2,227],151:[2,227],152:[2,227],153:[2,227],154:[2,227],155:[2,227],158:[2,227],159:[2,227],160:[2,227],161:[2,227],162:[2,227],163:[2,227],164:[2,227],165:[2,227],167:[2,227],168:[2,227]},{24:[1,183],80:[1,294]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],25:295,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[2,65],18:[2,65],19:[2,65],29:[2,65],30:[2,65],31:[2,65],32:[2,65],33:[2,65],34:[2,65],35:[2,65],36:[2,65],158:[2,65],160:[2,65],161:[2,65],162:[2,65],163:[2,65],164:[2,65],165:[2,65]},{9:[2,66],18:[2,66],19:[2,66],29:[2,66],30:[2,66],31:[2,66],32:[2,66],33:[2,66],34:[2,66],35:[2,66],36:[2,66],158:[2,66],160:[2,66],161:[2,66],162:[2,66],163:[2,66],164:[2,66],165:[2,66]},{9:[2,67],18:[2,67],19:[2,67],29:[2,67],30:[2,67],31:[2,67],32:[2,67],33:[2,67],34:[2,67],35:[2,67],36:[2,67],158:[2,67],160:[2,67],161:[2,67],162:[2,67],163:[2,67],164:[2,67],165:[2,67]},{9:[2,68],18:[2,68],19:[2,68],29:[2,68],30:[2,68],31:[2,68],32:[2,68],33:[2,68],34:[2,68],35:[2,68],36:[2,68],158:[2,68],160:[2,68],161:[2,68],162:[2,68],163:[2,68],164:[2,68],165:[2,68]},{9:[2,69],18:[2,69],19:[2,69],29:[2,69],30:[2,69],31:[2,69],32:[2,69],33:[2,69],34:[2,69],35:[2,69],36:[2,69],158:[2,69],160:[2,69],161:[2,69],162:[2,69],163:[2,69],164:[2,69],165:[2,69]},{9:[2,70],18:[2,70],19:[2,70],29:[2,70],30:[2,70],31:[2,70],32:[2,70],33:[2,70],34:[2,70],35:[2,70],36:[2,70],158:[2,70],160:[2,70],161:[2,70],162:[2,70],163:[2,70],164:[2,70],165:[2,70]},{9:[2,71],18:[2,71],19:[2,71],29:[2,71],30:[2,71],31:[2,71],32:[2,71],33:[2,71],34:[2,71],35:[2,71],36:[2,71],158:[2,71],160:[2,71],161:[2,71],162:[2,71],163:[2,71],164:[2,71],165:[2,71]},{9:[2,72],18:[2,72],19:[2,72],29:[2,72],30:[2,72],31:[2,72],32:[2,72],33:[2,72],34:[2,72],35:[2,72],36:[2,72],158:[2,72],160:[2,72],161:[2,72],162:[2,72],163:[2,72],164:[2,72],165:[2,72]},{9:[2,73],18:[2,73],19:[2,73],29:[2,73],30:[2,73],31:[2,73],32:[2,73],33:[2,73],34:[2,73],35:[2,73],36:[2,73],158:[2,73],160:[2,73],161:[2,73],162:[2,73],163:[2,73],164:[2,73],165:[2,73]},{9:[2,74],18:[2,74],19:[2,74],29:[2,74],30:[2,74],31:[2,74],32:[2,74],33:[2,74],34:[2,74],35:[2,74],36:[2,74],158:[2,74],160:[2,74],161:[2,74],162:[2,74],163:[2,74],164:[2,74],165:[2,74]},{9:[2,75],18:[2,75],19:[2,75],29:[2,75],30:[2,75],31:[2,75],32:[2,75],33:[2,75],34:[2,75],35:[2,75],36:[2,75],158:[2,75],160:[2,75],161:[2,75],162:[2,75],163:[2,75],164:[2,75],165:[2,75]},{5:112,6:142,7:121,8:122,9:[1,113],10:296,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:297,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],10:298,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],11:[1,299],12:105,15:300,18:[1,106],19:[1,107],25:301,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{6:302,158:[1,44]},{6:303,158:[1,44]},{9:[2,12],11:[2,12],13:[2,12],14:[2,12],16:[2,12],17:[2,12],18:[2,12],19:[2,12],24:[2,12],31:[2,12],32:[2,12],33:[2,12],34:[2,12],38:[2,12],39:[2,12],42:[2,12],43:[2,12],45:[2,12],46:[2,12],47:[2,12],48:[2,12],50:[2,12],51:[2,12],54:[2,12],56:[2,12],58:[2,12],60:[2,12],62:[2,12],63:[2,12],65:[2,12],66:[2,12],67:[2,12],68:[2,12],69:[2,12],70:[2,12],71:[2,12],72:[2,12],73:[2,12],74:[2,12],75:[2,12],80:[2,12],168:[2,12]},{9:[2,13],11:[2,13],13:[2,13],14:[2,13],16:[2,13],17:[2,13],18:[2,13],19:[2,13],24:[2,13],31:[2,13],32:[2,13],33:[2,13],34:[2,13],38:[2,13],39:[2,13],42:[2,13],43:[2,13],45:[2,13],46:[2,13],47:[2,13],48:[2,13],50:[2,13],51:[2,13],54:[2,13],56:[2,13],58:[2,13],60:[2,13],62:[2,13],63:[2,13],65:[2,13],66:[2,13],67:[2,13],68:[2,13],69:[2,13],70:[2,13],71:[2,13],72:[2,13],73:[2,13],74:[2,13],75:[2,13],80:[2,13],168:[2,13]},{11:[2,19],14:[2,19],24:[2,19],31:[2,19],32:[2,19],33:[2,19],34:[2,19],38:[2,19],39:[2,19],42:[2,19],43:[2,19],45:[2,19],46:[2,19],47:[2,19],48:[2,19],50:[2,19],51:[2,19],54:[2,19],56:[2,19],58:[2,19],60:[2,19],62:[2,19],63:[2,19],65:[2,19],66:[2,19],67:[2,19],68:[2,19],69:[2,19],70:[2,19],71:[2,19],72:[2,19],73:[2,19],74:[2,19],75:[2,19],80:[2,19],168:[2,19]},{5:112,6:142,7:121,8:122,9:[1,113],10:223,12:105,18:[1,106],19:[1,107],20:304,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],115:152,118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[1,44],159:[1,43],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{11:[2,20],14:[2,20],24:[2,20],31:[2,20],32:[2,20],33:[2,20],34:[2,20],38:[2,20],39:[2,20],42:[2,20],43:[2,20],45:[2,20],46:[2,20],47:[2,20],48:[2,20],50:[2,20],51:[2,20],54:[2,20],56:[2,20],58:[2,20],60:[2,20],62:[2,20],63:[2,20],65:[2,20],66:[2,20],67:[2,20],68:[2,20],69:[2,20],70:[2,20],71:[2,20],72:[2,20],73:[2,20],74:[2,20],75:[2,20],80:[2,20],168:[2,20]},{11:[2,21],14:[2,21],24:[2,21],31:[2,21],32:[2,21],33:[2,21],34:[2,21],38:[2,21],39:[2,21],42:[2,21],43:[2,21],45:[2,21],46:[2,21],47:[2,21],48:[2,21],50:[2,21],51:[2,21],54:[2,21],56:[2,21],58:[2,21],60:[2,21],62:[2,21],63:[2,21],65:[2,21],66:[2,21],67:[2,21],68:[2,21],69:[2,21],70:[2,21],71:[2,21],72:[2,21],73:[2,21],74:[2,21],75:[2,21],80:[2,21],168:[2,21]},{11:[2,22],14:[2,22],24:[2,22],31:[2,22],32:[2,22],33:[2,22],34:[2,22],38:[2,22],39:[2,22],42:[2,22],43:[2,22],45:[2,22],46:[2,22],47:[2,22],48:[2,22],50:[2,22],51:[2,22],54:[2,22],56:[2,22],58:[2,22],60:[2,22],62:[2,22],63:[2,22],65:[2,22],66:[2,22],67:[2,22],68:[2,22],69:[2,22],70:[2,22],71:[2,22],72:[2,22],73:[2,22],74:[2,22],75:[2,22],80:[2,22],168:[2,22]},{5:112,6:142,7:121,8:122,9:[1,113],10:223,12:105,18:[1,106],19:[1,107],20:305,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],115:152,118:[1,42],121:[1,32],122:[1,33],123:[1,34],158:[1,44],159:[1,43],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{20:306,83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],115:152,118:[1,42],121:[1,32],122:[1,33],123:[1,34],159:[1,43]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:307,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{11:[1,308]},{11:[1,309],24:[1,183]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:310,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:311,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:312,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:313,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:314,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:315,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:316,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:317,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:318,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:319,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:320,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:321,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:322,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:323,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:324,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:325,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{14:[1,326]},{9:[2,151],11:[2,151],13:[2,151],24:[2,151],63:[2,151],65:[2,151],80:[2,151],167:[2,151]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],25:327,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[2,26],14:[1,328],18:[2,26],19:[2,26],29:[2,26],30:[2,26],31:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],158:[2,26],160:[2,26],161:[2,26],162:[2,26],163:[2,26],164:[2,26],165:[2,26]},{9:[2,150],11:[2,150],13:[2,150],24:[2,150],63:[2,150],65:[2,150],80:[2,150],167:[2,150]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],25:329,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,84:158,121:[1,32],122:[1,33],123:[1,34],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{14:[1,330]},{9:[2,157],11:[2,157],13:[2,157],24:[2,157],63:[2,157],65:[2,157],80:[2,157],167:[2,157]},{9:[2,158],11:[2,158],13:[2,158],24:[2,158],63:[2,158],65:[2,158],80:[2,158],167:[2,158]},{9:[2,159],11:[2,159],13:[2,159],24:[2,159],63:[2,159],65:[2,159],80:[2,159],167:[2,159]},{6:331,158:[1,44]},{78:149,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],130:332,131:333,159:[1,43],166:[1,334]},{11:[2,171],24:[2,171]},{11:[2,172],24:[2,172]},{6:39,9:[1,256],11:[2,178],13:[1,257],24:[2,178],125:57,133:335,158:[1,44]},{9:[1,337],11:[2,179],13:[1,336],24:[2,179]},{6:39,9:[1,256],11:[1,339],13:[1,257],32:[1,38],78:149,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],91:64,93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],124:254,125:14,127:340,129:146,131:148,132:338,133:255,158:[1,44],159:[1,43]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,14:[1,341],18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:153,76:342,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[2,94],11:[2,94],13:[2,94],24:[2,94],32:[2,94],80:[2,94],87:[2,94],88:[2,94],89:[2,94],93:[2,94],94:[2,94],95:[2,94],96:[2,94],97:[2,94],98:[2,94],99:[2,94],100:[2,94],101:[2,94],102:[2,94],103:[2,94],104:[2,94],105:[2,94],106:[2,94],112:[2,94],113:[2,94],118:[2,94],121:[2,94],122:[2,94],123:[2,94],158:[2,94],159:[2,94]},{9:[2,95],11:[2,95],13:[2,95],24:[2,95],32:[2,95],80:[2,95],87:[2,95],88:[2,95],89:[2,95],93:[2,95],94:[2,95],95:[2,95],96:[2,95],97:[2,95],98:[2,95],99:[2,95],100:[2,95],101:[2,95],102:[2,95],103:[2,95],104:[2,95],105:[2,95],106:[2,95],112:[2,95],113:[2,95],118:[2,95],121:[2,95],122:[2,95],123:[2,95],158:[2,95],159:[2,95]},{11:[2,177]},{9:[1,262],11:[2,178],13:[1,257],133:335},{9:[1,262],11:[1,339],13:[1,257],32:[1,38],78:149,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],124:261,127:340,129:146,131:148,132:338,133:255,159:[1,43]},{9:[2,126],11:[2,126],13:[2,126],32:[2,126],63:[2,126],80:[2,126],158:[2,126]},{9:[2,128],11:[2,128],13:[2,128],32:[2,128],63:[2,128],80:[2,128],158:[2,128]},{23:343,83:154,84:155,98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],114:267,115:163,118:[1,42],121:[1,32],122:[1,33],123:[1,34],159:[1,43],168:[1,76]},{9:[2,118],11:[2,118],13:[2,118],24:[2,118],32:[2,118],63:[2,118],80:[2,118],87:[2,118],88:[2,118],89:[2,118],93:[2,118],94:[2,118],95:[2,118],96:[2,118],97:[2,118],98:[2,118],99:[2,118],100:[2,118],101:[2,118],102:[2,118],103:[2,118],104:[2,118],105:[2,118],106:[2,118],112:[2,118],113:[2,118],118:[2,118],121:[2,118],122:[2,118],123:[2,118],158:[2,118],159:[2,118]},{98:[2,123],99:[2,123],100:[2,123],101:[2,123],102:[2,123],103:[2,123],104:[2,123],105:[2,123],106:[2,123],112:[2,123],113:[2,123],118:[2,123],121:[2,123],122:[2,123],123:[2,123],159:[2,123],168:[2,123]},{24:[1,345],80:[1,344]},{98:[2,125],99:[2,125],100:[2,125],101:[2,125],102:[2,125],103:[2,125],104:[2,125],105:[2,125],106:[2,125],112:[2,125],113:[2,125],118:[2,125],121:[2,125],122:[2,125],123:[2,125],159:[2,125],168:[2,125]},{24:[2,130],80:[2,130]},{24:[2,132],63:[1,346],80:[2,132]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:153,76:347,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{23:348,24:[1,275],168:[1,76]},{9:[2,136],11:[2,136],13:[2,136],24:[2,136],32:[2,136],63:[2,136],80:[2,136],87:[2,136],88:[2,136],89:[2,136],93:[2,136],94:[2,136],95:[2,136],96:[2,136],97:[2,136],98:[2,136],99:[2,136],100:[2,136],101:[2,136],102:[2,136],103:[2,136],104:[2,136],105:[2,136],106:[2,136],112:[2,136],113:[2,136],118:[2,136],121:[2,136],122:[2,136],123:[2,136],158:[2,136],159:[2,136]},{6:167,120:349,158:[1,44]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:153,76:350,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{24:[2,99],80:[2,99]},{24:[2,190],80:[2,190],168:[2,190]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],21:279,22:351,25:278,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,92:352,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{24:[2,97],80:[2,97]},{24:[2,98],65:[1,169],80:[2,98]},{2:[2,213],9:[2,213],18:[2,213],19:[2,213],29:[2,213],30:[2,213],31:[2,213],32:[2,213],33:[2,213],34:[2,213],35:[2,213],36:[2,213],80:[2,213],87:[2,213],88:[2,213],89:[2,213],93:[2,213],94:[2,213],95:[2,213],96:[2,213],97:[2,213],98:[2,213],99:[2,213],100:[2,213],101:[2,213],102:[2,213],103:[2,213],104:[2,213],105:[2,213],106:[2,213],112:[2,213],113:[2,213],118:[2,213],121:[2,213],122:[2,213],123:[2,213],141:[2,213],142:[2,213],146:[2,213],148:[2,213],149:[2,213],150:[2,213],151:[2,213],152:[2,213],153:[2,213],154:[2,213],155:[2,213],158:[2,213],159:[2,213],160:[2,213],161:[2,213],162:[2,213],163:[2,213],164:[2,213],165:[2,213],167:[2,213],168:[2,213]},{1:[2,208],2:[2,208],9:[2,208],18:[2,208],19:[2,208],29:[2,208],30:[2,208],31:[2,208],32:[2,208],33:[2,208],34:[2,208],35:[2,208],36:[2,208],80:[2,208],87:[2,208],88:[2,208],89:[2,208],93:[2,208],94:[2,208],95:[2,208],96:[2,208],97:[2,208],98:[2,208],99:[2,208],100:[2,208],101:[2,208],102:[2,208],103:[2,208],104:[2,208],105:[2,208],106:[2,208],112:[2,208],113:[2,208],118:[2,208],121:[2,208],122:[2,208],123:[2,208],141:[2,208],142:[2,208],146:[2,208],147:[2,208],148:[2,208],149:[2,208],150:[2,208],151:[2,208],152:[2,208],153:[2,208],154:[2,208],155:[2,208],158:[2,208],159:[2,208],160:[2,208],161:[2,208],162:[2,208],163:[2,208],164:[2,208],165:[2,208],167:[2,208],168:[2,208]},{2:[2,202],9:[2,202],18:[2,202],19:[2,202],29:[2,202],30:[2,202],31:[2,202],32:[2,202],33:[2,202],34:[2,202],35:[2,202],36:[2,202],80:[2,202],87:[2,202],88:[2,202],89:[2,202],93:[2,202],94:[2,202],95:[2,202],96:[2,202],97:[2,202],98:[2,202],99:[2,202],100:[2,202],101:[2,202],102:[2,202],103:[2,202],104:[2,202],105:[2,202],106:[2,202],112:[2,202],113:[2,202],118:[2,202],121:[2,202],122:[2,202],123:[2,202],141:[2,202],142:[2,202],146:[2,202],147:[2,202],148:[2,202],149:[2,202],150:[2,202],151:[2,202],152:[2,202],153:[2,202],154:[2,202],155:[2,202],158:[2,202],159:[2,202],160:[2,202],161:[2,202],162:[2,202],163:[2,202],164:[2,202],165:[2,202],167:[2,202],168:[2,202]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:353,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{2:[2,204],9:[2,204],18:[2,204],19:[2,204],29:[2,204],30:[2,204],31:[2,204],32:[2,204],33:[2,204],34:[2,204],35:[2,204],36:[2,204],80:[2,204],87:[2,204],88:[2,204],89:[2,204],93:[2,204],94:[2,204],95:[2,204],96:[2,204],97:[2,204],98:[2,204],99:[2,204],100:[2,204],101:[2,204],102:[2,204],103:[2,204],104:[2,204],105:[2,204],106:[2,204],112:[2,204],113:[2,204],118:[2,204],121:[2,204],122:[2,204],123:[2,204],141:[2,204],142:[2,204],146:[2,204],147:[2,204],148:[2,204],149:[2,204],150:[2,204],151:[2,204],152:[2,204],153:[2,204],154:[2,204],155:[2,204],158:[2,204],159:[2,204],160:[2,204],161:[2,204],162:[2,204],163:[2,204],164:[2,204],165:[2,204],167:[2,204],168:[2,204]},{11:[2,77],14:[2,77],24:[2,77],63:[2,77],80:[2,77]},{11:[1,354],24:[1,183]},{11:[1,355],24:[1,183]},{11:[1,356],24:[1,183]},{9:[1,357]},{5:112,6:142,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],137:358,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{2:[2,224],9:[2,224],18:[2,224],19:[2,224],29:[2,224],30:[2,224],31:[2,224],32:[2,224],33:[2,224],34:[2,224],35:[2,224],36:[2,224],80:[2,224],87:[2,224],88:[2,224],89:[2,224],93:[2,224],94:[2,224],95:[2,224],96:[2,224],97:[2,224],98:[2,224],99:[2,224],100:[2,224],101:[2,224],102:[2,224],103:[2,224],104:[2,224],105:[2,224],106:[2,224],112:[2,224],113:[2,224],118:[2,224],121:[2,224],122:[2,224],123:[2,224],141:[2,224],142:[2,224],146:[2,224],147:[2,224],148:[2,224],149:[2,224],150:[2,224],151:[2,224],152:[2,224],153:[2,224],154:[2,224],155:[2,224],158:[2,224],159:[2,224],160:[2,224],161:[2,224],162:[2,224],163:[2,224],164:[2,224],165:[2,224],167:[2,224],168:[2,224]},{2:[2,228],9:[2,228],18:[2,228],19:[2,228],29:[2,228],30:[2,228],31:[2,228],32:[2,228],33:[2,228],34:[2,228],35:[2,228],36:[2,228],80:[2,228],87:[2,228],88:[2,228],89:[2,228],93:[2,228],94:[2,228],95:[2,228],96:[2,228],97:[2,228],98:[2,228],99:[2,228],100:[2,228],101:[2,228],102:[2,228],103:[2,228],104:[2,228],105:[2,228],106:[2,228],112:[2,228],113:[2,228],118:[2,228],121:[2,228],122:[2,228],123:[2,228],141:[2,228],142:[2,228],146:[2,228],147:[2,228],148:[2,228],149:[2,228],150:[2,228],151:[2,228],152:[2,228],153:[2,228],154:[2,228],155:[2,228],158:[2,228],159:[2,228],160:[2,228],161:[2,228],162:[2,228],163:[2,228],164:[2,228],165:[2,228],167:[2,228],168:[2,228]},{11:[2,64],14:[2,64],24:[2,64],63:[2,64],80:[2,64],168:[2,64]},{24:[1,183],63:[1,359]},{11:[2,60],14:[2,60],24:[2,60],58:[1,221],60:[2,60],62:[2,60],63:[2,60],80:[2,60],168:[2,60]},{14:[1,360],24:[1,183]},{9:[2,8],11:[2,8],13:[2,8],14:[2,8],16:[2,8],17:[2,8],18:[2,8],19:[2,8],24:[2,8],31:[2,8],32:[2,8],33:[2,8],34:[2,8],38:[2,8],39:[2,8],42:[2,8],43:[2,8],45:[2,8],46:[2,8],47:[2,8],48:[2,8],50:[2,8],51:[2,8],54:[2,8],56:[2,8],58:[2,8],60:[2,8],62:[2,8],63:[2,8],65:[2,8],66:[2,8],67:[2,8],68:[2,8],69:[2,8],70:[2,8],71:[2,8],72:[2,8],73:[2,8],74:[2,8],75:[2,8],80:[2,8],168:[2,8]},{11:[1,361],24:[1,362]},{11:[2,16],24:[2,16]},{9:[2,10],11:[2,10],13:[2,10],14:[2,10],16:[2,10],17:[2,10],18:[2,10],19:[2,10],24:[2,10],31:[2,10],32:[2,10],33:[2,10],34:[2,10],38:[2,10],39:[2,10],42:[2,10],43:[2,10],45:[2,10],46:[2,10],47:[2,10],48:[2,10],50:[2,10],51:[2,10],54:[2,10],56:[2,10],58:[2,10],60:[2,10],62:[2,10],63:[2,10],65:[2,10],66:[2,10],67:[2,10],68:[2,10],69:[2,10],70:[2,10],71:[2,10],72:[2,10],73:[2,10],74:[2,10],75:[2,10],80:[2,10],168:[2,10]},{9:[2,11],11:[2,11],13:[2,11],14:[2,11],16:[2,11],17:[2,11],18:[2,11],19:[2,11],24:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],38:[2,11],39:[2,11],42:[2,11],43:[2,11],45:[2,11],46:[2,11],47:[2,11],48:[2,11],50:[2,11],51:[2,11],54:[2,11],56:[2,11],58:[2,11],60:[2,11],62:[2,11],63:[2,11],65:[2,11],66:[2,11],67:[2,11],68:[2,11],69:[2,11],70:[2,11],71:[2,11],72:[2,11],73:[2,11],74:[2,11],75:[2,11],80:[2,11],168:[2,11]},{11:[1,363]},{11:[1,364]},{11:[1,365]},{11:[2,58],14:[2,58],24:[2,58],56:[1,224],58:[2,58],60:[2,58],62:[2,58],63:[2,58],80:[2,58],168:[2,58]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],21:366,26:156,27:108,28:367,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{9:[2,5],11:[2,5],13:[2,5],14:[2,5],16:[2,5],17:[2,5],18:[2,5],19:[2,5],24:[2,5],31:[2,5],32:[2,5],33:[2,5],34:[2,5],38:[2,5],39:[2,5],42:[2,5],43:[2,5],45:[2,5],46:[2,5],47:[2,5],48:[2,5],50:[2,5],51:[2,5],54:[2,5],56:[2,5],58:[2,5],60:[2,5],62:[2,5],63:[2,5],65:[2,5],66:[2,5],67:[2,5],68:[2,5],69:[2,5],70:[2,5],71:[2,5],72:[2,5],73:[2,5],74:[2,5],75:[2,5],80:[2,5],168:[2,5]},{11:[2,56],14:[2,56],24:[2,56],54:[1,225],56:[2,56],58:[2,56],60:[2,56],62:[2,56],63:[2,56],80:[2,56],168:[2,56]},{11:[2,54],14:[2,54],24:[2,54],31:[1,226],54:[2,54],56:[2,54],58:[2,54],60:[2,54],62:[2,54],63:[2,54],80:[2,54],168:[2,54]},{11:[2,52],14:[2,52],24:[2,52],31:[2,52],50:[1,227],51:[1,228],54:[2,52],56:[2,52],58:[2,52],60:[2,52],62:[2,52],63:[2,52],80:[2,52],168:[2,52]},{11:[2,49],14:[2,49],24:[2,49],31:[2,49],45:[1,229],46:[1,230],47:[1,231],48:[1,232],50:[2,49],51:[2,49],54:[2,49],56:[2,49],58:[2,49],60:[2,49],62:[2,49],63:[2,49],80:[2,49],168:[2,49]},{11:[2,50],14:[2,50],24:[2,50],31:[2,50],45:[1,229],46:[1,230],47:[1,231],48:[1,232],50:[2,50],51:[2,50],54:[2,50],56:[2,50],58:[2,50],60:[2,50],62:[2,50],63:[2,50],80:[2,50],168:[2,50]},{11:[2,44],14:[2,44],24:[2,44],31:[2,44],42:[1,233],43:[1,234],45:[2,44],46:[2,44],47:[2,44],48:[2,44],50:[2,44],51:[2,44],54:[2,44],56:[2,44],58:[2,44],60:[2,44],62:[2,44],63:[2,44],80:[2,44],168:[2,44]},{11:[2,45],14:[2,45],24:[2,45],31:[2,45],42:[1,233],43:[1,234],45:[2,45],46:[2,45],47:[2,45],48:[2,45],50:[2,45],51:[2,45],54:[2,45],56:[2,45],58:[2,45],60:[2,45],62:[2,45],63:[2,45],80:[2,45],168:[2,45]},{11:[2,46],14:[2,46],24:[2,46],31:[2,46],42:[1,233],43:[1,234],45:[2,46],46:[2,46],47:[2,46],48:[2,46],50:[2,46],51:[2,46],54:[2,46],56:[2,46],58:[2,46],60:[2,46],62:[2,46],63:[2,46],80:[2,46],168:[2,46]},{11:[2,47],14:[2,47],24:[2,47],31:[2,47],42:[1,233],43:[1,234],45:[2,47],46:[2,47],47:[2,47],48:[2,47],50:[2,47],51:[2,47],54:[2,47],56:[2,47],58:[2,47],60:[2,47],62:[2,47],63:[2,47],80:[2,47],168:[2,47]},{11:[2,41],14:[2,41],24:[2,41],31:[2,41],33:[1,235],34:[1,236],42:[2,41],43:[2,41],45:[2,41],46:[2,41],47:[2,41],48:[2,41],50:[2,41],51:[2,41],54:[2,41],56:[2,41],58:[2,41],60:[2,41],62:[2,41],63:[2,41],80:[2,41],168:[2,41]},{11:[2,42],14:[2,42],24:[2,42],31:[2,42],33:[1,235],34:[1,236],42:[2,42],43:[2,42],45:[2,42],46:[2,42],47:[2,42],48:[2,42],50:[2,42],51:[2,42],54:[2,42],56:[2,42],58:[2,42],60:[2,42],62:[2,42],63:[2,42],80:[2,42],168:[2,42]},{11:[2,38],14:[2,38],24:[2,38],31:[2,38],32:[1,237],33:[2,38],34:[2,38],38:[1,238],39:[1,239],42:[2,38],43:[2,38],45:[2,38],46:[2,38],47:[2,38],48:[2,38],50:[2,38],51:[2,38],54:[2,38],56:[2,38],58:[2,38],60:[2,38],62:[2,38],63:[2,38],80:[2,38],168:[2,38]},{11:[2,39],14:[2,39],24:[2,39],31:[2,39],32:[1,237],33:[2,39],34:[2,39],38:[1,238],39:[1,239],42:[2,39],43:[2,39],45:[2,39],46:[2,39],47:[2,39],48:[2,39],50:[2,39],51:[2,39],54:[2,39],56:[2,39],58:[2,39],60:[2,39],62:[2,39],63:[2,39],80:[2,39],168:[2,39]},{11:[2,34],14:[2,34],24:[2,34],31:[2,34],32:[2,34],33:[2,34],34:[2,34],38:[2,34],39:[2,34],42:[2,34],43:[2,34],45:[2,34],46:[2,34],47:[2,34],48:[2,34],50:[2,34],51:[2,34],54:[2,34],56:[2,34],58:[2,34],60:[2,34],62:[2,34],63:[2,34],80:[2,34],168:[2,34]},{11:[2,35],14:[2,35],24:[2,35],31:[2,35],32:[2,35],33:[2,35],34:[2,35],38:[2,35],39:[2,35],42:[2,35],43:[2,35],45:[2,35],46:[2,35],47:[2,35],48:[2,35],50:[2,35],51:[2,35],54:[2,35],56:[2,35],58:[2,35],60:[2,35],62:[2,35],63:[2,35],80:[2,35],168:[2,35]},{11:[2,36],14:[2,36],24:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36],38:[2,36],39:[2,36],42:[2,36],43:[2,36],45:[2,36],46:[2,36],47:[2,36],48:[2,36],50:[2,36],51:[2,36],54:[2,36],56:[2,36],58:[2,36],60:[2,36],62:[2,36],63:[2,36],80:[2,36],168:[2,36]},{9:[2,149],11:[2,149],13:[2,149],24:[2,149],63:[2,149],65:[2,149],80:[2,149],167:[2,149]},{14:[1,368]},{9:[2,156],11:[2,156],13:[2,156],24:[2,156],63:[2,156],65:[2,156],80:[2,156],167:[2,156]},{14:[1,369]},{9:[2,154],11:[2,154],13:[2,154],24:[2,154],63:[2,154],65:[2,154],80:[2,154],167:[2,154]},{11:[2,175],24:[2,175]},{11:[2,168]},{11:[2,170],24:[2,170]},{11:[2,243]},{9:[1,337],11:[2,180],13:[1,336],24:[2,180]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,14:[1,370],18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:153,76:371,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{11:[1,372],78:149,82:8,83:9,84:10,85:11,86:12,87:[1,35],88:[1,36],89:[1,37],93:[1,15],94:[1,16],95:[1,17],96:[1,18],97:[1,19],98:[1,20],99:[1,21],100:[1,22],101:[1,23],102:[1,24],103:[1,25],104:[1,26],105:[1,27],106:[1,28],107:29,108:30,109:31,110:41,112:[1,45],113:[1,46],118:[1,42],121:[1,32],122:[1,33],123:[1,34],127:373,129:146,131:148,159:[1,43]},{11:[1,374]},{9:[2,186],11:[2,186],13:[2,186],24:[2,186]},{11:[1,375]},{9:[2,182],11:[2,182],13:[2,182],24:[2,182]},{14:[1,376]},{9:[2,117],11:[2,117],13:[2,117],24:[2,117],32:[2,117],63:[2,117],80:[2,117],87:[2,117],88:[2,117],89:[2,117],93:[2,117],94:[2,117],95:[2,117],96:[2,117],97:[2,117],98:[2,117],99:[2,117],100:[2,117],101:[2,117],102:[2,117],103:[2,117],104:[2,117],105:[2,117],106:[2,117],112:[2,117],113:[2,117],118:[2,117],121:[2,117],122:[2,117],123:[2,117],158:[2,117],159:[2,117]},{98:[2,124],99:[2,124],100:[2,124],101:[2,124],102:[2,124],103:[2,124],104:[2,124],105:[2,124],106:[2,124],112:[2,124],113:[2,124],118:[2,124],121:[2,124],122:[2,124],123:[2,124],159:[2,124],168:[2,124]},{6:39,9:[1,40],32:[1,38],63:[1,272],91:271,117:377,124:13,125:14,158:[1,44]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:153,76:378,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{24:[2,133],80:[2,133]},{9:[2,135],11:[2,135],13:[2,135],24:[2,135],32:[2,135],63:[2,135],80:[2,135],87:[2,135],88:[2,135],89:[2,135],93:[2,135],94:[2,135],95:[2,135],96:[2,135],97:[2,135],98:[2,135],99:[2,135],100:[2,135],101:[2,135],102:[2,135],103:[2,135],104:[2,135],105:[2,135],106:[2,135],112:[2,135],113:[2,135],118:[2,135],121:[2,135],122:[2,135],123:[2,135],158:[2,135],159:[2,135]},{24:[2,139],168:[2,139]},{24:[2,141],168:[2,141]},{23:379,24:[1,380],168:[1,76]},{24:[2,193],168:[2,193]},{2:[2,203],9:[2,203],18:[2,203],19:[2,203],29:[2,203],30:[2,203],31:[2,203],32:[2,203],33:[2,203],34:[2,203],35:[2,203],36:[2,203],80:[2,203],87:[2,203],88:[2,203],89:[2,203],93:[2,203],94:[2,203],95:[2,203],96:[2,203],97:[2,203],98:[2,203],99:[2,203],100:[2,203],101:[2,203],102:[2,203],103:[2,203],104:[2,203],105:[2,203],106:[2,203],112:[2,203],113:[2,203],118:[2,203],121:[2,203],122:[2,203],123:[2,203],141:[2,203],142:[2,203],146:[2,203],147:[2,203],148:[2,203],149:[2,203],150:[2,203],151:[2,203],152:[2,203],153:[2,203],154:[2,203],155:[2,203],158:[2,203],159:[2,203],160:[2,203],161:[2,203],162:[2,203],163:[2,203],164:[2,203],165:[2,203],167:[2,203],168:[2,203]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:381,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:382,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:383,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{5:112,6:142,7:121,8:122,9:[1,113],10:384,12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],10:386,11:[1,385],12:105,18:[1,106],19:[1,107],25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],26:156,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:387,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{9:[2,7],11:[2,7],13:[2,7],14:[2,7],16:[2,7],17:[2,7],18:[2,7],19:[2,7],24:[2,7],31:[2,7],32:[2,7],33:[2,7],34:[2,7],38:[2,7],39:[2,7],42:[2,7],43:[2,7],45:[2,7],46:[2,7],47:[2,7],48:[2,7],50:[2,7],51:[2,7],54:[2,7],56:[2,7],58:[2,7],60:[2,7],62:[2,7],63:[2,7],65:[2,7],66:[2,7],67:[2,7],68:[2,7],69:[2,7],70:[2,7],71:[2,7],72:[2,7],73:[2,7],74:[2,7],75:[2,7],80:[2,7],168:[2,7]},{9:[2,9],11:[2,9],13:[2,9],14:[2,9],16:[2,9],17:[2,9],18:[2,9],19:[2,9],24:[2,9],31:[2,9],32:[2,9],33:[2,9],34:[2,9],38:[2,9],39:[2,9],42:[2,9],43:[2,9],45:[2,9],46:[2,9],47:[2,9],48:[2,9],50:[2,9],51:[2,9],54:[2,9],56:[2,9],58:[2,9],60:[2,9],62:[2,9],63:[2,9],65:[2,9],66:[2,9],67:[2,9],68:[2,9],69:[2,9],70:[2,9],71:[2,9],72:[2,9],73:[2,9],74:[2,9],75:[2,9],80:[2,9],168:[2,9]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],25:388,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129]},{21:366,167:[1,51]},{11:[2,23],14:[2,23],21:366,24:[2,23],31:[2,23],32:[2,23],33:[2,23],34:[2,23],38:[2,23],39:[2,23],42:[2,23],43:[2,23],45:[2,23],46:[2,23],47:[2,23],48:[2,23],50:[2,23],51:[2,23],54:[2,23],56:[2,23],58:[2,23],60:[2,23],62:[2,23],63:[2,23],65:[2,23],66:[2,23],67:[2,23],68:[2,23],69:[2,23],70:[2,23],71:[2,23],72:[2,23],73:[2,23],74:[2,23],75:[2,23],80:[2,23],167:[1,51],168:[2,23]},{11:[2,24],14:[2,24],24:[2,24],31:[2,24],32:[2,24],33:[2,24],34:[2,24],38:[2,24],39:[2,24],42:[2,24],43:[2,24],45:[2,24],46:[2,24],47:[2,24],48:[2,24],50:[2,24],51:[2,24],54:[2,24],56:[2,24],58:[2,24],60:[2,24],62:[2,24],63:[2,24],65:[2,24],66:[2,24],67:[2,24],68:[2,24],69:[2,24],70:[2,24],71:[2,24],72:[2,24],73:[2,24],74:[2,24],75:[2,24],80:[2,24],168:[2,24]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],21:279,22:389,25:278,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,92:352,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{11:[2,32],14:[2,32],24:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],38:[2,32],39:[2,32],42:[2,32],43:[2,32],45:[2,32],46:[2,32],47:[2,32],48:[2,32],50:[2,32],51:[2,32],54:[2,32],56:[2,32],58:[2,32],60:[2,32],62:[2,32],63:[2,32],65:[2,32],66:[2,32],67:[2,32],68:[2,32],69:[2,32],70:[2,32],71:[2,32],72:[2,32],73:[2,32],74:[2,32],75:[2,32],80:[2,32],168:[2,32]},{9:[2,155],11:[2,155],13:[2,155],24:[2,155],63:[2,155],65:[2,155],80:[2,155],167:[2,155]},{9:[2,153],11:[2,153],13:[2,153],24:[2,153],63:[2,153],65:[2,153],80:[2,153],167:[2,153]},{9:[2,184],11:[2,184],13:[2,184],24:[2,184]},{14:[1,390]},{9:[2,188],11:[2,188],13:[2,188],24:[2,188]},{11:[1,391]},{9:[2,181],11:[2,181],13:[2,181],24:[2,181]},{9:[2,187],11:[2,187],13:[2,187],24:[2,187]},{9:[2,183],11:[2,183],13:[2,183],24:[2,183]},{24:[2,131],80:[2,131]},{24:[2,134],80:[2,134]},{24:[2,191],80:[2,191],168:[2,191]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],21:279,23:392,25:278,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,92:393,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51],168:[1,76]},{2:[2,217],9:[2,217],18:[2,217],19:[2,217],29:[2,217],30:[2,217],31:[2,217],32:[2,217],33:[2,217],34:[2,217],35:[2,217],36:[2,217],80:[2,217],87:[2,217],88:[2,217],89:[2,217],93:[2,217],94:[2,217],95:[2,217],96:[2,217],97:[2,217],98:[2,217],99:[2,217],100:[2,217],101:[2,217],102:[2,217],103:[2,217],104:[2,217],105:[2,217],106:[2,217],112:[2,217],113:[2,217],118:[2,217],121:[2,217],122:[2,217],123:[2,217],141:[2,217],142:[2,217],146:[2,217],147:[1,394],148:[2,217],149:[2,217],150:[2,217],151:[2,217],152:[2,217],153:[2,217],154:[2,217],155:[2,217],158:[2,217],159:[2,217],160:[2,217],161:[2,217],162:[2,217],163:[2,217],164:[2,217],165:[2,217],167:[2,217],168:[2,217]},{2:[2,219],9:[2,219],18:[2,219],19:[2,219],29:[2,219],30:[2,219],31:[2,219],32:[2,219],33:[2,219],34:[2,219],35:[2,219],36:[2,219],80:[2,219],87:[2,219],88:[2,219],89:[2,219],93:[2,219],94:[2,219],95:[2,219],96:[2,219],97:[2,219],98:[2,219],99:[2,219],100:[2,219],101:[2,219],102:[2,219],103:[2,219],104:[2,219],105:[2,219],106:[2,219],112:[2,219],113:[2,219],118:[2,219],121:[2,219],122:[2,219],123:[2,219],141:[2,219],142:[2,219],146:[2,219],147:[2,219],148:[2,219],149:[2,219],150:[2,219],151:[2,219],152:[2,219],153:[2,219],154:[2,219],155:[2,219],158:[2,219],159:[2,219],160:[2,219],161:[2,219],162:[2,219],163:[2,219],164:[2,219],165:[2,219],167:[2,219],168:[2,219]},{2:[2,220],9:[2,220],18:[2,220],19:[2,220],29:[2,220],30:[2,220],31:[2,220],32:[2,220],33:[2,220],34:[2,220],35:[2,220],36:[2,220],80:[2,220],87:[2,220],88:[2,220],89:[2,220],93:[2,220],94:[2,220],95:[2,220],96:[2,220],97:[2,220],98:[2,220],99:[2,220],100:[2,220],101:[2,220],102:[2,220],103:[2,220],104:[2,220],105:[2,220],106:[2,220],112:[2,220],113:[2,220],118:[2,220],121:[2,220],122:[2,220],123:[2,220],141:[2,220],142:[2,220],146:[2,220],147:[2,220],148:[2,220],149:[2,220],150:[2,220],151:[2,220],152:[2,220],153:[2,220],154:[2,220],155:[2,220],158:[2,220],159:[2,220],160:[2,220],161:[2,220],162:[2,220],163:[2,220],164:[2,220],165:[2,220],167:[2,220],168:[2,220]},{11:[1,395],24:[1,183]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:396,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{11:[1,397],24:[1,183]},{11:[2,62],14:[2,62],24:[2,62],63:[2,62],80:[2,62],168:[2,62]},{11:[2,17],24:[2,17]},{23:398,24:[1,399],168:[1,76]},{9:[2,185],11:[2,185],13:[2,185],24:[2,185]},{9:[2,189],11:[2,189],13:[2,189],24:[2,189]},{24:[2,192],80:[2,192],168:[2,192]},{24:[2,194],168:[2,194]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:400,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{80:[1,401]},{2:[2,222],9:[2,222],18:[2,222],19:[2,222],29:[2,222],30:[2,222],31:[2,222],32:[2,222],33:[2,222],34:[2,222],35:[2,222],36:[2,222],80:[2,222],87:[2,222],88:[2,222],89:[2,222],93:[2,222],94:[2,222],95:[2,222],96:[2,222],97:[2,222],98:[2,222],99:[2,222],100:[2,222],101:[2,222],102:[2,222],103:[2,222],104:[2,222],105:[2,222],106:[2,222],112:[2,222],113:[2,222],118:[2,222],121:[2,222],122:[2,222],123:[2,222],141:[2,222],142:[2,222],146:[2,222],147:[2,222],148:[2,222],149:[2,222],150:[2,222],151:[2,222],152:[2,222],153:[2,222],154:[2,222],155:[2,222],158:[2,222],159:[2,222],160:[2,222],161:[2,222],162:[2,222],163:[2,222],164:[2,222],165:[2,222],167:[2,222],168:[2,222]},{2:[1,85],5:112,6:87,7:121,8:122,9:[1,113],10:91,12:105,18:[1,106],19:[1,107],21:50,25:101,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,80:[1,90],134:402,135:79,136:80,137:81,138:82,139:83,140:84,141:[1,88],142:[1,89],146:[1,92],148:[1,93],149:[1,94],150:[1,95],151:[1,96],152:[1,97],153:[1,98],154:[1,99],155:[1,100],158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{9:[2,14],11:[2,14],13:[2,14],14:[2,14],16:[2,14],17:[2,14],18:[2,14],19:[2,14],24:[1,403],31:[2,14],32:[2,14],33:[2,14],34:[2,14],38:[2,14],39:[2,14],42:[2,14],43:[2,14],45:[2,14],46:[2,14],47:[2,14],48:[2,14],50:[2,14],51:[2,14],54:[2,14],56:[2,14],58:[2,14],60:[2,14],62:[2,14],63:[2,14],65:[2,14],66:[2,14],67:[2,14],68:[2,14],69:[2,14],70:[2,14],71:[2,14],72:[2,14],73:[2,14],74:[2,14],75:[2,14],80:[2,14],168:[2,14]},{5:112,6:142,7:121,8:122,9:[1,113],12:105,18:[1,106],19:[1,107],21:279,25:278,26:103,27:108,28:136,29:[1,109],30:[1,110],31:[1,114],32:[1,115],33:[1,116],34:[1,117],35:[1,118],36:[1,119],37:135,40:134,41:133,44:132,49:131,52:130,53:123,55:120,57:111,59:104,61:102,92:393,158:[1,44],160:[1,124],161:[1,125],162:[1,126],163:[1,127],164:[1,128],165:[1,129],167:[1,51]},{2:[2,218],9:[2,218],18:[2,218],19:[2,218],29:[2,218],30:[2,218],31:[2,218],32:[2,218],33:[2,218],34:[2,218],35:[2,218],36:[2,218],80:[2,218],87:[2,218],88:[2,218],89:[2,218],93:[2,218],94:[2,218],95:[2,218],96:[2,218],97:[2,218],98:[2,218],99:[2,218],100:[2,218],101:[2,218],102:[2,218],103:[2,218],104:[2,218],105:[2,218],106:[2,218],112:[2,218],113:[2,218],118:[2,218],121:[2,218],122:[2,218],123:[2,218],141:[2,218],142:[2,218],146:[2,218],147:[2,218],148:[2,218],149:[2,218],150:[2,218],151:[2,218],152:[2,218],153:[2,218],154:[2,218],155:[2,218],158:[2,218],159:[2,218],160:[2,218],161:[2,218],162:[2,218],163:[2,218],164:[2,218],165:[2,218],167:[2,218],168:[2,218]},{2:[2,221],9:[2,221],18:[2,221],19:[2,221],29:[2,221],30:[2,221],31:[2,221],32:[2,221],33:[2,221],34:[2,221],35:[2,221],36:[2,221],80:[2,221],87:[2,221],88:[2,221],89:[2,221],93:[2,221],94:[2,221],95:[2,221],96:[2,221],97:[2,221],98:[2,221],99:[2,221],100:[2,221],101:[2,221],102:[2,221],103:[2,221],104:[2,221],105:[2,221],106:[2,221],112:[2,221],113:[2,221],118:[2,221],121:[2,221],122:[2,221],123:[2,221],141:[2,221],142:[2,221],146:[2,221],147:[2,221],148:[2,221],149:[2,221],150:[2,221],151:[2,221],152:[2,221],153:[2,221],154:[2,221],155:[2,221],158:[2,221],159:[2,221],160:[2,221],161:[2,221],162:[2,221],163:[2,221],164:[2,221],165:[2,221],167:[2,221],168:[2,221]},{2:[2,223],9:[2,223],18:[2,223],19:[2,223],29:[2,223],30:[2,223],31:[2,223],32:[2,223],33:[2,223],34:[2,223],35:[2,223],36:[2,223],80:[2,223],87:[2,223],88:[2,223],89:[2,223],93:[2,223],94:[2,223],95:[2,223],96:[2,223],97:[2,223],98:[2,223],99:[2,223],100:[2,223],101:[2,223],102:[2,223],103:[2,223],104:[2,223],105:[2,223],106:[2,223],112:[2,223],113:[2,223],118:[2,223],121:[2,223],122:[2,223],123:[2,223],141:[2,223],142:[2,223],146:[2,223],147:[2,223],148:[2,223],149:[2,223],150:[2,223],151:[2,223],152:[2,223],153:[2,223],154:[2,223],155:[2,223],158:[2,223],159:[2,223],160:[2,223],161:[2,223],162:[2,223],163:[2,223],164:[2,223],165:[2,223],167:[2,223],168:[2,223]},{9:[2,15],11:[2,15],13:[2,15],14:[2,15],16:[2,15],17:[2,15],18:[2,15],19:[2,15],24:[2,15],31:[2,15],32:[2,15],33:[2,15],34:[2,15],38:[2,15],39:[2,15],42:[2,15],43:[2,15],45:[2,15],46:[2,15],47:[2,15],48:[2,15],50:[2,15],51:[2,15],54:[2,15],56:[2,15],58:[2,15],60:[2,15],62:[2,15],63:[2,15],65:[2,15],66:[2,15],67:[2,15],68:[2,15],69:[2,15],70:[2,15],71:[2,15],72:[2,15],73:[2,15],74:[2,15],75:[2,15],80:[2,15],168:[2,15]}],
defaultActions: {260:[2,177],332:[2,168],334:[2,243]},
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
case 37: return(parser.symbols_.RESTRICT); 
break;
case 38: return(parser.symbols_.WHILE); 
break;
case 39: return(parser.symbols_._ALIGNOF); 
break;
case 40: return(parser.symbols_._ALIGNAS); 
break;
case 41: return(parser.symbols_._NORETURN); 
break;
case 42: return(parser.symbols_.INLINE); 
break;
case 43:
                var isType;

                isType = parser.yy.isType(yy_.yytext);
                return (isType &&
                        ! parser.yy.bSawStruct
                        ? parser.symbols_.TYPE_NAME
                        : parser.symbols_.IDENTIFIER);
              
break;
case 44: return(parser.symbols_.CONSTANT_FLOAT); 
break;
case 45: return(parser.symbols_.CONSTANT_HEX); 
break;
case 46: return(parser.symbols_.CONSTANT_OCTAL); 
break;
case 47: return(parser.symbols_.CONSTANT_DECIMAL); 
break;
case 48: return(parser.symbols_.CONSTANT_CHAR); 
break;
case 49: return(parser.symbols_.STRING_LITERAL); 
break;
case 50: return(parser.symbols_.ELLIPSIS); 
break;
case 51: return(parser.symbols_.RIGHT_ASSIGN); 
break;
case 52: return(parser.symbols_.LEFT_ASSIGN); 
break;
case 53: return(parser.symbols_.ADD_ASSIGN); 
break;
case 54: return(parser.symbols_.SUB_ASSIGN); 
break;
case 55: return(parser.symbols_.MUL_ASSIGN); 
break;
case 56: return(parser.symbols_.DIV_ASSIGN); 
break;
case 57: return(parser.symbols_.MOD_ASSIGN); 
break;
case 58: return(parser.symbols_.AND_ASSIGN); 
break;
case 59: return(parser.symbols_.XOR_ASSIGN); 
break;
case 60: return(parser.symbols_.OR_ASSIGN); 
break;
case 61: return(parser.symbols_.RIGHT_OP); 
break;
case 62: return(parser.symbols_.LEFT_OP); 
break;
case 63: return(parser.symbols_.INC_OP); 
break;
case 64: return(parser.symbols_.DEC_OP); 
break;
case 65: return(parser.symbols_.PTR_OP); 
break;
case 66: return(parser.symbols_.AND_OP); 
break;
case 67: return(parser.symbols_.OR_OP); 
break;
case 68: return(parser.symbols_.LE_OP); 
break;
case 69: return(parser.symbols_.GE_OP); 
break;
case 70: return(parser.symbols_.EQ_OP); 
break;
case 71: return(parser.symbols_.NE_OP); 
break;
case 72: return(';'); 
break;
case 73: return(parser.symbols_.LBRACE); 
break;
case 74: return(parser.symbols_.RBRACE); 
break;
case 75: return(','); 
break;
case 76: return(':'); 
break;
case 77: return('='); 
break;
case 78: return('('); 
break;
case 79: return(')'); 
break;
case 80: return('['); 
break;
case 81: return(']'); 
break;
case 82: return('.'); 
break;
case 83: return('&'); 
break;
case 84: return('!'); 
break;
case 85: return('~'); 
break;
case 86: return('-'); 
break;
case 87: return('+'); 
break;
case 88: return('*'); 
break;
case 89: return('/'); 
break;
case 90: return('%'); 
break;
case 91: return('<'); 
break;
case 92: return('>'); 
break;
case 93: return('^'); 
break;
case 94: return('|'); 
break;
case 95: return('?'); 
break;
case 96: this.begin("PREPR"); return('#');
break;
case 97: return(parser.symbols_.LBRACE); 
break;
case 98: return(parser.symbols_.RBRACE); 
break;
case 99: return('['); 
break;
case 100: return(']'); 
break;
case 101: this.begin("PREPR"); return('#');
break;
case 102: return(parser.symbols_.AND_OP); 
break;
case 103: return('|'); 
break;
case 104: return(parser.symbols_.OR_OP); 
break;
case 105: return('^'); 
break;
case 106: return('~'); 
break;
case 107: return('&'); 
break;
case 108: return(parser.symbols_.AND_ASSIGN); 
break;
case 109: return(parser.symbols_.OR_ASSIGN); 
break;
case 110: return(parser.symbols_.XOR_ASSIGN); 
break;
case 111: return('!'); 
break;
case 112: return(parser.symbols_.NE_OP); 
break;
case 113:this.begin("INITIAL"); return "PP_NEWLINE";
break;
case 114:this.begin("WRAP_PREP");
break;
case 115: 
break;
case 116:return "PP_LPAREN";
break;
case 117:return "PP_QUOTE";
break;
case 118:return "PP_INCLUDE";
break;
case 119:return "PP_UNDEF";
break;
case 120:return "PP_LINE";
break;
case 121:return "PP_PRAGMA";
break;
case 122:return "PP_DEFINE";
break;
case 123:return "PP_DEFINED";
break;
case 124:return "PP_IFDEF";
break;
case 125:return "PP_IFNDEF";
break;
case 126:return "PP_IF";
break;
case 127:return "PP_ELSE";
break;
case 128:return "PP_ENDIF";
break;
case 129:return "PP_ELIF";
break;
case 130:return "PP_ERROR";
break;
case 131:return "IDENTIFIER";
break;
case 132:return "DECIMAL_LITERAL";
break;
case 133:return "OCTAL_LITERAL";
break;
case 134:return "HEXADECIMAL_LITERAL";
break;
case 135:return "FLOATING_LITERAL";
break;
case 136:return "CHARACTER_LITERAL";
break;
case 137:return "STRING_LITERAL";
break;
case 138:return "PP_QCHARSEQUENCE";
break;
case 139:return "PP_HCHARSEQUENCE";
break;
case 140:return "PP_ANYCHAR";
break;
case 141:this.begin("PREPR");
break;
case 142:return "IDENTIFIER";
break;
case 143:this.begin("INITIAL");
break;
case 144:return(parser.symbols_.CPP_COMMENT);
break;
case 145:this.begin("INITIAL");
break;
case 146:return(parser.symbols_.C_COMMENT);
break;
}
};
lexer.rules = [/^(?:\/\*)/,/^(?:\/\/)/,/^(?:([ ]|([\011]))+)/,/^(?:(([\013])|([\015])|([\014]))+)/,/^(?:(([ ]|([\011]))|([\013])|([\015])|([\014]))*\\n\b)/,/^(?:([\n]))/,/^(?:auto\b)/,/^(?:break\b)/,/^(?:case\b)/,/^(?:char\b)/,/^(?:const\b)/,/^(?:continue\b)/,/^(?:default\b)/,/^(?:do\b)/,/^(?:double\b)/,/^(?:else\b)/,/^(?:enum\b)/,/^(?:extern\b)/,/^(?:float\b)/,/^(?:for\b)/,/^(?:goto\b)/,/^(?:if\b)/,/^(?:int\b)/,/^(?:long\b)/,/^(?:register\b)/,/^(?:return\b)/,/^(?:short\b)/,/^(?:signed\b)/,/^(?:sizeof\b)/,/^(?:static\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:typedef\b)/,/^(?:union\b)/,/^(?:unsigned\b)/,/^(?:void\b)/,/^(?:volatile\b)/,/^(?:restrict\b)/,/^(?:while\b)/,/^(?:_Alignof\b)/,/^(?:_Alignas\b)/,/^(?:_Noreturn\b)/,/^(?:inline\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/,/^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:((u|U|L))?(('))(\\.|[^\\(('))])+((')))/,/^(?:((u|u8|U|L))?"(\\.|[^\\"])*")/,/^(?:\.\.\.)/,/^(?:>>=)/,/^(?:<<=)/,/^(?:\+=)/,/^(?:-=)/,/^(?:\*=)/,/^(?:\/=)/,/^(?:%=)/,/^(?:&=)/,/^(?:\^=)/,/^(?:\|=)/,/^(?:>>)/,/^(?:<<)/,/^(?:\+\+)/,/^(?:--)/,/^(?:->)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:!=)/,/^(?:;)/,/^(?:(\{))/,/^(?:(\}))/,/^(?:,)/,/^(?::)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:(\[))/,/^(?:(\]))/,/^(?:\.)/,/^(?:&)/,/^(?:!)/,/^(?:~)/,/^(?:-)/,/^(?:\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:<)/,/^(?:>)/,/^(?:\^)/,/^(?:\|)/,/^(?:\?)/,/^(?:#)/,/^(?:<%)/,/^(?:%>)/,/^(?:<:)/,/^(?::>)/,/^(?:%:)/,/^(?:and\b)/,/^(?:bitor\b)/,/^(?:or\b)/,/^(?:xor\b)/,/^(?:compl\b)/,/^(?:bitand\b)/,/^(?:and_eq\b)/,/^(?:or_eq\b)/,/^(?:xor_eq\b)/,/^(?:not\b)/,/^(?:not_eq\b)/,/^(?:([\n]))/,/^(?:\\)/,/^(?:(([ ]|([\011]))))/,/^(?:(([ ]|([\011])))*\()/,/^(?:["])/,/^(?:include\b)/,/^(?:undef\b)/,/^(?:line\b)/,/^(?:pragma\b)/,/^(?:define\b)/,/^(?:defined\b)/,/^(?:ifdef\b)/,/^(?:ifndef\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:endif\b)/,/^(?:elif\b)/,/^(?:error\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/,/^(?:L?[']([^'\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))+['])/,/^(?:L?["]([^"\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))*["])/,/^(?:["][^\n]*["])/,/^(?:<[^\n]*>)/,/^(?:.)/,/^(?:\n\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:\n\b)/,/^(?:.*)/,/^(?:\*\/)/,/^(?:.*)/];
lexer.conditions = {"C_COMMENT":{"rules":[145,146],"inclusive":false},"CPP_COMMENT":{"rules":[143,144],"inclusive":false},"WRAP_PREP":{"rules":[141,142],"inclusive":false},"PREPR":{"rules":[113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112],"inclusive":true}};

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