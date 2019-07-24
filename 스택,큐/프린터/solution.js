function solution(priorities, location) {
    let process = 1, idx = 0, printedArr = [];
    const copyArr = [...priorities];
    const originLen = copyArr.length;
    while (true) {
        const standard = priorities[0];
        let pass = false;
        for (const data of priorities) if (standard < data) { pass = true; break; }
        if (pass === false) {
            if (idx === location) return process;
            process++;
            printedArr.push(idx);
        }
        else priorities.push(standard);
        priorities.shift();
        do {
            idx++;
            if (idx === originLen) idx = 0;
        } while (printedArr.indexOf(idx) !== -1);
    }
}