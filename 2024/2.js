const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

function aoc_2024_2_a(input) {
    const lines = input.split('\n')

    let result = 0

    lines.forEach(line => {
        if (isSafe(line.split(' ').map(el => Number(el)))) {
            result++
        }
    })

    return result
}

function aoc_2024_2_b(input) {
    const lines = input.split('\n')

    let result = 0
    
    lines.forEach(line => {
        let numbers = line.split(' ').map(el => Number(el))
    
        for (let idxToRemove = 0; idxToRemove < numbers.length; idxToRemove++) {
            if (isSafe(numbers.toSpliced(idxToRemove, 1))) {
                result++
                break
            }
        }
    })
    
    return result
}

function isSafe(a) {
    let desc = true
    let asc = true
    let diff = true

    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] < a[i + 1]) asc = false
        if (a[i] > a[i + 1]) desc = false
        if (a[i] === a[i + 1]) diff = false
        if (Math.abs(a[i] - a[i + 1]) > 3) diff = false
    }

    return (asc || desc) && diff
}

console.log(aoc_2024_2_a(input))
console.log(aoc_2024_2_b(input))
