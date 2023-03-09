import header from "../compenent/header";
import ProjectList from "../compenent/projectlist";
import { projectList } from "../data/data";
import Category from "../api/categori";
import { useEffect, useState } from "../libs";
import Projects from "../compenent/project";
import footer from "../compenent/footer";
const project_show = () => {
    const [data, setData] = useState(projectList);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data))
        // getProjects().then(({data})=> setData(data))
    }, [])
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, []);
    const onHandleClick = (id) => {
        fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
            .then(response => response.json())
            .then(data => setProjects(data.projects))
    }
    return `
      
        <h2 style="text-align:center">Danh Mục</h2>
        ${data.map((project, index) =>
        `
        <div class="sanpham" style="display:flex;float:left;margin:20px;padding:20px;;" >
        <div style="background-color:#87CEEB;text-align: center;
        border-radius: 10px ;width:330px;min-height:200px;" >
           <img src="https://us.123rf.com/450wm/vladgrin/vladgrin1902/vladgrin190200077/124976508-building-mobile-interface-on-screen-of-laptop-smartphone-tablet-developers-use-software-on.jpg?ver=6" style="width:290px;min-height:170px;margin:20px 0px"> 
           <h5><a href="http://localhost:5173/project/${project.id}" style="text-decoration:none;color:black;">${project.name}</a></h5>
          <div> <a href="http://localhost:5173/project/${project.id}"> <button data-name="${project.name}"style="background-color:#CDCDC1;border:1px solid #CDCDC1;border-radius:10px ;margin:20px 0px 10px 0px;width:150px" > Chi tiết !</button></a></div>
       </div>
       </div>
  
        `
    ).join(" ")}
    `;


}
export default project_show;
