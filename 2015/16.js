// Advent of Code 2015 day 16 solution
// https://adventofcode.com/2015/day/16

const input = `Sue 1: children: 1, cars: 8, vizslas: 7
Sue 2: akitas: 10, perfumes: 10, children: 5
Sue 3: cars: 5, pomeranians: 4, vizslas: 1
Sue 4: children: 3, goldfish: 5, vizslas: 0
Sue 5: perfumes: 1, trees: 6, goldfish: 0
Sue 6: cars: 1, perfumes: 6, vizslas: 1`

const input2 = `children: 3
cats: 7
samoyeds: 2
pomeranians: 3
akitas: 0
vizslas: 0
goldfish: 5
trees: 3
cars: 2
perfumes: 1`

console.log(aoc_2015_16_a(input, input2))
console.log(aoc_2015_16_b(input, input2))


function aoc_2015_16_a(input, input2) {
    const map = {}

    input2.split('\n').forEach(line => {
        let x = line.split(': ')
        map[x[0]] = x[1]
    })

    let Sue = null

    input.split('\n').forEach(line => {
        const m = line.match(/^Sue (\d+): (.*): (\d+), (.*): (\d+), (.*): (\d+)$/)

        if (
            map[m[2]] === m[3]
            && map[m[4]] === m[5]
            && map[m[6]] === m[7]
        ) Sue = m[1]
    })

    return Sue
}

function aoc_2015_16_b(input, input2) {
    const map = {}

    input2.split('\n').forEach(line => {
        let x = line.split(': ')
        map[x[0]] = x[1]
    })

    let Sue = null

    input.split('\n').forEach(line => {
        const m = line.match(/^Sue (\d+): (.*): (\d+), (.*): (\d+), (.*): (\d+)$/)

        if (
            match(m[2], m[3], map)
            && match(m[4], m[5], map)
            && match(m[6], m[7], map)
        ) Sue = m[1]
    })

    return Sue
}

function match(object, quantity, map) {
    switch (object) {
        case 'cats':
        case 'trees':
            return map[object] < quantity
        case 'pomeranians':
        case 'goldfish':
            return map[object] > quantity
        default:
            return map[object] === quantity
    }
}
