function makeArrayConsecutive2(statues) {

    let statuesSort = statues.sort(function (a, b) {return a - b})
    let flag = true;
    let newStatues = 0;

    for (let x = 0; x < statuesSort.length; x++) {

        if (statuesSort[x + 1] - (statuesSort[x]) > 1) {
            newStatues += (statuesSort[x + 1] - (statuesSort[x])) - 1
        }

    }

    return newStatues

}

console.log(makeArrayConsecutive2([0, 3]))