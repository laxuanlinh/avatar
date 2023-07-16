import '../src/styles.scss';

const canvas = document.getElementById("main-avatar");

var draw = function draw(){
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const background = document.getElementById("background-colors").value;
    const textColor = document.getElementById("text-colors").value;
    const logoImage = document.getElementById("logo-images").value;
    const img = new Image();
    img.src = logoImage;

    img.onload = function (){
        ctx.drawImage(img, -70, 50, 350, 350);
    }
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "120px Arial";
    ctx.fillStyle = textColor;
    ctx.fillText("Linh", 232, 265);
    ctx.font = "30px Arial";
    ctx.fillText("Since", 240, 300);
    ctx.fillText("1994", 370, 300);

    const btn = document.querySelector('button');
}
draw();
document.getElementById("background-colors").addEventListener("change", draw);
document.getElementById("text-colors").addEventListener("change", draw);
document.getElementById("logo-images").addEventListener("change", draw);

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    let png = canvas.toDataURL();
    download(png, "image.png");
});

var download = function(href, name){
    var link = document.createElement('a');
    link.download = name;
    link.style.opacity = "0";
    document.body.append(link);
    link.href = href;
    link.click();
    link.remove();
}