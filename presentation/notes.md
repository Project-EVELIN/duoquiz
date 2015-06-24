# Leveraging Parson's Problems and Code-Fragment-Questions in a Quiz for an Interactive Programming eBook

## Introduction
- Working in the area of interactive eBooks
- Cite the ITiCSe working group about ICSeBooks
- Context: Improving our introductory course
- Focus on language proficiency in this particular talk
- Noticed that syntax errors and tool-chain distracts students
- Explicit train vocabulary and related concepts like vocabulary in natural languages
- Connection between natual language learning with new technology like duolingo or babbel and programming languages

Questions:
1. Which question types may serve our requirements for syntax assessment?
2. How are they evaluated?
3. How can we provide meaningful feedback?
4. How can data collection be best assembled?
5. How should the quiz be developed and deployed in class?

## Related Work
- Especially, in programming related MOOCs a lot of autograding and other types of assessment software and systems have been developed. However, most of the MOOCs use traditional mulitple choice questions.


Frage an das Publikum: What question types are you using and in which context? Or Maybe limit it to programming.

- What are Parson's Problems (js-parsons) (show demo (it's HTML :D))
- tryruby
- Turings-Craft
- Moodle
- socrative, quizlet, ...

## Analysis and Requirements
- Course overview:
  - field of studies
  - aims of the course
  - course contents
  - students
- Problems
  - Language proficiency
  - drop out rate

## duoquiz
Start with fundamental design ideas

- Present new question types
  - Code-Fragment-Questions and inner works
  - new Parson's Problems and show duolingo equivalent
- Demo some questions

## In-Class Usage
- how to use In-Class
- show analytics
- how to use the data
- Embedding of the quiz in the elsdfearnign

## Evaluation
- a few comments about the first evaluation
  -

## Conclusions
- nice addition to the course
- more than multiple choice
- data analysis provides useful feedback for course preparation

## Future Development

# Simple mistakes

See for example following line:	```print("%i", computed_result);```
When validated using the quiz it will display this error message:

> Incorrect answer!
>
> Expected: printf Actual: print
