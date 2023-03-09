import { post} from "../../data/data";
import { useEffect, useState } from "../../libs";
import header from "../../compenent/header";
import footer from "../../compenent/footer";

// import { deleteProject, getProjects } from "../../api/config";
const adminPost = () => {

    const [Data, setData] = useState(post);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((Data) => setData(Data))
        // getProjects().then(({data})=> setData(data))
    }, [])
    useEffect(() => {
        const btns = document.querySelectorAll(".btn_remove");
        console.log(btns);
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                const newPost = Data.filter((post) => post.id != id);
                setData(newPost);
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE"
                }).then(() => alert("Bạn có chắc chắn muốn xóa!"))
                // deleteProject(id).then(()=> alert("Project deleted"))
            })
        }
    });
    
    return `
  

   <h3 style="text-align:center; "> ${header()}</h3>
   
  
<div >
  <table border="1" class="text-center "style="margin:auto 10px;">
   <thead style="border:1px solid black;background-color:white;">
    <tr >
        <th style="border:1px solid black">#</th>
        <th style="border:1px solid black">Name</th>
        <th style="border:1px solid black">Remove</th>
        <th style="border:1px solid black">Update</th>
    </tr>
    </thead>
    <tbody>
    ${Data.map((project, index) =>
        `<tr style="border:1px solid black">
    <td style="border:1px solid black">${index + 1}</td>
    <td style="border:1px solid black">${project.name}</td>
      <td style="border:1px solid black"><button data-id="${project.id}"class=" btn_remove" style="background-color:red">Remove</button></td>
    <td><a href="http://localhost:5173/admin/project_update/${project.id}"> <button data-name="${project.name}"style="background-color:yellow" > Update</button></a>
</td>
    </tr>`).join(" ")}
    </tbody>
</table>
</div>
<p>${footer()}</p>
`
}
export default adminPost;