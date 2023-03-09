import { router, useEffect, useState } from "../../libs"
// import { getProject, updateProject } from "../../api/config";
// import projects from "./projects";
import header from "../../compenent/header"
import footer from "../../compenent/footer"

const projects_edit = ({ data: { id } }) => {
    // const projectList = JSON.parse(localStorage.getItem('projects'))||[]
    // const currprojectList = projectList.find((project) => project.id === id)
    const [data, setdata] = useState([])
    // const projectList = JSON.parse(localStorage.getItem('projects')) || [];
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((res) => res.json())
            .then((data) => setdata(data))
        // getProject(id).then(({data})=>setdata(data))
    }, [])

    // console.log({projectList:{id}});
    useEffect(() => {
        const form = document.querySelector('.form');
        const name = document.querySelector('.name');
        const mo_ta = document.querySelector('.mo_ta');
        console.log(name);
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const newProject = {
                id: id,
                name: name.value,
                mo_ta:mo_ta.value
            
            }
            // const newProjectsList = newProject.map((project)=> project.id == id)
            // const newProjectList = projectList.map((project)=>{
            //     return project.id == newProject.id? newProject:project
            // })

            // localStorage.setItem('projects', JSON.stringify(newProjectList))
            // router.navigate('admin/project')
            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProject),

            }).then(() => router.navigate('/admin/project'))
            .then(alert("Update thành công!!!"))
            // updateProject(newProject).then(()=>router.navigate("/admin/project"))
        })
    })
    

    return `
    <h3 style="text-align:center; "> ${header()}</h3>
    <h2 class="text-center">Update</h2>
    <a href="http://localhost:5173/admin/project" style="border:2px solid red;border-radius:4px;background-color:red;color:black;margin:1px;" class="text-decoration-none ">Quay Lại</a>
    <p>Thông Tin</p>
  <table class="table table-bordered">
  <tr>
  <td>ID</td>
  <td>Name </td>
  </tr>
  <tr>
  <td> ${id}</td>
  <td>
  ${data.name}
  </td>
  <td>
  ${data.mo_ta}
  </td>
  </tr>
  </table>
  <div class="project-add">
  <form class="form">
  <p>Chỉnh sửa</p>
  <input class="form-control form-control-sm name" type="text" value="${data.name}" placeholder="Name">
  <input class="form-control form-control-sm mo_ta" type="text" value="${data.mo_ta}" placeholder="Thông Tin">
  <button class="bg-danger border-0 p-2 btn-add " style="margin-top:10px">Update</button>
  </form>
  </div>
  <p>${footer()}</p>
  `

}

export default projects_edit
