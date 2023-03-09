const Projects = ({ projects }) => {
    return `
      <div >${projects.map(project => `
      <div class="sanpham" style="display:flex;float:left;margin:15px;padding:30px;;" >
      <div style="background-color:#87CEEB;text-align: center;
      border-radius: 10px ;width:325px;min-height:200px;" >
         <img src="https://us.123rf.com/450wm/vladgrin/vladgrin1902/vladgrin190200077/124976508-building-mobile-interface-on-screen-of-laptop-smartphone-tablet-developers-use-software-on.jpg?ver=6" style="width:290px;min-height:170px;margin:20px 0px"> 
         <h5><a href="http://localhost:5173/project/${project.id}" style="text-decoration:none;color:black;">${project.name}</a></h5>
        <div> <a href="http://localhost:5173/project/${project.id}"> <button data-name="${project.name}"style="background-color:#CDCDC1;border:1px solid #CDCDC1;border-radius:10px ;margin:20px 0px 10px 0px;width:150px" > Chi tiết !</button></a></div>
     </div>
     </div>
      
      `).join(" ")}</div>
     
    `
  }
  
  export default Projects                                           