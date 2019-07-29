// 미완성
function solution(baseball) {
    let answer = [[],[],[]];
    for (const result of baseball) {
        if (result[1] >= 1) {
            answer[0].push(result[0][0]);
            answer[1].push(result[0][1]);
            answer[2].push(result[0][2]);
        }
    }
    return answer;
}