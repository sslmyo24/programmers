function solution(progresses, speeds) {
    let answer = [];
    while (progresses.length > 0) {
        progresses.forEach((v, k) => progresses[k] += speeds[k]);
        if (progresses[0] >= 100) {
            let complete_num = 0;
            for (const data of progresses.slice()) {
                if (data < 100) break;
                progresses.shift();
                speeds.shift();
                complete_num++;
            }
            answer.push(complete_num);
        }
    }
    return answer;
}