/* Jison generated parser */
var ebnf = (function(){
var parser = {trace: function trace() {
        Jison.print.apply(null, arguments);
    },
yy: {},
symbols_: {"error":2,"integer_literal":3,"DECIMAL_LITERAL":4,"OCTAL_LITERAL":5,"HEXADECIMAL_LITERAL":6,"floating_literal":7,"FLOATING_LITERAL":8,"string_literal":9,"STRING_LITERAL":10,"character_literal":11,"CHARCATER_LITERAL":12,"boolean_literal":13,"TRUE":14,"FALSE":15,"pointer_literal":16,"NULLPTR":17,"translation_unit":18,"translation_unit_option0":19,"primary_expression":20,"literal":21,"THIS":22,"(":23,"expression":24,")":25,"id_expression":26,"lambda_expression":27,"unqualified_id":28,"qualified_id":29,"identifier":30,"operator_function_id":31,"conversion_function_id":32,"literal_operator_id":33,"~":34,"class_name":35,"decltype_specifier":36,"template_id":37,"qualified_id_option0":38,"nested_name_specifier":39,"qualified_id_option1":40,"CLCL":41,"type_name":42,"namespace_name":43,"nested_name_specifier_option0":44,"simple_template_id":45,"lambda_introducer":46,"lambda_expression_option0":47,"compound_statement":48,"[":49,"lambda_introducer_option0":50,"]":51,"lambda_capture":52,"capture_default":53,"capture_list":54,",":55,"&":56,"=":57,"capture":58,"capture_list_option0":59,"capture_list_option1":60,"lambda_declarator":61,"parameter_declaration_cause":62,"lambda_declarator_option0":63,"lambda_declarator_option1":64,"lambda_declarator_option2":65,"lambda_declarator_option3":66,"IDENTIFIER":67,"delcaration_seq":68,"TEMPLATE":69,"ELLIPSIS":70,"MUTABLE":71,"exception_specification":72,"attribute_specifier_seq":73,"trailing_return_type":74,"$accept":0,"$end":1},
terminals_: {2:"error",4:"DECIMAL_LITERAL",5:"OCTAL_LITERAL",6:"HEXADECIMAL_LITERAL",8:"FLOATING_LITERAL",10:"STRING_LITERAL",12:"CHARCATER_LITERAL",14:"TRUE",15:"FALSE",17:"NULLPTR",21:"literal",22:"THIS",23:"(",24:"expression",25:")",31:"operator_function_id",32:"conversion_function_id",33:"literal_operator_id",34:"~",35:"class_name",36:"decltype_specifier",37:"template_id",41:"CLCL",42:"type_name",43:"namespace_name",45:"simple_template_id",48:"compound_statement",49:"[",51:"]",55:",",56:"&",57:"=",62:"parameter_declaration_cause",67:"IDENTIFIER",68:"delcaration_seq",69:"TEMPLATE",70:"ELLIPSIS",71:"MUTABLE",72:"exception_specification",73:"attribute_specifier_seq",74:"trailing_return_type"},
productions_: [0,[3,1],[3,1],[3,1],[7,1],[9,1],[11,1],[13,1],[13,1],[16,1],[18,1],[20,1],[20,1],[20,3],[20,1],[20,1],[26,1],[26,1],[28,1],[28,1],[28,1],[28,1],[28,2],[28,2],[28,1],[29,4],[29,2],[29,2],[29,2],[29,2],[39,2],[39,2],[39,2],[39,3],[39,4],[27,3],[46,3],[52,1],[52,1],[52,3],[53,1],[53,1],[54,2],[54,3],[58,1],[58,2],[58,1],[61,7],[30,1],[19,0],[19,1],[38,0],[38,1],[40,0],[40,1],[44,0],[44,1],[47,0],[47,1],[50,0],[50,1],[59,0],[59,1],[60,0],[60,1],[63,0],[63,1],[64,0],[64,1],[65,0],[65,1],[66,0],[66,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
}
},
table: [{1:[2,49],18:1,19:2,68:[1,3]},{1:[3]},{1:[2,10]},{1:[2,50]}],
defaultActions: {2:[2,10],3:[2,50]},
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
case 0:return "{"
break;
case 1:return "}"
break;
case 2:return "["
break;
case 3:return "]"
break;
case 4:return "#"
break;
case 5:return "##"
break;
case 6:return "AND"
break;
case 7:return "|"
break;
case 8:return "OR"
break;
case 9:return "^"
break;
case 10:return "~"
break;
case 11:return "&"
break;
case 12:return "ANDassign"
break;
case 13:return "ORassign"
break;
case 14:return "XORassign"
break;
case 15:return "!"
break;
case 16:return "NE"
break;
case 17:return("IDENTIFIER")
break;
case 18:return "ALIGNAS"
break;
case 19:return "alignof"
break;
case 20:return "ASM"
break;
case 21:return "AUTO"
break;
case 22:return "BOOL"
break;
case 23:return "BREAK"
break;
case 24:return "CASE"
break;
case 25:return "CATCH"
break;
case 26:return "CHAR"
break;
case 27:return "CHAR16_T"
break;
case 28:return "CHAR32_T"
break;
case 29:return "CLASS"
break;
case 30:return "CONST"
break;
case 31:return "CONSTEXPR"
break;
case 32:return "CONST_CAST"
break;
case 33:return "CONTINUE"
break;
case 34:return "DECLTYPE"
break;
case 35:return "DEFAULT"
break;
case 36:return "DELETE"
break;
case 37:return "DO"
break;
case 38:return "DOUBLE"
break;
case 39:return "DYNAMIC_CAST"
break;
case 40:return "ELSE"
break;
case 41:return "ENUM"
break;
case 42:return "EXPLICIT"
break;
case 43:return "EXPORT"
break;
case 44:return "EXTERN"
break;
case 45:return "FALSE"
break;
case 46:return "FLOAT"
break;
case 47:return "FOR"
break;
case 48:return "FRIEND"
break;
case 49:return "GOTO"
break;
case 50:return "IF"
break;
case 51:return "INLINE"
break;
case 52:return "INT"
break;
case 53:return "LONG"
break;
case 54:return "MUTABLE"
break;
case 55:return "NAMESPACE"
break;
case 56:return "NEW"
break;
case 57:return "NOEXCEPT"
break;
case 58:return "NULLPTR"
break;
case 59:return "OPERATOR"
break;
case 60:return "PRIVATE"
break;
case 61:return "PROTECTED"
break;
case 62:return "PUBLIC"
break;
case 63:return "REGISTER"
break;
case 64:return "REINTERPRET_CAST"
break;
case 65:return "RETURN"
break;
case 66:return "SHORT"
break;
case 67:return "SIGNED"
break;
case 68:return "SIZEOF"
break;
case 69:return "STATIC"
break;
case 70:return "STATIC_ASSERT"
break;
case 71:return "STATIC_CAST"
break;
case 72:return "STRUCT"
break;
case 73:return "SWITCH"
break;
case 74:return "TEMPLATE"
break;
case 75:return "THIS"
break;
case 76:return "THREAD_LOCAL"
break;
case 77:return "THROW"
break;
case 78:return "TRUE"
break;
case 79:return "TRY"
break;
case 80:return "TYPEDEF"
break;
case 81:return "TYPEID"
break;
case 82:return "TYPENAME"
break;
case 83:return "UNION"
break;
case 84:return "UNSIGNED"
break;
case 85:return "USING"
break;
case 86:return "VIRTUAL"
break;
case 87:return "VOID"
break;
case 88:return "VOLATILE"
break;
case 89:return "WCHAR_T"
break;
case 90:return "WHILE"
break;
case 91:return "DECIMAL_LITERAL"
break;
case 92:return "OCTAL_LITERAL"
break;
case 93:return "HEXADECIMAL_LITERAL"
break;
case 94:return "FLOATING_LITERAL"
break;
case 95:return "CHARACTER_LITERAL"
break;
case 96:return "STRING_LITERAL"
break;
case 97: this.begin("INITIAL"); return "PP_NEWLINE";
break;
case 98:this.begin("WRAP_PREP")
break;
case 99: 
break;
case 100:return "PP_LPAREN"
break;
case 101:return "PP_QUOTE"
break;
case 102:return "PP_INCLUDE"
break;
case 103:return "PP_UNDEF"
break;
case 104:return "PP_LINE"
break;
case 105:return "PP_PRAGMA"
break;
case 106:return "PP_DEFINE"
break;
case 107:return "PP_DEFINED"
break;
case 108:return "PP_IFDEF"
break;
case 109:return "PP_IFNDEF"
break;
case 110:return "PP_IF"
break;
case 111:return "PP_ELSE"
break;
case 112:return "PP_ENDIF"
break;
case 113:return "PP_ELIF"
break;
case 114:return "IDENTIFIER"
break;
case 115:return "DECIMAL_LITERAL"
break;
case 116:return "OCTAL_LITERAL"
break;
case 117:return "HEXADECIMAL_LITERAL"
break;
case 118:return "FLOATING_LITERAL"
break;
case 119:return "CHARCATER_LITERAL"
break;
case 120:return "STRING_LITERAL"
break;
case 121:return "PP_QCHARSEQUENCE"
break;
case 122:return "PP_HCHARSEQUENCE"
break;
case 123:return "PP_ANYCHAR"
break;
case 124:this.begin("PREPR")
break;
case 125:return "IDENTIFIER"
break;
case 126:this.begin("INITIAL")
break;
case 127:return("")
break;
case 128:this.begin("INITIAL")
break;
case 129:return("")
break;
}
};
lexer.rules = [/^(?:<%)/,/^(?:%>)/,/^(?:<:)/,/^(?::>)/,/^(?:%:)/,/^(?:%:%:)/,/^(?:and\b)/,/^(?:bitor\b)/,/^(?:or\b)/,/^(?:xor\b)/,/^(?:compl\b)/,/^(?:bitand\b)/,/^(?:and_eq\b)/,/^(?:or_eq\b)/,/^(?:xor_eq\b)/,/^(?:not\b)/,/^(?:not_eq\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:alignas\b)/,/^(?:alignof\b)/,/^(?:asm\b)/,/^(?:auto\b)/,/^(?:bool\b)/,/^(?:break\b)/,/^(?:case\b)/,/^(?:catch\b)/,/^(?:char\b)/,/^(?:char16_t\b)/,/^(?:char32_t\b)/,/^(?:class\b)/,/^(?:const\b)/,/^(?:constexpr\b)/,/^(?:const_cast\b)/,/^(?:continue\b)/,/^(?:decltype\b)/,/^(?:default\b)/,/^(?:delete\b)/,/^(?:do\b)/,/^(?:double\b)/,/^(?:dynamic_cast\b)/,/^(?:else\b)/,/^(?:enum\b)/,/^(?:explicit\b)/,/^(?:export\b)/,/^(?:extern\b)/,/^(?:false\b)/,/^(?:float\b)/,/^(?:for\b)/,/^(?:friend\b)/,/^(?:goto\b)/,/^(?:if\b)/,/^(?:inline\b)/,/^(?:int\b)/,/^(?:long\b)/,/^(?:mutable\b)/,/^(?:namespace\b)/,/^(?:new\b)/,/^(?:noexcept\b)/,/^(?:nullptr\b)/,/^(?:operator\b)/,/^(?:private\b)/,/^(?:protected\b)/,/^(?:public\b)/,/^(?:register\b)/,/^(?:reinterpret_cast\b)/,/^(?:return\b)/,/^(?:short\b)/,/^(?:signed\b)/,/^(?:sizeof\b)/,/^(?:static\b)/,/^(?:static_assert\b)/,/^(?:static_cast\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:template\b)/,/^(?:this\b)/,/^(?:thread_local\b)/,/^(?:throw\b)/,/^(?:true\b)/,/^(?:try\b)/,/^(?:typedef\b)/,/^(?:typeid\b)/,/^(?:typename\b)/,/^(?:union\b)/,/^(?:unsigned\b)/,/^(?:using\b)/,/^(?:virtual\b)/,/^(?:void\b)/,/^(?:volatile\b)/,/^(?:wchar_t\b)/,/^(?:while\b)/,/^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/,/^(?:L?['](uUL)?([^'\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))+['])/,/^(?:L?["]([^"\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))*["])/,/^(?:([\n]))/,/^(?:\\)/,/^(?:(([ ]|([\011]))))/,/^(?:(([ ]|([\011])))*\()/,/^(?:["])/,/^(?:include\b)/,/^(?:undef\b)/,/^(?:line\b)/,/^(?:pragma\b)/,/^(?:define\b)/,/^(?:defined\b)/,/^(?:ifdef\b)/,/^(?:ifndef\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:endif\b)/,/^(?:elif\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/,/^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/,/^(?:L?[']([^'\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))+['])/,/^(?:L?["]([^"\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))*["])/,/^(?:["][^\n]*["])/,/^(?:<[^\n]*>)/,/^(?:.)/,/^(?:\n\b)/,/^(?:([a-zA-Z_][0-9a-zA-Z_]*))/,/^(?:\n\b)/,/^(?:.)/,/^(?:\*\/)/,/^(?:.)/];
lexer.conditions = {"C_COMMENT":{"rules":[128,129],"inclusive":false},"CPP_COMMENT":{"rules":[126,127],"inclusive":false},"WRAP_PREP":{"rules":[124,125],"inclusive":false},"PREPR":{"rules":[97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123],"inclusive":false},"typedef_mode":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"inclusive":true},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96],"inclusive":true}};
return lexer;})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = ebnf;
exports.Parser = ebnf.Parser;
exports.parse = function () { return ebnf.parse.apply(ebnf, arguments); };
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