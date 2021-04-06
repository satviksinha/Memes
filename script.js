const canvas = document.getElementById('play-area');
canvas.width=0;
canvas.height=0;

const increaseBrightness = document.getElementById('increase-brightness');
const decreaseBrightness = document.getElementById('decrease-brightness');

const increaseContrast = document.getElementById('increase-contrast');
const decreaseContrast = document.getElementById('decrease-contrast');

var ctx = canvas.getContext('2d');
const textArea = document.getElementById('textarea');
//console.log(textArea);

const generateButton = document.getElementById('generate');
const imageInput = document.getElementById('image-file');
const downloadButton = document.getElementById('download');

generateButton.addEventListener('click',function(){
    //console.log(canvas);
   // console.log(generateButton);
   const reader = new FileReader();
   const file = imageInput.files[0];
   if(file){
       reader.addEventListener('load',function(){
            var img = new Image;
            img.src = reader.result;
            generateMeme(img);
       });
   }
   reader.readAsDataURL(file);
});

function generateMeme(img){
    canvas.width =500;
    canvas.height = 500;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw(img);
    //ctx.drawImage(img,0,0,500,500);
}

function draw(img){
    if(!img.complete){
        setTimeout(function(){draw(img);},50);
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,0,0,500,500);
}

var addText = document.getElementById('add-text');
addText.addEventListener('click',function(){
    alert("Note: Default color of text is white");
    alert("Select the area where you want to add text");
    canvas.classList.add('cursor');
});
//console.log(canvas.offsetTop);

canvas.addEventListener('click',function(e){
    //console.log(e.clientY - canvas.offsetTop);
   // console.log( e.clientX -canvas.offsetLeft);

   ctx.font = canvas.width/10 +'px';
   ctx.fillStyle = 'white';
   ctx.strokeStyle = 'black';
   ctx.fillText(textArea.value,e.clientX -canvas.offsetLeft,e.clientY - canvas.offsetTop); 
});

downloadButton.addEventListener('click', downloadImage);

function downloadImage(){
    var image = canvas.toDataURL();
    var link = document.createElement('a');
    link.href = image;
    link.download = "meme.png";
    link.click();
}

var percent =100;
var dx =4;
decreaseBrightness.addEventListener('click',function(){
    if(percent){
    percent-=dx;
    canvas.style.filter = `brightness(${percent}%)`;
    }
});


increaseBrightness.addEventListener('click',function(){
    if(percent!=100){
        percent+=dx;
        canvas.style.filter = `brightness(${percent}%)`;
    }
});

var contrast =100;
increaseContrast.addEventListener('click',function(){
    if(contrast!=100){
        contrast+=dx;
        canvas.style.filter = `contrast(${contrast}%)`;
    }
});

decreaseContrast.addEventListener('click',function(){
    if(contrast){
        contrast-=dx;
        canvas.style.filter = `contrast(${contrast}%)`;
    }
});