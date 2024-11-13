const toggleBut =document.getElementById("toggle-skills") as HTMLButtonElement
const SKI  = document.getElementById('skills') as HTMLElement

toggleBut.addEventListener('click', ()=>{
    if(SKI.style.display === 'none') {
        SKI.style.display = 'block'
    }else{
        SKI.style.display = 'none'
    }
});