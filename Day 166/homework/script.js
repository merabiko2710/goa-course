// 1. შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად სტრინგი და გამოიტანეთ კენტ ინდექსზე მდგომი სიმბოლოები. (გაკვეთილზე რაც გავაკეთეთ იგივეა ოღონდ იქ ლუწ ინდექსზე მდგომები იყო)
function ab(stringg){
    let result = ""
    for(let  index = 0; index < stringg.length; index +=3){
        console.log (stringg[5])
    }
}

ab("merobi")
// 2. შექმენით ფუნქცია რომელსაც არგუმენტად რიცხვი გადაეცემა და მომხმარებლის შემოტანილი რიცხვიდან 0-მდე გამოიტანს ყველა რიცხვს უკუსვლით.
function ab2 (num){
    for (let i = 0; i<num; i--){
        console.log(i)
    }
}
ab(Number(prompt("give me num: ")))
// 3. შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი, თუ რიცხვი 3-ზე ან 5-ზე იყოფა მაშინ ეს რიცხვი დააბრუნოს 10-ზე გამრავლებული, სხვა შემთხვევაში 5-ზე გამრავლებული დააბრუნეთ.
function ab3 (num2){
    if (num2 / 5 === 0 || num2 / 10 === 0){
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
// 5. შექმენით ფუნქცია რომელსაც გადაეცემა დიდი ტექსტი და ეს სიტყვა დააბრუნოს ხმოვნების გარეშე.
function removeVowels(text) {
  const vowels = "aeiouAEIOUაეიოუ";
  return text
    .split("")
    .filter(char => !vowels.includes(char))
    .join("");
}