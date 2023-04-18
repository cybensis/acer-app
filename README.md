# ACER Web Developer Test

## How to run
### Built version with python
1. Download this repo either directly from GitHub or with `git clone https://github.com/cybensis/acer-app` 
2. In a terminal, navigate into the directory `acer-app/build` then run the command `python -m http.server 8080` (NOTE: depending on your machines configuration, you need to run with admin/sudo permissions)
3. Access the web app through your browser with `localhost:8080`
### Built version with web server
1. Download this repo either directly from GitHub or with `git clone https://github.com/cybensis/acer-app` 
2. Drag all the contents of the `acer-app/build` folder into the folder used by your web server of choice, e.g. Apache or NGINX
3. Access the web app through however your web server of choice is configured
### Development version
1. Download this repo either directly from GitHub or with `git clone https://github.com/cybensis/acer-app` 
2. In a terminal, navigate into the `acer-app` folder and run the command `npm install`
3. After the install command is finished, run `npm start`, then you should be able to access the webpage via `localhost:3000`


## Decisions, compromises, and assumptions
1. I assumed that for browsers that have been resized really thin, or for mobile users, a side navigation menu should be used to prevent trying to fit everything on a small horizontal bar.
2. For the contact section, I decided to align the "Add message" text and the send button to the right instead of the middle right, as when adding the message component of the form, I have the textarea span across the whole form, rather than just half of it like the other text fields, so having the send button aligned to the middle right underneath this text area would look off.
3. For the discover latest section, I decided that when resizing it might be better to lower the number of cards per row to 2 instead of 4.