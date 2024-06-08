/* 
     let a = [1,3,4,2,1,4,5,2,3,6,2];
      let b = [];
*/

let a = [1,1,1,1,1, 3, 4, 2, 1, 4, 5, 2, 3, 6, 2];
let b = [1];//[1,3,4,2,5,6]
// kiểm tra xem từng phần tử của a có trong b hay không
//  nếu không có thì push vào nếu có thì thôi
 for (let i = 0; i < a.length; i++) {
     // từng phần tử   a[i]
     // kiểm tra từng phần tử có trong b hay không?
     if (b.indexOf(a[i])===-1){
        b.push(a[i])
     }
 }
 console.log("mảng không trùng",b);
// indexOf, include
let student=["hoa","thu","lan","minh","thu"];
// kiểm tra xem phần tử có trong mảng  student hay không?

console.log(11111,student.indexOf("thu"));