// 1. 
// Cho một mảng có sẵn
// Tìm phần tử xuất hiện nhiều nhất trong mảng và in ra chúng
// input: [1,3,3,5,7,7,8,3] 
// output: 3 xuất hiện nhiều nhất 3 lần 
// 2.
//  Bài 2: Loại bỏ các phần tử trùng nhau trong mảng
//  In ra mảng sau khi loại các phần tử giống nhau
// 3.
//  BÀI 3.Viết chương trình vào đoạn text, in ra text mới với chư
// các đầu tiên viết hoa 


// bài 1'
let mang = [1,3,3,5,7,7,8,3];
let checkmax = 0;
let count = 0;
for (let i = 0; i < mang.length; i++) {
    count =0;
    for (let j = 0; j < mang.length; j++) {
        if(mang[i]==mang[j]){
            count++
        }        
    }
    
}