let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let xRaquete = 5;
    yRaquete = 150;
    raqueteComprimento = 10;
    raqueteAltura = 90;

let xRaqueteOponente = 585;
    yRaqueteOponente = 150;
let velocidadeYOponente;

let meusPontos = 0;
    pontosDoOponente = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete,yRaquete);
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
    marcaPontoOponente();

}
function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x,y){
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete || xBolinha + raio > xRaqueteOponente + raqueteComprimento && yBolinha - raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente){
        velocidadeXBolinha *= - 1; 
}
}

function movimentaRaqueteOponente(){
    if (keyIsDown(87)){
        yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        yRaqueteOponente += 10;
    }
}

function incluiPlacar(){
    fill (255);
    text(meusPontos, 200, 26);
    text(pontosDoOponente, 400, 26);
}

function marcaPonto(){
    if(xBolinha + raio > width){
        meusPontos ++;
    }
}

function marcaPontoOponente(){
    if(xBolinha - raio < 0){
        pontosDoOponente ++;
    }
}