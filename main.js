let resultText = document.querySelector("#resultText")
let resultBtn = document.querySelector("#result")

let choiceList1 = document.querySelectorAll("input[name='game']")
let choiceGame1 = document.querySelector("input[name='result-game']")
let trueChoice = null

let choiceMaincraft = document.querySelectorAll("input[name='choiceMain']")

let choiceList2 = document.querySelectorAll("input[name='game2']")

function question1(){
    if(!choiceGame1.checked)
    {
        for (let index = 0; index < choiceList1.length; index++) 
        {
            const element = choiceList1[index];
            if(element.checked)
            {
                trueChoice++
            }
        }
    }
    else
    {
        trueChoice = choiceList1.length
    }
}
function question2(){
    if(choiceMaincraft != null)
    {
        for (let index = 0; index < choiceMaincraft.length; index++) 
        {
            const element = choiceMaincraft[index];
            if(element.checked)
            {
                if(element.value == 'sandbox')
                {
                    trueChoice++
                }
            }
        }
    }
}
function question3(){
    for (let index = 0; index < choiceList2.length; index++) {
        const element = choiceList2[index];
        if(element.checked)
        {
            if(element.value == 'Foddy' || element.value == 'DarkSouls')
            {
                trueChoice++
            }
        }
    }
}
function checkResult()
{
    trueChoice = null

    question1()
    question2()
    question3()
    if(trueChoice >= 6)
    {
        resultText.innerText = `Ты просто профи в играх!`
    }
    else
    {
        resultText.innerText = `Ты хорошо знаешь игровую индустрию на ${trueChoice * 10}%`
    }
}
resultBtn.addEventListener('click', ()=>{
    checkResult()
})