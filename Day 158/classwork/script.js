```
1)მომხმარებელს შემოატანინეთ რიცხვი,1 დან მომხმარებლის მიერ შემოყვანილ რიცხვამდე დაატრიალეთ fot loop და გამოიტანეთ ყველა ლუწი რიცხვი
```
const name1 = Number(prompt("give num"))
for (let i = 0;i < name1; i +=2){
    console.log(i)
}

```
2)მომხმარებელს შემოატანინეთ რიცხვი,1 დან მომხმარებლის მიერ შემოტანილ რიხვვამდე დაატრიალეთ ფორ ციკლი და იპოვეთ ამ დიაპაზონში ყველა რიცხვის ჯამი
```
let needed = 0
const name2 = Number(prompt("give num"))
for (let i = 1;i < name1; i ++){
    needed += i
}

console.log(needed)

```
3)მომხმარებელს შემოატანინეთ რიცხვი,თქვენი დავალებაა შეამოწმოთ,თუ მომხმარებელი შემოიყვანს 10 ზე ნაკლებ რიცხვს კონსოლში გამოიტანეთ რომ "LESS THAN 10",თუ მომხმარებელი შემოიტანს 10 ზე მეტ რიცხვს დაუკონსოლლლოგე MORE THAN 10,და თუ შემოიყვანს 10 იანს დაუკონსოლლოგე რომ EQUAL TO 10
```
let tag =  Number(prompt("give num"))
    if (tag > 10){
        console.log("MORE THAN 10")
    }

    else if (tag < 10){
        console.log("LESS THAN 10")
    }

        else if (tag === 10){
        console.log("EQUAL TO 10")
    }
