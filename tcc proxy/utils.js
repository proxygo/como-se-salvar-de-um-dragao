

function modal(param) {

   const modalContainer = document.getElementById('modal')
   
   if(param == 'open') {
      modalContainer.style.display = 'flex';
   } else if (param == 'close') {
      modalContainer.style.display = 'none';
   } else {
      
   }
   
}

function checkWidth(param) {
   const dialog = document.getElementById('dialog')
   const box = document.getElementById('box')
   if(window.screen.width < window.screen.height) {
      dialog.style.display = 'flex';
      box.classList.add("tremer");
      box.addEventListener("animationend", function() {
         box.classList.remove("tremer");
       });
      return;
   } else {
      dialog.style.display = 'none';
      console.log(param)
      modal(param)
   }
}