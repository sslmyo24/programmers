// 미완성
function solution(numbers) {
    let answer = 0;
    let num = Math.min(...numbers) > 2 ? Math.min(...numbers) : 3;
    const max = parseInt([...numbers].sort((a, b) => ~~(b+""+a) > ~~(a+""+b) ? 1 : -1).join(''));
    label: for (; num <= max; num++) {
        for (let i = 0; i <= 9; i++) if (numbers.indexOf(i) === -1 && num.toString().indexOf(i) !== -1) continue label;
        let match = false;
        for (const str of numbers) {
            const reg = new RegExp(str, 'g'), num_match = num.toString().match(reg);
            if (num_match !== null && numbers.match(reg).length >= num_match.length) match = true;
        }
        if (match === false) continue label;
        if (boolPrime(num)) answer++;
    }
    return answer;
}

const boolPrime = number => {
    if (number === 1) return false;
    if (number%2 === 0) return false;
    for (let i = 3, halfNum = ~~(number/2); i <= halfNum; i = i + 2) if (number%i === 0) return false;
    return true;
}