## #17-aerobics-fitness-tracker-mongoose
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

<h3>1980s aerobics flavored workout tracker enabled via MongoDB, Mongoose schema, Express routing and Morgan middleware.</h3>

<p>Github Repository Page: https://github.com/palowenstein/aerobics-fitness-tracker-mongoose</p>
<p>Heroku Deployment Page: https://afternoon-oasis-52971.herokuapp.com/</p>

# Table of Contents
  * [GIF](#GIF)
  * [Overview](#Overview)
  * [Details](#Details)
  * [Instructions](#Instructions)
  * [Screenshots](#Screenshots)
  * [Video](#Video)
  * [References](#References)
  * [License](#License)
  * [Contributions](#Contributions)  
  * [Contact](#Contact)


## GIF
![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (GIF)](./demo_assets/17-10-aerobics-fitness-tracker-mongoose-application-demo.gif "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (GIF)")
<p>Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (GIF)</p>
<br />

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats Interaction (GIF)](./demo_assets/17-11-aerobics-fitness-tracker-mongoose-workout-stats-interaction.gif "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats Interaction (GIF)")
<p>Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats Interaction (GIF)</p>


## Overview
<ul>
<li>The 1980s aerobics flavored workout tracker enables the following actions:
  <ol>
    <li>Create, View and Track daily workouts.</li>
    <li>Log multiple exercises in a specific workout on a given day.</li>
    <li>Exercises are broken up in two types:
        <ol>
          <li>Cardio exercises which can be tracked with the following parameters:
              <ul>
                  <li>Name</li>
                  <li>Distance</li>
                  <li>Duration</li>
              </ul>
          </li>
          <li>Resistance exercises which can be tracked with the following parameters:
              <ul>
                  <li>Name</li>
                  <li>Weight (lbs)</li>
                  <li>Sets</li>
                  <li>Reps</li>
                  <li>Duration (minutes)</li>
              </ul>
          </li>
        </ol>
      </li>
    </ol>
    <li>Access the "Workout Stats" (Statistics) page where the end user can visualise the:
      <ol>
        <li>workout duration in minutes (line graph),</li>
        <li>pounds lifted (bar graph),</li>
        <li>exercises performed (pie chart).</li>
      </ol>
      This last type can be edited on the fly (see Gif #2).</li>
  </li>
</ul>

## Details
<ul>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, Macintosh .DS_Store files.</li>
<li>For this application to run locally, MongoDB must be installed and running in the background as seen in the terminal screen capture below. The application will not run correctly without a valid MongoDB install.</li>
<li>The end user must first execute the package.json file located in the root folder of the application. This can be done in Apple's Terminal via the <kbd>npm install command</kbd> and will install the required dependencies (Express, Mongoose schema, Morgan middleware) needed for the program to run.</li>
<li>For the application to run in an heroku environment, a <strong>Procfile</strong> file with the startup instruction, <kbd>node server.js</kbd>, has been placed into the application folder.</li>
</ul>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — MongoDB Background Execution / Apple Terminal (PNG)](./demo_assets/17-1-aerobics-fitness-tracker-mongoose-mongoDB.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — MongoDB Background Execution / Apple Terminal (PNG)")
<p>Fig. 1. Background execution of MongoDB in Apple's Terminal. MongoDB is called via the "mongo" command.</p>

## Instructions
<ul>
<li>Makes sure MongoDB is installed locally and running in the background as seen in Fig.1.</li>
<li>In Terminal, locate the application's root directory and enter it via the <kbd>cd</kbd>> command: <kbd>cd aerobics-fitness-tracker-mongoose</kbd>.
<li>While in the root directory, run the <kbd>npm install</kbd> command to install the necessary node modules (mongoose, morgan, express) from the package.json.</li>
<li>In Terminal, locate the seeders directory located in the main application directory via <kbd>cd application</kbd> then <kbd>cd seeders</kbd>.</li>
<li>In the seeders directory, run the <kbd>node seed.js</kbd> command.</li>
<li>This will pre-populate the mongoose schema so that the application doesn't start with null data.</li>
<li>Back in Application directory via the <kbd>cd ..</kbd> command, run the <kbd>node server.js</kbd> command.</li>
<li>This will launch the application which, in terminal, will indicate "1980s Aerobics & Fitness Tracker Application now running on port 4000".
<li>You can now access the application in your browser by loading "localhost: 4000" from the address bar.</li>
<li>When run initially, except for the date, the landing page will show null data.</li>
<li>However, if the seed.js file has been properly executed, the workout statistics pages will appear pre-filled at launch.</li>
<li>Note: Pre-configured version of this application is accessible via Heroku: https://afternoon-oasis-52971.herokuapp.com/</li>
</ul>


## Screenshots

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats page during initial use. Populated with information extracted from seeders/seed.js (PNG)](./demo_assets/17-3-aerobics-fitness-tracker-mongoose-workout-stats-application-startup.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats page during initial use. Populated with information extracted from seeders/seed.js (PNG)")
<p>Fig. 3. "Workout Stats" page during initial use. Populated with information extracted from seeders/seed.js.</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Landing page, Last Workout with null information. (PNG)](./demo_assets/17-4-aerobics-fitness-tracker-mongoose-landing-page-last-workout-first-use.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Landing page, Last Workout with null information. (PNG)")
<p>Fig. 4. Landing page, "Last Workout" with null information. Appears when application is first used or after a database flush.</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Cardio Exercise Example (PNG)](./demo_assets/17-7-aerobics-fitness-tracker-mongoose-add-your-exercise-cardio-example.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Cardio Exercise Example (PNG)")
<p>Fig. 7. Cardio Exercise parameters: name, distance, duration.</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Resistance Exercise Example (PNG)](./demo_assets/17-5-aerobics-fitness-tracker-mongoose-add-your-exercise-resistance-example.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Resistance Exercise Example (PNG)")
<p>Fig. 5. Resistance Exercise parameters: name, weight, sets, reps, duration.</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Added Successfully Bubble (PNG)](./demo_assets/17-8-aerobics-fitness-tracker-mongoose-workout-added-successfully.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Added Successfully Bubble (PNG)")
<p>Fig. 8. Workout Added Successfully Bubble.</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Landing page with previous exercise information (PNG)](./demo_assets/17-6-aerobics-fitness-tracker-mongoose-landing-page-last-workout-populated-with-information.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Landing page with previous exercise information (PNG)")
<p>Fig. 6. Landing page impacted with previous exercise information.</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Terminal activity while application is running (PNG)](./demo_assets/17-9-aerobics-fitness-tracker-mongoose-typical-terminal-activity-while-application-is-running.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Terminal activity while application is running (PNG)")
<p>Fig. 9. Terminal activity while application is running.</p>




## Video
![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (MP4)](./demo_assets/17-10-aerobics-fitness-tracker-mongoose-application-demo.mp4 "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (MP4)")
<br />

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats Interaction (MP4)](./demo_assets/17-11-aerobics-fitness-tracker-mongoose-workout-stats-interaction.mp4 "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats Interaction (MP4)")
<br />



## References
<ul>
	<li>MongoDB + Mongoose (NoSQL).</li>
	<li>Node.js Javascript Library.</li>
	<li>Express for GET/POST/DELETE Requests between REST APIs.</li>
	<li>Morgan Middleware.</li>
	<li>Package.JSON / NPM for installing dependencies.</li>
  <li>Thunderstom font (1980s flavored font).</li>
</ul>

## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2021] Pierre André Lowenstein
</p>

## Contributions
<ul>
<li>Pull/Fork from master.</li>
<li>Create your own branch.</li>
<li>Add your own code (must be tested).</li>
<li>Push your branch.</li>
<li>Request a pull.</li>
</ul>

<p>Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)</p>
<p>For major changes, please open an issue beforehand to discuss the changes.</p>

## Contact
<p>
<a href="https://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:coder@pierreandrelowenstein.com" title="Courriel / E-Mail">[e-mail] Send me a 'courriel'</a>
</p>