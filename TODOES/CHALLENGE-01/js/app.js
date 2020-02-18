const dateElement = document.querySelector('#date');

const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
dateElement.innerHTML = new Date().toLocaleDateString('en-US', option);
