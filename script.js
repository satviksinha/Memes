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
var img;
generateButton.addEventListener('click',function(){
    //console.log(canvas);
   // console.log(generateButton);
   const reader = new FileReader();
   const file = imageInput.files[0];
   if(file){
       reader.addEventListener('load',function(){
            img = new Image;
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
addText.addEventListener('click',function(e){
   alert("Note: Default color of text is white");
   alert("Select the area where you want to add text");
    e.preventDefault();
    const reader = new FileReader();
    const file = imageInput.files[0];
    if(file){
        reader.addEventListener('load',function(){
             img = new Image;
             img.src = reader.result;
             generateMeme(img);
        });
    }
    reader.readAsDataURL(file);
    canvas.classList.add('cursor');
    console.log(textArea.value);
    canvas.width =500;
    canvas.height = 500;
});
//console.log(canvas.offsetTop);

canvas.addEventListener('click',function(e){
    //console.log(e.clientY - canvas.offsetTop);
   // console.log( e.clientX -canvas.offsetLeft);

   ctx.font = canvas.width/10 +'px';
   ctx.fillStyle = `${colorvar}`;
   ctx.strokeStyle = 'black';
   ctx.font = `${fontvar}px Arial`;
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

const dropDown = document.getElementById('fontsize');
const colorDrop = document.getElementById('color-change');
console.log(dropDown);

/*dropDown.addEventListener('click',function(){
    console.log(dropDown.options[dropDown.selectedIndex]);
});*/
//changeFont(selectFont);

var fontvar =8;
function changeOption(){
    console.log(dropDown.options[dropDown.selectedIndex].text);
    fontvar = dropDown.options[dropDown.selectedIndex].text;
}

var colorvar = 'red';
function colorChange(){
    console.log(colorDrop.options[colorDrop.selectedIndex].text);
    colorvar = colorDrop.options[colorDrop.selectedIndex].text;
}

const meme1 = document.querySelector('.m1');
const meme2 = document.querySelector('.m2');
const meme3 = document.querySelector('.m3');
const meme4 = document.querySelector('.m4');
const meme5 = document.querySelector('.m5');
console.log(meme1);

meme1.addEventListener('click',function(){
    var template = new Image;
    template.src = "meme1new.jpg";
    generateMeme(template);
});
meme2.addEventListener('click',function(){
    var template = new Image;
    template.src = "meme2new.jpg";
    generateMeme(template);
});
meme3.addEventListener('click',function(){
    var template = new Image;
    template.src = "meme3new.jpg";
    generateMeme(template);
});
meme4.addEventListener('click',function(){
    var template = new Image;
    template.src = "meme4new.jpg";
    generateMeme(template);
});
meme5.addEventListener('click',function(){
    var template = new Image;
    template.src = "meme5new.jpg";
    generateMeme(template);
});