// Code your solutions in this file
function writeCards(namesArray, event) {
    const messagesArray = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
      messagesArray.push(message);
    }
  
    return messagesArray;
  }
  
  function countDown(number) {
    let i = number;
  
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  