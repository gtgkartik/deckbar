import EmailForm from "../components/EmailForm";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import Footer from '../components/Footer'

const ContactUs = () => {
    return ( 
        <>
            <Header contactus = "text-yellow"/>
            <HeaderImage title = "Contact Us" imageurl = "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"/>
            <EmailForm/>
            <Footer/>
        </>
     );
}
 
export default ContactUs;