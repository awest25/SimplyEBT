# About EBTea

## QWERhacks
This project was originally created during QWERhacks 2023 for the Food Security track where it won the title "Comeback Baby". It was developed by Alyssa Tadeo, [Alex West](https://github.com/awest25), [Tyler Tran](https://github.com/tylerdtran), and [Colleen Lam](https://github.com/colleenhlam). The Devpost for this hackathon project is available at https://devpost.com/software/ebtea.

## Features
This web application provides meal and budget planning services to low-income individuals who use the government funded EBT program to purchase food and groceries. Using EBTea, users can:
* View their weekly meal plan and current budget on their dashboard
* Create and update their weekly meal plan using the edit page
* Input grocery expenses which is reflected in their total balance

## Tech Stack
* React.js
  * Material UI
  * React Router
* Google Firebase
* GitHub

## Future Plans
Due to the short time frame the project was originally developed under, we weren't able to complete our vision for EBTea. In the future, we plan to implement the following features:
* EBT and SNAP friendly grocery store and restaurant locator
* Nutritional analysis tool of a user's grocery list and suggestions on how to improve

# Using EBTea

### Local Hosting
1. `git clone https://github.com/awest25/qwer-hacks-2023.git`
2. `cd simply-ebt`
3. `npm i --force`
4. `npm start` 
5. Open [http://localhost:3000](http://localhost:3000) to view EBTea in your browser.

### Deploying to Firebase
1. `cd simply-ebt`
2. `npm run build`
3. `firebase deploy`
