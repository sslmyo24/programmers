function solution(numbers) {
    let answer = 0, num = Math.min(...numbers) > 1 ? Math.min(...numbers) : 2;
    const max = parseInt([...numbers].sort((a, b) => b > a ? 1 : -1).join(''));
    label: for (; num <= max; num++) {
        if (boolPrime(num) === false) continue label;
        for (let i = 0; i <= 9; i++) if (numbers.indexOf(i) === -1 && num.toString().indexOf(i) !== -1) continue label;
        for (const str of numbers) {
            const reg = new RegExp(str, 'g'), numMatch = num.toString().match(reg);
            if (numMatch === null) continue;
            if (numbers.match(reg).length < numMatch.length) continue label;
        }
        answer++;
    }
    return answer;
}

const boolPrime = number => {
    if (number === 2) return true;
    if (number === 1 || number%2 === 0) return false;
    for (let i = 3, sqrt = ~~(Math.sqrt(number)); i <= sqrt; i += 2) if (number%i === 0) return false;
    return true;
}