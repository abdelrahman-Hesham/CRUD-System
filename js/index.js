var bookmarkNameInput= document.getElementById("bookmarkName")
var websiteURLInput= document.getElementById("websiteURL")

var allSites = [];
if(localStorage.getItem('sites')!== null){
    allSites = JSON.parse(localStorage.getItem('sites'))
    display();}
// else {
    //  allSites = [];}

function addURL(){   
    var bookmark={
        name : bookmarkNameInput.value,
        website : websiteURLInput.value
}
allSites.push(bookmark)
localStorage.setItem('sites',JSON.stringify(allSites))
display()
clear()
}

function clear(){
    websiteURLInput.value=null;
    bookmarkNameInput.value=null;
}


function display(){
    var cartona='';
    for (var  i= 0; i < allSites.length; i++) {
        cartona +=`<tr class="">
                <td>${i}</td>
                <td>${allSites[i].name}</td> 
                <td><button onclick='visitSite(${i})' class="btn btn-success">visit</a></button></td>
                <td><button onclick='deletedp(${i})' class="btn btn-danger">Delete</button></td>
            </tr>`
    }
    document.getElementById("tBody").innerHTML=cartona;
}

function deletedp(dIndex){
    allSites.splice(dIndex,1)
    display()
    localStorage.setItem('sites',JSON.stringify('allSites'))
}

function visitSite(index){
    window.open(allSites[index].website,'_blank')
}


function allvalidation(element,msgid){
    
    var msg = document.getElementById(msgid)
    var regex ={
        bookmarkName:/^[A-Z][a-z]{3,8}/,
        websiteURL:/^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/,
    };
    if(regex[element.id].test(element.value)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        msg.classList.add('d-none')
    }
    else{
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
        msg.classList.remove('d-none')
        
    }
}