#!/usr/bin/env node
var Prompt = require("prompt-sync")({ sigint: true });
counter();
function counter() {
    console.log("Welcome to the counter");
    var choice = "-1";
    do {
        console.log("Enter 1 for word counter\nEnter 2 for character counter\nEnter 0 for exit\n");
        choice = Prompt("");
        if (choice == "1") {
            console.log("Enter the text:");
            var text = Prompt("");
            console.log("There are " + wordCounter(text) + " words in above text");
        }
        else if (choice == "2") {
            console.log("Enter the text:");
            var text = Prompt("");
            console.log("There are " + characterCounter(text) + " words in above text");
        }
        else if (choice == "0")
            console.log("Thanks for using this program");
        else
            console.log("Please enter the right choice");
    } while (choice != "0");
}
function characterCounter(text) {
    var counter = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) != " ")
            counter++;
    }
    return counter;
}
function wordCounter(text) {
    var counter = 0;
    text = text.trim();
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i - 1) != " " && text.charAt(i) == " ")
            counter++;
    }
    counter++;
    return counter;
}
