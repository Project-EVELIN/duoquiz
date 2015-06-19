import * as $ from "../vendor/jquery";
//var $ = require("../vendor/jquery");
import * as util from "util";
import sortable from "../vendor/sortable";
var CodeMirror = require("../vendor/codemirror/lib/codemirror");
require('../vendor/codemirror/mode/clike/clike');
require('../vendor/codemirror/addon/hint/show-hint');
require('../vendor/codemirror/addon/fold/brace-fold');

var pyquiz = pyquiz || {};

pyquiz.lang = {};
pyquiz.lang.de = {
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
    noneedformain: 'Es ist nicht nötig, die main-Methode hinzuzufügen. Es reichen meist eine oder mehrere Anweisungen aus!'
};

pyquiz.lang.en = {
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
    noneedformain: 'You do not need to provide a main method body. A bunch of statements will do it.'
};

pyquiz.defaults = {};
pyquiz.defaults.uniqueID = 111; // start for unique ids for the quiz items
pyquiz.defaults.minAnswerLength = 4;
pyquiz.defaults.options = {
    lang: "de",
    lives: 3

};

pyquiz.States = {
    NEXT: "NEXT",
    FINISHED: "FINISHED",
    GAMEOVER: "GAMEOVER",
    RESET: "RESET",
    INITQUESTION: "INITQUESTION",
    CORRECT: "CORRECT",
    INCORRECT: "INCORRECT"
};

class Quiz {
    constructor(questions, ui, options) {
        this.lang = options.lang || pyquiz.defaults.options.lang;
        this.lives = options.live || pyquiz.defaults.options.lives;
        this.uniqueID = ++pyquiz.defaults.uniqueID; // get unique id

        // validate questions
        if (!questions /*|| questions.length < 2*/ ) {
            throw new Error('Cannot init pyquiz with no questions or only one.');
        }

        // init blocks
        this.questionBlock = ui.questionBlock || $('#duo-question-block');
        this.answerBlock = ui.answerBlock || $('#duo-answer-block');
        this.gameButton = ui.checkButton || $('#btn-duo-check');
        this.progessList = ui.progessList || $('#duoquiz-progress');

        // call generator for questions
        this.questions = questions;
        this.count = this.questions.length;

        // init quiz vars for game states
        this.currentQuestion = 0;
        this.userLives = this.lives;
        this.answerCache = []; // save last answers to compare

        // init progress
        this.initProgress(); // progressbar

        // start with first question
        this.changestate(pyquiz.States.NEXT);
    }

    getLangStr(key) {
        return pyquiz.lang[this.lang][key];
    }

    // sets quiz name, should be unique
    setName(str) {
        if (!str || str === "" || str.length === 0) {
            throw new Error("Invalid name for pyquiz.Quiz! -> " + str);
        }

        this.name = str;
    }

    /*
     Call each questions internal generate()
     */
    generateQuestions() {
        var i;

        for (i = 0; i < this.questions.length; i++) {
            this.questions[i].generate();
        }
    }

