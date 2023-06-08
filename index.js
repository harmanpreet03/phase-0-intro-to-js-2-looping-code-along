function writeCards(arrNames, eventName) {
    let thankYouMessages = [];
  
    for (let i = 0; i < arrNames.length; i++) {
      let message = `Thank you, ${arrNames[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const arrNames = ["Charlie", "Samip", "Ali"];
  const event = "birthday";
  const messages = writeCards(arrNames, event);
  
  console.log(messages);

  const nummm = 5;

  function countDown(nummm){
    
      for (let i = nummm; i >= 0; i--) {
        console.log(i)
    }

    }
