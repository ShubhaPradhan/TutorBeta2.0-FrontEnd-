let header = document.querySelectorAll('.card-header');
let arrow = document.querySelectorAll('.arrow');
let counter = [2,2,2,2];
header.forEach((element,index) => {
    element.addEventListener('click',()=>{
        if(counter[index]%2===0){
            arrow[index].className = 'fas fa-arrow-down arrow';
        }
        else{
            arrow[index].className = 'fas fa-arrow-up arrow';
        }
        counter[index]++;
    });
});