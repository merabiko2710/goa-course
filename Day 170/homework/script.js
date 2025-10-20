// შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი და ამ რიცხვამდე გამოიტანეთ ყველა რიცხვი და გვედზე მიუწერეთ იყოფა თუ არა 3-ზე.
function name(params) {
    for (let i  = 0;i < params;i++){


        if (i % 3 === 0 ){
            console.log(i  + " იყოფა")
        }
        else{
            console.log(i  + " არ იყოფა")
        }
    }
}
name(45)
// შექმენით ფუნქცია რომელიც მომხმარებლის შემოტანილ მნიშვნელობაში რამდენი ხმოვანია.
function name2(mnish){
    let zeroForNow=0
    for(let i of mnish){
        if ("აეიოუaeiouAEIOU".includes(i)){
            zeroForNow +=1
        }
    }
    console.log(zeroForNow)
}
name2("ჰიდროელექტროსადგური")
// შექმენით ფუნქცია რომელიც მომხმარებელს შემოატანინებს რიცხვს და გამოიტანს ამ რიცხვის კუბს.
function Hello(name){
     alert(name ** 2)
}
// შექმენით ფუნქცია რომელიც მიესალმება მომხმარებელს იმ შემთხვევაში თუ ერთნაირი სახელები გაქვთ. სხვა შემთხვევაში დაემშვიდობოს.
function Helllo(nname,nnname){
    if (nname === nnname){
        console.log("hello " + nname)
    }
    else{
        console.log("bye "+ nname)
    }
}
// შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი და 1-დან ამ რიცხვის ჩათვლით ყველა რიცხვის ნამრავლი დააბრუნოს.

function gigigigigi(name1){
    let rioni=1
    for (let i = 1;i<name1;i++){
        rioni *= i
    }
    console.log(rioni)
}
gigigigigi(7)