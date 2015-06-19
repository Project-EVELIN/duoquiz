define(['jquery', 'app/duo_quiz', 'app/util'], function($, duoquiz, util) {
  var mod = {};

  mod.getQuestions = function(set) {
    var q1 = new duoquiz.SimpledefinitionQuestion('Deklarieren Sie eine %desc% und initialisieren Sie diese mit dem Wert <code>%value%</code> in einer Zeile.',
      '[["int"],[".","=", "%value%"],";"]', 'Auf zur nächsten!', function(result) {
        // generate random values here
        var dataDescribtion = [
          'vorzeichenbehaftete Ganzzahlvariable',
          'Zeichenvariable',
          'Fließkommavariable',
        ];
        var dataSolutions = [
          [
            '["int",".","=", "%value%",";"]',
            '["char",".","=", "\'%value%\'",";"]',
            '["short",".","=", "%value%",";"]',
            '["long",".","=", "%value%",";"]',
            '["signed", "char",".","=", "%value%",";"]',
            '["signed", "int",".","=", "%value%",";"]',
            '["signed", "short",".","=", "%value%",";"]',
            '["signed", "long",".","=", "%value%",";"]',
            '["long", "int",".","=", "%value%",";"]',
            '["long", "long",".","=", "%value%",";"]',
            '["long", "long", "int", ".","=", "%value%",";"]'
          ],
          [
            '["char",".","=", "\'%value%\'",";"]',
            '["signed", "char",".","=", "\'%value%\'",";"]',
            '["unsigned", "char",".","=", "\'%value%\'",";"]'
          ],
          [
            '["float",".","=", "%value%f",";"]',
            '["double",".","=", "%value%",";"]',
            '["long", "double",".","=", "%value%",";"]'
          ],
        ];
        var dataValues = [
          Math.floor(Math.random() * (1000 - 0)) + 0,
          String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97), (Math.random() * (1000 - 0) + 0).toFixed(2),
          Math.floor(Math.random() * (1000 - 0)) + 0,
        ];

        var rand = Math.floor(Math.random() * (dataDescribtion.length - 0)) + 0;

        return function(result) {
          var solutions = [];
          var i;

          for (i = 0; i < dataSolutions[rand].length; i++) {
            solutions.push(dataSolutions[rand][i].replace(/%value%/g, dataValues[rand]));
          }

          return {
            question: result.question.replace(/%value%/g, dataValues[rand]).replace(/%desc%/g, dataDescribtion[rand]),
            solution: solutions,
            passtext: result.passtext,
          };
        }(result);
      }, false);
    q1.setName("quiz1_q1");

    var q2 = new duoquiz.SimpledefinitionQuestion('Deklarieren Sie ein %type%-Array der Größe <code>%size%</code>.',
      '["%type%",".", "[", "%size%", "]",";"]',
      'Sehr gut!',
      function(result) {
        // generate random values here
        var dataTypes = ['int', 'short', 'float', 'double', 'char'];
        var dataType = dataTypes[Math.floor(Math.random() * (dataTypes.length - 0)) + 0];
        var size = Math.floor(Math.random() * (100 - 2)) + 2;

        return function(result) {
          var solutions = [];
          var i;

          for (i = 0; i < result.solution.length; i++) {
            solutions.push(result.solution[i].replace(/%type%/g, dataType).replace(/%size%/g, size));
          }

          return {
            question: result.question.replace(/%type%/g, dataType.toLowerCase()).replace(/%size%/g, size),
            solution: solutions,
            passtext: result.passtext,
          };
        }(result);
      }, false);
    q2.setName("quiz1_q2");

    var q3 = new duoquiz.SingleChoiceQuestion('Ist folgender Code-Schnippsel korrekt? <code>int[] b = {1,2,89,4};</code>',
      'Nein', ['Ja', 'Nein'],
      'Genau, denn die eckigen Klammern müssen hinter das <code>b</code>.'
    );
    q3.setName("quiz1_q3");

    /*
     * Implizite Array-Initialisierung
     */
    var q4 = new duoquiz.MultipleChoiceQuestion('Welche der folgenden Aussagen sind korrekt?', [true, false, true], ['Die Größes eines Arrays kann nicht dynamisch geändert werden.', 'Die Größe eines Arrays wird erst zur Laufzeit ermittelt.', 'Die Arraygröße kann durch implizite Initialisierung angegeben werden.'],
      'Richtig, denn die Größe wird zur Compilezeit bestimmt.'
    );
    q4.setName("quiz1_q4");

    /*
     * Array-Deklaration unterschiedlicher Typen und Größe.
     */
    var q5_question = 'Baue aus den Code-Fragmenten eine valide Zeile Code, die ein Array der Größe %size% deklariert.';
    var q5_solution = '["%type%","arr", "[", "%size%", "]",";"]';
    var q5_fragments = [']', ';', '%type% ', '%size%', '[', '(', 'arr ', ' = '];
    var q5_passtext = 'Perfekt, du hast auf alles geachtet.';
    var q5_generator = function(result) {
      var types = ["short", "int", "char"];
      var type = types[Math.floor(Math.random() * types.length)];
      var size = Math.floor(Math.random() * (127 - 2)) + 2;
      var frags = result.fragments.slice();
      frags[2] = frags[2].replace(/%type%/g, type.toLowerCase());
      frags[3] = frags[3].replace(/%size%/g, size);
      var sol = [];

      var i;

      for (i = 0; i < result.solution.length; i++) {
        sol.push(result.solution[i].replace(/%type%/g, type).replace(/%size%/g, size));
      }

      return {
        'question': result.question.replace(/%size%/g, size),
        'solution': sol,
        'passtext': result.passtext,
        'fragments': frags,
      };
    };
    var q5 = new duoquiz.OrderQuestion(q5_question, q5_solution, q5_fragments, q5_passtext, q5_generator);
    q5.setName("quiz1_q5");

    /*
     * Ausgabe mit printf
     */
    var q6 = new duoquiz.SimpledefinitionQuestion('Geben Sie die Ganzzahlvariable <code>%variable_name%</code> auf der Konsole aus. (printf)', ['["printf","(","\\"%d\\"",",","%variable_name%",")",";"]', '["printf","(","\\"%i\\"",",","%variable_name%",")",";"]'],
      'So funktioniert es.',
      function(result) {
        // generate random values here
        var variable_names = ['computed_result', 'index', 'sum', 'i'];
        var variable_name = variable_names[util.getRandomInt(0, variable_names.length-1)];
        return function(result) {
          var solutions = [];
          var i;

          for (i = 0; i < result.solution.length; i++) {
            solutions.push(result.solution[i].replace(/%variable_name%/g, variable_name));
          }

          return {
            question: result.question.replace(/%variable_name%/g, variable_name),
            solution: solutions,
            passtext: result.passtext,
          };
        }(result);
      }, false);
    q6.setRequiresMain(true);
    q6.setName("quiz1_q6");

    /*
     * GetInt-Question, randomizes the basis to read in.
     */
    var q7_question = "Schreiben Sie eine Anweisung (eine Zeile), die eine Integervariable im Oktal-Format von der Konsole einliest und in einer Variablen speichert (ip_input.h).";
    var q7_solutions = [];
    q7_solutions.push(["int",".","=","GetInt","(","\'o\'",")",";"]);

    /* Example usage of a Reference, we use the name of the Variable of the first line on after the type. */
    q7_solutions.push(["int",".",";",new duoquiz.Reference(1, "eingabe"),"=","GetInt","(","\'o\'",")",";"]);

    var q7_passtext = "Super, immer daran denken, <code>GetInt</code> die Basis mitzugeben.";
    var q7_generator = function(result) {
      // generate random values here
      var formats = ['Dezimal', 'Oktal', 'Hexadezimal'];
      var format_specifiers = ['d', 'o', 'h'];
      var randomIndex = Math.floor(Math.random() * formats.length);
      var format = formats[randomIndex];
      var format_specifier = format_specifiers[randomIndex];
      var solutions = [];
      var i;
      var question = result.question;

      solutions.push(result.solution[0]);
      solutions.push(result.solution[1]);

      return {
        question: question,
        solution: solutions,
        passtext: result.passtext,
      };
    };

    var q7 = new duoquiz.SimpledefinitionQuestion(q7_question, q7_solutions, q7_passtext, null);
    q7.setRequiresMain(true);
    q7.setName("quiz1_q7");

    var q8_question = 'Schreibe Anweisungen, die den Benutzer eine Zahl Integerzahl im Dezimalformat erst einlesen und dann auf der Konsole oktal ausgeben lassen.';
    var q8_solutions = [
      ["int", ".", "=", "GetInt", "(", "\'d\'", ")", ";", "printf", "(", "\"%o\"", ",", new duoquiz.Reference(2, "eingabe"), ")", ";"]
    ];

    var q8_passtext = 'You got it.';

    var q8 = new duoquiz.SimpledefinitionQuestion(q8_question, q8_solutions, q8_passtext, null);
    q8.setRequiresMain(true);
    q8.setMinimumLines(2);
    q8.setName("quiz1_q8");

    var q9_question = 'Schreiben Sie eine Präprozessoranweisung, die ein Symbol namens <code>SIZE</code> mit dem Wert <em>%value%</em> definiert.';
    var q9_solutions = [
      ["#define", "SIZE", "%value%"]
    ];
    var q9_passtext = 'So ist es richtig - ohne abschließendes Semikolon!';
    var q9_generator = function(result) {
      var value = Math.floor(Math.random() * 20);
      var solutions = [];
      $.extend(true, solutions, result.solution);
      solutions[0][2] = solutions[0][2].replace(/%value%/g, value);

      return {
        question: result.question.replace(/%value%/g, value),
        solution: solutions,
        passtext: result.passtext,
      };
    };

    var q9 = new duoquiz.SimpledefinitionQuestion(q9_question, q9_solutions, q9_passtext, q9_generator);
    q9.addPreprocessHook(function(str) {
      return str + "\n";
    }); // appends a newline
    q9.setName("quiz2_q9");

    /* cast question */
    var q10_question = 'Folgende Berechnung leidet unter der Ganzzahldivision: <code>double amp = 1 / (n * %value%);</code> (n vom Typ <em>int</em>).<br>Ändern Sie die Anweisung mittels Typecast so ab, dass dieses Problem nicht mehr auftritt.';
    var q10_solutions = [
      ["double", "amp", "=", "1", "/", "(", "(", "double", ")", "n", "*", "%value%", ")", ";"],
      ["double", "amp", "=", "1", "/", "(", "(", "float", ")", "n", "*", "%value%", ")", ";"],
      ["double", "amp", "=", "1", "/", "(", "float", ")", "(", "n", "*", "%value%", ")", ";"],
      ["double", "amp", "=", "1", "/", "(", "double", ")", "(", "n", "*", "%value%", ")", ";"],
      ["double", "amp", "=", "1", "/", "(", "float", ")", "n", "/", "%value%", ";"],
      ["double", "amp", "=", "1", "/", "(", "double", ")", "n", "/", "%value%", ";"],
    ];
    var q10_passtext = 'Pew, pew! Mit <code>(double)</code> geht das!<br><small>Ok <em>float<em> würde auch gehen.<small>';
    var q10_generator = function(result) {
      var value = util.getRandomInt(2, 15);
      var solutions = [];
      $.extend(true, solutions, result.solution);
      solutions[0][11] = solutions[0][11] = value;
      solutions[1][11] = solutions[1][11] = value;
      solutions[2][10] = solutions[2][10] = value;
      solutions[3][10] = solutions[3][10] = value;

      return {
        question: result.question.replace(/%value%/g, value),
        solution: solutions,
        passtext: result.passtext,
      };
    };

    var q10 = new duoquiz.SimpledefinitionQuestion(q10_question, q10_solutions, q10_passtext, q10_generator);
    q10.setName("quiz2_q10");

    /* math func question */
    var q11_question = 'Schreibe eine Anweisung, welche den %func% von %value% berechnet und in einer <code>double</code> Variable speichert.';
    var q11_solutions = [
      ["double", ".", "=", "%func%", "(", "%value%", ")", ";"],
    ];
    var q11_passtext = 'Einfach oder?';
    var q11_generator = function(result) {
      var funcs = ["sin", "cos", "tan", "acos", "atan"];
      var funcIndex = util.getRandomInt(0, funcs.length - 1);
      var func = funcs[funcIndex];
      var value = util.getRandomArbitrary(0.01, 0.99).toFixed(3);
      var solutions = [];
      $.extend(true, solutions, result.solution);
      solutions[0][3] = solutions[0][3] = func;
      solutions[0][5] = solutions[0][5] = value;

      return {
        question: result.question.replace(/%value%/g, value).replace(/%func%/g, func),
        solution: solutions,
        passtext: result.passtext,
      };
    };

    var q11 = new duoquiz.SimpledefinitionQuestion(q11_question, q11_solutions, q11_passtext, q11_generator);
    q11.setRequiresMain(true);
    q11.setName("quiz2_q11");

    /*
     * Simplest calculation with precedence
     */
  var q12_question = 'Baue aus den Fragmenten die kürzeste mögliche Berechnung der folgenden Formel: <span class="tex" data-expr="\\displaystyle \\frac{2}{ln(4*k+(n*m))}"></span><br>Sie müssen keine Typcasts oder andere Veränderungen vornehmen. <br><br><small>Vergessen Sie nicht das Ergebnis einer Variablen zu zuweisen.</small>';
    var q12_solution = [["double","result","=","2","/","log","(","4","*","k","+","n","*","m",")",";"]];
    var q12_fragments = ["double"," result","=","2","/","log","(","4","*","k","+","m","*","n",")",";", "(", ")", "(", ")"];
    var q12_passtext = 'Die Funktion klammert schon alles!. War ja nicht so schwer.';

    var q12 = new duoquiz.OrderQuestion(q12_question, q12_solution, q12_fragments, q12_passtext, null);
    q12.setPostCreateHook(function(){
        var tex = document.getElementsByClassName("tex");
        Array.prototype.forEach.call(tex, function(el) {
            katex.render(el.getAttribute("data-expr"), el);
        });
    });
    q12.setName("quiz2_q12");
    /* end quiz 2 */

    /* quiz3 questions */
    var q13_question = 'Sie sollen eine numerische Benutzereingabe auf ihre Gültigkeit überprüfen. Schreiben Sie eine Anweisung <small>(eine Zeile)</small>, welche die Variable <code>zahl</code> auf folgenden Bereich überprüft: <em>W = [0, 180)</em>' +
    '<br>Speichern Sie das Ergebnis in einer Ganzzahlvariable (int) ab.';
    var q13_solutions = [
      ["int",".","=","zahl",">=","0","&&","zahl","<","180",";"],
      ["int",".","=","!","(","zahl","<","0","||","zahl",">=","180",")",";"],
      ["int",".","=","!","(","zahl","<","0",")","&&","!","(","zahl",">=","180",")",";"],
    ];

    var q13_passtext = 'Es gibt mehrere Möglichkeiten - das war eine davon!';

    var q13 = new duoquiz.SimpledefinitionQuestion(q13_question, q13_solutions, q13_passtext, null);
    q13.setName("quiz3_q13");

    var q14_question = 'Schreiben Sie eine <code>for</code> Schleife, welche die Zahlen von <em>1 - 9</em> ausgibt. <br><small>(Nutzen Sie die Zählvariable <code>i</code> (bereits deklariert) für die Ausgabe [<code>%d</code>])</small>';
    var q14_solutions = [
      ["for","i","=","1",";","i","<","10",";","i","++",")","{","printf","(","\"%d\"",",","i",")",";","}"],
      ["for","i","=","1",";","i","<=","9",";","i","++",")","{","printf","(","\"%d\"",",","i",")",";","}"],
      ["for","i","=","1",";","i","<","10",";","i","++",")","printf","(","\"%d\"",",","i",")",";"],
      ["for","i","=","1",";","i","<=","9",";","i","++",")","printf","(","\"%d\"",",","i",")",";"],
    ];
    var q14_passtext = 'Ausgezeichnet - wir fangen diesmal bei 1 an und laufen bis 9 (inkl.) oder 10 (exkl.)';
    var q14 = new duoquiz.SimpledefinitionQuestion(q14_question, q14_solutions, q14_passtext, null);
    q14.setName('quiz3_q14');
    q14.setMinimumLines(3);
    q14.setRequiresMain(true);
    /* end quiz3 */

    switch (set) {
      case "quiz1":
        return [q7, q6, q5, q1, q2, q3, q4];
      case "quiz2":
        return [q11, q12, q10, q9];
      case "quiz3":
        return [q13, q14];
      default:
        throw new Error("No question set available for this particular quiz: " + set);
    }
  };

  return mod;
});