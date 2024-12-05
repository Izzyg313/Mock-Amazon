const editButtons = document.querySelectorAll('.edit-button');
const editDropdown = document.getElementById('edit-dropdown');
const deleteButtons = document.querySelectorAll('.delete-button');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        const radioInput = button.closest('.address-list').querySelector('input[type="radio"]')
        document.getElementById('new-address').value = radioInput.value;

        const currentAddress = button.closest('.address-list').querySelector('input[type="radio"]').value;
        editDropdown.classList.add('show')

        document.getElementById('new-address').value = currentAddress;

        document.getElementById('save-changes').addEventListener('click', () => {
            const newAddress = document.getElementById('new-address').value
            button.closest('.address-list').querySelector('input[type="radio"]').value = newAddress
            button.closest('.address-list').querySelector('label').textContent = newAddress
            editDropdown.classList.remove('show')
        
        });
        document.getElementById('cancel-edit').addEventListener('click', () => {
            editDropdown.classList.remove('show')
        })
    });
})

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
    const addressList = button.closest('.address-list');
    addressList.remove();
    });
});
