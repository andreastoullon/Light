const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

// Função para verificar se a lâmpada está quebrada
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

// Função para ligar a lâmpada
function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
        document.body.style.backgroundColor = 'red';
    }
}

// Função para desligar a lâmpada
function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
    }
}

// Função para quebrar a lâmpada
function lampBroken() {
    lamp.src = './img/quebrada.jpg';
    // Desabilitar os eventos de mouse enquanto a lâmpada está quebrada
    lamp.removeEventListener('mouseover', lampOn);
    lamp.removeEventListener('mouseleave', lampOff);
}

// Função para alternar entre ligar e desligar a lâmpada
function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}



// Verifica se a lâmpada está ligada antes de permitir que o evento `mouseleave` desligue a lâmpada
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', () => {
    // Só desliga a lâmpada se ela não estiver ligada
    if (turnOnOff.textContent === 'Ligar') {
        lampOff();
    }
});

// Evento de duplo clique para quebrar a lâmpada
lamp.addEventListener('dblclick', lampBroken);

// Evento de clique no botão de ligar/desligar
turnOnOff.addEventListener('click', lampOnOff);


