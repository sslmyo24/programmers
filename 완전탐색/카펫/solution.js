function solution(brown, red) {
    let divisors = [1];
    for (let i = 2, sqrt = ~~(Math.sqrt(red)); i <= sqrt; i++) if (red%i === 0) divisors.push(i);
    for (const d of divisors) {
        const ver = (brown - d*2)/2;
        const hoz = brown/2 - ver + 2;
        if ((ver - 2) === red/d) return [ver, hoz];
    }
}