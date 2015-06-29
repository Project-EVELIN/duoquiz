requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: "../vendor",
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    cm: "./codemirror",
    app: "../js",
    bootstrap: "./bootstrap/js/bootstrap"
  },
  shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
    "duo_quiz": {
      deps: ["app/util", "sortable", "app/ansic"]
    },
    "quiz_questions": {
      deps: ["duo_quiz", "app/util", "jquery"]
    }
  }
});

// Start the main app logic.
requirejs([ "jquery", "domready", "bootstrap", "app/util", "sortable"],
  function($, domReady, bootstrap, util, sortable, FastClick, offcanvas, ripple) {
    // get all elements with the 'data-quiz' attribute and create a quiz at the desired position
    // for each quiz get data-question-block and data-answer-block, data-questions ids
    // set language
    var quizzes = $("div[data-quiz]");
    var i;
    var quizMapID;

    // support async loading of deps
    if (quizzes.length > 0) {
      require(["../dist/duo_quiz", "app/quiz_questions"], function(duoquiz, quizQuestions) {
        // some duoquiz init for the presentation
        duoquiz.animations = false;

        for (i = 0; i < quizzes.length; i++) {
          quizMapID = $(quizzes[i]).attr("data-quiz");

          // create new game instance from data attributes
          var game = new duoquiz.Game(quizQuestions.getQuestions(quizMapID), $(quizzes[i]), {lang: "en", lives: 3});
          // set name of the game version, required for correct logging, we are using the quizid
          game.setName(quizMapID);
        }
      });
    }
  });
