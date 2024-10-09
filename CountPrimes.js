/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0; // There are no prime numbers less than 2
   
       let returnNum = 0;
       const isPrime = (num)=> {
           if (num < 2) return false; 
           if (num === 2) return true; 
           if (num % 2 === 0) return false; 
   
           for(let i = 3; i*i <= num; i+=2){
               const notPrime = num % i
               if(notPrime === 0){
                   return false
               }
           }
         return true
       }
   
      for (let count = 2; count < n; count++) {
           if (isPrime(count)) {
               returnNum++;
           }
       }
   
       return returnNum
   
   
   
   };