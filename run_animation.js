

setInterval(animate_cube, 25)

let cube_x = 0;

function animate_cube() {
    img_elem = document.getElementById("cube_img");
    // console.log(img_elem);

    cube_x += 1;
    cube_x %= 200
    img_elem.style.left = cube_x + "px";
}
