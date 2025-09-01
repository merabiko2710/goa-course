// # Lv 163

// 1. შექმენით ფუნქცია, რომელიც ერთ არგუმენტს, რიცხვს, ეს ფუნქცია აბრუნებს "super gela" თუ რიცხვი მეტია 20 ზე, და აბრუნებს "SUPER gabro",  თუყ რიცხვი ნაკლებია 20 ზე
// იღებს 
function clswrk1(jon) {
    if (Number(jon) > 20){
        alert ("SUPER GELA")
    }
    
    else{
        alert ("SUPER DUUUUUPER GABRIEL")
    }
}

clswrk1(prompt("give me num"))
// 2. შექმენით  ფუნქცია რომელიც იღებს 2 არგუმენტს, სტრინგს და რიცხვს, შემდეგ ეს სტრინგი იმდენჯერ დაწერეთ რამდენი რიცცვის გადმოგეცათ
function clswrk2(I,II) {
    console.log(I * II)
}
// 3. შექმენით ფუნქცია რომელსაც გადაეცემა 3 არგუმენტი, რიცხვები, შემდეგ გამოითვალეთ ამ 3 არგუმენტის არითმეტიკული საშუალო (მათი ჯამი გაყოფილი მათ რაოდენობაზე)

function clswrk3(qq,yy,kk) {
    console.log((qq+yy+kk)%3)
}

clswrk3(prompt("give me num"),prompt("give me num"),prompt("give me num"))