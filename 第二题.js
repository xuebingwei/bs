//  数组 俩俩互换
function exchange(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

let reverse = (arr) => {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        exchange(arr, i, j)
    }
    return arr
}
let origin = [1, 4, 2, 5, 8]
console.log(origin)
console.log(reverse(origin))