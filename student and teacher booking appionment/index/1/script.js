const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
function validate(){
    var email = document.getElementById("e").value;
    if(email.includes("@")&&Number.includes(".")){
        alert("validation complete")

    }else{
        alert("enter a valid email address")
    }
}
function validate(){
    var password1 = document.getElementById("p1").value;
    var password2 = document.getElementById("p2").value;
    if(password1 == password2){
        alert("validation complete")
    }else{
        alert("passwords do not match")
    }
}