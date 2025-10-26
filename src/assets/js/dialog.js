const closeButton = document.getElementById('close-sobre-mi');
const dialog = document.getElementById('sobre-mi-dialog');
const divSobreMi = document.getElementById('sobre-mi-box');

divSobreMi?.addEventListener('click', () => {
    dialog?.showModal();
});

closeButton?.addEventListener('click', () => {
    dialog?.close();
});
