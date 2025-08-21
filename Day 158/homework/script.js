```
1)მომხმარებელს შემოატანინეთ ორი რიცხვი,თქვენი დავალებაა მომცმარებლის მიერ შემოყვანილი პირველი რიცხვიდან მომხმარებლის მიერ შემოყვანილ მეორე რიცხვამდე დაატრიალოთ ფორ ციკლი და გამოიტანოთ თითოეული რიცხვი ამ დიაპაზონში
```
const name1 =Number(prompt("enter num"))
const name2=Number(prompt("enter num"))
for (;name2 < name1; name2 +=5){
    console.log(name2)
 }

```
2)შექმენით ცვლადი და შეინახეთ რიცხვი,დაატრიალეთ ფორ ციკლი 1 დან ამ რიცხვამდე და გამოიტანეთ ყველა ლუწი რიცხვი
```
const name3 = Number(prompt("enter num"))
for(let i =0; i < name3; i +=2)
    console.log(i)
```
3)მომხმარებელს შემოატანინეთ რიცხვი,შემდეგ შეამოწმეთ თუ ეს რიცხვი არის ლუწი დაუკონსოლლოგეთ "This number is even"  Even ნიშნავს ქართულად ლუწს,სხვა შემთხვევაში დაუკონსოლლოგეთ "This number is odd"  Odd ნიშნავს ქათულად კენტს
```
const name4 = Number(prompt("enter num"))
if(name4 % 2 === 0){
    console.log("This number is even")}
else{
    console.log("This number is odd")
}

```
4)0 დან 50 მდე დაატრიალეთ ფორ ციკლი 5 ის გამოტოვებით~
```
for(let i =0; i < 50; i +=5)
    console.log(i)
```
5)მომხმარებელს შემოატანინეთ ერთ რიცხვი და ერთი სტრინგი,დაატრიელათ ფორ ციკლი 1 დან მომხმარებლის მიერ შემოტანილ რიცხვამდე და კონსოლში გამოიტანე მომხმარებლის მიერ შემოტანილი სტრინგი იმდენჯერ რამდენჯერაც დატრიალდება ფორ ციკლი
```
const name5 = Number(prompt("enter num"))
const name6 = prompt("enter text")
for (let i = 1;i < name5; i ++){

        console.log(name6)
    
}

```
6)მომხმარებელსშემოატნინეთ რიცხვი,დაატრიალეთ ფორ ციკლი 1 დან ამ რიცხვამდე და იპოვეთ ამ დიაპაზონში ყველა რიცხვის ჯამი
```
const name7 =Number( prompt ("gimi num"))
let name8 = 0
for(let i=1; i<name7; i++){
    name8 += i
}
console.log(name8)
