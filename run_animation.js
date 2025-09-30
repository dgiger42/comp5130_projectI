
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.fillStyle = "#66F"
ctx.fillRect(0, 0, canvas.width, canvas.height)


setInterval(a_callback, 500)

let cube_x = 0;

function a_callback() {
    img_elem = document.getElementById("cube_img");
    // console.log(img_elem);

    cube_x += 10;
    img_elem.style.left = cube_x + "px";
    console.log("hola", cube_x)
}

// animate_cube();

// function animate_cube() {
//     img = new Image();
//     img.src = 'cube.png';
//     w = 100;
//     h = 100;
//     img.onload = function(){
//         ctx.drawImage(img, 0, 0, w, h);
//         console.log(img)
//     }
// }