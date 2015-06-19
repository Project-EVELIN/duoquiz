define(function(require) {
  // load dependencies
  var $ = require('jquery');
  var ansic = require('app/ansic');
  var CodeMirror = require('cm/lib/codemirror');
  var util = require('app/util');
  var sortable = require('sortable');
  require('cm/mode/clike/clike');
  require('cm/addon/hint/show-hint');
  require('cm/addon/fold/brace-fold');

  var duoquiz = duoquiz || {};

  duoquiz.lang = {};
  duoquiz.lang.de = {
    restart: 'Neustart',
    check: 'Überprüfen',
    next: 'Weiter',
    expected: 'Erwartet',
    actual: 'Tatsächlich',
    notcorrecttext: 'Probiere es noch einmal!',
    emptyanswer: 'Du musst etwas eingeben bzw. auswählen!',
    notcorrect: 'Leider falsch!',
    correct: 'Gelöst',
    gameover: 'Du hast keine Leben mehr.',
    finished: 'Alle Frage gelöst und dabei %errors% Fehler gemacht.',
    orderquestionhelp: 'Mit einem Klick auf eines der Code-Fragmente fügen Sie dieses oben in die Antwortleiste ein. Ein Klick auf einen Baustein in der Antwortleiste löscht diesen wieder.',
    noneedformain: 'Es ist nicht nötig, die main-Methode hinzuzufügen. Es reichen meist eine oder mehrere Anweisungen aus!',
  };

  duoquiz.lang.en = {
    restart: 'Restart',
    check: 'Check',
    next: 'Next',
    expected: 'Expected',
    actual: 'Actual',
    notcorrecttext: 'No, try again!',
    emptyanswer: 'No answer given!',
    notcorrect: 'Incorrect answer!',
    correct: 'You solved it!',
    gameover: 'No lives left.',
    finished: 'You passed the quiz - %errors% mistake(s).',
    orderquestionhelp: 'Click on a fragment in order to add it to the answer. To remove a fragment from the answer click again on it.',
    noneedformain: 'You do not need to provide a main method body. A bunch of statements will do it.',
  };

  duoquiz.minAnswerLength = 4;

  duoquiz.lang.str = function(key) {
    return duoquiz.lang[duoquiz.lang.lang][key];
  };

  duoquiz.uniqueID = 111; // start for unique ids for the quiz items

  /*
    Constructor for a duo quiz. Takes an array with questions.
  */
  duoquiz.Game = function(questions, lives, lang, questionblock, answerblock,
    checkbtn, progesslist) {
    if (!questions /*|| questions.length < 2*/) {
      throw new Error('Cannot init duoquiz with no questions or only one.');
    }

    duoquiz.lang.lang = lang || 'de'; // default

    // blocks
    this.questionblock = questionblock || $('#duo-question-block');
    this.answerblock = answerblock || $('#duo-answer-block');
    this.gamebutton = checkbtn || $('#btn-duo-check');
    this.progesslist = progesslist || $('#duoquiz-progress');
    this.uniqueID = ++duoquiz.uniqueID; // get unique id

    // generator questions for this quiz
    this.questions = questions;
    this.count = this.questions.length;
    this.generateQuestions();

    this.currentQuestion = 0;
    this.lives = lives || 3; // default
    this.userLives = lives;
    this.lastAnswers = []; // save last answers to compare

    this.initProgress(); // progressbar
    this.changestate(duoquiz.Game.NEXT); // start with first question
  };

  duoquiz.Game.prototype.setName = function(str) {
    if (!str || str === "" || str.length === 0) {
      throw new Error("Invalid name for duoquiz.Game! -> " + str);
    }

    this.name = str;
  };

  /*
    Call each questions internal generate()
  */
  duoquiz.Game.prototype.generateQuestions = function() {
    var i;

    for (i = 0; i < this.questions.length; i++) {
      this.questions[i].generate();
    }
  };

  /*
   * Initializes the button callback and its text:
   *  - on click event
   *  - keybind to CTRL-ENTER
   */
  duoquiz.Game.prototype.initBindings = function(text, callback) {
    var that = this;
    this.gamebutton.text(text)
      .off('click')
      .on('click', callback);

    $(window)
      .off('keypress')
      .on('keypress', function(event) {
        if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
          that.gamebutton.click(); // trigger click event
        }
      });
  };

  // possible states of the game
  duoquiz.Game.NEXT = "NEXT";
  duoquiz.Game.FINISHED = "FINISHED";
  duoquiz.Game.GAMEOVER = "GAMEOVER";
  duoquiz.Game.RESET = "RESET";
  duoquiz.Game.INITQUESTION = "INITQUESTION";
  duoquiz.Game.CORRECT = "CORRECT";
  duoquiz.Game.INCORRECT = "INCORRECT";

  /*
   * Small state machine for managing the gameplay, mostly take care of the correct button binding
   * The game logic and states are defined here:
   *  - each state binds its own button logic (we have only one button)
   *  - call the methods for the appropriate state
   */
  duoquiz.Game.prototype.changestate = function(state) {
    var that = this;

    switch (state) {
      case duoquiz.Game.NEXT:
        this.next();
        break;
      case duoquiz.Game.FINISHED:
        this.finished();
        this.initBindings(duoquiz.lang.str('restart'), function() {
          that.changestate(duoquiz.Game.RESET);
        });
        break;
      case duoquiz.Game.GAMEOVER:
        this.gameover();
        this.initBindings(duoquiz.lang.str('restart'), function() {
          that.changestate(duoquiz.Game.RESET);
        });
        break;
      case duoquiz.Game.RESET:
        this.reset();
        break;
      case duoquiz.Game.CORRECT:
        this.initBindings(duoquiz.lang.str('next'), function() {
          that.currentQuestion++; // to next
          that.changestate(duoquiz.Game.NEXT);
        });
        break;
      case duoquiz.Game.INCORRECT:
        this.reducelives();
        break;
      case duoquiz.Game.INITQUESTION:
        this.initquestion();
        this.initBindings(duoquiz.lang.str('check'), function() {
          that.check();
        });
        break;
      default:
        throw new Error('unknown state in changestate()');
    }
  };

  /*
   * Creates the progress bar
   * The progess bar size is depended on the question count
   */
  duoquiz.Game.prototype.initProgress = function() {
    var i;
    this.progesslist.empty();

    // append list items for each questions
    for (i = 0; i < this.count; i++) {
      this.progesslist.append($('<li id="progessitem_' + this.uniqueID + '_' + i +
        '"><div class="inner"></div></li>'));
    }
  };

  // Set the progesss item of the current question to green
  duoquiz.Game.prototype.updateProgess = function() {
    $('#progessitem_' + this.uniqueID + '_' + this.currentQuestion)
      .addClass('active');
  };

  /*
   * Next (called after correct solution and from next button event):
   *  - check if we completed all questions -> FINISHED
   *  - otherwise initialize next question --> INITQUESTION
   */
  duoquiz.Game.prototype.next = function() {
    if (this.currentQuestion >= this.count) {
      this.changestate(duoquiz.Game.FINISHED);
    } else {
      this.clearanswerresult();

      // add next question and bind events correctly to button
      this.changestate(duoquiz.Game.INITQUESTION);
    }
  };

  /*
   * Inits the current question:
   *  - empties question and answer block
   *  - call questions create method
   *  - now game state changes, next change is triggered by the user answer
   */
  duoquiz.Game.prototype.initquestion = function() {
    // dipose old question dom
    this.questionblock.empty();
    this.answerblock.empty();
    this.questions[this.currentQuestion].create(this.questionblock, this.answerblock);
  };

  /*
   * Checks the user's answers. The actual check and its implementation is delegated
   * to the current question (type). The check returns and result object, that contains
   * a "correct" flag and additionally the passtext or error message.
   *
   * The game state changes are called in the correct() or incorrect() methods.
   */
  duoquiz.Game.prototype.check = function() {
    this.clearanswerresult();
    var question = this.questions[this.currentQuestion];
    var answer = question.getValue(); // get valuee
    this.lastAnswers.push(answer);

    if (!answer || answer.length === 0) {
      this.incorrect(duoquiz.lang.str('emptyanswer'), false);
    } else {
      var result = question.check(answer);
      if (result.check) {
        this.correct(result.text);
      } else {
        this.incorrect(result.text, true);
      }
    }
  };

  duoquiz.Game.prototype.correct = function(msg) {
    this.lastAnswers = [];
    $('#answer-result-div')
      .addClass('correct');
    this.answerresult(msg, duoquiz.lang.str('correct'));
    $('.answericon.correct')
      .removeClass('hidden');

    this.updateProgess();

    // try to log
    var question = this.questions[this.currentQuestion];
    var questionText = question.generated.question;
    var solutions = question.generated.solution;

    duoquiz.Game.logAnswer(this, questionText, question.getValue(), solutions, true);

    // bind action to next
    this.changestate(duoquiz.Game.CORRECT);
  };

  /*
   * Logging method for quiz answers, logs the question, answer, and isCorrect flag
   * to the server. Currently the solutions array is left out, for lower data footprint.
   *
   * adds the required CSRF token to the request, data is sent as JSON
   *
   */
  duoquiz.Game.logAnswer = function(game, question, answer, solution, isCorrect) {
    if (!answer || answer === "" || answer.length < duoquiz.minAnswerLength) {
      // fail silently
      return;
    }

    var logObject = {
      "quiz": this.name || "unnamed quiz",
      "question": question,
      "answer": answer,
      "isCorrect": isCorrect,
      "questionName": game.questions[game.currentQuestion].name || "none",
    };

    console.log(logObject);
  };

  duoquiz.Game.prototype.incorrect = function(msg, lostlife) {
    // check for last 3 inputs and compare
    var same = false;
    if (this.lastAnswers.length > 2) {
      same = this.lastAnswers.slice(-1).every(function(element, index, array) {
        return this.lastAnswers[0] === element;
      }, this);
      msg = "Don't repeat yourself..";
    }

    if (!same) {
      // try to log
      var question = this.questions[this.currentQuestion];
      var questionText = question.generated.question;
      var solutions = question.generated.solution;

      duoquiz.Game.logAnswer(this, questionText, question.getValue(), solutions, false);
    }

    $('#answer-result-div')
      .addClass('incorrect');
    this.answerresult(msg, duoquiz.lang.str('notcorrect'));
    $('span.glyphicon.answericon.incorrect')
      .removeClass('hidden');

    // distinguish between real mistakes or none
    if (lostlife) {
      this.changestate(duoquiz.Game.INCORRECT);
    }
  };

  /*
   * This functions appends the passtext or error message with title to the result div.
   *
   */
  duoquiz.Game.prototype.answerresult = function(msg, title) {
    var resultdiv = $('#answer-result');
    var p = $('<p></p>');
    var h4 = $('<h4>' + title + '</h4>');
    var span = $('<span class="answerresult-text">' + msg + '</span>');
    p.append(h4);
    p.append(span);
    resultdiv.append(p);
  };

  /*
   * Reduces the current life count (interally) and updates the view.
   * Changes the game state to GAMEOVER when the life count is 0.
   *
   * This function relies on jQuery, though the game supports variable lives,
   * tough they are not generated automatically (see issuse #39)
   */
  duoquiz.Game.prototype.reducelives = function() {
    this.userLives--;
    $('.life:not(.lostlife)')
      .last()
      .addClass('lostlife');

    if (this.userLives === 0) {
      this.changestate(duoquiz.Game.GAMEOVER);
    }
  };

  /*
   * Game over state tasks:
   *  - clear the question
   *  - clear the user answer
   *  - do not clear the answer feedback, otherwise user does not know, what whats wrong
   *  - append game over message to question block
   */
  duoquiz.Game.prototype.gameover = function() {
    this.lastAnswers = [];
    var p = $(
      '<p class="gameover fadeInUp"><strong>GAME OVER</strong> <small>' +
      duoquiz.lang.str('gameover') + '</small></p>');
    this.questionblock.empty();
    this.questionblock.append(p);
    this.answerblock.empty();
  };

  /*
   * Game finished state tasks:
   *  - clear the question
   *  - clear the user answer
   *  - clear the answer feedback
   *  - append game finished message to question block
   */
  duoquiz.Game.prototype.finished = function() {
    // add button to restart game
    var p = $(
      '<p class="finished animated flipInX"><strong>Super</strong> <small>' +
      duoquiz.lang.str('finished')
      .replace(/%errors%/g, this.lives - this.userLives) + '</small></p>');
    this.questionblock.empty();
    this.answerblock.empty();
    this.questionblock.append(p);
    this.clearanswerresult();
  };

  /*
   * Clears the passtext or error text fields. Hides the icons.
   */
  duoquiz.Game.prototype.clearanswerresult = function() {
    $('#answer-result-div')
      .removeClass('correct incorrect');
    $('#answer-result')
      .empty();
    $('.answericon')
      .addClass('hidden');
  };

  /*
   * Resets the quiz view:
   *  - reset progress bar
   *  - reset lives
   *  - reset currentQuestion
   *  - reset currently displayed question
   *  - regenerate the questions
   *  -> change state to NEXT (=start) after reset
   */
  duoquiz.Game.prototype.reset = function() {
    this.userLives = this.lives;
    $('document')
      .off('keydown');
    $('.life').removeClass('lostlife');
    this.currentQuestion = 0;
    this.initProgress();
    this.questionblock.empty();
    this.answerblock.empty();
    this.generateQuestions();
    this.changestate(duoquiz.Game.NEXT);
  };

  /*
    Question Types:
      - each question as a question text
      - a solution, that is a AST with optional wildcards (how to handle multiple solutions?)
      - passtext, shown after successful question completion
      - generator, optional that randomizes the question
      - multiplseSolutions, allows to multiple ASTs solutions for the question
  */

  /*
    Arrays and string snippets for a simple main method. Required for parsing
    pure C statements.
  */
  duoquiz.surroundMain = {
    start: ["int", "main", "(", "void", ")", "{"],
    end: ["}"],
    strStart: "int main(void) { ",
    strEnd: "}",
    offset: 6,
  };

  /*
   * A Reference object to back reference a value, that is not static
   * Users input a specific value in a
   * @constructor
   */
  duoquiz.Reference = function(index, name) {
    this.index = index;
    this.name = name || "unnamed";
  };

  /*
   * Return the index of the actual reference, though
   */
  duoquiz.Reference.prototype.getIndex = function(offset) {
    return offset ? this.index + (offset - 1) : this.index;
  };

  /*
    Abstract question type with included AST check function
    - requires generated.solution: Array
    - requires generated.passtext: String
    - allows multiple possible answers
    - allows wildcards like "." for any string
  * @constructor
  */
  duoquiz.AstQuestion = function() {
    // empty constructor
  };

  duoquiz.AstQuestion.prototype.setName = function(str) {
    this.name = str;
  };

  duoquiz.AstQuestion.parseToFlatArray = function(grammar, input) {
    this.scope(grammar);
    var arr = grammar.parse(input);
    return util.flatten(arr);
  };

  /*
   * Adds optional preprocess hook, that may add a newline or special casing
   */
  duoquiz.AstQuestion.prototype.addPreprocessHook = function(callback) {
    if (util.isFunction(callback)) {
      this.preprocessHook = callback;
    } else {
      throw new Error("addPreprocessHook requires a function");
    }
  };

  /**
   * Sets a flag that adds a surrounding main method call for comparing the solutions.
   */
  duoquiz.AstQuestion.prototype.setRequiresMain = function(required) {
    if (required) {
      this.requiresMain = true;
    } else {
      this.requiresMain = false;
    }
  };

  duoquiz.AstQuestion.scope = function(grammar) {
    grammar.yy = grammar.yy || {};
    //do nothing
    grammar.yy.R = function(entry) {
      // console.log(entry);
    };

    grammar.yy.bSawStruct = false;

    grammar.yy.typedefMode = 0;
    grammar.yy.types = {};

    grammar.yy.isType = function(type) {
      if (!type || !type.length || type.length === 0) {
        return false;
      }

      return grammar.yy.types.hasOwnProperty(type);
    };
  };

  duoquiz.AstQuestion.prototype.check = function(str) {
    var expected = []; // expected array of possible solutions as ASTs
    var actual; // holds the actual evaluated user solution
    var result; // internal storing for errors
    var i;

    if (!str) {
      throw new Error('str cannot be null in check()!');
    }

    // call hook if defined
    if (this.preprocessHook) {
      str = this.preprocessHook(str);
    }

    //check for surrounding main function str
    if (this.requiresMain) {
      // check if user provided main method in answer str
      if (str.indexOf('int main(') !== -1) {
        return {
          'check': false,
          'text': duoquiz.lang.str('noneedformain'),
        };
      }
      str = [duoquiz.surroundMain.strStart, str, duoquiz.surroundMain.strEnd].join("");
    }

    // check if we can parse the user input (is it valid C?)
    try {
      actual = duoquiz.AstQuestion.parseToFlatArray(ansic, str);
    } catch (e) {
      // it's not valid C, print parser error msg (shows line and position of parse error)
      var arr = e.message.split('\n');
      var msg = arr[0] + "<br>" + arr[1] + "<br>" + arr[2];
      return {
        'check': false,
        'text': msg,
      };
    }

    // if requireMain is set, we slice the "actual" array, so we can compare better
    if (this.requiresMain) {
      // 0 to 5, first 6 elements: int main(void){
      // last element: }
      if (actual.length < 6) {
        throw new Error("Could not slice 'actual' array in order to remove main function in check().");
      }
      actual = actual.slice(6, actual.length - 1);
    }

    // we can check the definition
    for (i = 0; i < this.generated.solution.length; i++) {
      var r;
      if (typeof this.generated.solution[i] === "string") {
        r = JSON.parse(this.generated.solution[i]);
      } else {
        r = this.generated.solution[i];
      }

      expected.push(r);
    }

    var results = []; // stores the results (for multiple iterations)
    var iscorrect;

    function compareRecursive(expected, actual, result) {
      var i;
      for (i = 0; i < expected.length; i++) {
        // check for same length
        // array -> recursive
        if (Array.isArray(expected[i]) && Array.isArray(actual[i])) {
          if (expected[i].length !== actual[i].length) {
            result.correct = false;
            result.errorcount++;
            result.msg[result.errorcount] = 'Error at: ' + expected[i];
          } else {
            compareRecursive(expected[i], actual[i], result);
          }
        } else {
          // single value -> compare
          // do we need to distinguish between objects and simple values?
          if (expected[i] != '.') {
            if (expected[i] instanceof duoquiz.Reference) {
              var compareValue;
              // add try catch block to catch indexoutofrange exceptions
              try {
                compareValue = actual[expected[i].getIndex()];
              } catch (e) {
                throw new Error('Dereferencing Error for reference[' + expected[i] + ']', e);
              }

              // compare the retrieved value with the actual one
              if (compareValue != actual[i]) {
                result.correct = false;
                result.errorcount++;
                result.msg[result.errorcount] = duoquiz.lang.str('expected') +
                  ': ' + compareValue +
                  ' ' + duoquiz.lang.str('actual') + ': ' + actual[i];
              }
            } else if (expected[i] != actual[i]) {
              result.correct = false;
              result.errorcount++;
              result.msg[result.errorcount] = duoquiz.lang.str('expected') +
                ': ' + expected[i] +
                ' ' + duoquiz.lang.str('actual') + ': ' + actual[i];
            }
          }
        }
      }
      if (actual.length > expected.length) {
        result.correct = false;
        result.errorcount++;
        result.msg[result.errorcount] = 'Error at: ' + actual[expected.length];
      }
    }

    // iterate over possible solutions and compare
    for (i = 0; i < expected.length; i++) {
      result = {
        correct: true,
        msg: [],
        errorcount: -1,
      };
      compareRecursive(expected[i], actual, result);
      results.push(result);
      if (result.correct === true) {
        break; // exit loop early assume there is only 1 correct result
      }
    }

    iscorrect = false; // assume not correct solutions

    // look for possible correct solution
    for (i = 0; i < results.length; i++) {
      if (results[i].correct) {
        iscorrect = true;
        break;
      }
    }

    if (iscorrect) {
      return {
        'check': true,
        'text': this.generated.passtext
      };
    } else {
      return {
        'check': false,
        'text': results[0].msg[0] // get first evaluated result error
      };
    }
  };

  duoquiz.AstQuestion.prototype.setPostCreateHook = function(callback) {
    if (util.isFunction(callback)) {
      this.postCreateHook = callback;
    } else {
      throw new Error("setPostCreateHook expects a function");
    }
  };

  /*
   *  Allows students to
   * @constructor
   */
  duoquiz.SimpledefinitionQuestion = function(question, solution, passtext,
    generator) {
    if (!Array.isArray(solution)) {
      var temp = solution;
      solution = [];
      solution.push(temp); // create new array
    }

    this.origin = {
      'question': question, // question, may hold replace vars
      'solution': solution, // correct solution array, may hold replace vars
      'passtext': passtext, // text shown, when passing question
    };

    this.generator = generator || null; // generator function to randomize question
  };
  util.inherit(duoquiz.SimpledefinitionQuestion, duoquiz.AstQuestion);

  duoquiz.SimpledefinitionQuestion.prototype.generate = function() {
    if (this.generator) {
      this.generated = this.generator(this.origin);
    } else {
      this.generated = {
        'question': this.origin.question,
        'solution': this.origin.solution,
        'passtext': this.origin.passtext,
      };
    }
  };

  /*
    Creates the question in the desired dom area
  */
  duoquiz.SimpledefinitionQuestion.prototype.create = function(questionblock,
    answerblock) {
    if (!this.generated) {
      throw new Error('Call generate() before creating the question');
    }

    var p = $('<p>' + this.generated.question + '</p>');
    questionblock.append(p);

    var textarea = $(
      '<textarea class="form-control" id="duo-answer" rows="3"></textarea>');
    answerblock.append(textarea);

    this.codeMirror = CodeMirror.fromTextArea(textarea[0], {
      mode: "text/x-csrc",
      lineNumbers: true,
      matchBrackets: true,
      tabMode: "indent",
      indentUnit: 4,
      autofocus: false,
    });

    if (this.minimumLines) {
      var startingValue = '';
      for (var i = 1; i < this.minimumLines; i++) {
        startingValue += '\n';
      }
      this.codeMirror.setValue(startingValue);
    }

    // call postcreatehook if availabe
    if (this.postCreateHook) {
      this.postCreateHook();
    }
  };

  duoquiz.SimpledefinitionQuestion.prototype.setMinimumLines = function(lines) {
    this.minimumLines = lines;
  };

  duoquiz.SimpledefinitionQuestion.prototype.getValue = function() {
    if (this.codeMirror) {
      return this.codeMirror.getValue();
    } else {
      throw new Error("call create() before retrieving questions");
    }
  };

  /*
    Represents a true/false question
  * @constructor
  */
  duoquiz.SingleChoiceQuestion = function(question, solution, choices,
    passtext, generator) {
    this.origin = {
      'question': question, // question, may hold replace vars
      'solution': solution, // correct solution array, may hold replace vars
      'passtext': passtext, // text shown, when passing question
      'choices': choices,
    };

    this.formID = "duochoiceform";
    this.generator = generator || null; // generator function to randomize question
  };

  duoquiz.SingleChoiceQuestion.prototype.setName = function(str) {
    this.name = str;
  };

  duoquiz.SingleChoiceQuestion.prototype.create = function(questionblock,
    answerblock) {
    var i;
    var div; // radio group
    var label; // label for radio button
    var input; // radio button input
    var form = $('<form id="' + this.formID + '" role="form"></form>'); //form containing the radio btns

    for (i = 0; i < this.generated.choices.length; i++) {
      input = $('<input type="radio" name="duochoices" id="duochoice' + i +
        '" value="' + this.generated.choices[i] + '">');
      label = $('<label></label>');
      div = $('<div class="radio"></div>');
      label.append(input);
      label.append(this.generated.choices[i]); //append choice text
      div.append(label);
      form.append(div);
    }

    questionblock.append($('<p>' + this.generated.question + '</p>'));
    answerblock.append(form);

    // call postcreatehook if availabe
    if (this.postCreateHook) {
      this.postCreateHook();
    }
  };

  duoquiz.SingleChoiceQuestion.prototype.getValue = function() {
    return $('input[name="duochoices"]:checked')
      .first()
      .val();
  };

  duoquiz.SingleChoiceQuestion.prototype.check = function(str) {
    if (!str) {
      throw new Error('str cannot be null in check()!');
    }

    var check = str == this.generated.solution;
    return {
      'check': check,
      'text': check ? this.generated.passtext : duoquiz.lang.str(
        'notcorrecttext'),
    };
  };

  duoquiz.SingleChoiceQuestion.prototype.generate = function() {
    if (this.generator) {
      this.generated = this.generator(this.origin);
    } else {
      this.generated = {
        'question': this.origin.question,
        'solution': this.origin.solution,
        'passtext': this.origin.passtext,
        'choices': this.origin.choices,
      };
    }
  };

  /*
    Order code fragements in order to
  * @constructor
  */
  duoquiz.OrderQuestion = function(question, solution, fragments, passtext,
    generator) {
    if (!Array.isArray(solution)) {
      var temp = solution;
      solution = [];
      solution.push(temp); // create new array
    }

    this.origin = {
      question: question,
      solution: solution,
      fragments: fragments,
      passtext: passtext,
    };

    this.generator = generator || null;

    this.answerListID = "duo-answer-list";
    this.fragmentsListID = "duo-fragments-list";
    this.sortable = null;
  };
  util.inherit(duoquiz.OrderQuestion, duoquiz.AstQuestion); // get ast checking for solutions

  duoquiz.OrderQuestion.prototype.create = function(questionblock,
    answerblock) {
    var that = this;
    var pQuestion = $('<p class="pull-left">' + this.generated.question +
      '</p>');
    var helpspan = $('<span data-toggle="popover" data-content="' + duoquiz.lang
      .str("orderquestionhelp") +
      '" class="popover-dismiss glyphicon glyphicon-question-sign pull-right"></span>'
    );
    questionblock.append(pQuestion);
    questionblock.append(helpspan);

    // answer block
    var form = $('<form class="form-horizontal" role="form"></form>');
    var formGroupAnswer = $('<div class="form-group"></div>');
    // var labelAnswer = $('<label class="col-sm-2 control-label"> </label>');
    var ulAnswer = $('<ul id="' + this.answerListID +
      '" class="list-inline div-fragment-duo answer col-sm-12 center-block"></ul>');
    //formGroupAnswer.append(labelAnswer);
    formGroupAnswer.append(ulAnswer);
    form.append(formGroupAnswer);

    // fragments block
    var formGroupFragments = $('<div class="form-group"></div>');
    // var labelFragments = $('<label class="col-sm-2 control-label"> </label>');
    var ulFragments = $('<ul  id="' + this.fragmentsListID +
      '" class="list-inline div-fragment-duo col-sm-12"></ul>');

    // formGroupFragments.append(labelFragments);
    formGroupFragments.append(ulFragments);
    form.append(formGroupFragments);

    questionblock.append(form);

    $('.popover-dismiss')
      .popover({
        trigger: 'hover',
        placement: 'left',
      });

    var i;
    var li, span;
    var addFragmentFunc = function(event) {
      that.addFragmentToAnswer(event);
    };

    // generate list of tokens
    for (i = 0; i < this.generated.fragments.length; i++) {
      li = $('<li></li>');
      span = $('<span span data-id="' + i + '" class="label label-tag">' +
        this.generated.fragments[i] + '</span>');
      li.append(span);
      ulFragments.append(li);
      // ToDo: refactor to define function outside of loop
      li.on('click', addFragmentFunc);
    }

    // add sortable
    try {
      this.sortable = new sortable(document.getElementById(this.answerListID));
    } catch (e) {
      // log error --> TODO proper handling?
      // disregard siently for now
    }
    // call postcreatehook if available
    if (this.postCreateHook) {
      this.postCreateHook();
    }
  };

  duoquiz.OrderQuestion.prototype.addFragmentToAnswer = function(event) {
    var that = this;
    var eventSource = event.currentTarget;
    var dataID = eventSource.children[0].dataset.id;
    var text = eventSource.children[0].innerHTML;
    var li = $('<li></li>');
    var span = $(
      '<span class="label label-tag duo-sortable-handle" data-id="' + dataID +
      '">' + text + '</span>');
    li.append(span);
    $('#' + this.answerListID)
      .append(li);
    $(eventSource)
      .off('click');
    $(eventSource)
      .children()
      .first()
      .addClass('chosen');
    li.on('click', function(event) {
      that.removeFragmentFromAnswer(event);
    });
  };

  duoquiz.OrderQuestion.prototype.removeFragmentFromAnswer = function(event) {
    var that = this;
    var eventSource = event.currentTarget;
    var dataID = eventSource.children[0].dataset.id;
    var fragmentsItem = $('.chosen[data-id="' + dataID + '"]');
    fragmentsItem.removeClass('chosen');
    var li = fragmentsItem.parent();
    li.on('click', function(event) {
      that.addFragmentToAnswer(event);
    });
    $(eventSource)
      .remove();
  };

  duoquiz.OrderQuestion.prototype.generate = function() {
    if (this.generator) {
      this.generated = this.generator(this.origin);
    } else {
      this.generated = {
        'question': this.origin.question,
        'solution': this.origin.solution,
        'passtext': this.origin.passtext,
        'fragments': this.origin.fragments,
      };
    }

    // shuffle anyways, this is unrelated to the passed generator function
    this.generated.fragments = util.shuffleArray(this.generated.fragments);
  };

  duoquiz.OrderQuestion.prototype.getValue = function() {
    var items = $('.duo-sortable-handle');
    var fragments = [];
    var i;

    for (i = 0; i < items.length; i++) {
      fragments.push(items[i].innerHTML);
    }

    return fragments.join('');
  };

  /**
    Multiple choice question
    - expects a question with text
    - array of boolean values that indicates checked or unchecked for choices
    - array of choices
    - passtext, printed text when solved
    - generator, optional
   * @constructor
  **/
  duoquiz.MultipleChoiceQuestion = function(question, solution, choices,
    passtext, generator) {
    this.origin = {
      'question': question, // question, may hold replace vars
      'solution': solution, // correct solution array, may hold replace vars
      'passtext': passtext, // text shown, when passing question
      'choices': choices,
    };

    this.formID = "duochoiceform";
    this.generator = generator || null; // generator function to randomize question
  };

  duoquiz.MultipleChoiceQuestion.prototype.setName = function(str) {
    this.name = str;
  };

  duoquiz.MultipleChoiceQuestion.prototype.create = function(questionblock,
    answerblock) {
    var i;
    var div; // radio group
    var label; // label for radio button
    var input; // radio button input
    var form = $('<form id="' + this.formID + '" role="form"></form>'); //form containing the radio btns

    for (i = 0; i < this.generated.choices.length; i++) {
      input = $('<input type="checkbox" name="duochoices" id="duochoice' + i +
        '" value="' + this.generated.choices[i] + '">');
      label = $('<label></label>');
      div = $('<div class="checkbox"></div>');
      label.append(input);
      label.append(this.generated.choices[i]); //append choice text
      div.append(label);
      form.append(div);
    }

    questionblock.append($('<p>' + this.generated.question + '</p>'));
    answerblock.append(form);

    // call postcreatehook if availabe
    if (this.postCreateHook) {
      this.postCreateHook();
    }
  };

  duoquiz.MultipleChoiceQuestion.prototype.generate = function() {
    if (this.generator) {
      this.generated = this.generator(this.origin);
    } else {
      this.generated = {
        'question': this.origin.question,
        'solution': this.origin.solution,
        'passtext': this.origin.passtext,
        'choices': this.origin.choices,
      };
    }

    var rangeArray = util.range(this.generated.choices.length);
    rangeArray = util.shuffleArray(rangeArray);

    var i;
    var solutions = [];
    var choices = [];
    for (i = 0; i < rangeArray.length; i++) {
      choices[i] = this.generated.choices[rangeArray[i]];
      solutions[i] = this.generated.solution[rangeArray[i]];
    }
  };

  duoquiz.MultipleChoiceQuestion.prototype.check = function(values) {
    var i;
    var check = true;

    for (i = 0; i < this.generated.solution.length; i++) {
      if (this.generated.solution[i] != values[i]) {
        check = false;
        break;
      }
    }

    return {
      'check': check,
      'text': check ? this.generated.passtext : duoquiz.lang.str(
        'notcorrecttext'),
    };
  };

  /*
    Returns an array of boolean values, which align to each choice
  */
  duoquiz.MultipleChoiceQuestion.prototype.getValue = function() {
    var values = [];
    var checkboxes = $('input[name="duochoices"]');
    var i;

    for (i = 0; i < checkboxes.length; i++) {
      values.push(checkboxes[i].checked);
    }

    return values;
  };

  // Return the object for the module
  return duoquiz;
});