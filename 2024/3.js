// Advent of Code 2024 day 3 solution
// https://adventofcode.com/2024/day/3

input = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64]
(mul(11,8)undo()?mul(8,5))
xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64]
(mul(11,8)undo()?mul(8,5))`

console.log(aoc_2024_3_a(input))
console.log(aoc_2024_3_b(input))


function aoc_2024_3_a(input) {
    const m = input.match(/mul\(\d{1,3},\d{1,3}\)/g)
    let result = 0
    
    m.forEach(el => {
        let y = el.match(/(\d{1,3}),(\d{1,3})/)
        result += Number(y[1]) * Number(y[2])
    })
    
    return result
}

function aoc_2024_3_b(input) {
    let m = null
    while (m = input.match(/don't\(\)[\s\S]*?do\(\)/)) {
        input = input.slice(0, m.index) + input.slice(m.index + m[0].length)
    }

    return aoc_2024_3_a(input)
}
