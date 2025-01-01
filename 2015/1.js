const input = `()())`

function aoc_2015_1_a(input) {
    return input.split('').reduce((t, c) => t + (c === '(' ? 1 : -1), 0)
}

function aoc_2015_1_b(input) {
    let floor = 0

    for (let i = 0; i <= input.length; i++) {
        floor += (input[i] === '(' ? 1 : -1)

        if (floor < 0) {
            return i + 1
        }
    }
}

console.log(aoc_2015_1_a(input))
console.log(aoc_2015_1_b(input))
