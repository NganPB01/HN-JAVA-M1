/* 

 cho người dùng nhập in hoa chữ cái đầu tiên lên
 input : cố gắng học lập trình!
 output: Cố Gắng Học Lập Trình!
*/
let text ="cố gắng học lập trình!";
let arr = text.split(" ");
console.log("giá trị arr",arr);
for (let i = 0; i < arr.length; i++) {
     arr[i]
}
let result="hoa";//Hoa
console.log("222222",result.charAt(0).toUpperCase()+result.slice(1));
// slice
// sao chép: tạo ra phần tử mới
// splice có thể thêm, sửa , xóa tương tác trực tiếp mảng ban đầu.
let text1="vietnam";
console.log("slice",text1.slice(3));