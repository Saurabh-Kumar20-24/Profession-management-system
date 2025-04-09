let btn = document.getElementById("button");
let employeeList=document.getElementById("employeelist");
// console.log(elist)
let  employees=[];
let counter=1;
btn.addEventListener("click",()=>{
    let name=document.getElementById("name").value
    let profession=document.getElementById("profession").value
    let age=document.getElementById("age").value

    let employee={
        id: counter++,
        name: name,
        profession: profession,
        age: age
    };

    if(!name||!profession||!age){
        messageFun("All field are required","error")
        return;
    }

    employees.push(employee);
    updateEmployeeList();
    messageFun('Successfully added!','success');
    
})
function updateEmployeeList(){
  employeeList.innerHTML="";
  employees.forEach(emp=>{
    const empDiv=document.createElement("div");
    empDiv.innerHTML=`<strong>${emp.name}</strong><strong class="mx-4">${emp.profession}</strong><strong>${emp.age}</strong>
    <button class="mx-4" onclick="deleteRow(${emp.id})">Delete</button>`
    employeeList.appendChild(empDiv);
  })
}

let msgid=document.getElementById("msgid");
function messageFun(text,type){
   msgid.textContent=text;
   msgid.className=`message ${type}`
   setTimeout(()=>
    msgid.textContent=""
   ,3000)
}

function deleteRow(id){
    employees=employees.filter((val)=>val.id!==id);
    updateEmployeeList();
}    



// let row=document.createElement("tr");
// Object.values(obj).forEach((value)=>{
//     let td=document.createElement("td");
//     td.textContent=value;
//     row.appendChild(td);

//     // console.log(value)
//    })
//    let deleteBtn=document.createElement("button")
//     deleteBtn.textContent="Delete";
//     row.appendChild(deleteBtn);
//    table.appendChild(row);

//    deleteBtn.addEventListener("click",()=>{
//     row.remove();
// })


/*
//this will add employees in the table
let btn = document.getElementById("button");
btn.addEventListener("click",()=>{
    let name=document.getElementById("name").value
    let profession=document.getElementById("profession").value
    let age=document.getElementById("age").value
    let table=document.getElementById("table")
    
    let row=document.createElement("tr");
    [name,profession,age].forEach((val)=>{
        let td=document.createElement("td");
        td.textContent=val;
        row.appendChild(td);
    })

    let deleteBtn=document.createElement("button")
    deleteBtn.textContent="Delete";
    row.appendChild(deleteBtn);

    table.appendChild(row);
    console.log(table)

    deleteBtn.addEventListener("click",()=>{
        row.remove();
    })
})
*/


/*
function addEmployee(){
    let name=document.getElementById("name").value
    let profession=document.getElementById("profession").value
    let age=document.getElementById("age").value
    let table=document.getElementById("table")
    
    let row=table.createElement("tr");
    [name,profession,age].forEach((val)=>{
        let td=row.createElement("td");
        td.textContent=val;
        row.appendChild(td);
    })

    let deleteBtn=row.createCell("button")
    deleteBtn.textContent="Delete";
    row.appendChild(deleteBtn);

    table.appendChild(row);

    // let nameCell=row.createCell("td");
    // let professionCell=row.createCell("td");
    // let ageCell=row.createCell("td");
    // let deleteBtn=row.createCell("button")
    // nameCell.textContent=name.value;
    // professionCell.textContent=profession.value;
    // ageCell.textContent=age.value;
    // deleteBtn.textContent="Delete";

    // row.appendChild(nameCell)
    // row.appendChild(professionCell)
    // row.appendChild(ageCell)
    // row.appendChild(deleteBtn)

    // table.appendChild(row);
}*/
