// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

const num = (n) => {
  for(let i=1; i<=n; i++){
    if(i%3===0 && i%5!==0){
      console.log(`${i} is Google`);
    }else if(i%3!==0 && i%5===0){
      console.log(`${i} is Facebook`);
    }else if(i%3===0 && i%5===0) {
      console.log(`${i} is Amazon`);
    }
  }
}
console.log(num(100));