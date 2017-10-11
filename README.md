# **'01 Helper**
#### Brendan Grubb, 10/11/2017


&nbsp;
## Description
**'01 Helper** is an application built to keep track of a player's score while playing a game of '01. With this application, a player can simply press a button to subtract the total from their throw from their current score.

&nbsp;
#### Basic UX
* click a number button that corresponds to the dart thrown
  * this deletes the number of points from your total
  * this also tracks the number of turns (for doubles and triples, click number two or three times quickly and it only counts as one throw)
* if the player's score reaches 0 exactly, they are notified that they have won.
* if a throw brings a player's score under 0, they are notified that they have busted and their score is reset to the total before the bust.

<!-- &nbsp;
## Setup/Installation Requirements
##### _To view and use this application:_
* It is necessary to download and install the following programs to use this application
  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [Bower](https://bower.io/)
  * [Typescript](https://www.npmjs.com/package/typescript)
  * [Angular2 CLI](https://github.com/angular/angular-cli)
* Go to my [Github repository](https://github.com/Brendangrubb/meal-tracker)
* Download the zip file via the green button and unzip the file
* Open Terminal and navigate to **_club-manager-master_** project folder
* Open the application in Atom (or text editor of choice)
  * Create a file with the following path _src/app/api-keys.ts_
  * Add the following code:
      _export var masterFirebaseConfig = {<br>
      &nbsp;apiKey: "YOUR API KEY HERE",<br>
      &nbsp;authDomain: "YOUR DB DOMAIN HERE",<br>
      &nbsp;databaseURL: "YOUR DB URL HERE",<br>
      &nbsp;storageBucket: "YOUR STORAGEBUCKET INFO HERE,<br>
      &nbsp;messagingSenderId: "YOUR SENDER ID HERE"<br>
    };_
  * Generate credentials from Firebase (or database of choice) and add to api-keys.ts file
* Type the following commands in Terminal:
  * npm install
  * bower install
  * ng serve
* Visit [http://localhost:4200](http://localhost:4200)
* The application will be ready to use!


&nbsp;
## Planning

#### Basic UX
* A user can view a list of current members of Star Trek Club. A user can click on any member from that list for a detail view of that member profile. A user can filter the list of current Star Trek Club members to exclude members who have not seen all episodes of the franchise. An admin user can add, delete or update members of Star Trek Club.

#### MVP Checklist
  * **Initial Files**
    * create project using cli
    * add and link repository
    * write README
    * install extra dependencies  (bootstrap --add to angular-cli.json, angularfire2 firebase --add to tsconfig.json)
    * generate app.routing.ts
    * basic page layouts, minimal styling as I generate components...to make staring at this project for 8 hours a little more pleasant

  * **About, Header and Splash Page Routes**
    * generate about-layout and dummy content
    * generate header-nav bar with links to about, member list and admin
    * generate splash page-welcome page with club image

  * **Create Model and Firebase**
    * generate and populate member.model (name, picture, bio, favorite series, amount of franchise watched)
    * add seed file
    * set up Firebase
      * generate DB on Firebase site
      * add credentials to api-keys.ts, add to module
      * import seed data, change rules

  * **Member List Service and Route**
    * generate member list component
    * add to router
    * print member list on route
    * generate project.service
    * migrate get member list function to Service

  * **Member Detail Route**
    * generate member detail component
    * add dynamic routing path to router
    * link members from list on member list component
    * inject project.service
    * print dynamic member details on page

  * **Add Admin Route**
    * generate admin component
    * add to router
    * inject project.service
    * use service to list all members
    * generate add new member component
      * use service to save to DB
    * generate edit member component
      * use service to edit DB
    * add delete member functionality to member list component

  * **Add Pipe**
    * generate superfan filter pipe
    * employ on member list component

#### Style
  * change icon
  * choose global font
  * set media page sizes
  * layout (forms, columns)
  * color scheme

#### Refactor
  * try to break site
  * check dryness of code
  * delete console.logs
  * check spacing
  * doublecheck README for setup instructions and other information
  * amend UI and add uncompleted extra projects to 'Future Versions' list -->


&nbsp;
## Future Versions
* track multiple players
* choose 501 or 301
* track cricket games

&nbsp;
## Known Bugs
* No known bugs

&nbsp;
## Technologies Used
* JavaScript
* CSS
* HTML

&nbsp;
_If you have any questions or comments about this program, you can contact me at [brendangrubb@gmail.com](mailto:brendangrubb@gmail.com)._

Copyright (c) 2017 Brendan Grubb

This software is licensed under the GPL license
