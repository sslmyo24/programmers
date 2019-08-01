// 미완성
function solution(name) {
    const startCode = "A".charCodeAt(0), endCode = "Z".charCodeAt(0);
    const middleCode = (endCode - startCode + 1)/2 + startCode, strLen = name.length;
    let idx = 0, str = "", cnt = -1;
    for (const key in name) str += "A";
    while (str !== name) {
        cnt++;
        const targetStr = name[idx];
        if (targetStr !== "A" && targetStr !== str[idx]) {
            const code = targetStr.charCodeAt(0);
            if (code < middleCode) cnt += code - startCode;
            else cnt += endCode - code + 1;
            str = str.substr(0, idx) + targetStr + str.substr(idx + 1);
        }
        if (name[idx + 1] === "A") {
            if (idx === 0) idx = strLen - 1;
            else {
                let len = 1;
                for (let i = idx + 2; i < strLen; i++) {
                    if (name[i] !== "A") break;
                    len++;
                }
                if (len > (idx + 1)) {
                    cnt += idx;
                    idx = strLen - 1;
                }
                else idx++;
            }
        }
        else idx++;
    }
    return cnt;
}