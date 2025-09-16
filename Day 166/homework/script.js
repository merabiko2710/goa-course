// 1. შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად სტრინგი და გამოიტანეთ კენტ ინდექსზე მდგომი სიმბოლოები. (გაკვეთილზე რაც გავაკეთეთ იგივეა ოღონდ იქ ლუწ ინდექსზე მდგომები იყო)
function ab(stringg){
    let result = ""
    for(let  index = 0; index < stringg.length; index +=3){
        console.log (stringg[index])
    }
}

ab("merobi")
// 2. შექმენით ფუნქცია რომელსაც არგუმენტად რიცხვი გადაეცემა და მომხმარებლის შემოტანილი რიცხვიდან 0-მდე გამოიტანს ყველა რიცხვს უკუსვლით.
function ab2 (num){
    for (let i = num; i>=0; i--){
        console.log(i)
    }
}
ab2(Number(prompt("give me num: ")))
// 3. შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი, თუ რიცხვი 3-ზე ან 5-ზე იყოფა მაშინ ეს რიცხვი დააბრუნოს 10-ზე გამრავლებული, სხვა შემთხვევაში 5-ზე გამრავლებული დააბრუნეთ.
function ab3 (num2){
    if (num2 % 3 === 0 || num2 % 5 === 0){
        console.log (num2 * 10)
    }
    else{
        console.log (num2 * 5)
    }
}
ab3(Number(prompt("give me num: ")))
// 4. შექმენით ფუნქცია რომელიც მომხმარებელს შემოატანინებს სახელს და მიესალმება.
function ab4 (){
    let Give_Name = prompt("give me name")
    console.log("hello " + Give_Name)
}
ab4()
// 5. შექმენით ფუნქცია რომელსაც გადაეცემა დიდი ტექსტი და ეს სიტყვა დააბრუნოს ხმოვნების გარეშე.
function merofuncXxX(teხt){
    let vouwles = "aeiouაეიოუAEIOU"
    let resulte = ""
    for (let i of teხt){
        if (!vouwles.includes(i)){
            resulte += i
        }
    }
    console.log(resulte)
}

merofuncXxX("ჰიდროელექტროსადგური")