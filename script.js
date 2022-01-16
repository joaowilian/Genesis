let order = [];
let clickOrder = [];
let score = 0;

// 0 --> verde
// 1 --> vermelho
// 2 --> amarelo
// 3 --> azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder =  Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder  = [];

    for(let i in order){
        let elementeColor = createColorElement(order[i]);
        lightColor(elementeColor, Number(i) + 1);

    }
}

//acende a proxima cor 
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    },number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
   
    },number);
}

// checa a sequencia dos cliques
let checkOrder = () =>{
    for(let i in clickOrder){
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando proximo nivel!`);
        setTimeout(() => {
            nextLevel();
        },500)
        

    }
}

// retorna o clic do usuario
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');



    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

// função que retorna a cor
let createColorElement = (color) => {
    if(color == 0 ) {
        return green;        
    }else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

// proximo nivel do jogo
let nextLevel = () =>{
    score++;   
    shuffleOrder();
}

//fim de jogo
let gameOver = () =>{
    alert(`pontuação: ${score}!\n você perdeu o jogo\n Clique em OK para iniciar um novo jogo `);
    order = [];
    clickOrder = [];

    playGame();
}

//inicio de jogo
let playGame = () => {
    
    alert('Bem vindo ao genesis! Iniciando um novo jogo');
    
    score = 0;
    
    setTimeout(() =>{
        nextLevel();
    },500);
    //nextLevel();
    
}

green.onclick = () =>click(0);
red.onclick = () =>click(1);
yellow.onclick = () =>click(2);
blue.onclick = () =>click(3);

playGame();