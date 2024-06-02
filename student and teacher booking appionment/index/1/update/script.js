let data =[
    (id: 1, Name: 'raj',email:  "raj@gmail.com" ),
    (id: 2, Name: "ram", email: "ram@gmail.com" )
]


function readAll(){
    var tbdata = document.querySelector(".table_data");
    var elements="";
    data.map(d=>{
elements += 
    <><tr> ${d.name} </tr><tr>${d.email}</tr><td>
        <button>update</button>
        <button>delete</button>
    </td></>

    })
}
tbdata.innerHTML = elements;