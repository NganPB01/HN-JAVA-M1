
let employeeList = JSON.parse(localStorage.getItem(`employee`)) || [];
    function addName(event) {
            console.log('2345');
            event.preventDefault();
        let code= document.getElementById("code").value;
        let name= document.getElementById("name").value;
        let email= document.getElementById("email").value;  
        let check = false;
        for (let i = 0; i < employeeList.length; i++) {
            if(employeeList[i].email===email){
                check=true;
                return;
            }   
        }
        if (check===true) {
                alert("email đã tồn tại");
                return;
            }
        let employee = {
            employeeCode: code,
            employeeName: name,
            employeeEmail: email, 
        };
        employeeList.push(employee);
        localStorage.setItem("employee",JSON.stringify(`employeeList`));
        renderEmployee();  
    }
    function renderEmployee() {
        let table = "";
        for (let i = 0; i < employeeList.length; i++) {
            table+= 
                    `
                    <tr>
                        <td>${i+1} </td>
                        <td>${employeeList[i].employeeCode} </td>
                        <td>${employeeList[i].employeeName} </td>
                        <td>${employeeList[i].employeeEmail}</td>
                        <td>
                            <button style="background-color: orange;color: #fff; border-color:orange" onclick="update(${i})">Sửa</button>
                            <button style="background-color: red;color: #fff; border-color:red" onclick="deleteUser(${i})">Xoá</button>
                        </td>
                    </tr>
                    `;
            
        }
        console.log("111",table);
        document.getElementById("content").innerHTML=table;
    }
    renderEmployee();
    function deleteUser (abc) {
        confirmDelete= confirm("Bạn chắc chắn muốn xoá không?");
        if(confirmDelete){
            for (let i = 0; i < employeeList.length; i++) {
                if (i===abc) {
                    employeeList.splice(i,1);
                    localStorage.setItem("employee",JSON.stringify(employeeList));
                    renderEmployee();
                    break;
                }
                
            }
        }

    }
    renderEmployee();
     