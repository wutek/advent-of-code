// Advent of Code 2015 day 11 solution
// https://adventofcode.com/2015/day/11

const input = `hxbxwxba`

console.log(aoc_2015_11_a(input))
console.log(aoc_2015_11_b(input))


function aoc_2015_11_a(input) {
    while (!validPassword(input)) {
        input = nextPassword(input)
    }

    return input
}

function aoc_2015_11_b(input) {
    input = aoc_2015_11_a(input)
    input = nextPassword(input)

    while (!validPassword(input)) {
        input = nextPassword(input)
    }

    return input
}


function validPassword(pass) {
    // no letters 'i', 'o' and 'l'
    for (let i = 0; i < pass.length; i++)
        if (pass[i] === 'i' || pass[i] === 'o' || pass[i] === 'l')
            return false

    // at least two double letters
    let doubleDouble = new Set([])
    for (let i = 0; i < pass.length - 1; i++)
        if (pass[i] === pass[i+1]) 
            doubleDouble.add(pass[i])

    if (doubleDouble.size < 2) 
        return false

    // three characters in a row
    for (let i = 0; i < 5; i++) {
        if (
            pass.charCodeAt(i) === pass.charCodeAt(i+1) - 1
            && pass.charCodeAt(i+1) === pass.charCodeAt(i+2) - 1
        ) return true
    }

    return false
}

function nextPassword(pass) {
    pass = pass.split('')
    addOne(pass, pass.length - 1)

    return pass.join('')
}

function addOne(arr, idx) {
    if (arr[idx] !== 'z') {
        arr[idx] = String.fromCharCode( arr[idx].charCodeAt(0) + 1 )
    } else {
        arr[idx] = 'a'
        addOne(arr, idx - 1)
    }
}
