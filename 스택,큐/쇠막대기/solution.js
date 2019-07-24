function solution(arrangement) {
    let stickCnt = 0, piece = 0;
    for (let i = 0, len = arrangement.length; i < len; i++) {
        if (arrangement[i] === '(') {
            if (arrangement[i + 1] === ')') {
                piece += stickCnt;
                i++;
            }
            else stickCnt++;
        } else {
            piece++;
            stickCnt--;
        }
    }
    return piece;
}