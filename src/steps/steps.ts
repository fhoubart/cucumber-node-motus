import { App } from "../app/App";

const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
//import { Given, When, Then } from "cucumber";

Before(function() {
  this.app = new App();
});

Given('L\'application est démarrée', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


When('on appelle la méthode hello', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('affiche un message hello world', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});


Given('Le mot a deviner est {string}', function (mot:string) {
    // Write code here that turns the phrase above into concrete actions
    this.app.setMotADeviner(mot);
  });

  When('le joueur propose {string}', function (mot:string) {
    // Write code here that turns the phrase above into concrete actions
    this.app.propose(mot);
  });


  Then('le joueur a gagne', function () {
    // Write code here that turns the phrase above into concrete actions
    assert(this.app.aGagne());
  });

  Then('le joueur n\'a pas gagne', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });