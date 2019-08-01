function solution(n, lost, reserve) {
    const realLost = lost.filter(v => {
        if (reserve.indexOf(v) === -1) return v;
        else delete reserve[reserve.indexOf(v)];
    });
    let answer = n - realLost.length;
    for (const num of realLost) {
        const idx = reserve.indexOf(num - 1) !== -1 ? reserve.indexOf(num - 1) : reserve.indexOf(num + 1);
        if (idx !== -1) {
            delete reserve[idx];
            answer++;
        }
    }
    return answer;
}