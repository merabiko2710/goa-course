// // 1. შექმენით ფუნქცია რომელიც მიესალმება მომხმარებელს.
// let mero1 = prompt("hello tell me yo name")
// function HelloNostalgia(){
//     alert ("helo " + mero1)
// }

// alert(HelloNostalgia)
// // 2. შექმენით ფუნქცია რომელიც კონსოლში გამოიტანს რიცხვებს 2-დან 40-მდე 2-ის გამოტოვებით.
// function HelloNostalgia2(){
//     for (let i = 2; i < 40; i+2){
//         alert (i)
//     }
// }

// alert(HelloNostalgia2)
// // 3. შექმენით 4 ფუნქცია ( +, -, *, /), თითოეულ ფუნქციას გადაეცეს ორი არგუმენტი და შეასრულოს შესაბამისი მოქმედება.

// function HelloNostalgia3(name, eman){
//     alert(name + eman)
// }

// alert(HelloNostalgia3(12, 12))

// function HelloNostalgia4(name, eman){
//     alert(name - eman)
// }

// alert(HelloNostalgia4(12, 12))

// function HelloNostalgia5(name, eman){
//     alert(name * eman)
// }

// alert(HelloNostalgia5(12, 12))


// function HelloNostalgia6(name, eman){
//     alert(name / eman)
// }

// alert(HelloNostalgia6(12, 12))
// // 4. შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა მომხმარებლის შემოტანილი რიცხვი და დააბრუნებს ეს რიცხვი ლუწია თუ კენტი.

let num4 = Number(prompt("give me num: "))

function HelloNostalgia7(num4){
    if(num4 % 2 === 0){
        console.log("This number is even")}
    else{
        console.log("This number is odd")
    }
}

HelloNostalgia7(num4)
// 5. while loop-ით და for loop-ით გამოიტანეთ 50-დან 2-მდე რიცხვები უკუსვლით.
// let num = 50
// while (num > 2){
//     num--
//     alert(num)
// }

// for (let i = 50; i > 2; i--){
//     alert ()
// }