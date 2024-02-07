// function addTwoNums(num1, num2) {
//   let total = 0;

//   for (let i = 0 ; i < num1 ; i++) {
//     total += 1;
//   }
//   for (let i = 0 ; i < num2 ; i++) {
//     total += 1;
//   }

//   return total;
// }

// let startTime = Date.now();
// addTwoNums(1234, 5678);
// let endTime = Date.now();

// console.log(`Runtime: ${endTime - startTime}ms`)

// iterations = n time
// O(n) Time : Linear Time
// O(2n) => O(n);
function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// O(n^2) Time : Quadratic Time
// O(n * n) => O(n^2)
// O(n^2 + n^4) => O(n^4)
function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arr.length; i++) {
          console.log(arr[i])
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i])
    }
  }
}

//O(1) Time : Constant Time
// O(2 * 1) => O(1)
function func(n) {
  let n = n + 1;
  let x = n * 2;
  let name = 'Tristan';
}


// O(n) space : Linear Space
// O(2n) => O(n)
function func(arr) {
  let res = [];
  let obj = {};

  arr.forEach(el => {
    res.push(el + 1);
  })

  return res;
}

// O(n^2) space : Quadratic Space
// O(2n^2) => O(n^2)
function func(arr) {
  let res = [[]];
  let obj = {key: {}, key2:[]};

  arr.forEach(el => {
    res.push([el + 1, el]);
  })

  return res;
}

// O(1)
function func(arr) {
  let res = 654165165165165;
  let name = 'Trevor Yagsathoth';
  let bool = true;
}

// O(n) : O(n)
function OutOfPlace(arr) {
  let res = [];

  arr.forEach(el => {
    res.push(el + 1);
  });

  return res;
}
// O(n) : O(1)
function InPlace(arr) {
  arr.forEach((el, i) => {
    arr[i] = el + 1;
  });

  return res;
}