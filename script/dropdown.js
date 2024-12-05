const addressButton = document.getElementById('address-button');
const addressMenu = document.getElementById('address-menu');
const addressToggle = document.getElementById('address-toggle');
const selectedAddress = document.getElementById('selected-address');

addressButton.addEventListener('click',() => {
    addressMenu.classList.toggle('show')
});

addressToggle.addEventListener('click',() => {
    addressMenu.classList.toggle('show')
});

const radioButtons = document.querySelectorAll('input[name="address"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
    if (radio.checked) {
        selectedAddress.textContent = `${radio.value}`;
    }
    })
});