// Advent of Code 2015 day 8 solution
// https://adventofcode.com/2015/day/8

let input = String.raw`""
"abc"
"aaa\"aaa"
"\x27"`

console.log(aoc_2015_8_a(input))
console.log(aoc_2015_8_b(input))

function aoc_2015_8_a(input) {
    let l1 = 0
    let l2 = 0

    input.split('\n').forEach(line => {
        l1 += line.length
        l2 += line.replace(/\\\\/g, '.').replace(/\\x[0-9a-f]{2}/g, '.').replace(/\\"/g, '"').length - 2
    })

    return l1 - l2
}

function aoc_2015_8_b(input) {
    let l1 = 0
    let l2 = 0

    input.split('\n').forEach(line => {
        l1 += line.length
        l2 += line.replace(/"/g, '..').replace(/\\/g, '..').length + 2
    })

    return l2 - l1
}
