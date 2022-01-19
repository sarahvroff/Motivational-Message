//Arrays of message components
const greetings = ['Hello','Greetings','Hi there','Bonjour','Welcome','Hello there','Well hello','Well hi there','Howdy','Hi friend','Hey'];
const emojis = [['💛','💚','💙','🖤','💜','🧡'],['🦄','🦋','🐸','🐝','🐥','🐠'],['🌸','🌼','🌺','🌻']];
const adjectives = ['beautiful','gorgeous','stunning','smart','intelligent','creative','brilliant','strong','compassionate','unique'];
const verbs = ['be successfull','be wealthy','be famous','excel','find happiness','find love','find what you are looking for','be amazing at your own capabilities','make others smile','light up rooms'];
const actions = ['try something new','compliment a stranger','introduce yourself to someone new','treat yourself','make a big decision','just go for it','be your best self'];
const closings = ['Rock on','Have a great day','Good luck','Goodbye','See ya','Go kill it',"You're gonna do great"];

//helper function that generates a random index
const randomIndex = array => {
    return Math.floor(Math.random()*array.length);
};

//gets a random greeting
const getGreeting = () => {
    let greeting = greetings[randomIndex(greetings)];
    return greeting+'!';
};

//gets a random emoji
const getEmoji = () => {
    let emoji = emojis[randomIndex(emojis)][randomIndex(emojis)];
    return emoji;
};

//gets a random adjective
const getAdjective = () => {
    let adjective = adjectives[randomIndex(adjectives)];
    return `You are ${adjective}!`;
};

//gets a random verb
const getVerb = () => {
    let verb = verbs[randomIndex(verbs)];
    return `You will ${verb}!`;
};

//gets a random action
const getAction = () => {
    let action = actions[randomIndex(actions)];
    return `Today, you should ${action}.`
};

//gets a random closing
const getClosing = () => {
    let closing = closings[randomIndex(closings)];
    return closing+'!';
};

//Formats and returns the entire message
const createMessage = () => {
    let greeting = getGreeting();
    let emoji = getEmoji();
    let adjective = getAdjective();
    let verb = getVerb();
    let action = getAction();
    let closing = getClosing();
    console.log(greeting+emoji);
    console.log(adjective,verb,action,closing);
}

//Calls the message function 
createMessage();
