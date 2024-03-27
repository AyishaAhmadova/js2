let eded = +prompt("Number: ");
if (eded === 0) {
  console.log("Zero");
} else if (eded % 2 === 0) {
  console.log(`${eded} murekkeb ededdir`);
} else {
  console.log(`${eded} sade ededdir`);
}

let meded = +prompt("Number:");
let cem = 0;
for (let i = 1; i < meded; i++) {
  if (sayi % i === 0) {
    cem = cem + i;
    toplam += i;
  }
}
if (meded == cem) {
  console.log("Mükemmel eded");
} else {
  console.log("Mükemmel eded deyil");
}

let num1 = +prompt("number1 ");
let num2 = +prompt("number2 ");

for (let i = num1; i < num2; i++) {
  if (i % 10 == 7) {
    console.log(i);
  }
  let m1 = +prompt("number1");
  let m2 = +prompt("number2");
  
  for (let i = 1; i <= num; i++) {
    if (sayi % i === 0) {
      toplam += i;
    }
  }
  
}
