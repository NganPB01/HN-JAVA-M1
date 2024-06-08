(function sayGoodbye() {
    console.log("hàm iife được gọi 1!");
})();
(function sayGoodbye() {
    console.log("hàm iife được gọi 2!");
})();
// thường dùng làm thư viện;
let fullName="thu";
(function sayGoodbye() {
    console.log("hàm iife được gọi 3!");
})();