    /*
     * Initializes the button callback and its text:
     *  - on click event
     *  - keybind to CTRL-ENTER
     */
    initBindings(text, callback) {
        var that = this;
        this.gamebutton.text(text)
            .off('click')
            .on('click', callback);

        $(window)
            .off('keypress')
            .on('keypress', function(event) {
                if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
                    that.gamebutton.click(); // trigger click event
                }
            });
    }

    /*
     * Small state machine for managing the gameplay, mostly take care of the correct button binding
     * The game logic and states are defined here:
     *  - each state binds its own button logic (we have only one button)
     *  - call the methods for the appropriate state
     */
    changeState(state) {
        var that = this;

        switch (state) {
            case pyquiz.States.NEXT:
                this.next();
                break;
            case pyquiz.States.FINISHED:
                this.finished();
                this.initBindings(this.getLangStr('restart'), function() {
                    that.changestate(pyquiz.States.RESET);
                });
                break;
            case pyquiz.States.GAMEOVER:
                this.gameover();
                this.initBindings(this.getLangStr('restart'), function() {
                    that.changeState(pyquiz.States.RESET);
                });
                break;
            case pyquiz.States.RESET:
                this.reset();
                break;
            case pyquiz.States.CORRECT:
                this.initBindings(this.getLangStr('next'), function() {
                    that.currentQuestion++; // to next
                    that.changeState(pyquiz.States.NEXT);
                });
                break;
            case pyquiz.States.INCORRECT:
                this.reduceLives();
                break;
            case pyquiz.States.INITQUESTION:
                this.initquestion();
                this.initBindings(this.getLangStr('check'), function() {
                    that.check();
                });
                break;
            default:
                throw new Error('unknown state for changeState()');
        }
    }

    /*
     * Creates the progress bar
     * The progress bar size is depended on the question count
     */
    initProgress() {
        var i;
        this.progesslist.empty();

        // append list items for each questions
        for (i = 0; i < this.count; i++) {
            this.progesslist.append($(`<li id="progessitem_${this.uniqueID}_${i}"><div class="inner"></div></li>`));
        }
    }

    // Set the progesss item of the current question to green
    updateProgress() {
        $('#progessitem_' + this.uniqueID + '_' + this.currentQuestion)
            .addClass('active');

    }

    /*
     * Next (called after correct solution and from next button event):
     *  - check if we completed all questions -> FINISHED
     *  - otherwise initialize next question --> INITQUESTION
     */
    next() {
        if (this.currentQuestion >= this.count) {
            this.changestate(pyquiz.States.FINISHED);
        } else {
            this.clearAnswerResult();

            // add next question and bind events correctly to button
            this.changestate(pyquiz.States.INITQUESTION);
        }
    }

    /*
     * Initializes the current question:
     *  - empties question and answer block
     *  - call questions create method
     *  - now game state changes, next change is triggered by the user answer
     */
    initQuestion() {
        // dispose old question dom
        this.questionBlock.empty();
        this.answerBlock.empty();
        this.questions[this.currentQuestion].create(this.questionBlock, this.answerBlock);
    }

    /*
     * Checks the user's answers. The actual check and its implementation is delegated
     * to the current question (type). The check returns and result object, that contains
     * a "correct" flag and additionally the passtext or error message.
     *
     * The game state changes are called in the correct() or incorrect() methods.
     */
    check() {
        this.clearAnswerResult();
        var question = this.questions[this.currentQuestion];
        var answer = question.getValue(); // get value
        this.answerCache.push(answer); // remember the answer

        if (!answer || answer.length === 0) {
            this.incorrect(this.getLangStr('emptyanswer'), false);
        } else {
            var result = question.check(answer);
            if (result.check) {
                this.correct(result.text);
            } else {
                this.incorrect(result.text, true);
            }
        }
    }

    correct(msg) {
        // clear answer cache
        this.answerCache = [];

        // prepare ui for correct answer
        $('#answer-result-div')
            .addClass('correct');
        this.printAnswerResult(msg, pyquiz.getLangStr('correct'));
        $('.answericon.correct')
            .removeClass('hidden');

        this.updateProgress();

        // try to log
        var question = this.questions[this.currentQuestion];
        var questionText = question.generated.question;
        var solutions = question.generated.solution;

        this.logAnswer(questionText, question.getValue(), solutions, true);

        // bind action to next
        this.changestate(pyquiz.States.CORRECT);
    }

    incorrect(msg, lostlife) {
        // check for last 3 inputs and compare
        var same = false;
        if (this.answerCache.length > 2) {
            same = this.answerCache.slice(-1).every(function(element, index, array) {
                return this.answerCache[0] === element;
            }, this);
            msg = "Don't repeat yourself..";
        }

        if (!same) {
            // try to log
            var question = this.questions[this.currentQuestion];
            var questionText = question.generated.question;
            var solutions = question.generated.solution;

            this.logAnswer(questionText, question.getValue(), solutions, false);
        }

        $('#answer-result-div').addClass('incorrect');
        this.printAnswerResult(msg, pyquiz.getLangStr('notcorrect'));
        $('span.glyphicon.answericon.incorrect')
            .removeClass('hidden');

        // distinguish between real mistakes or none
        if (lostlife) {
            this.changestate(pyquiz.States.INCORRECT);
        }
    }

    /*
     * This functions appends the passtext or error message with title to the result div.
     *
     */
    printAnswerResult(msg, title) {
        var resultdiv = $('#answer-result');
        var p = $('<p></p>');
        var h4 = $(`<h4>${title}</h4>`);
        var span = $(`<span class="answerresult-text">${msg}</span>`);
        p.append(h4);
        p.append(span);
        resultdiv.append(p);
    }

    /*
     * Reduces the current life count (interally) and updates the view.
     * Changes the game state to GAMEOVER when the life count is 0.
     *
     * This function relies on jQuery, though the game supports variable lives,
     * tough they are not generated automatically (see issuse #39)
     */
    reduceLives() {
        this.userLives--;
        $('.life:not(.lostlife)').last().addClass('lostlife');

        // change to gameover, when no lives are left
        if (this.userLives === 0) {
            this.changestate(pyquiz.States.GAMEOVER);
        }
    }

    /*
     * Game over state tasks:
     *  - clear the question
     *  - clear the user answer
     *  - do not clear the answer feedback, otherwise user does not know, what whats wrong
     *  - append game over message to question block
     */
    gameover() {
        this.answerCache = [];
        var gameovertext = this.getLangStr('gameover');
        var p = $(`<p class="gameover fadeInUp"><strong>GAME OVER</strong> <small>${gameovertext}</small></p>`);
        this.questionBlock.empty();
        this.questionBlock.append(p);
        this.answerBlock.empty();
    }

    /*
     * Game finished state tasks:
     *  - clear the question
     *  - clear the user answer
     *  - clear the answer feedback
     *  - append game finished message to question block
     */
    finished() {
        // add button to restart game
        var finishedtext = this.getLangStr('finished').replace(/%errors%/g, this.lives - this.userLives);
        var p = $(`<p class="finished animated flipInX"><strong>Super</strong> <small>${finishedtext}</small></p>`);
        this.questionBlock.empty();
        this.answerBlock.empty();
        this.questionBlock.append(p);
        this.clearAnswerResult();
    }

    /*
     * Clears the passtext or error text fields. Hides the icons.
     */
    clearAnswerResult() {
        $('#answer-result-div').removeClass('correct incorrect');
        $('#answer-result').empty();
        $('.answericon').addClass('hidden');
    }

    /*
     * Resets the quiz view:
     *  - reset progress bar
     *  - reset lives
     *  - reset currentQuestion
     *  - reset currently displayed question
     *  - regenerate the questions
     *  -> change state to NEXT (=start) after reset
     */
    reset() {
        this.userLives = this.lives;
        $('document').off('keydown');
        $('.life').removeClass('lostlife');
        this.currentQuestion = 0;
        this.initProgress();
        this.questionBlock.empty();
        this.answerBlock.empty();
        this.generateQuestions();
        this.changeState(pyquiz.States.NEXT);
    }

    /*
     * Logging method for quiz answers, logs the question, answer, and isCorrect flag
     * to the server. Currently the solutions array is left out, for lower data footprint.
     *
     * adds the required CSRF token to the request, data is sent as JSON
     *
     */
    logAnswer(question, answer, solution, isCorrect) {
        if (!answer || answer === "" || answer.length < pyquiz.options.defaults.minAnswerLength) {
            // fail silently
            return;
        }

        // post try to the server
        var csrftoken;
        csrftoken = util.getCookie('csrftoken');
        var logObject = {
            "quiz": this.name || "unnamed quiz",
            "question": question,
            "answer": answer,
            "isCorrect": isCorrect,
            "questionName": this.questions[this.currentQuestion].name || "none"
        };

        // add csrf token for django
        $.ajaxSetup({
            beforeSend: function(xhr, settings) {
                if (!util.csrfSafeMethod(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            }
        });

        // POST data to duoquiz
        $.ajax({
            url: '/ip1/duoquiz/',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(logObject),
            dataType: 'text',
            success: function(result) {}
        });
    }
}

pyquiz.Quiz = Quiz;
export default pyquiz;