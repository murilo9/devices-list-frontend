# Devices List App

by Murilo Henrique Matias

## What features does this app have?

- Authentication
- Persistent cart (each user has its own cart)
- Can be started with a single docker-compose up command

## How do I init the app?

You may run the app locally with ```npm run start```, or inside a docker container with ```docker-compose up```. The container is meant to run a development (not production) environment.

## How may I use this app?

Open your browser at "localhost:3000". You'll face the Login page. Click 'Sign Up' and register a user (or many) for yourself. You may sign in with your created user's credentials. You'll be redirected to the Main page.
The Main page shows a list of registered devices, as well as some details about them (name, description, amount in cart).
Click on a device to open a modal where you may add or remove an amount of it to your cart. Closing the modal by clicking the "Cancel" button will NOT save the changes. Closing the modal by any other means (close button, "Done" button, clicking outside) will save your changes.
