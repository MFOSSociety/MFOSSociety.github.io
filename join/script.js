const subscribeBttn = document.querySelector('button.subscribe-button');

window.addEventListener('click', e => {
    if((!e.path.includes(subscribeBttn) && subscribeBttn.classList.contains('active')) || e.target.classList.contains('subscribe-button'))
        toggleClasses();
});

const toggleClasses = () => {
    subscribeBttn.classList.toggle('active');
    document.body.classList.toggle('colorful');
}