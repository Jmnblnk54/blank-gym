
const q1 = '"I like pie." Author: Joshua the Blank';
const q2 =  '"Exercise is a dirty word. Every time I hear it I wash my mouth out with chocolate." Author: Charles Schulz';
const q3 =  '"The reason fat men are good natured is they can neither fight nor run." Author: Theodore Roosevelt';
const q4 =  '"Regarding the fitness craze: America has lost its soul; now it\'s trying to save its body." Author: George Carlin';
const q5 =  '"I don\'t count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count." Author: Muhammed Ali';
const q6 =  '"Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weights." Author: Ronnie Coleman';
const q7 =  '"The deadlift also serves as a way to train the mind to do things that are hard." Author: Mark Rippetoe';
const q8 =  '"Not less than two hours a day should be devoted to exercise, and the weather should be little regarded." Author: Thomas Jefferson';
const q9 =  '"It\'s easier to stay in shape if you never let yourself get out of shape in the first place." Author: Bill Loguidice';
const q10 =  '"Weight loss doesn\'t begin in the gym with a dumb bell; it starts in your head with a decision." Author: Toni Sorenson';
const q11 = '"The fact that they might still be alive in 5, 25, or even 50 years’ time is not enough to motivate fools to look after their bodies." Author: Mokokoma Mokhonoana';


const quoteArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

// export const currentQuote = quoteArray.map(quoteArray => {
//     return Math.floor(Math.random(quoteArray.length));
// });

let randomQuote = quoteArray[Math.floor(Math.random()*quoteArray.length)]
let authorIndex = randomQuote.indexOf("Author");
let Quote = randomQuote.substr(0, authorIndex-1);
let Author = randomQuote.substr(authorIndex, authorIndex+30);   

export { Quote, Author };