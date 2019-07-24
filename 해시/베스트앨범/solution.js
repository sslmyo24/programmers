function solution(genres, plays) {
    let saleSum = {}, result = [];
    plays.forEach((v, k) => saleSum[genres[k]] = saleSum[genres[k]] ? saleSum[genres[k]] + v : v);
    const sortSum = objSort(saleSum);
    for (const saleData of sortSum) {
        let saleArr = {};
        genres.forEach((v, k) => { if (v === saleData[0]) saleArr[k] = plays[k] });
        const sortSale = objSort(saleArr);
        for (let i = 0, len = sortSale.length; i < len && i < 2; i++) result.push(~~sortSale[i][0]);
    }
    return result;
}

function objSort (obj) {
    let sortable = Object.entries(obj);
    sortable.sort((a, b) => b[1] > a[1] ? 1 : b[1] == a[1] ? ~~a[0] > ~~b[0] ? 1 : -1 : -1);
    return sortable;
}