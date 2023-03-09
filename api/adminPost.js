import { useEffect } from "../libs"

const Post = ({ post, onClick }) => {
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
    <div style="margin:40px 330px">${post.map(post => {
    return `<button data-id="${post.id}" class="btn" style="border: 1px solid;
    background-color: red;color: white;margin-left:40px;border-radius:20px">${post.name}</button>`
  }).join(" ")}</div>
  `
}

export default Post