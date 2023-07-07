// Code your solutions in this file
const thankYouMessages = [];

function writeCards(names, ocassion) {

    for (let i = 0; i < names.length; i++){
        const messages = `Thank you, ${names[i]}, for the wonderful ${ocassion} gift!`;
        
        thankYouMessages.push(messages);
    }
    return thankYouMessages;
}

function countDown(number){
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}

//the opposite for counting up 
//let countup = 0;
//while (countup < 10) {
//  console.log(countup++);
//}