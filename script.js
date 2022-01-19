const greetings = ['Hello','Greetings','Hi there','Bonjour','Welcome','Hello there','Well hello','Well hi there','Howdy','Hi friend','Hey'];
const emojis = [['💛','💚','💙','🖤','💜','🧡'],['🦄','🦋','🐸','🐝','🐥','🐠'],['🌸','🌼','🌺','🌻']];
const adjectives = ['beautiful','gorgeous','stunning','smart','intelligent','creative','brilliant','strong','compassionate','unique'];
const verbs = ['be successfull','be wealthy','be famous','excel','find happiness','find love','find what you are looking for','be amazing at your own capabilities','make others smile','light up rooms'];
const actions = ['try something new','compliment a stranger','introduce yourself to someone new','treat yourself','make a big decision','just go for it','be your best self'];
const closings = ['rock on','have a great day','good luck','goodbye','see ya','go kill it',"you're gonna do great"];

const randomIndex = array => {
    return Math.floor(Math.random()*array.length);
};

const getGreeting = () => {
    let greeting = greetings[randomIndex(greetings)];
    return greeting+'!';
};

const getEmoji = () => {
    let emoji = emojis[randomIndex(emojis)];
    return emoji;
};

const getAdjective = () => {
    let adjective = adjectives[randomIndex(adjectives)];
    return `You are ${adjective}!`;
};

const getVerb = () => {
    let verb = verbs[randomIndex(verbs)];
    return `You will ${verb}!`;
};

const getAction = () => {
    let action = actions[randomIndex(actions)];
    return `Today, you should ${action}.`
};

const getClosing = () => {
    let closing = closings[randomIndex(closings)];
    closing[0].toUpperCase;
    return closing+'!';
};

const createMessage = () => {
    let greeting = getGreeting();
    let emoji = getEmoji();
    let adjectice = getAdjective();
    let verb = getVerb();
    let action = getAction();
    let closing = getClosing();
    console.log(greeting+emoji);
    console.log(adjective,verb,action,closing);
}

createMessage();