import header from "../compenent/header";
import footer from "../compenent/footer"; 
import project_show from "./project-show";
const HomePage = () => {
    return `
    <h3 style="text-align:center; "> ${header()}</h3>
    <marquee behavior="" sytle="height: 70px; width: 50%;font-size:25px;" direction="">❤ My name is Hung, Am GoodBoy!❤ 🥰😊😘😆🤩 </marquee>
   <div style="  display: grid;
   grid-template-columns: 1fr 1.2fr;">
  
   <div ><img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/287105063_1391987577894960_406086360133320423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=418ZbxE3a84AX8Ib1q2&_nc_ht=scontent.fhan14-1.fna&oh=00_AfDDLWeB52loQ5GQImwiDSzI19zxcgNdndmIXEpCmMD2kg&oe=63F5B4C3" style="border:5px solid gray;border-radius:20px;width:400px;height:400px;margin:50px"></div>
 <div>
 <p style="margin-top:50px;margin-left:-90px;font-family:tahoma;font-size:20px;border:10px solid beige;border-radius:20px 0px;padding:20px;margin-right:20px;background-color:#FFE4B5">
❤ Hello everyone! Tôi tên là Nguyễn Văn Hưng, mọi người thường hay gọi tôi với tên là Híp! Tôi sinh năm 2003 quê quán tại Hà Nam và hiện tại thì đang sinh sống và học tập tại Hà Nội. Hiện tại tôi đang theo học tại trường Cao đẳng FPT chuyên ngành Thiết kế Website và đang là sinh viên kỳ 5. Tôi đam mê máy tính tên muốn theo học ngành này để giúp một phần thỏa mãn đam mê và giúp cho cuộc sống sau này. Hiện tại mình còn độc thân sãn lòng mở lòng đón nhận các bạn nữ!!!<3❤</p> 

 <a href="https://www.facebook.com/profile.php?id=100012511933323"><img src="https://www.matiere-grise.info/wp-content/uploads/2018/01/MGlogo_Facebook.png" style="border-radius:20px;width:50px;height:50px;margin:50px"></a>
 <a href="https://www.youtube.com/channel/UCi39kxqlBdjIfuk3grP7iGA"><img src="https://iconape.com/wp-content/files/cm/286303/svg/youtube-icon-logo-logo-icon-png-svg.png"style="border-radius:20px;width:50px;height:50px;margin:50px" ></a>
 <a href="https://github.com/nvhungabc/JS-n-ng-cao/tree/master/Section%2010%20A%20Closer%20Look%20at%20Functions"><img src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"style="border-radius:20px;width:50px;height:50px;margin:50px" ></a>
 <a href=""><img src="https://brandlogos.net/wp-content/uploads/2021/11/zalo-logo.png"style="border-radius:20px;width:50px;height:50px;margin:50px" ></a>
 </div>
   </div>
   <p>${project_show()}</p>
   <p>${footer()}</p>
    `;
}

export default HomePage;