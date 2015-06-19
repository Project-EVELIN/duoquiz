/**
 * Created by ebert on 01.02.2015.
 */
define(function (require) {
        // load dependencies
        var $ = require('jquery');
        var util = require('util');
        var AbstractQuestion = require('abstract_question');

        class MultipleChoiceQuestion extends AbstractQuestion {
            constructor(){

            }
        }

         // Return the object for the module
        return MultipleChoiceQuestion;
    }
);