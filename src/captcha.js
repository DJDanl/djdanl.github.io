var getNumber = Math.floor(Math.random() * 110233) + 0
var promptcap = prompt(`Antes de tudo, escreva o seguinte numero: ${getNumber}`)

while(promptcap != getNumber) {
    getNumber = Math.floor(Math.random() * 110233) + 0
    promptcap = prompt(`Escreve isso poh: ${getNumber}`)
}