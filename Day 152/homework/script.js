// მომხმარებელს შემოატანინეთ ქულა 100-მდე. თუ შემოტანილი ქულა მეტია 95-ზე alert-ში გამოიტანეთ 'A', თუ 80-ზე მეტია და 95-ზე ნაკლები მაშინ B, 75-80-მდე 'C', 70-75-მდე "D". თუ 70-ზე ნაკლებია მაშინ F.
const input1 = prompt("give me grade:")

if (input1 > 95){
    console.log("A")
}

else if (input1 > 80 & input1 < 95){
    console.log("b")
}

else if (input1 > 75 & input1 < 80){
    console.log("c")
}

else if (input1 > 70 & input1 < 95){
    console.log("d")
}

else if (input1 < 70){
    console.log("f")
}
// მომხმარებელს შემოატანინეთ ტემპერატურა თუ რიცხვი მეტია ან ტოლი 0-ზე მაშინ ალერტით გამოიტანეთ 'ცივა და თბილად ჩაიცვი'. თუ 0-20 შუალედშია მაშინ 'ძაან არ ცივა'. 20-დან 35-მდე თუა 'ცხელა'. 35+ის შემთხვევაში 'ძალიან ცხელა!'
const input2= Number(prompt ("please tell me temperature "))
if (input2 > 0 || input2 === 0){
    alert("civa chaicvi tbilad")
}

else if (input2 > 0 || input2 < 20){
    alert("zaaaaan ar civa")
}

else if (input2 > 20 || input2 < 35){
    alert("cota cxela")
}

else if (input2 > 35){
    alert("IWVEBA YVELAPERI SHEMODI SAXSHI")
}

// მომხმარებელს შემოატანინეთ რიცხვი და თუ ემთხვევა თქვენს ჩაფიქრებულ რიცხვს მაშინ ალერტით უთხარით რომ მოიგო. სხვა შემთხვევაში კონსოლში გამოიტანეთ რომ წააგო.

const input3=prompt("give: ")

const mero= 4612

if (mero === input3){
    alert("you have won")
}
else{
    alert("you lost")
}
// მომხმარებელს შემოატანინე რიცხვი და შეამოწმე. თუ ემთხვევა შენს ჩაფიქრებულ რიცხვს მაშინ ალერტით გამოიტანეთ 'გამოიცანი ყოჩაღ'. თუ შემოტანილი მნიშვნელობა მეტია ჩაფიქრებულ რიცხვზე მაშინ ალერტში გამოიტანეთ 'ცოტა დიდი რიცხვი შემოგიტანია'. თუ ნაკლები შემოიტანა მაშინ 'ცოტა ნაკლები რიცხვი შემოგიტანია'.
const input4= prompt("gimmi num: ")
const me= 34
if (me === input4){
    alert (same)
}

else if (me > input4){
    alert (less)
}

else if (me < input4){
    alert (more)
}
// გააკეთეთ ჯეირანი. მომხმარებელს შემოატანინე Player 1 და Player 2 და შესაბამისი შედეგი გამოიტანეთ ალერტით
// rock 
// paper 
// sizor
const  player1=prompt("give answer: ")
const  player2=prompt("give answer: ")

if (player1 == "rock" & player2 == "paper"){
    alert("p2 wins")
}

if (player1 == "rock" & player2 == "sizor"){
    alert("p1 wins")
}

// rock 
// paper 
// sizor
if (player1 == "paper " & player2 == "sizor"){
    alert("p2 wins")
}

if (player1 == "paper" & player2 == "rock"){
    alert("p1 wins")
}

if (player1 == "sizor" & player2 == "rock"){
    alert("p2 wins")
}

if (player1 == "sizor" & player2 == "paper"){
    alert("p1 wins")
}

