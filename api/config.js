import axios from "axios";
const instance=axios.create({
    baseURL:'http://localhost:3000'
})
const getProject=()=>{
    return instance.get(`/project`)
}
const deleteProject =(id)=>{
    return instance.delete(`/project/${id}`)
}
const getProjects=(id)=>{
return instance.get(`/project/${id}`)
}
const updateProject=(project)=>{
    return instance.put(`/project/${project.id}`,project)
}
export default{getProject,getProjects,deleteProject,updateProject}