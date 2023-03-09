import HomePage from "./page/home";
import ContactPage from "./page/contactpage";
import menu from "./page/menu";
import project from "./page/project";
import { router, render } from "./libs";
import notFound from "./page/not-found";
import projects_detail from "./page/project-detail";
import main_admin from "./page/admin/main";
import ProjectAdd from "./page/admin/project-add";
import project_update from "./page/admin/project-update";
import "bootstrap/dist/css/bootstrap.min.css"
import adminPost from "./page/admin/adminPost";
// import project_test from "./page/project-test";



const app = document.querySelector('#app');



// tạo các đường dẫn đến các page
router.on('/',()=>{
  render(app,HomePage);
});
router.on('/contact',()=>{
  render(app,ContactPage);
});
router.on('/project',()=>{
  render(app,project);
});
router.on('/project/:id',(params)=>{
  render(app,function(){
  return projects_detail(params)}
)});
router.notFound(()=>{
  render(app,notFound);
});
router.on('/admin/project',()=>{
  render(app,main_admin);
});
router.on('/admin/project/post',()=>{
  render(app,adminPost);
});
router.on('/admin/project/add',()=>{
  render(app,ProjectAdd);
})
router.on("admin/project_update/:id", (params) => {
  render(app,function(){
  return project_update(params)
  
  } )
})

router.resolve();