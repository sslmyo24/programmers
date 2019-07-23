function solution(participant, completion) {
    const obj = {}
    participant.forEach(v => {
        obj[v] = obj[v] ? obj[v]+1 : 1
    })
    completion.forEach(v => {
        obj[v] -= 1
        if (obj[v] === 0) delete obj[v]
    })
    return Object.keys(obj)[0];
}