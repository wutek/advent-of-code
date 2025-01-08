// Advent of Code 2015 day 12 solution
// https://adventofcode.com/2015/day/12

const input = `[1,{"c":"red","b":2},3]`

console.log(aoc_2015_12_a(input))
console.log(aoc_2015_12_b(input))

function aoc_2015_12_a(input) {
    let result = 0
    let m = input.match(/(-?\d+)/g)

    result += m.reduce((t, c) => t + Number(c), 0)

    return result
}

function aoc_2015_12_b(input) {
    return recursiveSum(JSON.parse(input))
}

function recursiveSum(obj) {
    let sum = 0

    if (typeof obj === 'number')
        return obj

    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            obj.forEach(el => {
                sum += recursiveSum(el)
            })
        } else {
            for (const property in obj) {
                if (obj[property] === 'red') {
                    return 0
                }
            }

            for (const property in obj) {
                sum += recursiveSum(obj[property])
            }
        }
    }

    return sum
}
