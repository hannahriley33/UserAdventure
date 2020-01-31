import renderQuestLink from './createQuestLink.js';
import questData from '../data/adventureData.js'

// get element from dom where the quests will appear
const nav = document.getElementById('mapLinksGoHere');

// go through every item in questsData (consultation, shampoo, chair)
for (let i = 0; i < questsData.length; i++); {
//default for every quest
    const whichQuest = questsData[i];
    let questDisplayOrNot = null;

    // if quest has been completed:
    

};

// check localStorage to see what questions have been completed 
// if there are no questions left to answer
   // redirect to the results page
// if there are any questions left to answer . . .
// render a list of REMAINING questions based on the metadata
    // get the ul from the DOM
    // get the questions from the meta data
    // loop through the questions
        // for each question . . .
        // get a question from the array 
        // make an li for the question
            // create li
            // make an a tag for the li
            // UNLESS the question is already completed (check local storage). If so, make a span
            // add textContent and other properties to a tag
            // add the href to the a tag with query params for the question
            // append a tag to li
        // append the question li to the ul