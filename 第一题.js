let maxSeriesLength = (s) => {
    if (s.length == 0) {
        return 0
    }
    if (s.length == 1) {
        return 1
    }

    let left1 = 0
    let left2 = left1 + 1
    let max = 1
    while (left1 < left2 && s[left1]) {
        if (s[left1] == s[left2]) {
            left2++
            if (left2 - left1 > max) {
                max = left2 - left1
            }
        } else {
            left1 = left2
            left2 = left2 + 1
        }
    }
    return max
}


console.log(maxSeriesLength("aaabbcd")); // 3
console.log(maxSeriesLength("aabbbbaaaccdd")); // 4
console.log(maxSeriesLength("")); // 0
console.log(maxSeriesLength("a")); // 1
console.log(maxSeriesLength("duyi")); // 1