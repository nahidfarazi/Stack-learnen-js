function HashMake(digit){
   Hash = Math.round( Math.random()*digit*0x2763533)
   console.log(`your hash code: ${Hash}`);
}

HashMake(222)