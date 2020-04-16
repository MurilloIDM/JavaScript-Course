let x = 7;
let y = 5;
for(let i = 1; i <= 9; i += 2) {
    for(let j = x; j >= y; j--) {
        console.log(`I=${i}  J=${j}`);
    }
    x += 2;
    y += 2;
}