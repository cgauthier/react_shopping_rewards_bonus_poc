# Purpose of Demo

The creation of a report which provides a list of transactions that are filtered by date range.

The end result is a table with the following fields:

invoice date, invoice number, total $, total points

This will be summarized by total $ and total points

This PoC is coded in React.
JSON-Server is used for CRUD operation.

Typically, this would be a report which is provided as part of a user's shopping app.

# Requirements

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

A customer receives:
    - 2 points for every dollar spent over $100 in each transaction, 
    - plus 1 point for every dollar spent between $50 and $100 in each transaction.
    (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points),

Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

- Use React JS (do not use TypeScript)
- Simulate an asynchronous API call to fetch data 
- Make up a data set to best demonstrate your solution
- Check solution into GitHub

## Points Rules (AS UNDERSTOOD)
There are no points awarded for total transaction of less than $100.
2 points per dollar is awarded for total transaction above $100.
1 point per dollar is awarded for total transaction between $50 and $100.


## Expected Output 

Monthly rewards points earned subtotal and a total for 3 months.

# Installation and Configuration Instructions

## GitHub
https://github.com/cgauthier/react_shopping_rewards_bonus_poc

# Development Tools & Setup

## Development OS: Windows 11 Professional
## IDE: Visual Studio Code

## Node: v19.8.1
## NPM: 9.8.1
## Terminal: Git Bash

## React (core library)
https://create-react-app.dev/


## json-server (for data storage/retrival)
https://www.npmjs.com/package/json-server

# Setup Steps

## Create a folder on your OS
(e.g): c:\demo\

## Creating your app using create-react-app
Using your terminal, run the following command:

npm create-react-app my-app

Expected Result: a my-app folder will be created

## Installing JSON-SERVER 

JSON-SERVER will be used to serve data, it isn't part of a react build.  It is a separate application and instructions on setup and use are provided in this document.

Install anywhere on your system.

npm install -g json-server

## Running the App

### Start the JSON-SERVER

Normally we should have separate files, but this is a demo, so we keep it simple.

The URL in the app: "http://localhost:3001/db"
Run JSON-SERVER from src/data in its own terminal window
json-server --watch db.json --port 3001

### Start the React App
From the my-app directory: npm start

