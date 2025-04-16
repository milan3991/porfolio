import Heading from '../../components/Heading/Heading';
import ContactForm from './components/ContactForm';
import './contact.style.css'

const Contact = () => {
    return (
        <div>
            <Heading heading="CONTACT ME" headingbackground="CONTACT" />
            <div className='contact_wrapper'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact;