# Useful hints for creating more content
## KaTeX for equations
In order to use LaTeX style equations, just set up a div with following tag:
```html
<div class="tex centered" data-expr="\displaystyle \frac{(x+y+z)}{3}"></div>
```

Include katex css and katex.min.js and katex.startup.js in order to render the equations on start up
without any reflowing errors.


## Creating a quiz - The template
### The template
When creating a quiz, the javascript requires a few blocks to insert the questions and answers.

```html
          <h3 id="quiz1" class="page-header">Quiz 1<small>Deklaration und Initialisierung</small></h3>
          <div class="panel panel-duo" data-quiz="quiz1" data-question-block="duo-question-block" data-answer-block="duo-answer-block">
            <div class="panel-heading">
              <h3 class="panel-title">
                <ul class="pagination pagination-sm" id="duoquiz-progress">
                </ul>
                <div class="life-box pull-right">
                  <span class="glyphicon glyphicon-heart life"></span>
                  <span class="glyphicon glyphicon-heart life"></span>
                  <span class="glyphicon glyphicon-heart life"></span>
                </div>
              </h3>
            </div>
            <div class="panel-body duo-body">
              <div class="panel-question center-block" id="duo-question-block">
                <div class="spinner"></div>
                <div class="center-block"><p class="spinner-text">Bereite Quiz vor...</p></div>
              </div>
              <div class="panel-answer center-block" id="duo-answer-block">
              </div>
            </div>
            <div class="panel-footer" id="answer-result-div">
              <div class="col-md-1">
                <span class="glyphicon glyphicon-remove-circle answericon incorrect hidden"></span>
                <span class="glyphicon glyphicon-ok-sign answericon correct hidden"></span>
              </div>
              <div class="col-md-5" id="answer-result">
              </div>
              <div class="col-md-6">
                <button type="button" id="btn-duo-check" class="btn btn-duo pull-right">Überprüfen</button>
              </div>
            </div>
          </div>
        <p class="page-header">
          <br />
        </p>
```

This is the currently used template with associated styles.
When instantiating a new quiz its constructor requires the answer and question blocks.

```javascript
		// get all elements with the 'data-quiz' attribute and create a quiz at the desired position
		// for each quiz get data-question-block and data-answer-block, data-questions ids
		// set language
		var quizzes = $('div[data-quiz]');
		var i;
		var question_block;
		var answer_block;
		var quiz_map_id;
		var duoquiz;
		var quizQuestions;

		// support async loading of deps
		if (quizzes.length > 0) {
			require(['app/duo_quiz', 'app/quiz_questions'], function(duoquiz, quizQuestions) {
				for (i = 0; i < quizzes.length; i++) {
					question_block = $(quizzes[i]).attr("data-question-block");
					answer_block = $(quizzes[i]).attr("data-answer-block");
					quiz_map_id = $(quizzes[i]).attr("data-quiz");
					new duoquiz.game(quizQuestions.getQuestions(quiz_map_id), 3, 'de', $('#' + question_block), $('#' + answer_block));
				}
			})
		}
```

Addtionally, you can specify the button which binds to the specific states of the quiz. Without specifiny any of those, they have the following fallback:
```javascript
this.questionblock = questionblock || $('#duo-question-block');
this.answerblock = answerblock || $('#duo-answer-block');
this.gamebutton = checkbtn || $('#btn-duo-check');
```

The quiz constructor has the following signature: ```duoquiz.game(questions, lives, lang, questionblock, answerblock, checkbtn)```

As a first argument you have to provide an array of questions. The questions can any be of any type [Referenz auf die Fragetypen]. Next is the
amount of lives. Currently you have to put the macthing count of elements with class ```life``` in the template. The quiz provides itself an
englisch and german version. However the questions are not affected by the chosen language.

The quiz tracks its current progress, there it uses a custom styled list with following id ```duoquiz-progress```.
This may change in future, to allow multipe quizes on one page.

## Creating questions
The quiz should be refactored to allow a new "dsl" for creating questions. This may look like following snippet:

```javascript
var q7 = new duoquiz.simpledefinitionQuestion('question', ['solutions'], 'passtext', 'generator');
q7.setQuestion('question text');
q7.addSolution('solution', format);
q7.addPassText('pastext'); // text that is shown after answering a question correctly
q7.setGenerator(func); // set a function that randomizes the questions on each init
q7.requiresMain(true); // set to true if statement is not allowed outside of a function block
```