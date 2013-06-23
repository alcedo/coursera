#!/usr/bin/env node

var fs = require('fs');

// This program writes the first 100 prime numbers into a file.
var out = prime(100);
fs.writeFileSync('prime.txt', out);

// Pseudo Code idea: store all primes in a list starting with 2, if a number cant be divided by any of these,it is also considered a prime number

// todo: further optimize by  If any number has no number that evenly multiplies into it, which is less than or equal to, it's square root, then it's a prime number. ie: we need only test a number up till its sqrt. for number 257, we test from 2 to 17 will do 

function prime(n) {
    var plist = [2]; //Solution set.

    //gen all primes till n 
    for (var i = 3; i <= n; i++) {
        isPrime(i)
    }

    return plist;

    function isPrime(n) {
        var flag = true;
        plist.forEach(function(x) {
            if (n % x == 0) {
                flag = false; //n is not a prime
                return;
            }
        });

        if (flag) {
            plist.push(n);
            return true; //n is a prime!
        } else {
            return false;
        }
    }
}
