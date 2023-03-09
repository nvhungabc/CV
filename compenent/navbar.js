import {menuList}from"../data/data"
const NavBar=()=>{
    return `
    ${menuList.map((menu)=>{
        console.log(menu);
        return`<a href="${menu.path}" class="text-decoration-none"style="padding:10px; line-height: 1.4;font-family: 'Quicksand',sans-serif; color: #777;font-size:18px;" >${menu.name}</a>`
    }).join("")}
    `
};
export default NavBar;
