function solution(citations) {
    for (let i = citations.length; i >= 0; i--) {
        const filter1 = citations.filter(ele => ele >= i);
        const filter2 = citations.filter(ele => filter1.indexOf(ele) === -1)
        if (filter1.length >= i && filter2.filter(ele => ele <= i).length === filter2.length) return i;
    }
}