// 判断 回文字符串

let isValid = (char) => {
    char = char.trim()
    return (char >= "0" && char < "9") || (char >= "a" && char <= "z") || (char >= "A" && char <= "Z")
}

let isPlalindrome = (s) => {
    s = s.toUpperCase()
    let i = 0;
    let j = s.length - 1  //  右边指针
    while (j > i) {
        if (!isValid(s[i])) {
            i++
            continue
        }
        if (!isValid(s[j])) {
            j--
            continue
        }
        if (s[i] == s[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
}

let origin = "A man, a plan, a canal: Panama"
origin = "race a car"
console.log(origin)
console.log(isPlalindrome(origin))