function solution (name) {
    const ACode = 'A'.charCodeAt(0)
    const ZCode = 'Z'.charCodeAt(0)
    const codeLen = ZCode - ACode + 1
    const middle = codeLen / 2
    const len = name.length
    const origin = ( str => {
        const len = str.length
        const chars = []
        for (let i = 0; i < len; i ++) {
            chars.push(str.charCodeAt(i) - ACode)
        }
        return chars
    })(name);
    const start = origin.map(() => 0)

    let min = 100000000

    const search = (now, type, selected, count, checked) => {
        if (min < count) return;
        switch (type) {
            case 1 :
                if (checked.indexOf(selected) !== -1) return
                const num = origin[selected] < codeLen - origin[selected]
                            ? origin[selected]
                            : codeLen - origin[selected]
                count += num
                checked[selected] = true
                now[selected] = origin[selected]
                let chk = true
                checked.forEach(v => {if (v === false) chk = false})
                if (chk === true) {
                    if (min > count) min = count
                    return
                }
                search([...now], 2, selected, count, [...checked])
                search([...now], 3, selected, count, [...checked])
            break;
            case 2 :
                selected -= 1
                if (selected < 0) selected = len - 1
            break;
            case 3 :
                selected = (selected + 1) % len
            break;
        }
        if (type > 1) {
            search([...now], 1, selected, count + 1, [...checked])            
        }
    }

    search([...start], 1, 0, 0, origin.map(v => v === 0 ? true : false))

    return min
}