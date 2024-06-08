let result =()=>{
    // thân hàm nơi viết logic
    let a=5;
    let b=6;
    console.log(` tổng của ${a} và ${b} sẽ là ${a+b}`);
}
// gọi hàm 
result();
/* 
    function arrow khác function thường như thế nào
    1. cú pháp.
    2. phải gọi sau khi khai báo.
    3. arrow không có CONTEXT (this).
    4. arrow không có argument.(đối tượng argument nó sẽ lấy hết các đối số truyền vào!)
    5. arrow không dùng làm hàm tạo constructor được.
*/