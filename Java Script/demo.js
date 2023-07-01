let namasteBtn = document.querySelector('button');

// namasteBtn.addEventListener('click', showMsg);                // A pop-up msg will be shown on the main page

// function showMsg(){
//     alert("Namaste World!");
// }

namasteBtn.addEventListener('click', inputMsg);              // Take input from the use and then shown on the main page

function inputMsg(){
    let name = prompt("Enter Name of Student");
    namasteBtn.textContent = 'Button 1: ' + name;
}