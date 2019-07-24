function solution(heights) {
    let logArr = [];
    const len = heights.length;
    for (let i = len - 1; i >= 0; i--) {
        const sender = heights[i];
        let recive = false;
        for (let j = i - 1; j >= 0; j--) {
            const reciver = heights[j];
            if (reciver > sender) {
                logArr.unshift(j+1);
                recive = true;
                break;
            }
        }
        if (recive === false) logArr.unshift(0);
    }
    return logArr;
}