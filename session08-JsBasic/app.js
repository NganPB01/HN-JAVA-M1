//I. Cách Khai báo biến

//console.log("Hello JavaScript!!!");

// cấu trúc khai báo biến: từ khoá khai báo biến + tên biến + "=" + giá trị của biến
//let number = 10;
//number =100;
//console.log("number")
// console.log: dùng để đưa giá trị của tên biến ra ngoài màn hình console

//quy tắc đặt tên biến: 

//- Viết liền ko dấu
//- Ký tự đầu tiên phải alf chữ cái
//- Không chứa những ký tự đặc biệt @number, ``,!
// Tên biến sẽ phân biệt viết hoa và viết thường
//có 3 cách đặt tên biến
// camelCase: studentName => ưu tiên, phổ biến nhất
// snake-case: student-fisrt-name
// PascalCase: StudentName

//II. Kiểu dữ liệu
//1. Number=> 1,2,3,4,...=>khai báo ra các số
//2. String=> a,b,c,...=>khai báo ra các chuỗi
//3. Boolean=> khai báo giá trị đúng, sai thường dùng trong các trường hợp check điều kiện
//4. Null=>Khai giá trị null
//5. Undefined=> Khai báo 1 biến mà không gán giá trị=>undefined
//6. NaN (not a number) => khi tính toán với toán tử số học mà 1 trong 2 biến không phải 1 số=> NaN
//7. Object=> khai báo 1 biến là 1 đối tượng => Object


//1.1 Number

//let number1 = 100;
//let number2 = 200;

//console.log("Number 1:", number1);
//console.log("Number2:", number2);
//console.log("Sum: Number1 + Number2", number1 + number2);


//2.1 String

let firstName = "Phạm"
let lastName = "Ngân"
console.log("fullName:", firstName, lastName);
// kiểu dữ liệu String sẽ được đặt trong dấu "", ``, ''
// kiểu dữ liệu string có thể nối chuỗi bằng dấu +
let fullName = firstName+ " " +lastName;
console.log("fullName:", fullName);

//3.1
//4.1
//5.1

//===========Hết kiểu dữ liệu======//

//III Toán tử
//1. toán tử toán học
// cộng, trừ, nhân, chia, chia lấy dư, bình phương
// +, -, *, /, %, **

//let number1 = 15;
//let number2 = 2;
//let result1 = number1 + number2;
//let result2 = number1 - number2;
//let result3 = number1 * number2;
//let result4 = number1 / number2;
//let result5 = number1 % number2;
//let result6 = number1 ** number2;

//console.log("Result1:", result1);
//console.log("Result2:", result2);
//console.log("Result3:", result3);
//console.log("Result4:", result4);
//console.log("Result5:", result5);
//console.log("Result6:", result6);

//======Hết toán tử toán học================================================//

//2. toán gán :   =, +=;　-=; *=; /=; %=

//let number1 = 15;
//let number2 = 2;
//number1 += number2;
//number1 += number2 ==> gán lại giá trị cho number1 => number1 = number1 + number2
// tương tự với các phép toán gán khác
//console.log("result=", number1);



//======Hết toán tử gán====================================================//

//3. Toán tử so sánh ==, ===, !=, !==, >, <, >=, <=
//let number1 = 15;
//let number2 = 2;
// == : so sánh giá trị
// === : so sánh giá trị và kiểu dữ liệu
// != : so sánh sự khác nhau về giá trị
// !== : so sánh sự khác nhau về giá trị và kiểu dữ liệu
// console.log("result =" munber1 !== number2);


//======Hết toán tử so sánh====================================================//



//4. Toán tử Logic: &&, ||, ! (và, hoặc, phủ định)

// toán tử logic dùng để check điều kiện

let number1 = 8;
let number2 = 2;

console.log("Kết quả =", number1 == number2 && number1 > number2);

//======Hết toán tử logic====================================================//


//IV. Các hàm built-in (các hàm có sẵn)

// console.log: in ra màn hình
// alert: hiển thị thông báo ra html
// prompt: cho phép nhập dữ liệu vào ô input
// confirm: thông báo cho phép xác nhận













