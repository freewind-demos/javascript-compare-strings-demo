function compare(x, y) {
    if (x < y) {
        console.log(x + ' < ' + y)
    } else if (x > y) {
        console.log(x + ' > ' + y)
    } else {
        console.log(x + ' = ' + y)
    }
}

compare('aaa', 'aaa')
compare('aaa', 'aa')
compare('aaa', 'aaaaa')
compare('aaa', 'aab')
compare('aaa', 'baa')
compare('aaa', 'aa0')
compare('aaa', 'Aaa')

const array = ['aaa', 'aa', 'aaaaa', 'aab', 'aa0', 'Aaa', 'baa']
console.log(array.sort())