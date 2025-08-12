//1 მომხმარებელს შემოატანინეთ რიცხვი და ამ რიცხვის ჩათვლით ყველა რიცხვის ნამრავლი გამოიტანეთ.
const name32 =Number( prompt ("gimi num"))
const pnse = 1
for(let i=1; i>name32; i++){
    pnse *= i
}

console.log(pnse)
// 2 მომხმარებელს შემოატანინეთ რიცხვი. 1-დან მომხმარებლის შემოტანილი რიცხვის ჩათვლით გამოიტანეთ ყველა რიცხვი. ოღონდ გვერდზე ჰქონდეს მიწერილი თუ არის სამის ჯერადი. (შეამოწმებთ 3-ზე თუ იყოფა).
const name2 =Number(prompt("gimmi num"))
for (let podg = 1;podg < name2; podg ++){
    if(podg % 3 === 0){
        console.log("სიმონ სამზე იყოპა")}
    else{
        console.log("ეი არრა")
    }
    }
// 3 მომხმარებელს შემოატანინეთ რიცხვი. თუ შემოიტანს რიცხვ 1-ს მაშინ 1-დან 100-მდე ყველა კენტი რიცხვი გამოიტანეთ. თუ შემოიტანა 2, მაშინ 1-დან 100-მდე ყველა ლუწი რიცხვი. სხვა რიცხვი თუ შემოიტანა ალერტით გამოიტანეთ შეტყობინება, რომ არასწორი რიცხვი შემოიტანა.
const name21 =prompt("gimmi num")
for (let poნse = 100;poნse > name21; name21 ++){
    if(poნse % 2 === 0){
        console.log(name21)}
    if(poნse % 2 === 0.0){
        console.log(name21)
    }
    }
//4 მომხმარებელს შემოატანინეთ რიცხვი 2-ჯერ. პირველი რიცხვი იქნება 1-დან სადამდეც უნდა გაავლოთ დიაპაზონი, და მეორე რიცხვი იყოს რამდენი უნდა მიუმატოთ (ნაბიჯი). შედეგი გამოიტანეთ კონსოლში.
const kname2 =Number(prompt("giimii nuuuuuuuuum"))
const posen=Number(prompt("giimii nuuuuuuuuum"))
for (let pose = 1;pose < kname2; pose +=posen
){
    console.log(pose)
 }
//5 მომხმარებელს შემოატანინეთ რიცხვი. შემოტანილი რიცხვიდან 1-მდე 3-ის გამოტოვებით გამოიტანეთ ყველა რიცხვი.
const nameff22 = prompt("giimii nuuuuuuuuum")
for (let pos = 1;pos < nameff22; pos +=3){
    console.log(pos)}