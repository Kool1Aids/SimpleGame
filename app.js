// function randomnum() {
//   let number = document.querySelector("#number");
//   var randomNumber = Math.floor(Math.random() * 10).number;
//   return element.write(randomNumber());
// }

// let element = getquerySelector("#card")



function ranNumber(){
    // random number generator
    let number = Math.floor(Math.random() * 10)
    //how to add it to the div. no hashtag
    document.getElementById('number').innerText = number;
  } 
  
  function ranSymbol() {
    let symbols = ["♠", "♣", "♦", "♥"]
    var thing = symbols[Math.floor(Math.random()*symbols.length)];
    if (thing === symbols[0]){
      document.getElementById('symbol').innerText = thing;
      document.getElementById('symbol').style.color = 'black'
    }
    if ( thing === symbols[1]){
      document.getElementById('symbol').innerText = thing;
      document.getElementById('symbol').style.color = 'black'
    }
    if ( thing === symbols[2]){
      document.getElementById('symbol').innerText = thing;
      document.getElementById('symbol').style.color = 'red'
    }
    if ( thing === symbols[3]){
      document.getElementById('symbol').innerText = thing;
      document.getElementById('symbol').style.color = 'red'
    }
    return
  }
  
  function myFunction() {
    ranNumber()
    ranSymbol()
}

  
   ranSymbol()
  
  ranNumber()