const modal=document.querySelector("#pop-up");
const openModalButton=document.querySelector(".open-modal")
const closeModalButton=document.querySelector(".close-button")

openModalButton.addEventListener("click",()=>{
    modal.showModal()
})


closeModalButton.addEventListener("click",()=>{
    modal.close()
})