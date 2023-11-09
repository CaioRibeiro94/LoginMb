window.addEventListener("scroll", function(){
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

// MODAL

function abrirM(){
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id =='janela-modal'){
            modal.classList.remove('abrir');
        }
    });

}