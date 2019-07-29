function solution(answers) {
    let cnt = [0,0,0], result = [];
    const pattern = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let i1 = 0, i2 = 0, i3 = 0;
    for (const answer of answers) {
        if (i1 === pattern[0].length) i1 = 0;
        if (i2 === pattern[1].length) i2 = 0;
        if (i3 === pattern[2].length) i3 = 0;
        if (pattern[0][i1] === answer) cnt[0] += 1;
        if (pattern[1][i2] === answer) cnt[1] += 1;
        if (pattern[2][i3] === answer) cnt[2] += 1;
        i1++; i2++; i3++;
    }
    const max = Math.max(...cnt);
    if (cnt[0] === max) result.push(1);
    if (cnt[1] === max) result.push(2);
    if (cnt[2] === max) result.push(3);
    return result;
}