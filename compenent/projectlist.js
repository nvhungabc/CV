import { projectList } from "../data/data";

const ProjectList = ({ projects }) => {
    return `
    ${
        projects.map((item) => {
            return `
                <div>
                   <h2> <a href='/project/${item.id}'>Project Id: ${item.id}</a></h2>
                    <p>Project Name: ${item.name}</p>
                </div>
            `
        }).join("")
    }
  `
}

export default ProjectList;