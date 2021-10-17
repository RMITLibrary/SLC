# Getting Started - self assessment quizzes

Originally developed as UniReady self assessment quizzes, these have been renamed as "Getting started" to align with other RMIT LIbrary 'new student' initiatives*.

They currently resolve at the following address [https://emedia.rmit.edu.au/gettingstarted/](https://emedia.rmit.edu.au/gettingstarted/)

## Structure

This repository includes five packages

* Getting Started: Menu page - launches to quizzes below 
* Getting started: Language quiz
* Getting started: Study skills
* Getting started: Maths quiz

and 

* UniPrep (deprecated - an earlier version of Study Ready)

## Credits

* Jacqueline Shadforth
* AJ Penrose
* Jack Dunstan
* [your name here]

## Analytics

The quizzes have the following Google Analytics entities

* Getting Started: Menu page - UA-66654290-21
* Getting started: Language quiz - UA-66654290-20
* Getting started: Study skills - UA-66654290-22
* Getting started: Maths quiz - UA-66654290-23

## Changelog

2021

* Updated internal paths to run as location agnotistic webapps
* Removed 'send me a copy of my responses' - this was sending student info to a google form, though not authenticating. Was anyone aware of this feature not working?
* Removed or updated links to non existent RMIT Library services
    https://www.rmit.edu.au/students/study-support/study-support-hub --> https://www.rmit.edu.au/students/study-support
* Updated links to RMIT support resources
* Added favicons for better mobile usability
* Added open Graph data for better sharing and SEO
* Updated RMIT icons to RMIT University Library Icons and linked to Library home page

2017 - 2018

* original build

## Developer notes

Language ready seems to be the easiest to redevelop for new self assessment tools.
Maths quiz does not have a contained developer environment

Study Ready has downloadable pdf with results, that's nice

All files to be placed in  
/sites/departments/emedia/public/dlsweb/slc/gettingstarted
which resolve at
https://emedia.rmit.edu.au/gettingstarted

```bash
gettingstarted/
    ├─ maths/
    ├─ language/
    ├─ study/
    └─ index.html (menu page)
```


## to DO

* Update to current branding
* Update to current icons
* Remove paper imagery and replace with laptops? 





