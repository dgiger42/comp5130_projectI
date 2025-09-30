

setInterval(animate_cube, 25)

let cube_x = 0;
let cube_y = 0;

function animate_cube() {
    img_elem = document.getElementById("cube_img");
    // console.log(img_elem);

    cube_x += 1;
    cube_x %= 200
    cube_y += 1;
    cube_y %= 400;

    img_elem.style.left = cube_x + "px";
    img_elem.style.top = cube_y + "px"
}
