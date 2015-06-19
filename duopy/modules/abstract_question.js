/**
 * Created by ebert on 01.02.2015.
 */
define(function (require) {
        // load dependencies
        var util = require('util');

        class AbstractQuestion {
            constructor() {
                this.name = "unnamed_question";
                this.postCreateHooks = [];
                this.preProcessHooks = [];
            }


            addPostCreateHook(callback) {
                if (util.isFunction(callback)) {
                    this.postCreateHooks.push(callback);
                } else {
                    throw new Error("addPostCreateHook expects a function");
                }
            }

            /*
             * Adds optional preprocessing hook, that may add a newline or special casing
             */
            addPreProcessHook(callback) {
                if (util.isFunction(callback)) {
                    this.preProcessHooks.push(callback);
                } else {
                    throw new Error("addPreProcessHook expects a function");
                }
            }

            /*
             Sets the name of the questions, is used for later logging
             */
            setName(str) {
                this.name = str;
            }

            /*
             Gets called to create the UI for the particular question.
             */
            create() {
                var i;
                for (i = 0; i < this.postCreateHooks.length; i++) {
                    this.postCreateHooks.call(this);

                    // TODO
                    throw new Error("Function create is not implemented!");
                }
            }

            check(str) {
                throw new Error("Function check is not implemented!");
            }

            /*
             Gets called to retrieve the users answer for the question
             */
            getValue() {
                throw new Error("Function getValue is not implemented!");
            }

            /*
             Gets called for each question initialization
             Should randomize the given questions, optional
             */
            generate() {
                // empty generate stub
            }
        }

        // Return the object for the module
        return AbstractQuestion;
    }
);