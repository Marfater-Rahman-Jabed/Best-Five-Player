
const playerArray = [];
function added(players) {
    const List = document.getElementById('added-Player');
    List.innerHTML = '';
    for (let i = 0; i < players.length; i++) {
        // console.log(players[i]);
        const name = players[i];

        const li = document.createElement("ol");

        li.innerHTML = `
<li>${i + 1}.  <span class="ml-4"> ${name}</span> </li>

        `;
        List.appendChild(li);
    }
}

function Selected(element) {
    // console.log(element.parentNode.parentNode.children[0].innerText);
    const playerName = element.parentNode.parentNode.children[0].innerText;
    if (playerArray.length < 5) {
        playerArray.push(playerName);
        if (playerName == 'Leonel Messi') {
            document.getElementById("myBtn1").disabled = true;
        }
        if (playerName == 'Naymar Jr.') {
            document.getElementById("myBtn2").disabled = true;
        }
        if (playerName == 'CR. Ronaldo') {
            document.getElementById("myBtn3").disabled = true;
        }
        if (playerName == 'Kylian Mbappe`') {
            document.getElementById("myBtn4").disabled = true;
        }
        if (playerName == 'Arjen Robin') {
            document.getElementById("myBtn5").disabled = true;
        }
        if (playerName == 'Mohamed Salah') {
            document.getElementById("myBtn6").disabled = true;
        }
        if (playerName == 'Marcello') {
            document.getElementById("myBtn7").disabled = true;
        }
        if (playerName == 'De Maria') {
            document.getElementById("myBtn8").disabled = true;
        }
        if (playerName == 'Mesut Ozil') {
            document.getElementById("myBtn9").disabled = true;
        }
    }
    else {
        alert('You select already 5 players');
    }
    // console.log(playerArray);
    added(playerArray);





}

function commonFunction(elementId) {
    const Inputelement = document.getElementById(elementId);
    const InputelementString = Inputelement.value;
    const InputValue = parseFloat(InputelementString);
    if (isNaN(InputValue)) {
        alert('Please Enter The valid Input');
    }
    else {
        return InputValue;
    }


}

document.getElementById('btn-calculate-1').addEventListener('click', function () {
    const firstInput = commonFunction('first-input');


    const calculation = firstInput * playerArray.length;

    // console.log(calculation);
    const ExpenseTotal = document.getElementById('player-expense');
    if (!isNaN(calculation)) {
        ExpenseTotal.innerText = calculation;
    }

});

document.getElementById('btn-Calculate-total').addEventListener('click', function () {
    const managerCost = commonFunction('manager-taka');
    const couchCost = commonFunction('Couch-taka');
    const calculation2 = managerCost + couchCost;
    const ExpenseTotal = document.getElementById('player-expense');
    const ExpenseTotalString = ExpenseTotal.innerText;
    const ExpenseTotalValue = parseFloat(ExpenseTotalString);

    const LastExpense = ExpenseTotalValue + calculation2;

    const lastTotal = document.getElementById('Last-total');
    if (!isNaN(LastExpense)) {
        lastTotal.innerText = LastExpense;
    }

})