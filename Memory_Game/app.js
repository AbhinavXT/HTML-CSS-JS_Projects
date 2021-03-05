document.addEventListener("DOMContentLoaded", () => {
    const cardArray=[
        {
            name:'avenger',
            img:'Images/avengers.png'
        },
        {
            name:'avenger',
            img:'Images/avengers.png'
        },
        {
            name:'batman',
            img:'Images/batman.png'
        },
        {
            name:'batman',
            img:'Images/batman.png'
        },
        {
            name:'flash',
            img:'Images/flash.png'
        },
        {
            name:'flash',
            img:'Images/flash.png'
        },
        {
            name:'spiderman',
            img:'Images/spiderman.png'
        },
        {
            name:'spiderman',
            img:'Images/spiderman.png'
        },
        {
            name:'superman',
            img:'Images/Superman.png'
        },
        {
            name:'superman',
            img:'Images/Superman.png'
        },
        {
            name:'xmen',
            img:'Images/XMen.png'
        },
        {
            name:'xmen',
            img:'Images/XMen.png'
        }
    ];
    
    cardArray.sort(() => 0.5-Math.random());

    const grid=document.querySelector('.grid');
    let result_span=document.getElementById('result');
    let cardChosen=[];
    let cardChosenID=[];
    let cardsWon=[]

    function createBoard(){
        for(let i=0;i<cardArray.length;i++)
        {
            var card=document.createElement('img');
            card.setAttribute('src','Images/Pattern.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);
        }
    }

    function checkMatch(){
        var cards=document.querySelectorAll('img');
        const opOneId=cardChosenID[0];
        const opTwoId=cardChosenID[1];
        if(cardChosen[0]===cardChosen[1]){
            alert("You have found a match ^_^");
            cards[opOneId].setAttribute('src','Images/clear.jpg');
            cards[opTwoId].setAttribute('src','Images/clear.jpg');
            cardsWon.push(cardChosen);
        }
        else{
            cards[opOneId].setAttribute('src','Images/Pattern.png');
            cards[opTwoId].setAttribute('src','Images/Pattern.png');
            alert("Sorry match not found. Try again -_-");
        }
        cardChosen=[];
        cardChosenID=[];
        result_span.textContent=cardsWon.length;
        if(cardsWon.length===cardArray.length/2){
            alert("Congratulations! You Won");
        }
    }

    function flipCard(){
        var cardId= this.getAttribute('data-Id');
        cardChosen.push(cardArray[cardId].name);
        cardChosenID.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        if(cardChosen.length===2){
            setTimeout(checkMatch,500);
        }
    }

    createBoard();
})