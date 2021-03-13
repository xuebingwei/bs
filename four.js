// 斐波拉契数列   1  1  2  3  5  8  13  21 ...
let arr = []
let fn = (n) => {
    if (n == 1 || n == 2) return 1;
    s = fn(n - 1) + fn(n - 2)
    return s
}
console.log(fn(30))