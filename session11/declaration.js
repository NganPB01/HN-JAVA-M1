// function rikkei() {
//     console.log("11");
// }
// function rikkei() {
//     console.log("22");
// }
// rikkei();
// rikkei();
function tinhTong(a,b) {
    // tính tổng từ a đến b
    let sum=0;
    for (let i = a; i <=b ; i++) {
       sum+=i;
    }
    console.log(`tổng ${a} đến ${b} là ": ${sum}`);
}
tinhTong(5,7);
tinhTong(1,5);
// function render sách mảng có 10 quyển
// có chức năng tìm kiếm
let books=["đắc nhân tâm","cha giàu cha nghèo","nhà giả kim"];
function returnTest(){
   if(5=="5"){
    console.log("ok");
    return "thu"
   }else{
    return;
   }

}
console.log(returnTest());
let result11=function sum(a,b) {
    return a+b
}

console.log(result11(1,2));