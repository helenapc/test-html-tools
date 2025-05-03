const calcButtonOne = document.getElementById("calculate_btn_one");
const inputMoneyOne = document.getElementById("input_money_one");
const inputTnaOne = document.getElementById("input_tna_one");
const inputDaysOne = document.getElementById("input_days_one");
const calcTableOne = document.getElementById("calculate_table_one");
var calcTextOne = document.getElementById("calculate_text_one");

const calcButtonTwo = document.getElementById("calculate_btn_two");
const inputMoneyTwo = document.getElementById("input_money_two");
const inputTnaTwo = document.getElementById("input_tna_two");
const inputDaysTwo = document.getElementById("input_days_two");
const calcTableTwo = document.getElementById("calculate_table_two");
var calcTextTwo = document.getElementById("calculate_text_two");

calcButtonOne.addEventListener("click", async () => {

    calcTableOne.replaceChildren();

    let temp_money = Number(inputMoneyOne.value);

    let tna_day = (inputTnaOne.value / 365) / 100;


    let row = document.createElement('tr');
    let day_item = document.createElement('th');
    let total_item = document.createElement('th');
    let add_item = document.createElement('th');

    day_item.textContent = "Días"
    total_item.textContent = "Total";
    add_item.textContent = "Suma";

    row.append(day_item);
    row.append(total_item);
    row.append(add_item);
    calcTableOne.append(row);



    for (i = 0; i < inputDaysOne.value; i++) {
        temp_money += temp_money * tna_day.toFixed(5);
        //console.log(`$${temp_money.toFixed(2)} (+$${(temp_money * tna_day).toFixed(2)})`)

        let row = document.createElement('tr');
        let day_item = document.createElement('td');
        let total_item = document.createElement('td');
        let add_item = document.createElement('td');

        day_item.textContent = i + 1
        total_item.textContent = `+$${(temp_money * tna_day).toFixed(2)}`;
        add_item.textContent = `$${temp_money.toFixed(2)}`;

        row.append(day_item);
        row.append(total_item);
        row.append(add_item);
        calcTableOne.append(row);


    };


    calcTextOne.textContent = `$${temp_money.toFixed(2)} (+$${(temp_money - Number(inputMoneyOne.value)).toFixed(2)})`;

})



calcButtonTwo.addEventListener("click", async () => {

    calcTableTwo.replaceChildren();

    let temp_money = Number(inputMoneyTwo.value);

    const tna_day = (inputTnaTwo.value / 365) / 100;


    let row = document.createElement('tr');
    let day_item = document.createElement('th');
    let total_item = document.createElement('th');
    let add_item = document.createElement('th');

    day_item.textContent = "Días"
    total_item.textContent = "Total";
    add_item.textContent = "Suma";

    row.append(day_item);
    row.append(total_item);
    row.append(add_item);
    calcTableTwo.append(row);



    for (i = 0; i < inputDaysTwo.value; i++) {
        temp_money += temp_money * tna_day.toFixed(5);
        //console.log(`$${temp_money.toFixed(2)} (+$${(temp_money * tna_day).toFixed(2)})`)

        let row = document.createElement('tr');
        let day_item = document.createElement('td');
        let total_item = document.createElement('td');
        let add_item = document.createElement('td');

        day_item.textContent = i + 1
        total_item.textContent = `+$${(temp_money * tna_day).toFixed(2)}`;
        add_item.textContent = `$${temp_money.toFixed(2)}`;

        row.append(day_item);
        row.append(total_item);
        row.append(add_item);
        calcTableTwo.append(row);


    };


    calcTextTwo.textContent = `$${temp_money.toFixed(2)} (+$${(temp_money - Number(inputMoneyTwo.value)).toFixed(2)})`;

})