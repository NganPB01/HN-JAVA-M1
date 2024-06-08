



// bài giảng thầy ở dưới


/* 
    đệ quy trong js hay còn gọi là hàm tự gọi lại chính nó.
    ứng dụng dùng để giải quyết các vấn đề có tính lặp lại một nhiệm vụ cho đến khi
    đạt được điều kiện thỏa mãn.
 */
/* 
    ví dụ bài toán tính tổng từ 1 đến 10.
 */
    for (let i = 1; i <=10; i++) {
        let sum=0;
       sum+=i;
    }
   //  console.log("tổng từ 1 đến 10 là",sum);
   // đùng đệ quy xử lý
    function deQuy(a){ // a là tham số, param
       if(a==1){
           return 1
       }
       return a+ deQuy(--a);
       /*
            10 + 9 + 8 +... + 2+ 1;
        */
    }
    deQuy(10) // khi gọi hàm; đối số(argument)