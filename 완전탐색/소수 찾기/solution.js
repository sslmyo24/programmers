function solution(numbers) {
    let answer = 0, num = Math.min(...numbers) > 1 ? Math.min(...numbers) : 2;
    const max = parseInt([...numbers].sort((a, b) => b > a ? 1 : -1).join(''));
    label: for (; num <= max; num++) {
        for (let i = 0; i <= 9; i++) if (numbers.indexOf(i) === -1 && num.toString().indexOf(i) !== -1) continue label;
        let match = false;
        for (const str of numbers) {
            const reg = new RegExp(str, 'g'), num_match = num.toString().match(reg);
            if (num_match !== null && numbers.match(reg).length >= num_match.length) match = true;
            else if (num.toString().indexOf(str) !== -1 && numbers.match(reg).length < num_match.length) {
                match = false;
                break;
            }
        }
        if (match === false) continue label;
        else if (boolPrime(num) === true) answer++;
    }
    return answer;
}

const boolPrime = number => {
    if (number === 2) return true;
    if (number === 1 || number%2 === 0) return false;
    for (let i = 3, sqrt = ~~(Math.sqrt(number)); i <= sqrt; i += 2) if (number%i === 0) return false;
    return true;
}