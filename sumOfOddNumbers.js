function sumOfOddNumbers(num) {

    let n = 1;
    let sumCounter = 0;

    for (let i = 1; i <= num; i++) {
        console.log(n);
        sumCounter += n;
        n += 2;
    }

    console.log(`Sum: ${sumCounter}`);

}

sumOfOddNumbers(5);