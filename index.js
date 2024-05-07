document.addEventListener('DOMContentLoaded',function(){
    const list=document.querySelector('ul');
    for(let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const ed=JSON.parse(localStorage.getItem(key));
        const nli=document.createElement('li');
        nli.innerHTML=ed.expense+" "+ed.description+" "+ed.category+"<button class='delete-btn'>Delete</button> <button class='edit-btn'>Edit</button>";
        list.appendChild(nli);
        const dbtn=nli.querySelector('.delete-btn');
        dbtn.onclick=()=>{
            localStorage.removeItem(key);
            list.removeChild(nli);
        }
        const ebtn=nli.querySelector('.edit-btn');
    ebtn.onclick=()=>{
        localStorage.removeItem(key);
        list.removeChild(nli);
        document.querySelector('form').expense.value = ed.expense;
        document.querySelector('form').description.value = ed.description;
        document.querySelector('form').category.value = ed.category;
    }
    }
});















const fm=document.querySelector('form');
fm.addEventListener('submit',function(event){
    event.preventDefault();
    let ed={
        expense:event.target.expense.value,
        description:event.target.description.value,
        category:event.target.category.value
    }
    const nli=document.createElement('li');
    nli.innerHTML=ed.expense+" "+ed.description+" "+ed.category+"<button class='delete-btn'>Delete</button> <button class='edit-btn'>Edit</button>";
    let eds=JSON.stringify(ed);
    localStorage.setItem(ed.expense,eds);
    const list=document.querySelector('ul');
    list.appendChild(nli); 
    const dbtn=nli.querySelector('.delete-btn');
    // console.log(dbtn);
    dbtn.onclick=()=>{
        localStorage.removeItem(ed.expense);
        list.removeChild(nli);
    }
    const ebtn=nli.querySelector('.edit-btn');
    ebtn.onclick=()=>{
        localStorage.removeItem(ed.expense);
        list.removeChild(nli);
        event.target.expense.value=ed.expense;
        event.target.description.value=ed.description;
        event.target.category.value=ed.category;
    }
    
})