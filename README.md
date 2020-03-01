Description

The client has requested a workout tracking application that will allow users to track their fitness using the Cooper Test. This is a software solution where users can calculate and record their data over time. The app also presents any historical data logged by the user.

Getting started

If you want to use this project as blue prints, be my guest. Here's how it's done:

Installments and System dependencies

First of all, make sure you get the other half of this project, the back end that runs on Ruby on Rails.. This is the front end of the application.

Make sure you use the correct
Ruby version

rvm use -v 2.5.1
Testing framework

If you're anything like me you wanna test A LOT before deploying. I used Cypress, Jest and Enzyme while building this application.

yarn -D add cypress
yarn add -D enzyme enzyme-adapter-react-16 react-test-renderer
Database creation

Our database is over here, make sure you get it!

How to run the test suite

yarn cy:open
Deployment instructions

This software was deployed using Netlify (front end) and Heroku (back end). This is - sort of - how we did it.

Netlify (front)

I'm assuming you already have an account and know how to change your url- settings.

Create a New site from Git
Choose GitHub as continuous deployment
Pick your Repo and double check deploy settings
Click on 'Deploy site'
Heroku (back)

I'm assuming you already have an account and know how to fork a Repo.

Create a new project
Add Repo through GitHub
Disable 'Wait for CI to pass before deploy'
Enable automatic deploys
Choose branch (I went with master)
Click on 'Deploy Branch'
Visit 'settings'
Save Heroku git URL
Now you've got both ends up and running, let's connect them!

Take that saved URL to the Terminal, make sure you're in the back end local Repo/folder and do:
git remote add Heroku (your Heroku git URL)
git remote -v
...just to make sure you now have Heroku as a remote on you repo. 2. Install Heroku on your system, I used this (as I'm on a Linux, Ubuntu machine) but you'll need to double check what you need.

sudo snap install --classic heroku
Move in to your front end index.js- file and update the axios.defaults.baseURL with the Netlify URL that was assigned to you upon deployment. Please note that when testing or making updates you don't yet want to be shown publicly, you'll need to change this to the localhost again.
Now we should be connected, but there's nothing in the database at the moment..

... and since the objective for this app was not to build a "create login feature" this needs to be done manually with Postman.

Get Postman if you haven't already, and launch
No need to sign in, get rid of that by clicking 'cancel'
Once on the dashboard click the plus- sign
To add a user choose POST and enter the following to create a user and enter the application with its credentials:
(your Heroku URL)/api/v1/auth?email=user@mail.com&password=password&password_confirmation=password
Built with

The front end of this application was built using React
The back end of this application was built using Ruby on Rails
The front was deployed using Netlify
The back end was deployed using Heroku
The Acceptance tests where implemented with Cypress
The Component tests where implemented with Jest
The Component tests where implemented with Enzyme
License

This project is licensed under the MIT License.

Thank you to

Kayla Woodbury for helping us out with testing and bugfixing
Jaime Cruz for helping us out with deployment
PixaBay for a huge library of amazing and inspiring images, royalty free - one of which we chose to use for this app
CraftAcademy for supplying the basic structure of this application
Codevolution for teaching us about inline styling
Canva for finding awesome colors for styling
Chart.js for cool charts