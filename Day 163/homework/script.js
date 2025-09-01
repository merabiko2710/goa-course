// 1.  შექმენით ფუნქცია რომელიც იღებს სახელს და გახდის მას სუპერ სახელს, მაგალითად გადმოგვეცა "ana", ჩვენ უნდა დავაბრუნოთ "SUPER ANA"
function fnction1(name1){
    console.log("SUPER " + name1)
}

// 2. შექმენით ფუნქცია რომელიც იღებს სახელს და გახდის მას გაორმაგებულს, ანუ მაგალითად გამოგვეცა "gabriel molodini" უნდა დავაბრუნოთ "gabrieli molodini gabrieli molodini"
function fnction2(name2){
    console.log(name2 + name2)
}
// 3. შექმენით ფუნქცია რომელიც იღებს 4 რიცხვს, და დააბრუნებს პირველი რიცხვი გამრავლებული ბოლო 3 რიცხვის ჯამზე და გაყოფილი მათ რაოდენობაზე
function fnction3(name3, name4, name5, name6){
    console.log(name3 * (name4 + name5 + name6)/4)
}
// 4. შექმენით ფუნქცია, რომელიც იღებს რიცხვს, და რა რიცხვის გამოგეცათ იმდენჯერ დააბრუნეთ სტრინგი ანა, ანუ მაგალითად გადმოგვეცა 5, უნდა დავაბრუნოთ "ana ana ana ana ana"
function fnction4(name7){
    let name8 = ""
    for(let i = 0; i < name7; i++){
        name8 += "ana "
    }
    console.log(name8)
}
// 5. შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, და პირველი რიცხვიდან მეორე რიცხვამდე დათვალეთ ლუწი რიცხვების რაოდენობა, საბოლოოდ დააბრუნეთm
    
function fnction5(name9,name10){
    let count = 0
    for (let i = name9;i < name10; i++){
        if (i % 2===0){
            count++
        }
    }
    console.log(count)
}