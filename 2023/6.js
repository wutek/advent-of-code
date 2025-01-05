// Advent of Code 2023 day 6 solution
// https://adventofcode.com/2023/day/6

const input = `Time:      7  15   30
Distance:  9  40  200`

console.log(aoc_2023_6_a(input))
console.log(aoc_2023_6_b(71530n, 940200n))


function aoc_2023_6_a(input) {
    let times = input.split('\n')[0]
    let distances = input.split('\n')[1]
    const result = []

    while (times.match(/\d+/)) {
        const m = times.match(/(\d+)(.*$)/)
        const time = BigInt(m[1])
        times = m[2]

        const m2 = distances.match(/(\d+)(.*$)/)
        const distance = BigInt(m2[1])
        distances = m2[2]

        result.push(nr_of_ways_to_beat_record(time, distance))
    }

    return result.reduce((t, c) => t * c, 1n)
}

function aoc_2023_6_b(time, distance) {
    return nr_of_ways_to_beat_record(time, distance)
}

function nr_of_ways_to_beat_record(time, distance) {
    distance++

    let delta = time * time - 4n * distance

    let x1 = (time - sqrt_floor(delta)) / 2n
    let x2 = (time + sqrt_floor(delta)) / 2n

    if (x1 * (time - x1) < distance) x1++
    if (x2 * (time - x2) < distance) x2--

    return x2 - x1 + 1n
}

/** @param {BigInt} x */
function sqrt_floor(x) {
    let low = 0n
    let hi = x

    while (hi > low + 1n) {
        let mid = low + (hi - low) / 2n
        let midSquared = mid * mid

        if (midSquared === x) return mid

        if (midSquared > x) {
            hi = mid
        } else {
            low = mid
        }
    }

    return low
}
