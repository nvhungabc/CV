// const ansewr=true;
// const myPromise=new Promise(function(resolve,reject){
//     if(ansewr){
//         resolve("Được gòi đó ạ !!!!!!!")
//     }else{
//     reject("Có cái ...")
//     }
// })
// myPromise
//     .then((dung)=>console.log(dung))
//     .catch((sai)=>console.log(sai))

// function addLink(src){
//     return new Promise(function(resolve,reject){
//         let script=document.createElement("script");
//         script.src=src
//         script.onload=function(){
//             resolve(script);
//         }
//         script.onerror=function(){
//             reject("Lỗi mọe ló gòi")
//         }
//         document.head.append(script)
//     })
// }
// addLink("https://www.facebook.com/profile.php?id=100012511933323")
//     .then((dung)=>console.log(dung)+"đúng gòi")
//     .catch((sai)=>console.log(sai))
fetch("https://www.facebook.com/profile.php?id=100012511933323")
.then((response)=>{
    let script = document.createElement("script")
    script.src = response.url
    document.head.append(script)
})
.catch((error)=>console.log(error))

fetch("https://reqres.in/api/users")
    .then((response)=> response.json())
    .then(({data})=> console.log(data))


    //
    import { router, useEffect, useState } from "../../libs";
import main_admin from "./main";
const project_update = ({ data: { id } }) => {
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch('http://localhost:3000/projects' + id)
            .then((res) => res.json())
            .then((data) => setdata(data))
    }, [])
    useEffect(() => {
        const form = document.querySelector('.form');
        const name = document.querySelector('.name');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newProject = { name: name.value }
            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProject),

            }).then(() => router.navigate('/admin/project'))

        })
    })
    return `
<table border="1">
 
 <tr>
 <td>ID</td>
 <td>Name </td>
 
 </tr>
 <tr>
 <td> ${id}</td>
 <td>
 </td>
 </tr>


 </table>
 <div class="project-add">
 <form class="form">

 <input class="form-control form-control-sm name" type="text" placeholder="Name">
 <button class="bg-danger border-0 p-2 btn-add ">ADD</button>
 </form>
 </div>
 `


}
export default project_update;