// Advent of Code 2020 day 1 solution
// https://adventofcode.com/2020/day/1

const input = `1721
979
366
299
675
1456`

console.log(aoc_2020_1_a(input))
console.log(aoc_2020_1_b(input))

function aoc_2020_1_a(input) {
    let lines = input.split('\n').map(el => Number(el))
    
    for (let x = 0; x < lines.length - 1; x++) {
        for (let y = x + 1; y < lines.length; y++) {
            if (lines[x] + lines[y] === 2020) {
                return lines[x] * lines[y]
            }
        }
    }
}

function aoc_2020_1_b(input) {
    let lines = input.split('\n').map(el => Number(el))
    
    for (let x = 0; x < lines.length - 2; x++) {
        for (let y = x + 1; y < lines.length - 1; y++) {
            for (let z = y + 1; z < lines.length; z++) {
                if (lines[x] + lines[y] + lines[z] === 2020) {
                    return lines[x] * lines[y] * lines[z]
                }
            }
        }
    }
}
