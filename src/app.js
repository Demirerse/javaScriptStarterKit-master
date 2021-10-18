console.log("Merhaba kodlama.io")

//JS type safe değildir.!.
let  dolarDun= 9.20
let dolarBugun=9.30

{
    let dolarDun=9.10
}
console.log(dolarDun)

const euroDun= 11.2

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi", "Emlak kredisi", "Araç kredisi", "Çiftçi kredisi"]
let randomKrediler =[12, "Emlak kredisi", ["a", "b"], "c"]



console.log(konutKredileri)
console.log(randomKrediler)
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")

}
console.log("</ul>")


