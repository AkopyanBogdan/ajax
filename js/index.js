document.getElementById('page-loaded').innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('btn-check-account').addEventListener('click', checkAccount);

//1. Create XHR
//2. Initialize XHR properties with parameters of a request
//3. Make request
//4. Handle request result  (this step is asynchronous)

function checkAccount() {
    //1. create xmlHttpRequest
    const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange() - буде містити функція, яка буде обробляти зміну стану запиту
    // xhr.readyState - стан запиту зберігається тут (число від 0 до 4)
    // 4 - запит закінчився
    // xhr.status - міститься код статуса протокола http. якщо 200 - все добре
    // xhr.responseText - тут знаходсяться дані
    // xhr.responseXML - тут знаходсяться дані якщо приходить xml
    
    //2. Initialize XHR properties with parameters of a request
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            //3. Make request
            //const data = xhr.responseText; // приходить рядок string
            const data = JSON.parse(xhr.responseText); // об'єкт js
            document.getElementById('client-name').innerHTML = data['client-name'];
            document.getElementById('account-balance').innerHTML = data['account-balance'];
            //якби було без дифісів, то можна було б написати
            //document.getElementById('accountbalance').innerHTML = data.accountbalance;
        }
    }
    //4. Handle request result  (this step is asynchronous)
    //GET запит кешується.
    //POST не кешується
    //method (GET, POST, PUT, DELETE) - залежить від сервера
    
    //щоб завжди слати унікальний GET запит:
    //до кожного запиту буде додавати додатково якесь число
    xhr.open('GET', 'client-data.json?p='+Math.random(), true);
    xhr.send();
}

document.getElementById('btn-get-fragment').addEventListener('click', getHtml);

function getHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200)
        {
            document.getElementById('container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'fragment.html', true);
    xhr.send();
}




