const input = `3   4
4   3
2   5
1   3
3   9
3   3`

function aoc_2024_1_a(input) {
    const lines = input.split('\n')
    const listOne = []
    const listTwo = []

    lines.forEach(line => {
        const x = line.split('   ')

        listOne.push(Number(x[0]))
        listTwo.push(Number(x[1]))
    })

    listOne.sort()
    listTwo.sort()

    let diff = 0

    for (let i = 0; i < listOne.length; i++) {
        diff += Math.abs(listOne[i] - listTwo[i])
    }

    return diff
}


function aoc_2024_1_b(input) {
    const lines = input.split('\n')

    const listOne = []
    const listTwo = []

    lines.forEach(line => {
        let x = line.split('   ')

        listOne.push(Number(x[0]))
        listTwo.push(Number(x[1]))
    })

    listOne.sort()
    dictionary = countElements(listTwo)

    let diff = listOne.reduce((t, c) => t + c * (dictionary[c] ?? 0), 0)

    return diff
}

function countElements(array) {
    return array.reduce((t, c) => {
        t[c] = (t[c] ?? 0) + 1
        return t
    }, {})
}

console.log(aoc_2024_1_a(input))
console.log(aoc_2024_1_b(input))
