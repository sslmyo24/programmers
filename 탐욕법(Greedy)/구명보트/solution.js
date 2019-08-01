// 미완성
function solution(people, limit) {
    let emArr = [];
    people.sort((a, b) => b - a).forEach(w => {
        if (emArr.length === 0) emArr.push([w])
        else for (const k in emArr) {
            const v = emArr[k]
            const sum = v.reduce((sum, val) => sum + val)
            if (sum + w > limit) {
                if (~~k === (emArr.length - 1)) emArr.push([w])
            }
            else {
                emArr[k].push(w)
                break
            }
        }
    })
    return emArr.length;
}