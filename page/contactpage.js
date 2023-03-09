import header from "../compenent/header";
import footer from "../compenent/footer";
import contact from "../compenent/contact";
const ContactPage = ()=>{
    return `

    <h3 style="text-align:center; "> ${header()}</h3>
  <p>${contact()}</p>
    <p>${footer()}</p>
    `;
}

export default ContactPage;