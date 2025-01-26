// Advent of Code 2015 day 17 solution
// https://adventofcode.com/2015/day/17

const input = `33
14
18
20
45
35
16
35
1
13
18
13
50
44
48
6
24
41
30
42`

console.log("Part1:", aoc_2015_17_a(input))
console.log("Part2 (choose value for lowest key):", aoc_2015_17_b(input))


function aoc_2015_17_a(input) {
    const containers = input.split('\n').map(el => Number(el))
    let answer = 0

    function fill(containers, usedContainers, toFill) {
        containers.forEach((c, idx) => {
            if (c === toFill)
                answer++

            if (c < toFill)
                fill(containers.slice(idx + 1), [...usedContainers, c], toFill - c)
        })
    }

    fill(containers, [], 150)

    return answer
}

function aoc_2015_17_b(input) {
    const containers = input.split('\n').map(el => Number(el))
    const answer = {}

    function fill(containers, usedContainers, toFill) {
        containers.forEach((c, idx) => {
            if (c === toFill)
                answer[usedContainers.length] = (answer[usedContainers.length] ?? 0) + 1

            if (c < toFill)
                fill(containers.slice(idx + 1), [...usedContainers, c], toFill - c)
        })
    }

    fill(containers, [], 150)

    return answer
}
