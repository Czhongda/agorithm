var Stack = require('../../baseClass/Stack_obj')

let s = new Stack()
console.log(`s`, s.size());
let a = new Array(10).fill(666).map(item=>{
  console.log(`item`, item);
})