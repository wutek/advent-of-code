// Advent of Code 2020 day 2 solution
// https://adventofcode.com/2020/day/2

const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

console.log(aoc_2020_2_a(input))
console.log(aoc_2020_2_b(input))

function aoc_2020_2_a(input) {
    let result = 0

    input.split('\n').forEach(line => {
        let m = line.match(/^(\d+)-(\d+) (.): (.*)$/)

        let min = Number(m[1])
        let max = Number(m[2])
        let letter = m[3]
        let pass = m[4]
        let count = 0

        for (let i = 0; i < pass.length; i++)
            if (pass[i] === letter)
                count++

        if (min <= count && count <= max)
            result++
    })

    return result
}

function aoc_2020_2_b(input) {
    let result = 0

    input.split('\n').forEach(line => {
        let m = line.match(/^(\d+)-(\d+) (.): (.*)$/)

        let min = Number(m[1])
        let max = Number(m[2])
        let letter = m[3]
        let pass = m[4]

        if ((pass[min - 1] === letter) !== (pass[max - 1] === letter))
            result++
    })

    return result
}
