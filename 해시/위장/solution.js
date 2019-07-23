function solution(clothes) {
    let obj = {}, case_num = 1;
    clothes.forEach(v => obj[v[1]] = obj[v[1]] ? obj[v[1]] + 1 : 2);
    Object.values(obj).forEach(v => case_num *= v);
    return case_num - 1;
}