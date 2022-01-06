showNotes();//when we reaload our page than our showNotes function will 
let btn=document.getElementById('addbtn');
btn.addEventListener('click',(e)=>{
    let addText=document.getElementById('addText');
    let cardTitle=document.getElementById('cardTitle');
    let note=localStorage.getItem('note');
    if(note==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(note);
    }
    let myval={mytitle:cardTitle.value,mytext:addText.value};
    noteObj.push(myval);
    localStorage.setItem('note',JSON.stringify(noteObj));
     addText.value="";
     cardTitle.value="";
   //  console.log(noteObj)
     showNotes();
})
//function to show element form local storage
function showNotes(){
let note=localStorage.getItem('note');
if(note==null){
    noteObj=[];
}
else{
    noteObj=JSON.parse(note);
}
let html="";

noteObj.forEach((element,index) => {
    html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            
    <div class="card-body">
      <h5 class="card-title">${element.mytitle}</h5>
      <p class="card-text">${element.mytext}</p>
      <button id=${index} onclick="deleteNote(this.id)"class="btn btn-primary">Delete Note</button>
    </div>
  </div>`
   //this.id gave id of that element 
});
let mynote=document.getElementById('notes');
if(noteObj.length!=0){
    mynote.innerHTML=html;
}
else{
    mynote.innerHTML=`<p>click on above <span style="color:red ;background-color:blue;border-radious:2px;">Add Note</span> to add your notes</p>`
}
}
function deleteNote(indexNo){
    let note=localStorage.getItem('note');
    if(note==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(note);
    }
    noteObj.splice(indexNo,1);
    localStorage.setItem('note',JSON.stringify(noteObj));
    showNotes();

}
let serch=document.getElementById('search');
serch.addEventListener('input',()=>{
    let searchVal=serch.value;
    let card=document.getElementsByClassName('noteCard');
    Array.from(card).forEach((element)=>{
        
        let mycard=element.getElementsByTagName('p')[0].innerHTML;
        //console.log(mycard)
       if(mycard.includes(searchVal)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })

})