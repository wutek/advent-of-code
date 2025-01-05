// Advent of Code 2024 day 4 solution
// https://adventofcode.com/2024/day/4

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

console.log(aoc_2024_4_a(input))
console.log(aoc_2024_4_b(input))


function aoc_2024_4_a(input) {
    const t = input.split('\n').map(line => line.split(''))
    let result = 0

    for (let r = 0; r < t.length; r++) {
        for (let c = 0; c < t[r].length - 3; c++) {
            if (t[r][c] === 'X' && t[r][c+1] === 'M' && t[r][c+2] === 'A' && t[r][c+3] === 'S') result++
            if (t[r][c] === 'S' && t[r][c+1] === 'A' && t[r][c+2] === 'M' && t[r][c+3] === 'X') result++
        }
    }

    for (let r = 0; r < t.length - 3; r++) {
        for (let c = 0; c < t[r].length; c++) {
            if (t[r][c] === 'X' && t[r+1][c] === 'M' && t[r+2][c] === 'A' && t[r+3][c] === 'S') result++
            if (t[r][c] === 'S' && t[r+1][c] === 'A' && t[r+2][c] === 'M' && t[r+3][c] === 'X') result++
        }
    }

    for (let r = 0; r < t.length - 3; r++) {
        for (let c = 0; c < t[r].length - 3; c++) {
            if (t[r][c] === 'X' && t[r+1][c+1] === 'M' && t[r+2][c+2] === 'A' && t[r+3][c+3] === 'S') result++
            if (t[r][c] === 'S' && t[r+1][c+1] === 'A' && t[r+2][c+2] === 'M' && t[r+3][c+3] === 'X') result++
        }
    }

    for (let r = 3; r < t.length; r++) {
        for (let c = 0; c < t[r].length - 3; c++) {
            if (t[r][c] === 'X' && t[r-1][c+1] === 'M' && t[r-2][c+2] === 'A' && t[r-3][c+3] === 'S') result++
            if (t[r][c] === 'S' && t[r-1][c+1] === 'A' && t[r-2][c+2] === 'M' && t[r-3][c+3] === 'X') result++
        }
    }

    return result
}

function aoc_2024_4_b(input) {
    const t = input.split('\n').map(line => line.split(''))
    let result = 0
    
    for (let r = 1; r < t.length - 1; r++) {
        for (let c = 1; c < t[r].length - 1; c++) {
            if (t[r][c] !== 'A') continue
    
            if (
                (t[r - 1][c - 1] !== 'M' || t[r + 1][c + 1] !== 'S')
                && (t[r - 1][c - 1] !== 'S' || t[r + 1][c + 1] !== 'M')
            ) continue
    
            if (
                (t[r + 1][c - 1] !== 'M' || t[r - 1][c + 1] !== 'S')
                && (t[r + 1][c - 1] !== 'S' || t[r - 1][c + 1] !== 'M')
            ) continue
    
            result++
        }
    }
    
    return result
}
