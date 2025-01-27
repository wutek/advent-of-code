// Advent of Code 2015 day 1 solution
// https://adventofcode.com/2015/day/1

const input = '()())'

console.log('Part 1:', aoc_2015_1_a(input))
console.log('Part 2:', aoc_2015_1_b(input))


function aoc_2015_1_a(input) {
    return input.split('').reduce((t, c) => t + (c === '(' ? 1 : -1), 0)
}

function aoc_2015_1_b(input) {
    for (let i = 0, floor = 0; i < input.length; i++) {
        floor += (input[i] === '(' ? 1 : -1)

        if (floor < 0) {
            return i + 1
        }
    }
}
