import { router, useEffect, useState } from "../../libs";
import ProjectList from "../../compenent/projectlist";
import { projectList } from "../../data/data";
import header from "../../compenent/header";
import footer from "../../compenent/footer";
import Category from "../../api/categori";
const ProjectAdd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const name = document.querySelector("#project-name");
        const mo_ta = document.querySelector("#project-mo_ta");
        const categoryId= document.querySelector("#project-categories");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const newProject = {
                // id: projectList.length + 1,
                name: name.value,
                mo_ta:mo_ta.value,
                categoryId:categoryId.value
            };

            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProject),

            })
                .then(() => router.navigate("/admin/project"))
                .then(alert("Thêm mục thành công!"))
        });
    });
    return `
   <h3 style="text-align:center; "> ${header()}</h3>
    <div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" /><br>
                Thông Tin
                <input type="text" class="form-control" id="project-mo_ta" /><br>
                CategoryId:
                <input type="text" class="form-control" id="project-categories" /><br>
                Ảnh :
                <input type="file" class="form-control" id="project-image" />
                
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
               <button class="btn btn-primary"><a href="http://localhost:5173/admin/project" style="border-radius:4px;color:black;color:white;" class="text-decoration-none ">Quay Lại</a></button>
            </div>
        </form>
    </div>
    <p>${footer()}</p>
    
    `;
};
export default ProjectAdd;