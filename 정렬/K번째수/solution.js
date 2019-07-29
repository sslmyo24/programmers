function solution(array, commands) {
    let answer = [];
    for (const arr of commands) answer.push(array.slice(arr[0] - 1, arr[1]).sort((a, b) => a > b ? 1 : -1)[arr[2] - 1]);
    return answer;
}