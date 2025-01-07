// Advent of Code 2015 day 9 solution
// https://adventofcode.com/2015/day/9

const input = `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`

console.log(aoc_2015_9(input))
console.log(aoc_2015_9(input, true))


function aoc_2015_9(input, returnLongest = false) {
    const map = inputToMap(input)
    const cities = Object.keys(map)
    let answer = null

    function findAllPaths(path, citiesLeft) {
        if (citiesLeft.length === 0) {
            let distance = 0
    
            for (let i = 0; i < path.length - 1; i++) {
                distance += map[path[i]][path[i+1]]
            }
    
            if (
                answer === null
                || (distance < answer && !returnLongest)
                || (distance > answer && returnLongest)
            ) {
                answer = distance
            }
    
            return 
        }
    
        citiesLeft.forEach(city => {
            findAllPaths([...path, city], citiesLeft.filter(el => el !== city))
        })
    }

    findAllPaths([], cities)

    return answer
}

function inputToMap(input) {
    const map = {}

    input.split('\n').forEach(line => {
        let m = line.match(/^(.*) to (.*) = (\d+)$/)

        let city1 = m[1]
        let city2 = m[2]
        let distance = Number(m[3])

        map[city1] = map[city1] || {}
        map[city2] = map[city2] || {}

        map[city1][city2] = distance
        map[city2][city1] = distance
    })

    return map
}
