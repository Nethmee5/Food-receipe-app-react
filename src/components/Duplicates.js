import React from 'react'



/*function Ex() {
    
    let chars = ['A', 'B', 'A', 'C', 'B'];

    let uniqueChars = chars.filter((c, index) => {
        return chars.indexOf(c) === index;
    });
    
    console.log(uniqueChars);

  */
function Duplicates() {

    
    let arr= ['a','b','a'];
    let b =[];
    let len = arr.length;
    for(let i=0;i<len;i++){

  if(b.indexOf(arr[i])===-1){
    b.push(arr[i]);
  }
}
console.log(b);
  }




export default Duplicates;

