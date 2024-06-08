// hàm tạo, giống như một cái khuôn mẫu.
// ES5:2009
function Student(name,sdt) {
    this.name=name;
    this.sdt=sdt;

 }
 //{name12:"hoa",std:123456}
let std1 = new Student("hoa",123456);
let std2= new Student("ngọc",124);
// console.log("std1",std1,std2);

// let std1={
//     name:"hoa",
//     sdt:123
// }
// let std2 = {
//     name: "ngọc",
//     sdt: 124
// }
// let std3 = {
//     name: "nhung",
//     sdt: 125
// }
 