const addButton = document.getElementById('add_button');
const deleteButton = document.getElementById('delete_button');
const nameErrorContainer = document.getElementById('name_error');
const telErrorContainer = document.getElementById('tel_error')
const contactContainer = document.getElementById('contacts_container');

let inputName = document.getElementById('input_name');
let inputTel = document.getElementById('input_tel');

const contacts = [];

const regex = /\d{11}/

function nameValidation() {
    if (inputName.value === '') {
        nameErrorContainer.innerHTML="*Campo não pode estar vazio!"
    } else {
        nameErrorContainer.innerHTML = ""; // Clear error message
    }
}
function telValidation() {
    if (inputTel.value === '') {
        telErrorContainer.innerHTML="*Campo não pode estar vazio!"
    }else if(!inputTel.value.match(regex)) {
        telErrorContainer.innerHTML="Número inválido"
    } else {
        telErrorContainer.innerHTML = ""; // Clear error message
    }
}
function addContact() {
    const contactName = inputName.value
    const contactNumber = inputTel.value

    contacts.push({ nome: contactName, numero: contactNumber });
    
    contactContainer.innerHTML = "";

    contacts.forEach((contact) => {
        contactContainer.innerHTML += `
            <tr>
                <td>
                    ${contact.nome}
                </td>
                <td>
                    ${contact.numero}
                </td>
                <td class="del-container">
                    <button class="del" id="delete_button">X</button>
                </td>
            </tr>
        `;
    });
}

deleteButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('del')) {
        const rowIndex = e.target.closest('tr').rowIndex;
        contacts.splice(rowIndex - 1, 1); 
        updateContactsTable();
    }
});

addButton.addEventListener('click', (e) => {
    e.preventDefault()
    
    nameValidation()
    telValidation()
    addContact()

    console.log('Botão pressionado')

    inputName.value = '';
    inputTel.value = '';
    console.log(contacts)
})

