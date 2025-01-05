<?php

// Advent of Code 2015 day 4 solution
// https://adventofcode.com/2015/day/4

function mineAdventCoins(string $input, string $match): int
{
    $number = 0;
    $length = strlen($match);

    while (true) {
        $hashInput = $input . $number;
        $hash = md5($hashInput);
    
        if (substr($hash, 0, $length) === $match) {
            break;
        }
    
        $number++;
    }
    
    return $number;
}

echo(mineAdventCoins('yzbqklnj', '00000'));
echo("\n");
echo(mineAdventCoins('yzbqklnj', '000000'));
