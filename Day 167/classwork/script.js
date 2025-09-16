// # Lv 167:
// 1. შექმენი ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნოს ეს სტრინგი შებრუნებული (მაგ: "hello" → "olleh").
function func1(str){
    let cvlad = str.split()
    let reversec = cvlad.reverse()
    let result = reversec.join()
    console.log(result)
}
func1("hello")
// 2. შექმენი ფუნქცია, რომელსაც არგუმენტად გადაეცემა რიცხვი და კონსოლში გამოიტანს ყველა კენტ რიცხვს 1-დან ამ რიცხვამდე.
function func2(num1){
    for (let i = 1; i <= num1;i++){
        if(i%2!==0){
            console.log(i)
        }
    }


}
func2(45)
// 3. შექმენი ფუნქცია, რომელსაც გადაეცემა ორი რიცხვი, დააბრუნოს უფრო დიდი რიცხვი.
function func3(num1mm,num2mm){
    if (num1mm > num2mm){
        console.log("1 >")
    }
    else if (num1mm < num2mm) {
        console.log("2 >")
    }

}
func3(12,20)
// 4. შექმენი ფუნქცია, რომელსაც გადაეცემა სიტყვა და დააბრუნოს ეს სიტყვა დიდი ასოებით (uppercase).
function func4(word){
    let cvlad = word.toUpperCase()
    console.log(cvlad)
    
}
// შექმენი ფუნქცია, რომელსაც გადაეცემა სტრინგი და დააბრუნებს მხოლოდ ხმოვნებს

function gg(str){
    let cvlad3="aeiouაეიოუAEIOU"
    let clvad4=""
    for(let i = 0; i < str.length; i++){
        if (cvlad3.include(str[i])){
            clvad4 += str[i]
        }
    }
    console.log(clvad4)
}
