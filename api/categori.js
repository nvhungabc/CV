import { useEffect } from "../libs"

const Category = ({ categories, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll('.btn');
    for (const btn of btns) {
      btn.addEventListener('click', function () {
        const id = btn.dataset.id;
        onClick(id);
      })
    }
  })
  return `
  <h3 style="text-align:center;margin-top:20px">Danh Mục</h3>
    <div style="text-align:center">${categories.map(category => {
    return `<button data-id="${category.id}" class="btn" style="border: 1px solid;
    background-color: red;color: white;margin-left:40px;border-radius:20px">${category.name}</button>`
  }).join(" ")}</div>
  `
}

export default Category



