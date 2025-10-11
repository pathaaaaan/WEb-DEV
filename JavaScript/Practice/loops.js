for (let i = 0; i < 5; i++) {
  // console.log("hello");
}
let i = 9;
while (i--) {
  // console.log(i);
}

let j = 2;
do {
  // console.log("do-do");
} while (j--);


// practice
list = ["black tea","green tea","chai","ollong tea"]
l1 = []
for(let i=0;i<list.length;i++){
  if(list[i] === "chai"){
    // console.log(l1);
    break;
  }
  l1.push(list[i]);
}

//for in loop
for(const t in list){
  // console.log(list[t]);
}
// console.log();
// for each loop

// list.forEach(tee => {
//   console.log(tee);
  
// });


// foreach with function

// list.forEach(function(tea) {
//   if(tea === "chai")
//   return;
//   console.log(tea);
// });

arr = [1,2,4,2,4,5,4,,4,3,4,46,3,32,4,65,3]
for(const num of arr){
  if(num == 32){
    console.log("found");
  }
}