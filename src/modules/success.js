const success = () => {

  const success = document.getElementById('formula')
   const elem = []
 
 
 
   success.addEventListener('mouseover', (e) =>{
     if (window.innerWidth < 1024) { 
      return
     }
     if (e.target.closest('.formula-item__icon')) {
       const item = e.target.closest('.formula-item')
       item.style.zIndex = '1'
 
       item.classList.add('active-item')
 
       elem[0] = item
 
       const successItem = item.querySelector('.formula-item-popup')
 
       opensuccess(successItem, item)
     }
   })
 
   success.addEventListener('mouseout', (e) =>{
     if (window.innerWidth < 1024) { 
      return
     }
 
     if (elem[0]) {
 
       const item = elem[0]
       item.style.zIndex = 0
       item.classList.remove('active-item')
       const itemIcon = e.target.closest('.formula-item__icon')
 
       if (!itemIcon) {
         return
       }
 
       const successItem  = itemIcon.querySelector('.formula-item-popup')
       closesuccess(successItem)
     }
   })
 
   const opensuccess = (successItem, item) =>{
 
     let y = successItem.getBoundingClientRect().y
 
     let indent = +item.getBoundingClientRect().height
 
     window.addEventListener('scroll', function() {
     });
     if (y < 0) {
 
       successItem.style.cssText = `
       bottom: 0px;
       top: ${indent*1.1}px;
       `
       successItem.classList.add('flipTo')
     }
   }
 
   const closesuccess = (successItem) =>{
     successItem.style.cssText = `
       bottom: 90px;`
       successItem.classList.remove('flipTo')
   }
 
 }
 
 export default success