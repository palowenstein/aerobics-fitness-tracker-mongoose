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
          <li>
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
  </li>
</ul>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Cardio Exercise Example (PNG)](./demo_assets/17-7-aerobics-fitness-tracker-mongoose-add-your-exercise-cardio-example.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Cardio Exercise Example (PNG)")
<p>Fig. 7. Cardio Exercise parameters: name, distance, duration. (example)</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Resistance Exercise Example (PNG)](./demo_assets/17-5-aerobics-fitness-tracker-mongoose-add-your-exercise-resistance-example.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Add Resistance Exercise Example (PNG)")
<p>Fig. 5. Resistance Exercise parameters: name, weight, sets, reps, duration. (example)</p>

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Landing page with previous exercise information (PNG)](./demo_assets/17-6-aerobics-fitness-tracker-mongoose-last-workout-impacted-with-exercise-data.png "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Landing page with previous exercise information (PNG)")
<p>Fig. 6. Landing page impacted with previous exercise information (example)</p>



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


## Screenshots



## Video
![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (MP4)](./demo_assets/17-10-aerobics-fitness-tracker-mongoose-application-demo.mp4 "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Application Demo (MP4)")
<br />

![Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats Interaction (MP4)](./demo_assets/17-11-aerobics-fitness-tracker-mongoose-workout-stats-interaction.mp4 "Aerobics Fitness Tracker (NoSQL, MongoDB, Mongoose, Node, Express, Morgan) — Workout Stats Interaction (MP4)")
<br />



## References
<ul>
	<li>MongoDB + Mongoose (NoSQL)</li>
	<li>Node.js Javascript Library.</li>
	<li>Express for GET/POST/DELETE Requests between REST APIs.</li>
	<li>Morgan Middleware</li>
	<li>Package.JSON / NPM for installing dependencies</li>
  <li>Thunderstom font (1980s flavored font)</li>
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



17-2-aerobics-fitness-tracker-mongoose-robo3t-seed-js-seeded.png
17-3-aerobics-fitness-tracker-mongoose-node-server-js.png
17-3-aerobics-fitness-tracker-mongoose-workout-stats-application-startup.png
17-4-aerobics-fitness-tracker-mongoose-last-workout-null-exercises-performed-zero.png
17-5-aerobics-fitness-tracker-mongoose-add-your-exercise-resistance-example.png
17-6-aerobics-fitness-tracker-mongoose-last-workout-impacted-with-exercise-data
17-7-aerobics-fitness-tracker-mongoose-add-your-exercise-cardio-example
17-8-aerobics-fitness-tracker-mongoose-workout-added-succesfully
17-9-aerobics-fitness-tracker-mongoose-typical-terminal-activity-while-application-is-running.png