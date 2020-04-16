let x = 1;
let y = 3;
for(let i = 0; i <= 2; i += 0.2) {
    for(let j = x; j <= y; j++) {
        console.log(`I=${i.toFixed(1)}  J=${j.toFixed(1)}`);
    }
    x += 0.2
    y += 0.2
}