import { projectList } from "../data/data";
import { router } from "../libs";
import header from "../compenent/header";
import { useEffect, useState } from "../libs";
import footer from "../compenent/footer";
const projects_detail = ({ data: { id } }) => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setdata(data))
  }, [])
  return `
    <h3 style="text-align:center; "> ${header()}</h3>
    <h2 class="text-center">Thông Tin</h2>
  <div class="sanpham" style="text-align:center;margin:30px">
  <div style=" border: 3px solid   beige;background-color: beige;text-align: center;
  border-radius: 10px 10px 0px 0px;width:330px;min-height:200px;">
     <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/120338928_994997360927319_8237301119116651958_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=nZHmBpZwO9wAX_Whj-5&tn=HAyD3a4rSmZFz4XI&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAhe7IBqjo3xo3gPxH62I5QZ_1t3DHR_Nec75udKDdjZA&oe=641AAEF5" style="width:320px;height:270px;margin-bottom:20px; border-radius: 10px;"> 
     <h5>${data.name}</a></h5>
     <div>${data.mo_ta}</div>
     <a href="https://github.com/nvhungabc/JS-n-ng-cao/tree/master/Section%2010%20A%20Closer%20Look%20at%20Functions"> <button style="background-color:#CDCDC1;border:1px solid #CDCDC1;border-radius:10px ;margin:20px 0px 10px 0px;width:150px" > Chi tiết !</button></a>
 </div>
   </div>
  <p>${footer()}</p>
`
}
export default projects_detail