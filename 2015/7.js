// Advent of Code 2015 day 7 solution
// https://adventofcode.com/2015/day/7

const input = `123 -> x
456 -> y
x AND b -> d
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT y -> i
d OR e -> a
153 -> b
x OR y -> e`

console.log(aoc_2015_7_a(input))
console.log(aoc_2015_7_b(input))

function aoc_2015_7_a(input) {
    const map = {}

    while (map['a'] === undefined) {
        input.split('\n').forEach(line => {
            const m = line.match(/^(.*) -> ([a-z]{1,2})$/)
            const left = m[1]
            const right = m[2]
            let match = null
    
            if (map[m[2]] !== undefined) {
                return
            }

            match = line.match(/^([a-z]{1,2}) -> ([a-z]{1,2})$/)
            if (match !== null) {
                if (map[match[1]] === undefined) {
                    return
                }

                map[match[2]] = map[match[1]]
            }
    
            match = left.match(/^(\d+)$/)
            if (match !== null) {
                map[right] = Number(left)
                return
            }
    
            match = left.match(/([a-z]{1,2}) (AND|OR) ([a-z]{1,2})/)
            if (match !== null) {
                if (map[match[1]] === undefined || map[match[3]] === undefined) {
                    return
                }

                switch (match[2]) {
                    case 'AND':
                        map[right] = Number(map[match[1]]) & Number(map[match[3]])
                        return
                    case 'OR':
                        map[right] = Number(map[match[1]]) | Number(map[match[3]])
                        return
                }
            }
    
            match = left.match(/(\d+) (AND|OR) ([a-z]{1,2})/)
            if (match !== null) {
                if (map[match[3]] === undefined) {
                    return
                }

                switch (match[2]) {
                    case 'AND':
                        map[right] = Number(match[1]) & Number(map[match[3]])
                        return
                    case 'OR':
                        map[right] = Number(match[1]) | Number(map[match[3]])
                        return
                }
            }

            match = left.match(/([a-z]{1,2}) (LSHIFT|RSHIFT) (\d+)/)
            if (match !== null) {
                if (map[match[1]] === undefined) {
                    return
                }
                switch (match[2]) {
                    case 'LSHIFT':
                        map[right] = Number(map[match[1]]) << Number(match[3])
                        return
                    case 'RSHIFT':
                        map[right] = Number(map[match[1]]) >> Number(match[3])
                        return
                }
            }

            match = left.match(/NOT ([a-z]{1,2})/)
            if (match !== null) {
                if (map[match[1]] === undefined) {
                    return
                }

                map[right] = 2 ** 16 - Number(map[match[1]]) - 1
                return
            }
        })
    }

    return map['a']
}

function aoc_2015_7_b(input) {
    const part1Answer = aoc_2015_7_a(input)

    input = input.replace(
        /^\d+ -> b$/m,
        `${part1Answer} -> b`
    )

    return aoc_2015_7_a(input)
}
