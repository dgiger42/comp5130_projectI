
interval = 25
setInterval(animate_cube, interval, "cube1")
setInterval(animate_cube, interval, "cube2")

function animate_cube(cube_id) {
    img_elem = document.getElementById(cube_id);
    parent = img_elem.parentNode;

    parent_rect = parent.getBoundingClientRect();
    img_rect = img_elem.getBoundingClientRect();
    
    max_x_offset = parent_rect.width - img_rect.width;
    // max_y_offset = parent_rect.height - img_rect.height;
    max_y_offset = 600;
    console.log(parent_rect)

    // console.log(img_elem);


    style = img_elem.style;



    // rect = img_elem.getBoundingClientRect()
    // if (cube_id == "cube1") {
    //     console.log(rect)
    // }

    cube_x = parseInt(style.left.slice(0, -2))
    cube_y = parseInt(style.top.slice(0, -2))
    cube_x += 1;
    cube_x %= max_x_offset;
    cube_y += 1;
    cube_y %= max_y_offset;


    style.left = cube_x + "px";
    style.top = cube_y + "px"    
}
