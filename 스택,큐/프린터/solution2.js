// 미완성

function solution(priorities, location) {
    const standard = priorities[location];
    const len = priorities.length;
    let lastIdx = len, min = 10;
    const bigArr = priorities.filter((v, k) => {
        if (v > standard) {
            if (v < min) {
                min = v;
                lastIdx = k;
            }
            return true;
        }
        else return false;
    });
    let process = bigArr.length + 1;
    for (let i = lastIdx + 1; i < len; i++) {
        const data = priorities[i];
        if (i === location) break;
        if (data === standard) process++;
    }
    return process;
}