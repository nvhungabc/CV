// // import { projectList } from "../../data/data";
// // import { useEffect, useState } from "../../libs";
// import header from "../../compenent/header";
// // import { deleteProject, getProjects } from "../../api/config";
// const project_test = () => {

//     const [data, setData] = useState(projectList);
//     useEffect(() => {
//         fetch("http://localhost:3000/projects")
//             .then((response) => response.json())
//             .then((data) => setData(data))
//         // getProjects().then(({data})=> setData(data))
//     }, [])
//     return `
  

//    <h3 style="text-align:center; "> ${header()}</h3>
   
//    <h4><a href="http://localhost:5173/admin/project/add" class="text-decoration-none bg-danger"style="margin-left:590px;border:1px solid red;color:black;font-size:20px;padding:5px;border-radius:10px">ADD Project</a></h4>
// <div >
//   <table border="1" class="text-center "style="margin-left:440px;margin-top:30px;background-color:aqua">
//    <thead style="border:1px solid black;background-color:white">
//     <tr >
//         <th style="border:1px solid black">#</th>
//         <th style="border:1px solid black">Name</th>
//         <th  style="border:1px solid black">Image</th>
//         <th style="border:1px solid black">Remove</th>
//         <th style="border:1px solid black">Update</th>
//     </tr>
//     </thead>
//     <tbody>
//     ${data.map((project, index) =>
//         `<tr>
//     <td style="border:1px solid black">${index + 1}</td>
//     <td>${project.name}</td>
//     <td><img src="./img/321958602_5700310220022740_4339833686795909443_n"></td>
//     <td ><button data-id="${project.id}"class=" btn_remove" style="background-color:red">Remove</button></td>
//     <td><a href="http://localhost:5173/admin/project_update/${project.id}"> <button data-name="${project.name}"style="background-color:yellow" > Update</button></a>
// </td>
//     </tr>`).join(" ")}
//     </tbody>
// </table>
// </div>
// `
// }
// export default project_test;