
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.fillStyle = "#66F"
ctx.fillRect(0, 0, canvas.width, canvas.height)


setInterval(a_callback, 25)

let cube_x = 0;

function a_callback() {
    img_elem = document.getElementById("cube_img");
    // console.log(img_elem);

    cube_x += 1;
    cube_x %= 200
    img_elem.style.left = cube_x + "px";
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