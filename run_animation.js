
setInterval(animate_cube, 25, "cube1")
setInterval(animate_cube, 25, "cube2")

function animate_cube(cube_id) {
    img_elem = document.getElementById(cube_id);
    // console.log(img_elem);

    style = img_elem.style;

    cube_x = parseInt(style.left.slice(0, -2))
    cube_y = parseInt(style.top.slice(0, -2))
    cube_x += 1;
    cube_x %= 200
    cube_y += 1;
    cube_y %= 400;


    style.left = cube_x + "px";
    style.top = cube_y + "px"    
}
