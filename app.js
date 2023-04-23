//innocent array of cards
const cardArray=[
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'icecream',
    img: 'images/icecream.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'icecream',
    img: 'images/icecream.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  }
]

//all the variables( and not ;) ) here
const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsMatched=[]


//creating a board og cards -- CALLING THE flipCard
function createBoard(){
  cardArray.sort(() => 0.5 - Math.random())//to sort randomly!!!!!!
  console.log(cardArray)
  for(let i=0; i<cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click',flipCard)
    gridDisplay.appendChild(card) //??????method
  }
}
createBoard()

//checking for matches until the user won -- THEN CALLING A createBoard
function checkMatch(){
  let cards = document.querySelectorAll('img')

  if (cardsChosen[0]==cardsChosen[1]){
    //alert('You found a match')
    cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
    cardsMatched.push(cardsChosenIds)
    resultDisplay.innerHTML = cardsMatched.length
    console.log(cardsMatched)
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
  }

  if (cardsChosen[0]!=cardsChosen[1]){
    //alert('Try one more time :(')
    cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
  }
  if(cardsMatched.length==cardArray.length/2){
  alert(' You won!')
  $('#grid').empty()
  cardsMatched=[]
  resultDisplay.innerHTML = cardsMatched.length
  createBoard()
}
  cardsChosen=[]
  cardsChosenIds=[]
}

//flipping card function-- CALLING THE checkMatch
function flipCard(){
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  console.log(cardsChosen)
  cardsChosenIds.push(cardId)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
  }
}
