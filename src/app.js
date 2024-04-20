/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateExcuse() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    //Randomly select one item from eacharray
    let whoRandom = who[Math.floor(Math.random() * who.length)];
    let actionRandom = action[Math.floor(Math.random() * action.length)];
    let whatRandom = what[Math.floor(Math.random() * what.length)];
    let whenRandom = when[Math.floor(Math.random() * when.length)];

    //Put together the excuse string
    let excuse =
      whoRandom +
      " " +
      actionRandom +
      " " +
      whatRandom +
      " " +
      whenRandom +
      ".";
    document.getElementById("excuse").innerHTML = excuse;

    return excuse;
  }

  document.getElementById("excuse").innerHTML = excuse;
  const target = document.querySelector("#excuse");
  const button = document.getElementById("button");
  button.onclick = generateExcuse;
  console.log(target.children);
  target.innerHTML = generateExcuse();
};
