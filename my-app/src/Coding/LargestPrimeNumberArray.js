import React from 'react'

const Challenge3 = () => {
    //Question 1 find the largest prme number in below array
    const arr = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47];

    function isPrime(number) {
        if (number % 2 == 0 || number < 2) {
            return false;
        }
        for (let fact = 3; fact <= Math.sqrt(number); fact += 2) {
            if (number % fact == 0) return false;
        }
        return true
    }
    // function will only return true if number is not divisible by 2 
    // or less than 2 
    console.log(arr.sort((a, b) => a - b).findLast(isPrime))
    //97 as array is sorted with the findLast function having
    //  isPrime within will only return the last value where 
    // isPrime returns true hence the largest prime number 
    // in array.

    return (
        <div>

        </div>
    )
}

export default Challenge3
