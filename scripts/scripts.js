window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[1].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active')
        }
        
    }
}

// MODAL WINDOW 
const openModalBtn = document.querySelectorAll('[data-modal-target]')
const closeModalBtn = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.model.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalBtn.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}