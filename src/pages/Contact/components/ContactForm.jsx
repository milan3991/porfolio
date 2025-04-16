import GlobalButton from '../../../components/GlobalButton/GlobalButton';
import './contactform.style.css'

const ContactForm = () => {
    return (
        <div className='form_wrapper'>
            <div className='form_input_fields'>
                <section className='form_section_fields'>
                    <input className='form_input' type='text' placeholder='Your Name *'></input>
                    <input className='form_input' type='text' placeholder='Your Email *'></input>
                    <input className='form_input' type='text' placeholder='Your Phone *'></input>
                </section>
                <textarea placeholder='Your Messange *'></textarea>
            </div>
            <GlobalButton text="SEND MESSAGE" className = 'contact_button' />
        </div>
    );
};

export default ContactForm;