// Advent of Code 2015 day 14 solution
// https://adventofcode.com/2015/day/14

input = `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`

console.log(aoc_2015_14(input))


function aoc_2015_14(input) {
    const reindeers = []
    
    input.split('\n').forEach(line => {
        const m = line.match(/^(\S+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds.$/)
        
        reindeers.push({
            name: m[1],
            kmPerS:  Number(m[2]),
            flyDuration: Number(m[3]),
            restDuration:  Number(m[4]),
            resting: 0,
            flying: Number(m[3]),
            distance: 0,
            score: 0
        })
    })


    let topDistance = 0
    for (let s = 1; s <= 2503; s++) {
        reindeers.forEach(r => {
            if (r.flying > 0) {
                r.flying--
                r.distance += r.kmPerS

                if (r.distance > topDistance) {
                    topDistance = r.distance
                }
    
                if (r.flying === 0) {
                    r.resting = r.restDuration
                }
            } else {
                r.resting--
    
                if (r.resting === 0) {
                    r.flying = r.flyDuration
                }
            }
        })

        reindeers.forEach(r => {
            if (r.distance === topDistance) {
                r.score++
            }
        })
    }

    return {
        topDistance: topDistance,
        topScore: Math.max(...reindeers.map(el => el.score)),
    }
}
