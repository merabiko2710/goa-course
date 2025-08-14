//1 მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის ჩათვლით ყველა რიცხვის ნამრავლი გამოიტანეთ.
const name32 =Number( prompt ("gimi num"))
let pnse = 0
for(let i=0; i<name32; i++){
    pnse += i
}
console.log(pnse)
// 2 მომხმარებელს შემოატანინეთ რიცხვი. 1-დან მომხმარებლის შემოტანილი რიცხვის ჩათვლით გამოიტანეთ ყველა რიცხვი. ოღონდ გვერდზე ჰქონდეს მიწერილი თუ არის სამის ჯერადი. (შეამოწმებთ 3-ზე თუ იყოფა).
const name2 =Number(prompt("gimmi num"))
for (let podg = 1;podg < name2; podg ++){
    if(podg % 3 === 0){
        console.log(String(podg)+"სამზე იყოპა")}
    else{
        console.log(String(podg)+"ეს არაა")
    }
    }
// 3 მომხმარებელს შემოატანინეთ რიცხვი. თუ შემოიტანს რიცხვ 1-ს მაშინ 1-დან 100-მდე ყველა კენტი რიცხვი გამოიტანეთ. თუ შემოიტანა 2, მაშინ 1-დან 100-მდე ყველა ლუწი რიცხვი. სხვა რიცხვი თუ შემოიტანა ალერტით გამოიტანეთ შეტყობინება, რომ არასწორი რიცხვი შემოიტანა.
let name1 = Number(prompt("give me a number"))
if (name1 === 1){
    for(let i = 1; i < 100; i ++){
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}
else if (name1===2){
    for(let i = 1; i < 100; i ++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
else {
    alert("wrong number")
}
    
//4 მომხმარებელს შემოატანინეთ რიცხვი 2-ჯერ. პირველი რიცხვი იქნება 1-დან სადამდეც უნდა გაავლოთ დიაპაზონი, და მეორე რიცხვი იყოს რამდენი უნდა მიუმატოთ (ნაბიჯი). შედეგი გამოიტანეთ კონსოლში.
const kname2 =Number(prompt("giimii nuuuuuuuuum"))
const posen=Number(prompt("giimii nuuuuuuuuum"))
for (let i = 1;i < kname2; i +=posen
){
    console.log(i)
 }
//5 მომხმარებელს შემოატანინეთ რიცხვი. შემოტანილი რიცხვიდან 1-მდე 3-ის გამოტოვებით გამოიტანეთ ყველა რიცხვი.
const nameff22 = Number(prompt("giimii nuuuuuuuuum"))
for (let i = nameff22;i > 1; i -=3){
    console.log(i)}