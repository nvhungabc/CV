import { projectList } from "../../data/data";
import { useEffect, useState } from "../../libs";
import header from "../../compenent/header";
import footer from "../../compenent/footer";

// import { deleteProject, getProjects } from "../../api/config";
const main_admin = () => {

    const [data, setData] = useState(projectList);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data))
        // getProjects().then(({data})=> setData(data))
    }, [])
    useEffect(() => {
        const btns = document.querySelectorAll(".btn_remove");
        console.log(btns);
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.dataset.id;
                const newProjects = data.filter((project) => project.id != id);
                setData(newProjects);
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE"
                }).then(() => alert("Bạn có chắc chắn muốn xóa!"))
                // deleteProject(id).then(()=> alert("Project deleted"))
            })
        }
    });
    
    return `
  

   <h3 style="text-align:center; "> ${header()}</h3>
   
   <h4><a href="http://localhost:5173/admin/project/add" class="text-decoration-none bg-danger"style="margin-left:590px;border:1px solid red;color:black;font-size:20px;padding:5px;border-radius:10px">ADD Project</a></h4>
<div >
  <table border="1" class="text-center "style="margin:auto 10px;">
   <thead style="border:1px solid black;background-color:white;">
    <tr >
        <th style="border:1px solid black">#</th>
        <th style="border:1px solid black">Name</th>
        <th style="border:1px solid black">Thông Tin</th>
        <th  style="border:1px solid black">Image</th>
        <th style="border:1px solid black">Remove</th>
        <th style="border:1px solid black">Update</th>
    </tr>
    </thead>
    <tbody>
    ${data.map((project, index) =>
        `<tr style="border:1px solid black">
    <td style="border:1px solid black">${index + 1}</td>
    <td style="border:1px solid black">${project.name}</td>
    <td style="border:1px solid black">${project.mo_ta}</td>
    <td style="border:1px solid black"><img src="https://th.bing.com/th/id/OIP.xi_VY54V535hztHz11VTyQHaFL?w=228&h=180&c=7&r=0&o=5&pid=1.7" style="width:90px;height:90px"></td>
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
export default main_admin;