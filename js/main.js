    let myform = document.getElementById('myform');
    let targetimage = document.getElementById('targetimage')

    // get filters
    let slider = document.querySelectorAll('.slider')

    myform.addEventListener('submit', (e)=>{

    /*
      * get input field for online online image show
    */
   let onlineurl = document.getElementById('onlineurl');
   let urlImage = onlineurl.value;
   targetimage.setAttribute('src', urlImage);

   onlineurl.value = '';


    e.preventDefault();
    console.log('enter done');
 })




//  for edit filters
for (let i = 0; i<= slider.length-1; i++){
    slider[i].addEventListener('input', editImage);
}

function editImage(){
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let hue = document.getElementById('hue');
    let sepia = document.getElementById('sepia');

    let gsval =  gs.value;
    let blurval = blur.value;
    let hueval = hue.value;
    let sepiaval = sepia.value;

    targetimage.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+hueval+'deg) sepia('+sepiaval+'%)';
}


// reset for all
let sliderForm = document.getElementById('sliderForm');
sliderForm.addEventListener('reset', function(){
    sliderForm.reset();
    setTimeout(function(){
        editImage()
    }, 0)
})