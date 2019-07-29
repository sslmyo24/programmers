function solution(numbers) {
    const max = numbers.sort((a, b) => ~~(b+""+a) > ~~(a+""+b) ? 1 : -1).join('')
    return parseInt(max) === 0 ? "0" : max;
}