let submit
let uptditem=null
let uptdval=null
function enableAdd(){
    document.getElementById("submits").disabled = false
}

window.onload = ()=>{
    let add = document.getElementById("getdata")       //form element id
    add.addEventListener("submit",additem)
    submit = document.getElementById("submits") 
    let deleditbtn = document.getElementById("items")
    deleditbtn.addEventListener("click",updtdel)
   
}


// add item in tasks
function additem(e){
    e.preventDefault()
    if (submit.value!="Submit"){
        // console.log("hi")
        // alert("hi")
        
        // uptditem.target.parentNode.childNodes[0].data=document.getElementById("item").value
        // document.getElementById("item").value=""

    }
    else if(submit.value=="Submit"){
    //get currrent input value in newitem variable
    let newitem = document.getElementById("item").value;
    // let newitem =item.trim()
    document.getElementById("item").value =""
    if(newitem.trim() == ""){
        Swal.fire({
        title: "Warning",
        text: "Empty value not Acceptable",
        icon: "warning"})
    }
    else{
      
        let li = document.createElement("li");  //createing element "li"
        li.className ="list-group-item py-5 py-md-1 d-inline-block w-100"         //add class name
        let txtspan =document.createElement("span")
        txtspan.className="txtspan"
        txtspan.appendChild(document.createTextNode(newitem)) 
        let btnspan =document.createElement("span")
        btnspan.className="btnspan float-end "
        
        //addpend current value in li element

       
        

        let editbtn = document.createElement("button")
        editbtn.className="btn-primary px-1 py-0 px-sm-2 py-sm-0  me-1 me-sm-3  edit"
        editbtn.appendChild(document.createTextNode("Edit"));

        let editicon = document.createElement("i")
        editicon.className="bi bi-pencil ms-1 ms-sm-2"
        editbtn.appendChild(editicon)

        let deletebtn =document.createElement("button")
        deletebtn.className="btn-danger px-1 py-0 px-sm-2 py-sm-0 delete"
        deletebtn.appendChild(document.createTextNode("Delete"))

        let deleteicon = document.createElement("i")
        deleteicon.className="bi bi-trash ms-1 ms-sm-2"
        deletebtn.appendChild(deleteicon)

        li.appendChild(txtspan)
        btnspan.appendChild(editbtn)
        btnspan.appendChild(deletebtn)
        li.appendChild(btnspan)
        items.appendChild(li)  
        Swal.fire({
            title: "Successfully",
            text: "Added new To-Do",
            icon: "success"})
        
    }
}

   
   
}


function updtdel(e) {
    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure you want to delete")) {
           // Find the closest 'li' element and remove it
           let li = e.target.closest('li');
           if (li) {
               li.remove();

               Swal.fire({
                   title: "Successfully",
                   text: "Remove item",
                   icon: "success"
               });
        } else {
            Swal.fire({
                title: "Error",
                text: "Something went wrong",
                icon: "error"
            });
        }
    }
} else if (e.target.classList.contains("edit")) {
        let editedValue = prompt("You can edit here...", e.target.parentNode.childNodes[0].data);

        if (editedValue === null) {
            Swal.fire({
                title: "Warning",
                text: "Editing canceled",
                icon: "warning"
            });
        } else if (editedValue.trim() === "") {
            Swal.fire({
                title: "Warning",
                text: "Empty value not acceptable",
                icon: "warning"
            });
        } else {
            // Find the parent li element and update its text content
            let li = e.target.parentNode.parentNode;
            li.childNodes[0].childNodes[0].data = editedValue;

            Swal.fire({
                title: "Successfully",
                text: "Update item",
                icon: "success"
            });
        }
    }
}
