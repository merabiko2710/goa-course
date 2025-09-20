// 1.

// შექმენი ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნებს სიმბოლოების რაოდენობას მასში.

// მაგ: "hello" → 5.
function name1(nam1) {
    console.log(nam1.length)
   
}
name1(prompt("give me a name: "))
// 2.

// შექმენი ფუნქცია, რომელსაც არგუმენტად გადაეცემა რიცხვი და გამოიტანს ყველა რიცხვს 0-დან ამ რიცხვამდე, მაგრამ მხოლოდ ლუწებს.

// მაგ: 8 → 0, 2, 4, 6, 8.
function name2(name1) {
    for (let i = 0;i <= name1; i++){
        if (i % 2 ===0){
            console.log(i)
        }

    }

}
name2(45)
// 3.

// შექმენი ფუნქცია, რომელსაც გადაეცემა რიცხვი.
// თუ რიცხვი უარყოფითია, დააბრუნოს "negative".
// თუ რიცხვი დადებითია, დააბრუნოს "positive".
// თუ ნულია → "zero".
function name3(num4){
    if(num4 > 0){
        console.log("This number is positive")}
    else if(num4 < 0){
        console.log("This number is negative")
    }
    else{
        console.log("zero")
    }
}

name3(prompt("GIVE ME MY NUMBER ! ! ! "))
// 4.

// შექმენი ფუნქცია, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს.

// მაგ: (5, 7) → 12.
function HelloNostalgia5(name, eman){
    console.log(name + eman)
}
// 5.

// შექმენი ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნებს ამ სტრინგს პირველი ასოს გარეშე.

function name10(name11) {
    let result = ""
    for (let i = 1; name11.length > i; i++) {
    console.log(name11[i])
}
    result+= name11
    return result
}
console.log(name10('Hello'))
// მაგ: "Giorgi" → "iorgi".
