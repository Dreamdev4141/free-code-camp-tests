function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
        { name: 'ONE HUNDRED', value: 100 },
        { name: 'TWENTY', value: 20 },
        { name: 'TEN', value: 10 },
        { name: 'FIVE', value: 5 },
        { name: 'ONE', value: 1 },
        { name: 'QUARTER', value: 0.25 },
        { name: 'DIME', value: 0.1 },
        { name: 'NICKEL', value: 0.05 },
        { name: 'PENNY', value: 0.01 },
    ];

    let amount = cash - price;

    const cidObj = { total: 0 };

    cid.forEach(element => {
        cidObj[element[0]] = element[1];
        cidObj.total += element[1];
    });

    if (cidObj.total === amount) {
        return { status: 'CLOSED', change: cid }
    }
    else if (cidObj.total < amount) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    const change = [];

    currencyUnits.forEach(cu => {
        let changeValue = 0;
        while (cidObj[cu.name] > 0 && amount >= cu.value) {
            cidObj[cu.name] -= cu.value;
            amount -= cu.value;
            changeValue += cu.value;
            amount = Math.round(amount * 100) / 100;
        }
        if (changeValue > 0) {
            change.push([cu.name, changeValue])
        }
    })

    if (change.length === 0 || amount > 0) {
        return { status: 'INSUFFICIENT_FUNDS', change: [] };
    }

    return { status: 'OPEN', change };
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));