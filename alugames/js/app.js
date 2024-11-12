function alterarStatus(id) {
    let gameClicado = document.getElementById (`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__items__item');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    imagem = imagem.closest('.dashboard__item__img');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
    }
}