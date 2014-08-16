/* Jison generated parser */
var cpp = (function(){
var parser = {trace: function trace() {
        Jison.print.apply(null, arguments);
    },
yy: {},
symbols_: {"error":2,"constant":3,"LE_INTEGERconstant":4,"LE_FLOATINGconstant":5,"LE_OCTALconstant":6,"LE_HEXconstant":7,"LE_CHARACTERconstant":8,"string_literal_list":9,"LE_STRINGliteral":10,"any_operator":11,"+":12,"-":13,"*":14,"/":15,"%":16,"^":17,"&":18,"|":19,"~":20,"!":21,"<":22,">":23,"LE_LS":24,"LE_RS":25,"LE_ANDAND":26,"LE_OROR":27,"LE_ARROW":28,"LE_ARROWstar":29,".":30,"LE_DOTstar":31,"LE_ICR":32,"LE_DECR":33,"LE_LE":34,"LE_GE":35,"LE_EQ":36,"LE_NE":37,"assignment_operator":38,"(":39,")":40,"[":41,"]":42,"LE_NEW":43,"LE_DELETE":44,",":45,"type_qualifier_list_opt":46,"type_qualifier_list":47,"postfix_expression":48,"primary_expression":49,"comma_expression":50,"argument_expression_list":51,"member_name":52,"LE_TYPEDEFname":53,"global_or_scoped_typedefname":54,"basic_type_name":55,"assignment_expression":56,"scope_opt_identifier":57,"scope_opt_complex_name":58,"LE_CLCL":59,"declaration_qualifier_list":60,"unary_expression":61,"asterisk_or_ampersand":62,"cast_expression":63,"LE_SIZEOF":64,"type_name":65,"allocation_expression":66,"global_opt_scope_opt_operator_new":67,"operator_new_initializer_opt":68,"operator_new_type":69,"global_or_scope":70,"operator_new_declarator_opt":71,"non_elaborating_type_specifier":72,"operator_new_array_declarator":73,"unary_modifier":74,"deallocation_expression":75,"global_opt_scope_opt_delete":76,"point_member_expression":77,"multiplicative_expression":78,"additive_expression":79,"shift_expression":80,"relational_expression":81,"equality_expression":82,"AND_expression":83,"exclusive_OR_expression":84,"inclusive_OR_expression":85,"logical_AND_expression":86,"logical_OR_expression":87,"conditional_expression":88,"?":89,":":90,"=":91,"LE_MULTassign":92,"LE_DIVassign":93,"LE_MODassign":94,"LE_PLUSassign":95,"LE_MINUSassign":96,"LE_LSassign":97,"LE_RSassign":98,"LE_ANDassign":99,"LE_ERassign":100,"LE_ORassign":101,"constant_expression":102,"comma_expression_opt":103,"declaration":104,"declaring_list":105,";":106,"default_declaring_list":107,"sue_declaration_specifier":108,"sue_type_specifier":109,"sue_type_specifier_elaboration":110,"identifier_declarator":111,"initializer_opt":112,"constructed_identifier_declarator":113,"declaration_specifier":114,"declarator":115,"type_specifier":116,"constructed_declarator":117,"nonunary_constructed_identifier_declarator":118,"constructed_paren_typedef_declarator":119,"simple_paren_typedef_declarator":120,"postfixing_abstract_declarator":121,"constructed_parameter_typedef_declarator":122,"paren_typedef_declarator":123,"clean_typedef_declarator":124,"paren_identifier_declarator":125,"unary_identifier_declarator":126,"basic_declaration_specifier":127,"typedef_declaration_specifier":128,"basic_type_specifier":129,"typedef_type_specifier":130,"storage_class":131,"declaration_qualifier":132,"type_qualifier":133,"LE_CONST":134,"LE_VOLATILE":135,"elaborated_type_name":136,"elaborated_type_name_elaboration":137,"LE_EXTERN":138,"LE_TYPEDEF":139,"LE_STATIC":140,"LE_AUTO":141,"LE_REGISTER":142,"LE_FRIEND":143,"LE_OVERLOAD":144,"LE_INLINE":145,"LE_VIRTUAL":146,"LE_INT":147,"LE_CHAR":148,"LE_SHORT":149,"LE_LONG":150,"LE_FLOAT":151,"LE_DOUBLE":152,"LE_SIGNED":153,"LE_UNSIGNED":154,"LE_VOID":155,"aggregate_name_elaboration":156,"enum_name_elaboration":157,"aggregate_name":158,"enum_name":159,"derivation_opt":160,"{":161,"member_declaration_list_opt":162,"}":163,"aggregate_key":164,"tag_name":165,"global_scope":166,"scope":167,"derivation_list":168,"parent_class":169,"global_opt_scope_opt_typedefname":170,"access_specifier_opt":171,"access_specifier":172,"virtual_opt":173,"LE_PUBLIC":174,"LE_PRIVATE":175,"LE_PROTECTED":176,"LE_STRUCT":177,"LE_UNION":178,"LE_CLASS":179,"member_declaration":180,"member_declaring_list":181,"member_default_declaring_list":182,"new_function_definition":183,"constructor_function_in_class":184,"member_pure_opt":185,"bit_field_identifier_declarator":186,"member_conflict_declaring_item":187,"bit_field_declarator":188,"parameter_typedef_declarator":189,"member_conflict_paren_declaring_item":190,"member_conflict_paren_postfix_declaring_item":191,"global_opt_scope_opt_enum_key":192,"enumerator_list":193,"LE_ENUM":194,"enumerator_list_no_trailing_comma":195,"enumerator_name":196,"enumerator_value_opt":197,"LE_IDENTIFIER":198,"parameter_type_list":199,"initializer":200,"named_parameter_type_list":201,"old_parameter_type_list":202,"parameter_list":203,"comma_opt_ellipsis":204,"LE_ELLIPSIS":205,"non_casting_parameter_declaration":206,"parameter_declaration":207,"abstract_declarator":208,"initializer_group":209,"initializer_list":210,"statement":211,"labeled_statement":212,"compound_statement":213,"expression_statement":214,"selection_statement":215,"iteration_statement":216,"jump_statement":217,"label":218,"LE_CASE":219,"LE_DEFAULT":220,"statement_list_opt":221,"declaration_list":222,"LE_IF":223,"LE_ELSE":224,"LE_SWITCH":225,"LE_WHILE":226,"LE_DO":227,"LE_FOR":228,"LE_GOTO":229,"LE_CONTINUE":230,"LE_BREAK":231,"LE_RETURN":232,"translation_unit":233,"external_definition":234,"function_declaration":235,"function_definition":236,"linkage_specifier":237,"constructor_function_declaration":238,"old_function_definition":239,"constructor_function_definition":240,"old_function_declarator":241,"old_function_body":242,"constructor_init_list_opt":243,"constructor_parameter_list_and_body":244,"constructor_conflicting_parameter_list_and_body":245,"constructor_conflicting_typedef_declarator":246,"unary_abstract_declarator":247,"postfix_abstract_declarator":248,"constructor_init_list":249,"constructor_init":250,"typedef_declarator":251,"clean_postfix_typedef_declarator":252,"postfix_paren_typedef_declarator":253,"postfix_identifier_declarator":254,"postfix_old_function_declarator":255,"old_postfixing_abstract_declarator":256,"array_abstract_declarator":257,"scoping_name":258,"complex_name":259,"operator_function_name":260,"global_opt_scope_opt_identifier":261,"global_opt_scope_opt_complex_name":262,"scoped_typedefname":263,"$accept":0,"$end":1},
terminals_: {2:"error",4:"LE_INTEGERconstant",5:"LE_FLOATINGconstant",6:"LE_OCTALconstant",7:"LE_HEXconstant",8:"LE_CHARACTERconstant",10:"LE_STRINGliteral",12:"+",13:"-",14:"*",15:"/",16:"%",17:"^",18:"&",19:"|",20:"~",21:"!",22:"<",23:">",24:"LE_LS",25:"LE_RS",26:"LE_ANDAND",27:"LE_OROR",28:"LE_ARROW",29:"LE_ARROWstar",30:".",31:"LE_DOTstar",32:"LE_ICR",33:"LE_DECR",34:"LE_LE",35:"LE_GE",36:"LE_EQ",37:"LE_NE",39:"(",40:")",41:"[",42:"]",43:"LE_NEW",44:"LE_DELETE",45:",",49:"primary_expression",53:"LE_TYPEDEFname",59:"LE_CLCL",64:"LE_SIZEOF",72:"non_elaborating_type_specifier",89:"?",90:":",91:"=",92:"LE_MULTassign",93:"LE_DIVassign",94:"LE_MODassign",95:"LE_PLUSassign",96:"LE_MINUSassign",97:"LE_LSassign",98:"LE_RSassign",99:"LE_ANDassign",100:"LE_ERassign",101:"LE_ORassign",106:";",125:"paren_identifier_declarator",134:"LE_CONST",135:"LE_VOLATILE",138:"LE_EXTERN",139:"LE_TYPEDEF",140:"LE_STATIC",141:"LE_AUTO",142:"LE_REGISTER",143:"LE_FRIEND",144:"LE_OVERLOAD",145:"LE_INLINE",146:"LE_VIRTUAL",147:"LE_INT",148:"LE_CHAR",149:"LE_SHORT",150:"LE_LONG",151:"LE_FLOAT",152:"LE_DOUBLE",153:"LE_SIGNED",154:"LE_UNSIGNED",155:"LE_VOID",161:"{",163:"}",174:"LE_PUBLIC",175:"LE_PRIVATE",176:"LE_PROTECTED",177:"LE_STRUCT",178:"LE_UNION",179:"LE_CLASS",194:"LE_ENUM",198:"LE_IDENTIFIER",205:"LE_ELLIPSIS",219:"LE_CASE",220:"LE_DEFAULT",223:"LE_IF",224:"LE_ELSE",225:"LE_SWITCH",226:"LE_WHILE",227:"LE_DO",228:"LE_FOR",229:"LE_GOTO",230:"LE_CONTINUE",231:"LE_BREAK",232:"LE_RETURN",260:"operator_function_name"},
productions_: [0,[3,1],[3,1],[3,1],[3,1],[3,1],[9,1],[9,2],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,2],[11,2],[11,1],[11,1],[11,1],[46,0],[46,1],[48,1],[48,4],[48,3],[48,4],[48,3],[48,3],[48,2],[48,2],[48,3],[48,3],[48,4],[48,4],[48,4],[52,1],[52,1],[52,4],[52,4],[52,4],[51,1],[51,3],[61,1],[61,2],[61,2],[61,2],[61,2],[61,2],[61,2],[61,2],[61,2],[61,4],[61,1],[66,5],[66,8],[66,2],[66,5],[67,1],[67,2],[69,3],[69,3],[71,0],[71,1],[71,2],[71,2],[73,2],[73,3],[73,4],[68,0],[68,2],[68,3],[63,1],[63,4],[75,1],[75,2],[75,5],[75,4],[76,1],[76,2],[77,1],[77,3],[77,3],[78,1],[78,3],[78,3],[78,3],[79,1],[79,3],[79,3],[80,1],[80,3],[80,3],[81,1],[81,3],[81,3],[81,3],[81,3],[82,1],[82,3],[82,3],[83,1],[83,3],[84,1],[84,3],[85,1],[85,3],[86,1],[86,3],[87,1],[87,3],[88,1],[88,5],[56,1],[56,3],[38,1],[38,1],[38,1],[38,1],[38,1],[38,1],[38,1],[38,1],[38,1],[38,1],[38,1],[50,1],[50,3],[102,1],[103,0],[103,1],[104,2],[104,2],[104,2],[104,2],[104,2],[107,3],[107,3],[107,4],[107,2],[107,2],[107,3],[105,3],[105,3],[105,3],[105,3],[105,3],[105,4],[105,2],[105,2],[105,2],[105,2],[105,2],[105,3],[117,1],[117,1],[117,4],[117,5],[117,1],[117,2],[117,2],[119,6],[119,7],[119,7],[119,7],[122,4],[122,5],[122,6],[122,7],[113,1],[113,2],[113,2],[118,4],[118,5],[118,6],[118,7],[114,1],[114,1],[114,1],[116,1],[116,1],[116,1],[116,1],[60,1],[60,2],[60,2],[47,1],[47,2],[132,1],[132,1],[133,1],[133,1],[127,2],[127,2],[127,2],[127,2],[127,2],[129,2],[129,2],[129,2],[129,2],[129,2],[108,2],[108,2],[108,2],[108,2],[108,2],[110,1],[110,2],[110,2],[109,1],[109,2],[109,2],[128,2],[128,2],[128,2],[128,2],[128,2],[128,2],[130,2],[130,2],[130,2],[130,2],[130,2],[131,1],[131,1],[131,1],[131,1],[131,1],[131,1],[131,1],[131,1],[131,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[55,1],[137,1],[137,1],[136,1],[136,1],[156,5],[156,5],[158,2],[158,4],[158,3],[158,3],[160,0],[160,2],[168,1],[168,3],[169,1],[169,3],[169,3],[173,0],[173,1],[171,0],[171,1],[172,1],[172,1],[172,1],[164,1],[164,1],[164,1],[162,0],[162,2],[180,2],[180,2],[180,2],[180,1],[180,1],[180,1],[180,2],[180,2],[180,2],[180,2],[182,3],[182,3],[182,4],[182,2],[182,2],[182,3],[181,3],[181,3],[181,3],[181,1],[181,4],[181,2],[181,2],[181,2],[181,2],[181,2],[181,3],[187,3],[187,3],[187,3],[187,3],[187,3],[187,3],[187,1],[190,6],[190,6],[190,6],[190,6],[190,4],[190,4],[190,6],[190,6],[190,6],[190,6],[190,4],[190,4],[190,1],[191,5],[191,6],[191,6],[191,6],[191,5],[191,6],[191,6],[191,6],[185,0],[185,2],[188,1],[188,3],[186,2],[186,3],[157,4],[157,4],[159,2],[192,1],[192,2],[193,1],[193,2],[195,2],[195,4],[196,1],[196,1],[197,0],[197,2],[199,3],[199,4],[199,5],[199,4],[202,2],[202,3],[202,4],[202,3],[201,1],[201,2],[201,2],[201,3],[201,1],[204,1],[204,2],[203,1],[203,2],[203,3],[203,4],[203,3],[207,1],[207,2],[207,1],[207,2],[206,1],[206,2],[206,2],[206,2],[206,1],[206,2],[206,2],[206,2],[206,2],[206,2],[206,2],[206,2],[206,2],[206,2],[206,2],[206,2],[65,1],[65,1],[65,1],[65,1],[65,1],[65,2],[65,2],[65,2],[65,2],[65,2],[112,0],[112,1],[200,2],[209,3],[209,4],[209,1],[210,1],[210,3],[211,1],[211,1],[211,1],[211,1],[211,1],[211,1],[211,1],[212,3],[212,4],[212,3],[213,3],[222,1],[222,2],[221,0],[221,2],[214,2],[215,5],[215,7],[215,5],[216,5],[216,7],[216,9],[216,8],[217,3],[217,2],[217,2],[217,3],[218,1],[218,1],[233,0],[233,2],[234,1],[234,1],[234,1],[234,2],[234,2],[234,2],[234,4],[237,2],[235,2],[235,2],[236,1],[236,1],[236,1],[183,2],[183,3],[183,3],[183,3],[183,3],[183,3],[183,3],[183,3],[239,2],[239,3],[239,3],[239,3],[239,3],[239,3],[239,3],[239,3],[242,2],[242,1],[240,4],[240,4],[238,2],[238,2],[184,2],[184,2],[244,4],[244,6],[244,5],[244,5],[244,7],[244,6],[244,1],[245,5],[245,5],[245,5],[245,5],[245,5],[245,6],[245,6],[245,6],[245,6],[245,6],[245,6],[245,6],[245,6],[245,6],[245,7],[245,7],[245,7],[245,7],[245,1],[246,6],[246,7],[246,6],[246,7],[246,6],[246,7],[243,0],[243,1],[249,2],[249,3],[250,4],[250,3],[250,4],[250,3],[250,4],[250,3],[250,3],[250,2],[115,1],[115,1],[251,1],[251,1],[251,1],[189,1],[189,2],[189,1],[124,1],[124,2],[124,2],[252,3],[252,4],[123,1],[123,4],[123,4],[123,4],[123,4],[123,2],[123,2],[253,3],[253,4],[253,4],[253,4],[120,3],[120,3],[111,1],[111,1],[126,1],[126,2],[126,2],[254,2],[254,3],[254,4],[241,1],[241,2],[241,2],[255,4],[255,3],[255,4],[256,1],[256,1],[208,1],[208,1],[208,1],[121,1],[121,1],[257,2],[257,3],[257,4],[247,1],[247,1],[247,2],[247,2],[248,3],[248,3],[248,3],[248,4],[62,1],[62,1],[74,3],[74,2],[258,1],[258,2],[167,2],[167,3],[165,1],[165,1],[166,1],[70,1],[70,1],[70,2],[57,1],[57,2],[58,1],[58,2],[259,2],[259,1],[261,2],[261,1],[262,2],[262,1],[263,2],[54,1],[54,2],[54,2],[170,1],[170,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return '"' + this.$ + '"';
break;
case 2: return '"' + this.$ + '"';
break;
case 3: return '"' + this.$ + '"';
break;
case 4: return '"' + this.$ + '"';
break;
case 5: return '"' + this.$ + '"';
break;
case 121:this.$ = "[" + this.$[$$[$0-3]-2] + ", '&', " + this.$[$$[$0-3]] +"]";
break;
case 123:this.$ = "[" + this.$[$$[$0-3]-2] + ", '^', " + this.$[$$[$0-3]] +"]";
break;
case 132: return this.$;
break;
case 133: return this.$;
break;
case 134: return this.$;
break;
case 135: return this.$;
break;
case 136: return this.$;
break;
case 137: return this.$;
break;
case 138: return this.$;
break;
case 139: return this.$;
break;
case 140: return this.$;
break;
case 141: return this.$;
break;
case 142: return this.$;
break;
case 143: return this.$;
break;
case 144: return this.$;
break;
case 209: this.$ = "'const'";
break;
case 210: this.$ = "'volatile'";
break;
case 243: this.$ = "'extern'";
break;
case 244: this.$ = "'typedef'";
break;
case 245: this.$ = "'static'";
break;
case 246: this.$ = "'auto'";
break;
case 247: this.$ = "'register'";
break;
case 248: this.$ = "'friend'";
break;
case 249: this.$ = "'overload'";
break;
case 250: this.$ = "'inline'";
break;
case 251: this.$ = "'virtual'";
break;
case 252:this.$ = "'int'";
break;
case 253:this.$ = "'char'";
break;
case 254:this.$ = "'short'";
break;
case 255:this.$ = "'long'";
break;
case 256:this.$ = "'float'";
break;
case 257:this.$ = "'double'";
break;
case 258:this.$ = "'signed'";
break;
case 259:this.$ = "'unsigned'";
break;
case 260:this.$ = "'void'";
break;
case 285:this.$ = "'struct'";
break;
case 286:this.$ = "'union'";
break;
case 287:this.$ = "'class'";
break;
}
},
table: [{3:1,4:[1,2],5:[1,3],6:[1,4],7:[1,5],8:[1,6]},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4]},{1:[2,5]}],
defaultActions: {2:[2,1],3:[2,2],4:[2,3],5:[2,4],6:[2,5]},
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
case 0: 
break;
case 1: 
break;
case 2: return(parser.symbols_.LE_AUTO); 
break;
case 3: return(parser.symbols_.LE_BREAK); 
break;
case 4: return(parser.symbols_.LE_CASE); 
break;
case 5: return(parser.symbols_.LE_CHAR); 
break;
case 6: return(parser.symbols_.LE_CONST); 
break;
case 7: return(parser.symbols_.LE_CONTINUE); 
break;
case 8: return(parser.symbols_.LE_DEFAULT); 
break;
case 9: return("define"); 
break;
case 10: return("defined"); 
break;
case 11: return(parser.symbols_.LE_DO); 
break;
case 12: return(parser.symbols_.LE_DOUBLE); 
break;
case 13: return("elif"); 
break;
case 14: return(parser.symbols_.LE_ELSE); 
break;
case 15: return("endif"); 
break;
case 16: return(parser.symbols_.LE_ERROR); 
break;
case 17: return(parser.symbols_.LE_ENUM); 
break;
case 18: return(parser.symbols_.LE_EXTERN); 
break;
case 19: return(parser.symbols_.LE_FLOAT); 
break;
case 20: return(parser.symbols_.LE_FOR); 
break;
case 21: return(parser.symbols_.LE_GOTO); 
break;
case 22: return(parser.symbols_.LE_IF); 
break;
case 23: return("ifdef"); 
break;
case 24: return("ifndef"); 
break;
case 25: return(parser.symbols_.LE_INCLUDE); 
break;
case 26: return(parser.symbols_.LE_INT); 
break;
case 27: return("line"); 
break;
case 28: return(parser.symbols_.LE_LONG); 
break;
case 29: return(parser.symbols_.LE_BOOL); 
break;
case 30: return("pragma"); 
break;
case 31: return(parser.symbols_.LE_REGISTER); 
break;
case 32: return(parser.symbols_.LE_RETURN); 
break;
case 33: return(parser.symbols_.LE_SHORT); 
break;
case 34: return(parser.symbols_.LE_SIGNED); 
break;
case 35: return(parser.symbols_.LE_SIZEOF); 
break;
case 36: return(parser.symbols_.LE_STATIC); 
break;
case 37: return(parser.symbols_.LE_STRUCT); 
break;
case 38: return(parser.symbols_.LE_SWITCH); 
break;
case 39: return(parser.symbols_.LE_TYPEDEF); 
break;
case 40: return("undef"); 
break;
case 41: return(parser.symbols_.LE_UNION); 
break;
case 42: return(parser.symbols_.LE_UNSIGNED); 
break;
case 43: return(parser.symbols_.LE_VOID); 
break;
case 44: return(parser.symbols_.LE_VOLATILE); 
break;
case 45: return(parser.symbols_.LE_WHILE); 
break;
case 46: return(parser.symbols_.LE_TIME_T); 
break;
case 47: return(parser.symbols_.LE_SIZE_T); 
break;
case 48: return(parser.symbols_.LE_CLASS); 
break;
case 49: return(parser.symbols_.LE_NAMESPACE); 
break;
case 50: return(parser.symbols_.LE_DELETE); 
break;
case 51: return(parser.symbols_.LE_FRIEND); 
break;
case 52: return(parser.symbols_.LE_INLINE); 
break;
case 53: return(parser.symbols_.LE_NEW); 
break;
case 54: return(parser.symbols_.LE_OPERATOR); 
break;
case 55: return(parser.symbols_.LE_OVERLOAD); 
break;
case 56: return(parser.symbols_.LE_PROTECTED); 
break;
case 57: return(parser.symbols_.LE_PRIVATE); 
break;
case 58: return(parser.symbols_.LE_PUBLIC); 
break;
case 59: return(parser.symbols_.LE_THIS); 
break;
case 60: return(parser.symbols_.LE_VIRTUAL); 
break;
case 61: return(parser.symbols_.LE_TEMPLATE); 
break;
case 62: return(parser.symbols_.LE_TYPENAME); 
break;
case 63: return(parser.symbols_.LE_DYNAMIC_CAST); 
break;
case 64: return(parser.symbols_.LE_STATIC_CAST); 
break;
case 65: return(parser.symbols_.LE_CONST_CAST); 
break;
case 66: return(parser.symbols_.LE_REINTERPRET_CAST); 
break;
case 67: return(parser.symbols_.LE_USING); 
break;
case 68: return(parser.symbols_.LE_THROW); 
break;
case 69: return(parser.symbols_.LE_CATCH); 
break;
case 70: return(parser.symbols_.LE_IDENTIFIER); 
break;
case 71: return parser.symbols_.LE_INTEGERconstant; 
break;
case 72: return parser.symbols_.LE_OCTALconstant; 
break;
case 73: return parser.symbols_.LE_HEXconstant; 
break;
case 74: return parser.symbols_.LE_FLOATINGconstant; 
break;
case 75: return parser.symbols_.LE_CHARACTERconstant; 
break;
case 76: return parser.symbols_.LE_STRINGliteral; 
break;
case 77: return(parser.symbols_.LE_ELLIPSIS); 
break;
case 78: return(parser.symbols_.LE_RSassign); 
break;
case 79: return(parser.symbols_.LE_LSassign); 
break;
case 80: return(parser.symbols_.LE_PLUSassign); 
break;
case 81: return(parser.symbols_.LE_MINUSassign); 
break;
case 82: return(parser.symbols_.LE_MULTassign); 
break;
case 83: return(parser.symbols_.LE_DIVassign); 
break;
case 84: return(parser.symbols_.LE_MODassign); 
break;
case 85: return(parser.symbols_.LE_ANDassign); 
break;
case 86: return(parser.symbols_.LE_ERassign); 
break;
case 87: return(parser.symbols_.LE_ORassign); 
break;
case 88: return(parser.symbols_.LE_RS); 
break;
case 89: return(parser.symbols_.LE_LS); 
break;
case 90: return(parser.symbols_.LE_ICR); 
break;
case 91: return(parser.symbols_.LE_DECR); 
break;
case 92: return(parser.symbols_.LE_ARROW); 
break;
case 93: return(parser.symbols_.LE_ARROWstar); 
break;
case 94: return(parser.symbols_.LE_ANDAND); 
break;
case 95: return(parser.symbols_.LE_OROR); 
break;
case 96: return(parser.symbols_.LE_LE); 
break;
case 97: return(parser.symbols_.LE_GE); 
break;
case 98: return(parser.symbols_.LE_EQ); 
break;
case 99: return(parser.symbols_.LE_NE); 
break;
case 100: return(parser.symbols_.LE_DOTstar); 
break;
case 101: return(parser.symbols_.LE_CLCL); 
break;
case 102: return(';'); 
break;
case 103: return(parser.symbols_.LE_LC); 
break;
case 104: return(parser.symbols_.LE_RC); 
break;
case 105: return(','); 
break;
case 106: return(':'); 
break;
case 107: return('='); 
break;
case 108: return('('); 
break;
case 109: return(')'); 
break;
case 110: return('['); 
break;
case 111: return(']'); 
break;
case 112: return('.'); 
break;
case 113: return('&'); 
break;
case 114: return('!'); 
break;
case 115: return('~'); 
break;
case 116: return('-'); 
break;
case 117: return('+'); 
break;
case 118: return('*'); 
break;
case 119: return('/'); 
break;
case 120: return('%'); 
break;
case 121: return('<'); 
break;
case 122: return('>'); 
break;
case 123: return("^"); 
break;
case 124: return('|'); 
break;
case 125: return('?'); 
break;
case 126: this.begin("PREPR"); 
break;
case 127: this.begin("INITIAL"); 
break;
case 128: this.begin("WRAP_PREP"); 
break;
case 129: 
break;
case 130: this.begin("PREPR"); 
break;
case 131: 
break;
case 132: 
break;
case 133: 
break;
case 134: 
break;
}
};
lexer.rules = [/^(?:{SLASH}{SLASH}.*)/,/^(?:{SLASH}{STAR}({SLASH}|(.|([\n]))|{STAR}+(.|([\n])))*?{STAR}+{SLASH})/,/^(?:auto\b)/,/^(?:break\b)/,/^(?:case\b)/,/^(?:char\b)/,/^(?:const\b)/,/^(?:continue\b)/,/^(?:default\b)/,/^(?:define\b)/,/^(?:defined\b)/,/^(?:do\b)/,/^(?:double\b)/,/^(?:elif\b)/,/^(?:else\b)/,/^(?:endif\b)/,/^(?:error\b)/,/^(?:enum\b)/,/^(?:extern\b)/,/^(?:float\b)/,/^(?:for\b)/,/^(?:goto\b)/,/^(?:if\b)/,/^(?:ifdef\b)/,/^(?:ifndef\b)/,/^(?:include\b)/,/^(?:int\b)/,/^(?:line\b)/,/^(?:long\b)/,/^(?:bool\b)/,/^(?:pragma\b)/,/^(?:register\b)/,/^(?:return\b)/,/^(?:short\b)/,/^(?:signed\b)/,/^(?:sizeof\b)/,/^(?:static\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:typedef\b)/,/^(?:undef\b)/,/^(?:union\b)/,/^(?:unsigned\b)/,/^(?:void\b)/,/^(?:volatile\b)/,/^(?:while\b)/,/^(?:time_t\b)/,/^(?:size_t\b)/,/^(?:class\b)/,/^(?:namespace\b)/,/^(?:delete\b)/,/^(?:friend\b)/,/^(?:inline\b)/,/^(?:new\b)/,/^(?:operator\b)/,/^(?:overload\b)/,/^(?:protected\b)/,/^(?:private\b)/,/^(?:public\b)/,/^(?:this\b)/,/^(?:virtual\b)/,/^(?:template\b)/,/^(?:typename\b)/,/^(?:dynamic_cast\b)/,/^(?:static_cast\b)/,/^(?:const_cast\b)/,/^(?:reinterpret_cast\b)/,/^(?:using\b)/,/^(?:throw\b)/,/^(?:catch\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:([1-9][0-9]*(([uU]?[lL]?)|([lL][uU]))))/,/^(?:(0[0-7]*(([uU]?[lL]?)|([lL][uU]))))/,/^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]?)|([lL][uU]))))/,/^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/,/^(?:L?[']([^'\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))+['])/,/^(?:L?["]([^"\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))*["])/,/^(?:\.\.\.)/,/^(?:>>=)/,/^(?:<<=)/,/^(?:\+=)/,/^(?:-=)/,/^(?:\*=)/,/^(?:\/=)/,/^(?:%=)/,/^(?:&=)/,/^(?:\^=)/,/^(?:\|=)/,/^(?:>>)/,/^(?:<<)/,/^(?:\+\+)/,/^(?:--)/,/^(?:->)/,/^(?:->\*)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:!=)/,/^(?:\.\*)/,/^(?:::)/,/^(?:;)/,/^(?:\{)/,/^(?:\})/,/^(?:,)/,/^(?::)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\.)/,/^(?:&)/,/^(?:!)/,/^(?:~)/,/^(?:-)/,/^(?:\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:<)/,/^(?:>)/,/^(?:\^)/,/^(?:\|)/,/^(?:\?)/,/^(?:^#)/,/^(?:\n\b)/,/^(?:\\)/,/^(?:define\b)/,/^(?:\n\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:.)/,/^(?:.)/];
lexer.conditions = {"WRAP_PREP":{"rules":[130,131,133],"inclusive":false},"PREPR":{"rules":[127,128,129,132,134],"inclusive":false},"typedef_mode":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126],"inclusive":true},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126],"inclusive":true}};
return lexer;})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = cpp;
exports.Parser = cpp.Parser;
exports.parse = function () { return cpp.parse.apply(cpp, arguments); };
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