requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: './vendor',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    cm: './codemirror',
    app: '../js',
    bootstrap: './bootstrap/js/bootstrap',
  },
  shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
    "duo_quiz": {
      deps: ['app/util', 'sortable', 'app/ansic']
    },
    "quiz_questions": {
      deps: ['duo_quiz', 'app/util', 'jquery']
    },
  }
});

// Start the main app logic.
requirejs([ 'jquery', 'domready', 'bootstrap', 'app/util', 'sortable'],
  function($, domReady, bootstrap, util, sortable, FastClick, offcanvas, ripple) {
    domReady(function() {
    });

    // get all elements with the 'data-quiz' attribute and create a quiz at the desired position
    // for each quiz get data-question-block and data-answer-block, data-questions ids
    // set language
    var quizzes = $('div[data-quiz]');
    var i;
    var question_block;
    var answer_block;
    var progesslist;
    var check_button;
    var quiz_map_id;

    // support async loading of deps
    if (quizzes.length > 0) {
      require(['app/duo_quiz', 'app/quiz_questions'], function(duoquiz, quizQuestions) {
        for (i = 0; i < quizzes.length; i++) {
          question_block = $(quizzes[i]).attr("data-question-block");
          answer_block = $(quizzes[i]).attr("data-answer-block");
          progesslist = $(quizzes[i]).attr("data-progess-list");
          check_button = $(quizzes[i]).attr("data-check-button");
          quiz_map_id = $(quizzes[i]).attr("data-quiz");

          // create new game instance from data attributes
          var game = new duoquiz.Game(
            quizQuestions.getQuestions(quiz_map_id),
            3,
            'en',
            $('#' + question_block),
            $('#' + answer_block),
            $('#' + check_button),
            $('#' + progesslist)
          );
          // set name of the game version, required for correct logging, we are using the quizid
          game.setName(quiz_map_id);
        }
      });
    }
  });