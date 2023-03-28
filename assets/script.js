"use strict";
//musteri inputu yaratmaq
{
    let num = document.getElementById('num');
    let show = document.getElementById('show');

    let result = '';
    for (let i = 1; i <= num.value; i++) {
        result += `<input placeholder="musteri ${i}"/>`;
    }
    show.innerHTML = result;
}
//X qara table 
{
    let btn = document.getElementById('btn');
    let tbl = document.getElementById('tbl');


    function add() {
        let result = "";
        for (let i = 1; i <= 9; i++) {
            result += `<tr>`;
            for (let j = 1; j <= 9; j++) {
                color = ((i + j) == 10 && (i == j)) ? 'black' : '';
                result += `<td style="background-color:${color};"> </td>`;
            }
            result += `</tr>`;
        }
        tbl.innerHTML = result;
    }
    btn.addEventListener('click', add)

}
// {
//     let inp = document.getElementById('num');
//     let btn = document.getElementById('btn2');

//     // function sum(a, b) {
//     //     num.innerHTML = a + b;
//     // }
//     function check(a,b) {
//         let result = (sum< 10) ? 'yes'(sum == null && sum == undefined) ? 'havnt number' : 'no'  
//         alert(result);
//     }

//     btn.addEventListener('click', check)

// }
{
    let input=prompt("please include  number");
    let result = (a+b< 10) ? 'yes' : 'no' 
    alert(result);
}
// Quvvetin tapilmasi
{
    let test4 = document.getElementById('test4');
    function numPower(num, pow) {

        return num ** pow;
    }

    test4.innerHTML = numPower(2, 2);
}
