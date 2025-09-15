'use strict'

function buscarImagem(urlDaImagem) {
    const itemDaGrade = document.createElement('div')
    itemDaGrade.classList.add('grid-item')

    const imagem = document.createElement('img')
    imagem.src = urlDaImagem
    itemDaGrade.appendChild(imagem)
    return itemDaGrade
}

function exibirImagens(url) {
    const grid = document.querySelector('.grid')
    if (grid) {
        grid.replaceChildren()
        url.forEach(url => {
            const criarCachorro = buscarImagem(url)
            grid.appendChild(criarCachorro)
        })
    }
}

async function buscarImagensDeCachorro(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`;
    const response = await fetch(url)
    const data = await response.json()
    return data.message
}

document.getElementById('searchDog').addEventListener('keydown', async (evento) => {
    if (evento.key === 'Enter') {
        const raca = (evento.target.value)
        const imagens = await buscarImagensDeCachorro(raca)
        exibirImagens(imagens)
    }
});