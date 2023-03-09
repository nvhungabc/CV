import NavBar from "./navbar";
import banner from "./banner";
import logo from "./logo";
const header =()=>{
    return `
   <div style="margin:10px 10px;text-align:center">
   ${logo()}
   ${NavBar()}
   </div>
     ${banner()}
    `
};
export default header;