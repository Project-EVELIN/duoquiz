var cpp0x = (function() {
	/* Jison generated lexer */
	var lexer = (function() {
		var lexer = ({
			EOF: 1,
			parseError: function parseError(str, hash) {
				if (this.yy.parser) {
					this.yy.parser.parseError(str, hash);
				} else {
					throw new Error(str);
				}
			},
			setInput: function(input) {
				this._input = input;
				this._more = this._less = this.done = false;
				this.yylineno = this.yyleng = 0;
				this.yytext = this.matched = this.match = '';
				this.conditionStack = ['INITIAL'];
				this.yylloc = {
					first_line: 1,
					first_column: 0,
					last_line: 1,
					last_column: 0
				};
				if (this.options.ranges) this.yylloc.range = [0, 0];
				this.offset = 0;
				return this;
			},
			input: function() {
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
			unput: function(ch) {
				var len = ch.length;
				var lines = ch.split(/(?:\r\n?|\n)/g);

				this._input = ch + this._input;
				this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
				//this.yyleng -= len;
				this.offset -= len;
				var oldLines = this.match.split(/(?:\r\n?|\n)/g);
				this.match = this.match.substr(0, this.match.length - 1);
				this.matched = this.matched.substr(0, this.matched.length - 1);

				if (lines.length - 1) this.yylineno -= lines.length - 1;
				var r = this.yylloc.range;

				this.yylloc = {
					first_line: this.yylloc.first_line,
					last_line: this.yylineno + 1,
					first_column: this.yylloc.first_column,
					last_column: lines ?
						(lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
				};

				if (this.options.ranges) {
					this.yylloc.range = [r[0], r[0] + this.yyleng - len];
				}
				return this;
			},
			more: function() {
				this._more = true;
				return this;
			},
			less: function(n) {
				this.unput(this.match.slice(n));
			},
			pastInput: function() {
				var past = this.matched.substr(0, this.matched.length - this.match.length);
				return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
			},
			upcomingInput: function() {
				var next = this.match;
				if (next.length < 20) {
					next += this._input.substr(0, 20 - next.length);
				}
				return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
			},
			showPosition: function() {
				var pre = this.pastInput();
				var c = new Array(pre.length + 1).join("-");
				return pre + this.upcomingInput() + "\n" + c + "^";
			},
			next: function() {
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
				for (var i = 0; i < rules.length; i++) {
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
					this.yylloc = {
						first_line: this.yylloc.last_line,
						last_line: this.yylineno + 1,
						first_column: this.yylloc.last_column,
						last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
					};
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
					token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
					if (this.done && this._input) this.done = false;
					if (token) return token;
					else return;
				}
				if (this._input === "") {
					return this.EOF;
				} else {
					return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
						text: "",
						token: null,
						line: this.yylineno
					});
				}
			},
			lex: function lex() {
				var r = this.next();
				if (typeof r !== 'undefined') {
					return r;
				} else {
					return this.lex();
				}
			},
			begin: function begin(condition) {
				this.conditionStack.push(condition);
			},
			popState: function popState() {
				return this.conditionStack.pop();
			},
			_currentRules: function _currentRules() {
				return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
			},
			topState: function() {
				return this.conditionStack[this.conditionStack.length - 2];
			},
			pushState: function begin(condition) {
				this.begin(condition);
			}
		});
		lexer.options = {
			"flex": true,
			"case-insensitive": true
		};
		lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

			var YYSTATE = YY_START;
			switch ($avoiding_name_collisions) {
				case 0:
					this.begin("C_COMMENT");
					break;
				case 1:
					this.begin("CPP_COMMENT");
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				case 5:
					return "{"
					break;
				case 6:
					return "}"
					break;
				case 7:
					return "["
					break;
				case 8:
					return "]"
					break;
				case 9:
					return "#"
					break;
				case 10:
					return "##"
					break;
				case 11:
					return "AND"
					break;
				case 12:
					return "|"
					break;
				case 13:
					return "OR"
					break;
				case 14:
					return "^"
					break;
				case 15:
					return "~"
					break;
				case 16:
					return "&"
					break;
				case 17:
					return "ANDassign"
					break;
				case 18:
					return "ORassign"
					break;
				case 19:
					return "XORassign"
					break;
				case 20:
					return "!"
					break;
				case 21:
					return "NE"
					break;
				case 22:
					return "ALIGNAS"
					break;
				case 23:
					return "ALIGNOF"
					break;
				case 24:
					return "ASM"
					break;
				case 25:
					return "AUTO"
					break;
				case 26:
					return "BOOL"
					break;
				case 27:
					return "BREAK"
					break;
				case 28:
					return "CASE"
					break;
				case 29:
					return "CATCH"
					break;
				case 30:
					return "CHAR"
					break;
				case 31:
					return "CHAR16_T"
					break;
				case 32:
					return "CHAR32_T"
					break;
				case 33:
					return "CLASS"
					break;
				case 34:
					return "CONST"
					break;
				case 35:
					return "CONSTEXPR"
					break;
				case 36:
					return "CONST_CAST"
					break;
				case 37:
					return "CONTINUE"
					break;
				case 38:
					return "DECLTYPE"
					break;
				case 39:
					return "DEFAULT"
					break;
				case 40:
					return "DELETE"
					break;
				case 41:
					return "DO"
					break;
				case 42:
					return "DOUBLE"
					break;
				case 43:
					return "DYNAMIC_CAST"
					break;
				case 44:
					return "ELSE"
					break;
				case 45:
					return "ENUM"
					break;
				case 46:
					return "EXPLICIT"
					break;
				case 47:
					return "EXPORT"
					break;
				case 48:
					return "EXTERN"
					break;
				case 49:
					return "FALSE"
					break;
				case 50:
					return "FINAL"
					break;
				case 51:
					return "FLOAT"
					break;
				case 52:
					return "FOR"
					break;
				case 53:
					return "FRIEND"
					break;
				case 54:
					return "GOTO"
					break;
				case 55:
					return "IF"
					break;
				case 56:
					return "INLINE"
					break;
				case 57:
					return "INT"
					break;
				case 58:
					return "LONG"
					break;
				case 59:
					return "MUTABLE"
					break;
				case 60:
					return "NAMESPACE"
					break;
				case 61:
					return "NEW"
					break;
				case 62:
					return "NOEXCEPT"
					break;
				case 63:
					return "NULLPTR"
					break;
				case 64:
					return "OPERATOR"
					break;
				case 65:
					return "OVERRIDE"
					break;
				case 66:
					return "PRIVATE"
					break;
				case 67:
					return "PROTECTED"
					break;
				case 68:
					return "PUBLIC"
					break;
				case 69:
					return "REGISTER"
					break;
				case 70:
					return "REINTERPRET_CAST"
					break;
				case 71:
					return "RETURN"
					break;
				case 72:
					return "SHORT"
					break;
				case 73:
					return "SIGNED"
					break;
				case 74:
					return "SIZEOF"
					break;
				case 75:
					return "STATIC"
					break;
				case 76:
					return "STATIC_ASSERT"
					break;
				case 77:
					return "STATIC_CAST"
					break;
				case 78:
					return "STRUCT"
					break;
				case 79:
					return "SWITCH"
					break;
				case 80:
					return "TEMPLATE"
					break;
				case 81:
					return "THIS"
					break;
				case 82:
					return "THREAD_LOCAL"
					break;
				case 83:
					return "THROW"
					break;
				case 84:
					return "TRUE"
					break;
				case 85:
					return "TRY"
					break;
				case 86:
					return "TYPEDEF"
					break;
				case 87:
					return "TYPEID"
					break;
				case 88:
					return "TYPENAME"
					break;
				case 89:
					return "UNION"
					break;
				case 90:
					return "UNSIGNED"
					break;
				case 91:
					return "USING"
					break;
				case 92:
					return "VIRTUAL"
					break;
				case 93:
					return "VOID"
					break;
				case 94:
					return "VOLATILE"
					break;
				case 95:
					return "WCHAR_T"
					break;
				case 96:
					return "WHILE"
					break;
				case 97:
					return "IDENTIFIER"
					break;
				case 98:
					return "DECIMAL_LITERAL"
					break;
				case 99:
					return "OCTAL_LITERAL"
					break;
				case 100:
					return "HEXADECIMAL_LITERAL"
					break;
				case 101:
					return "FLOATING_LITERAL"
					break;
				case 102:
					return "CHARACTER_LITERAL"
					break;
				case 103:
					return "STRING_LITERAL"
					break;
				case 104:
					return 93
					break;
				case 105:
					return 94
					break;
				case 106:
					return 95
					break;
				case 107:
					return 96
					break;
				case 108:
					return 98
					break;
				case 109:
					return 99
					break;
				case 110:
					return 100
					break;
				case 111:
					return 101
					break;
				case 112:
					return 102
					break;
				case 113:
					return 103
					break;
				case 114:
					return 104
					break;
				case 115:
					return 105
					break;
				case 116:
					return 106
					break;
				case 117:
					return 107
					break;
				case 118:
					return 108
					break;
				case 119:
					return 109
					break;
				case 120:
					return 110
					break;
				case 121:
					return 111
					break;
				case 122:
					return 112
					break;
				case 123:
					return 113
					break;
				case 124:
					return 114
					break;
				case 125:
					return 115
					break;
				case 126:
					return 116
					break;
				case 127:
					return 117
					break;
				case 128:
					return 117
					break;
				case 129:
					return 168
					break;
				case 130:
					return 119
					break;
				case 131:
					return 120
					break;
				case 132:
					return 245
					break;
				case 133:
					return 246
					break;
				case 134:
					return 242
					break;
				case 135:
					return 245
					break;
				case 136:
					return 244
					break;
				case 137:
					return 250
					break;
				case 138:
					return 249
					break;
				case 139:
					return 251
					break;
				case 140:
					return 121
					break;
				case 141:
					return 122
					break;
				case 142:
					return 248
					break;
				case 143:
					return 247
					break;
				case 144:
					return 123
					break;
				case 145:
					return 124
					break;
				case 146:
					return 125
					break;
				case 147:
					return 126
					break;
				case 148:
					return 127
					break;
				case 149:
					return 128
					break;
				case 150:
					return 129
					break;
				case 151:
					return 130
					break;
				case 152:
					return 131
					break;
				case 153:
					return 132
					break;
				case 154:
					return 133
					break;
				case 155:
					return 477
					break;
				case 156:
					this.begin("PREPR");
					return 97;
					break;
				case 157:
					this.begin("INITIAL");
					return "PP_NEWLINE";
					break;
				case 158:
					this.begin("WRAP_PREP")
					break;
				case 159:
					break;
				case 160:
					return "PP_LPAREN"
					break;
				case 161:
					return "PP_QUOTE"
					break;
				case 162:
					return "PP_INCLUDE"
					break;
				case 163:
					return "PP_UNDEF"
					break;
				case 164:
					return "PP_LINE"
					break;
				case 165:
					return "PP_PRAGMA"
					break;
				case 166:
					return "PP_DEFINE"
					break;
				case 167:
					return "PP_DEFINED"
					break;
				case 168:
					return "PP_IFDEF"
					break;
				case 169:
					return "PP_IFNDEF"
					break;
				case 170:
					return "PP_IF"
					break;
				case 171:
					return "PP_ELSE"
					break;
				case 172:
					return "PP_ENDIF"
					break;
				case 173:
					return "PP_ELIF"
					break;
				case 174:
					return "PP_ERROR"
					break;
				case 175:
					return "IDENTIFIER"
					break;
				case 176:
					return "DECIMAL_LITERAL"
					break;
				case 177:
					return "OCTAL_LITERAL"
					break;
				case 178:
					return "HEXADECIMAL_LITERAL"
					break;
				case 179:
					return "FLOATING_LITERAL"
					break;
				case 180:
					return "CHARACTER_LITERAL"
					break;
				case 181:
					return "STRING_LITERAL"
					break;
				case 182:
					return "PP_QCHARSEQUENCE"
					break;
				case 183:
					return "PP_HCHARSEQUENCE"
					break;
				case 184:
					return "PP_ANYCHAR"
					break;
				case 185:
					this.begin("PREPR")
					break;
				case 186:
					return "IDENTIFIER"
					break;
				case 187:
					this.begin("INITIAL")
					break;
				case 188:
					return ("")
					break;
				case 189:
					this.begin("INITIAL")
					break;
				case 190:
					return ("")
					break;
				case 191:
					console.log(yy_.yytext);
					break;
			}
		};
		lexer.rules = [/^(?:\/\*)/i, /^(?:\/\/)/i, /^(?:([ ]|([\011]))+)/i, /^(?:(([\013])|([\015])|([\014]))+)/i, /^(?:(([ ]|([\011]))|([\013])|([\015])|([\014]))*\\n)/i, /^(?:<%)/i, /^(?:%>)/i, /^(?:<:)/i, /^(?::>)/i, /^(?:%:)/i, /^(?:%:%:)/i, /^(?:and)/i, /^(?:bitor)/i, /^(?:or)/i, /^(?:xor)/i, /^(?:compl)/i, /^(?:bitand)/i, /^(?:and_eq)/i, /^(?:or_eq)/i, /^(?:xor_eq)/i, /^(?:not)/i, /^(?:not_eq)/i, /^(?:alignas)/i, /^(?:alignof)/i, /^(?:asm)/i, /^(?:auto)/i, /^(?:bool)/i, /^(?:break)/i, /^(?:case)/i, /^(?:catch)/i, /^(?:char)/i, /^(?:char16_t)/i, /^(?:char32_t)/i, /^(?:class)/i, /^(?:const)/i, /^(?:constexpr)/i, /^(?:const_cast)/i, /^(?:continue)/i, /^(?:decltype)/i, /^(?:default)/i, /^(?:delete)/i, /^(?:do)/i, /^(?:double)/i, /^(?:dynamic_cast)/i, /^(?:else)/i, /^(?:enum)/i, /^(?:explicit)/i, /^(?:export)/i, /^(?:extern)/i, /^(?:false)/i, /^(?:final)/i, /^(?:float)/i, /^(?:for)/i, /^(?:friend)/i, /^(?:goto)/i, /^(?:if)/i, /^(?:inline)/i, /^(?:int)/i, /^(?:long)/i, /^(?:mutable)/i, /^(?:namespace)/i, /^(?:new)/i, /^(?:noexcept)/i, /^(?:nullptr)/i, /^(?:operator)/i, /^(?:override)/i, /^(?:private)/i, /^(?:protected)/i, /^(?:public)/i, /^(?:register)/i, /^(?:reinterpret_cast)/i, /^(?:return)/i, /^(?:short)/i, /^(?:signed)/i, /^(?:sizeof)/i, /^(?:static)/i, /^(?:static_assert)/i, /^(?:static_cast)/i, /^(?:struct)/i, /^(?:switch)/i, /^(?:template)/i, /^(?:this)/i, /^(?:thread_local)/i, /^(?:throw)/i, /^(?:true)/i, /^(?:try)/i, /^(?:typedef)/i, /^(?:typeid)/i, /^(?:typename)/i, /^(?:union)/i, /^(?:unsigned)/i, /^(?:using)/i, /^(?:virtual)/i, /^(?:void)/i, /^(?:volatile)/i, /^(?:wchar_t)/i, /^(?:while)/i, /^(?:([a-zA-Z_][0-9a-zA-Z_]*))/i, /^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/i, /^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/i, /^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/i, /^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/i, /^(?:((u|U|L))?(('))(\\.|[^\\(('))])+((')))/i, /^(?:((u|u8|U|L))?"(\\.|[^\\"])*")/i, /^(?:\{)/i, /^(?:\})/i, /^(?:\[)/i, /^(?:\])/i, /^(?:##)/i, /^(?:\()/i, /^(?:\))/i, /^(?:;)/i, /^(?::)/i, /^(?:\.\.\.)/i, /^(?:\?)/i, /^(?:::)/i, /^(?:\.)/i, /^(?:\.\*)/i, /^(?:\+)/i, /^(?:-)/i, /^(?:\*)/i, /^(?:\/)/i, /^(?:%)/i, /^(?:\^)/i, /^(?:&)/i, /^(?:\|)/i, /^(?:~)/i, /^(?:!)/i, /^(?:!)/i, /^(?:=)/i, /^(?:<)/i, /^(?:>)/i, /^(?:\+=)/i, /^(?:-=)/i, /^(?:\*=)/i, /^(?:\/=)/i, /^(?:%=)/i, /^(?:\^=)/i, /^(?:&=)/i, /^(?:\|=)/i, /^(?:<<)/i, /^(?:>>)/i, /^(?:<<=)/i, /^(?:>>=)/i, /^(?:==)/i, /^(?:!=)/i, /^(?:<=)/i, /^(?:>=)/i, /^(?:&&)/i, /^(?:\|\|)/i, /^(?:\+\+)/i, /^(?:--)/i, /^(?:,)/i, /^(?:->\*)/i, /^(?:->)/i, /^(?:0)/i, /^(?:#)/i, /^(?:([\n]))/i, /^(?:\\)/i, /^(?:(([ ]|([\011]))))/i, /^(?:(([ ]|([\011])))*\()/i, /^(?:["])/i, /^(?:include)/i, /^(?:undef)/i, /^(?:line)/i, /^(?:pragma)/i, /^(?:define)/i, /^(?:defined)/i, /^(?:ifdef)/i, /^(?:ifndef)/i, /^(?:if)/i, /^(?:else)/i, /^(?:endif)/i, /^(?:elif)/i, /^(?:error)/i, /^(?:([a-zA-Z_][0-9a-zA-Z_]*))/i, /^(?:([1-9][0-9]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/i, /^(?:(0[0-7]*(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/i, /^(?:(0[xX][0-9a-fA-F]+(([uU]?[lL]{0,2})|([lL]{1,2}[uU]))))/i, /^(?:((((([0-9]*\.[0-9]+)|([0-9]+\.))([eE][-+]?[0-9]+)?)|([0-9]+([eE][-+]?[0-9]+)))[FfLl]?))/i, /^(?:L?[']([^'\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))+['])/i, /^(?:L?["]([^"\\\n]|([\\](([abfnrtv'"?\\])|([0-7]{1,3})|(x[0-9a-fA-F]+))))*["])/i, /^(?:["][^\n]*["])/i, /^(?:<[^\n]*>)/i, /^(?:.)/i, /^(?:\n)/i, /^(?:([a-zA-Z_][0-9a-zA-Z_]*))/i, /^(?:\n)/i, /^(?:.)/i, /^(?:\*\/)/i, /^(?:.)/i, /^(?:.)/i];
		lexer.conditions = {
			"C_COMMENT": {
				"rules": [189, 190],
				"inclusive": false
			},
			"CPP_COMMENT": {
				"rules": [187, 188],
				"inclusive": false
			},
			"WRAP_PREP": {
				"rules": [185, 186],
				"inclusive": false
			},
			"PREPR": {
				"rules": [157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184],
				"inclusive": false
			},
			"INITIAL": {
				"rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 191],
				"inclusive": true
			}
		};
		return lexer;
	})();
	var mod = {};
	mod.yy = {};
	mod.terminals_ = {2:"error",4:"DECIMAL_LITERAL",5:"OCTAL_LITERAL",6:"HEXADECIMAL_LITERAL",8:"FLOATING_LITERAL",10:"STRING_LITERAL",12:"CHARACTER_LITERAL",14:"TRUE",15:"FALSE",17:"NULLPTR",19:"IDENTIFIER",21:"ALIGNAS",22:"ALIGNOF",23:"ASM",24:"AUTO",25:"BOOL",26:"BREAK",27:"CASE",28:"CATCH",29:"CHAR",30:"CHAR16_T",31:"CHAR32_T",32:"CLASS",33:"CONST",34:"CONSTEXPR",35:"CONST_CAST",36:"CONTINUE",37:"DECLTYPE",38:"DEFAULT",39:"DELETE",40:"DO",41:"DOUBLE",42:"DYNAMIC_CAST",43:"ELSE",44:"ENUM",45:"EXPLICIT",46:"EXPORT",47:"EXTERN",48:"FLOAT",49:"FOR",50:"FRIEND",51:"GOTO",52:"IF",53:"INLINE",54:"INT",55:"LONG",56:"MUTABLE",57:"NAMESPACE",58:"NEW",59:"NOEXCEPT",60:"OPERATOR",61:"PRIVATE",62:"PROTECTED",63:"PUBLIC",64:"REGISTER",65:"REINTERPRET_CAST",66:"RETURN",67:"SHORT",68:"SIGNED",69:"SIZEOF",70:"STATIC",71:"STATIC_ASSERT",72:"STATIC_CAST",73:"STRUCT",74:"SWITCH",75:"TEMPLATE",76:"THIS",77:"THREAD_LOCAL",78:"THROW",79:"TRY",80:"TYPEDEF",81:"TYPEID",82:"TYPENAME",83:"UNION",84:"UNSIGNED",85:"USING",86:"VIRTUAL",87:"VOID",88:"VOLATILE",89:"WCHAR_T",90:"WHILE",93:"{",94:"}",95:"[",96:"]",97:"#",98:"##",99:"(",100:")",101:";",102:":",103:"ELLIPSIS",104:"?",105:"CLCL",106:".",107:"DOTSTAR",108:"+",109:"-",110:"*",111:"/",112:"%",113:"^",114:"&",115:"|",116:"~",117:"!",119:"<",120:">",121:"LS",122:"RS",123:"EQ",124:"NE",125:"LE",126:"GE",127:"ANDAND",128:"OROR",129:"INC",130:"DEC",131:",",132:"ARROWstar",133:"ARROW",137:"PP_ANYCHAR",138:"PP_HCHARSEQUENCE",139:"PP_QCHARSEQUENCE",149:"conversion_function_id",168:"=",173:"parameter_declaration_cause",226:"delete",242:"MULTassign",243:"DIVassign",244:"MODassign",245:"ADDassign",246:"SUBassign",247:"RSassign",248:"LSassign",249:"ANDassign",250:"ERassign",251:"ORassign",295:"opague_enum_declaration",341:"namespace_name_alias",367:"alignment_expression",426:"\"",453:"FINAL",475:"OVERRIDE",477:"0",503:"overloadable_operator",558:"PP_IF",559:"PP_NEWLINE",561:"PP_IFDEF",563:"PP_IFNDEF",567:"PP_ELIF",570:"PP_ELSE",572:"PP_ENDIF",573:"PP_INCLUDE",575:"PP_DEFINE",577:"PP_LPAREN",580:"PP_UNDEF",581:"PP_LINE",582:"PP_ERROR",584:"PP_PRAGMA",588:"expresion_list"},
	mod.lexer = lexer;
	return mod;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
	exports.lexer = cpp0x;
}