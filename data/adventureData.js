const shampoo = {
    id: `shampoo`,
    title: `Shampoo`,
    // image: 
    // audio: 
    // action: ,
    description: ` You sit down at the shampoo bowl and your stylist begins to shampoo your hair. The stylist asks you to relax and quietly enjoy this part of the service. What do you do next?`,
    choices: [{ //choice 1
        id: `relax`,
        description: `Close your eyes and enjoy the shampoo service`,
        result: `You receive a thorough shampoo and the stylist throws in an extra deep conditioning treatment because of your awesome salon etiquette.`,
        rapport: `20`,
        technical: `20`,
    }, { //choice 2
        id: `chat`,
        description: `You sit back in the chair and proceed to make small talk with your                 stylist. You also ask about the products they are using and why they chose              them.`,
        result: `You receive a decent shampoo but the stylist was distracted by your questions          which led to your conditioner not being fully rinsed out.`,
        rapport: `10`,
        technical: `10`,
    }, { //choice 3
        id: `nervous`,
        description: `You cautiously sit back in the chair and begin rapid firing questions                 about what your stylist is doing. You ask to adjust the water temperature               and constantly adjust your position in the chair.`,
        result: `You receive a rushed shampoo job as your stylist is peeved about your                  fidgeting and questions. You also notice that the back of your shirt is wet.`,
        rapport: `1`,
        technical: `1`,
    }]
};
const consultation = {
    id: `consultation`,
    title: `Consultation`,
    //image:
    //audio:
    //action:
    description: `Your stylist comes out and greets you and you proceed to the chair together.              After getting settled your stylist asks you what type of cut you had in mind                for today. What do you do next?`,
    choices: [{ //choice 1
        id: `consultationPlan`,
        description: `You have been looking forward to this appointment and have several                    haircut inspiration pictures saved on your phone. You show your stylist                 these photos and tell them what you like about each one.`,
        result: `You are confident that you and your stylist are on the same page and you excitedly proceed to the shampoo bowl.`,
        rapport: `30`,
        technical: `30`,
    }, { //choice 2
        id: `consultationNotSure`,
        description: `This appointment snuck up on you and you aren't totally sure what kind                of cut you are looking for. You have a vague general idea and verbally                  describe what you're thinking to your stylist.`,
        result: `You think that you and your stylist are on the same page and you feel good             about proceeding to the shampoo bowl.`,
        rapport: `10`,
        technical: `4`,
     }, { //choice 3 
        id: `consultationNoIdea`,
        description: `You did not think much about this appointment before coming in. You tell              your stylist that you trust them and would like them to do whatever                     haircut they think will look best. Your stylist presents you with a couple of options and you pick the one you like best.`,
        result: `You proceed to the shampoo bowl after a long consultation. You can tell your           stylist is a bit annoyed and you see them nervously checking the time`,
        rapport: `-40`,
        technical: `2`,
     }
    ]
}

const chair = {
    id: `chair`,
    title: `Chair`,
    //image:
    //audio:
    //action:
    description: `You proceed to the chair after your shampoo service. The stylist combs out                your hair and proceeds with the cut. What do you do next?`,
    choices: [{ //choice 1 
        id: `cutGood`,
        description: `You casually flip through a magazine while making small talk with your                stylist. You ask about the products being used and if the stylist has any               suggestions for you to style your new cut for a fun night out.`,
        result: `Your haircut is technically perfect and your blowout is killer. Your                   politeness led your stylist to actually demonstrate the night out style you             asked about and spends extra time with you so you can recreate it at home.`,
        rapport: `40`,
        technical: `50`,
    }, { //choice 2
        id: `cutOkay`,
        description: `You chat casually with your stylist during your appointment and inquire               about that products the stylist is using in your hair. After your stylist               is done with your blowout, you realize that you want another inch off.                 You ask the stylist to cut off the extra inch and they oblige.`,
        result: `Your haircut looks good. There are a few uneven spots that were created when           your stylist performed the dry cut after, but only a trained professional              would notice them. Because the cut had to be altered after the blow dry,               your blowout is not great.`,
        rapport: `10`,
        technical: `5`,
    }, { //choice 3
        id: `cutBad`,
        description: `You ask the stylist to readjust your cut multiple times after the                     initial length is established. You tell the stylist that you would prefer               for them not to use product in your hair.`,
        result: `Your haircut is uneven and the layers are not blended because the stylist had          to rush because of all of the changes requested. Since you didn't want                  product used in your hair for the blowout, it is frizzy and not shiny or              smooth.`,
        rapport: `-10`,
        technical: `1`, 
    }]
};     
    


// `You have a pleasant service and your stylist gives you a bomb blow out. You            purchase one of the products they used in your hair and prebook your next              appointment.`