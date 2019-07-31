function solution(brown, red) {
    let divisors = [1];
    for (let i = 2, sqrt = ~~(Math.sqrt(red)); i <= sqrt; i++) if (red%i === 0) divisors.push(i);
    for (const d of divisors) {
        const hoz = brown/2 - d
        if ((hoz - 2) === red/d) return [hoz, d+2];
    }
}