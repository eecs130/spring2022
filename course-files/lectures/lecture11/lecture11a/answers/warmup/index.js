const add_numbers = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.querySelector("#answer").innerHTML = Number(num1) + Number(num2);
}

document.getElementById('add').onclick = add_numbers;