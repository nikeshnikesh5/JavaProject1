let panels = document.querySelectorAll('.panel')
console.log(panels);
const bgAnimation = document.getElementById('bgAnimation');
const numberofColorBoxes = 400;


panels.forEach( panel => {
   panel .addEventListener('click', () => {
    console.log(panel);
    removeActiveClass()
    panel.classList.add('active')
      });
   
   
})

function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

// Animation Code

for (let index = 0; index < numberofColorBoxes; index++) {
   
     const colorBox = document.createElement('div');
     colorBox.classList.add('colorBox');
     bgAnimation.append(colorBox);
}