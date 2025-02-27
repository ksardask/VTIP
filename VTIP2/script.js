class Department {
    constructor(number, name, fio, phone, staff, address) {
        this.number = number;
        this.name = name;
        this.fio = fio;
        this.phone = phone;
        this.staff = staff;
        this.address = address;
    }

    display() {
        return {
            number: this.number,
            name: this.name,
            fio: this.fio,
            phone: this.phone,
            staff: this.staff,
            address: this.address
        };
    }
}

const departments = new Map();

document.addEventListener('DOMContentLoaded', () => {
    const formTemplate = document.getElementById('form-template').innerHTML;
    const compiledFormTemplate = Handlebars.compile(formTemplate);
    document.getElementById('formContainer').innerHTML = compiledFormTemplate();

});

function addData() {
    const number = document.getElementById('number').value;
    if (departments.has(number)) {
        alert('Запись с таким номером уже существует');
        return;
    }

    const name = document.getElementById('name').value;
    const fio = document.getElementById('fio').value;
    const phone = document.getElementById('phone').value;
    const staff = document.getElementById('staff').value;
    const address = document.getElementById('address').value;

    const department = new Department(number, name, fio, phone, staff, address);
    departments.set(number, department);
    alert('Данные добавлены');
    document.getElementById('departmentForm').reset();

}

function deleteData() {
    const number = prompt('Введите номер для удаления:');
    if (departments.delete(number)) {
        alert('Запись удалена');
    } else {
        alert('Запись с таким номером не найдена');
    }
}

function showAllData() {
    const tableTemplate = document.getElementById('table-template').innerHTML;
    const compiledTableTemplate = Handlebars.compile(tableTemplate);
    const context = { departments: Array.from(departments.values()).map(dep => dep.display()) };
    document.getElementById('output').innerHTML = compiledTableTemplate(context);
}

function showData() {
    const number = prompt('Введите номер для отображения:');
    const department = departments.get(number);
    if (department) {
        const { number, name, fio, phone, staff, address } = department;
        document.getElementById('number').value = number;
        document.getElementById('name').value = name;
        document.getElementById('fio').value = fio;
        document.getElementById('phone').value = phone;
        document.getElementById('staff').value = staff;
        document.getElementById('address').value = address;
    } else {
        alert('Запись не найдена');
    }
}

function clearTable() {
    document.getElementById('output').innerHTML = '';
}
