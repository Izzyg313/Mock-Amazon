const paymentButton = document.getElementById('payment-dropdown');
const paymentMenu = document.getElementById('payment-menu');
const paymentToggle = document.getElementById('payment-toggle');
const selectedPayment = document.getElementById('selected-payment');

paymentButton.addEventListener('click', () => {
    paymentMenu.classList.toggle('show');
});

paymentToggle.addEventListener('click',() => {
    paymentMenu.classList.toggle('show')
});

//Did not function and caused the dropdown menu to fail
/*const radioButtons = document.querySelectorAll('input[name="payment"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
    if (radio.checked) {
        selectedPayment.textContent = `${radio.value}`;
    }
    })
});*/