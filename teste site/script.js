const eventos = document.querySelectorAll('.evento');
const espacos = document.querySelectorAll('.espaco');
const imagemEvento = document.getElementById('imagem-evento');
const descricaoEvento = document.getElementById('descricao-evento');
const imagemEspaco = document.getElementById('imagem-espaco');
const descricaoEspaco = document.getElementById('descricao-espaco');

eventos.forEach(evento => {
    evento.addEventListener('click', () => {
        const imagem = evento.getAttribute('data-imagem');
        const descricao = evento.getAttribute('data-descricao');
        imagemEvento.src = imagem;
        descricaoEvento.textContent = descricao;
    });
});

espacos.forEach(espaco => {
    espaco.addEventListener('click', () => {
        const imagem = espaco.getAttribute('data-imagem');
        const descricao = espaco.getAttribute('data-descricao');
        imagemEspaco.src = imagem;
        descricaoEspaco.textContent = descricao;
    });
});