// Advent of Code 2015 day 13 solution
// https://adventofcode.com/2015/day/13

const input = `Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`

console.log(aoc_2015_13(input))
console.log(aoc_2015_13(input, true))


function aoc_2015_13(input, addExtraSeat = false) {
    const map = inputToMap(input)
    const peeps = Object.keys(map)
    let answer = null

    function findAllSittings(sittings, peepsLeft) {
        if (peepsLeft.length === 0) {
            sittings.push(sittings[0])

            let happiness = 0
            let lowestScore = null
    
            for (let i = 0; i < sittings.length - 1; i++) {
                happiness += map[sittings[i]][sittings[i+1]]
                happiness += map[sittings[i+1]][sittings[i]]

                let happinessChange = map[sittings[i]][sittings[i+1]] + map[sittings[i+1]][sittings[i]]

                if (lowestScore === null || happinessChange < lowestScore) {
                    lowestScore = happinessChange
                }
            }

            if (addExtraSeat) {
                happiness -= lowestScore
            }

            if (
                answer === null
                || happiness > answer
            ) {
                answer = happiness
            }
        }

        peepsLeft.forEach(peep => {
            findAllSittings([...sittings, peep], peepsLeft.filter(el => el !== peep))
        })
    }

    findAllSittings([], peeps)

    return answer
}


function inputToMap(input) {
    const map = {}

    input.split('\n').forEach(line => {
        let m = line.match(/^(.*) would (gain|lose) (\d+) happiness units by sitting next to (.*).$/)

        let p1 = m[1]
        let score = (m[2] === 'gain' ? Number(m[3]) : -Number(m[3]))
        let p2 = m[4]

        map[p1] = map[p1] || {}

        map[p1][p2] = score
    })

    return map
}
