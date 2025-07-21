// Lv 151
// კომენტარის სახით დაწერეთ == და === განსხვავებები. and და or ოპერატორები როგორ იწერება. == არა სერიოზული === სერიოზული && || 

// მომხმარებელს შემოატანინეთ სახელი და კონსოლში გამოიტანეთ თუ არის მისი სახელი თქვენი სახელის ტოლი. ( if / else გარეშე )
const UserName=prompt("give me a name: ")
const MyName="merabi"
console.log(UserName === MyName)
// მომხმარებელს შემოატანინეთ საყვარელი ფერი. და თუ ემთხვევა შემოყვანილი მნიშნელობა თქვენს საყვარელ ფერს. მაშინ კონსოლში გამოიტანეთ 'ჩვენ ორივეს ერთი ფერი გვყვარებია'. სხვა დანარჩენ შემთხვევაში '{შემოტანილი მნიშვნელობა} ლამაზი ფერია'
const color1= prompt("whats your favourite color?: ")
const color2="red"
if (color1 === color2){
    console.log("omg!!! were tha saaaaaaaaaaaaame!!!")
}
else{
    console.log("ya cool")
}
// მომხმარებელს შემოატანინეთ რიცხვი და შეამოწმეთ ეს რიცხვი თუ არის კენტი მაშინ გაამრავლეთ 3-ზე და კონსოლში გამოიტანეთ. სხვა დანარჩენ შემთხვევაში 2-ზე გაყავით და ის გამოიტანეთ კონსოლში.
const needed=prompt("enter a num: ")
if (needed % 2 == 0.0){
    console.log(needed * 3)
}
else {
    console.log(needed *2)
}
// მომხმარებელს შემოატანინეთ ორი რიცხვი და ოპერაცია რომელიც უნდა რომ შეასრულოს. და გამოიტანეთ შედეგი alert-ით.
const need1=prompt("enter a num: ")
const need2=prompt("enter a num: ")
const need3=prompt("enter a you get it: ")
if (need3 === "+" ){
    console.log(need1 + need2)
}

else if (need3 ==="-"){
    alert(need1 - need2)
}

else if (need3 === "*" ){
    alert(need1 * need2)
}

else if (need3 === "/" ){
    alert (need1 / need2)
}

else {
    alert ("what did you do!")
}

// ( კალკულატორია )
