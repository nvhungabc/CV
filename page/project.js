import header from "../compenent/header";
import ProjectList from "../compenent/projectlist";
import { projectList } from "../data/data";
import Category from "../api/categori";
import { useEffect, useState } from "../libs";
import Projects from "../compenent/project";
import project_show from "./project-show";
import footer from "../compenent/footer";
const project=()=>{
    const [data, setData] = useState(projectList);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setData(data))
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
        ${header()}
        ${Category({ categories, onClick: onHandleClick })}
        ${Projects({ projects })}
    <p>${footer()}</p>
    `;
}
export default project;
