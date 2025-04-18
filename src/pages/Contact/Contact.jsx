import Heading from '../../components/Heading/Heading';
import ContactMethod from './components/ContactData';
import ContactInputField from './components/ContactForm';
import phoneicon from '../../assets/phone.svg';
import mailicon from '../../assets//mail.svg';
import locationicon from '../../assets/location.svg';
import './contact.style.css'
import GlobalButton from '../../components/GlobalButton/GlobalButton';

const Contact = () => {

    const contactInformations = [
        {
            id: 1,
            method: 'Contact on phone',
            methodDetails: [
                '+38765123456',
                '+38765123457'
            ],
            icon: phoneicon
        },
        {
            id: 2,
            method: 'Contact on mail',
            methodDetails: [
                'info@tropic.ba',
                'contact@tropic.ba'
            ],
            icon: mailicon
        },
        {
            id: 3,
            method: 'Contact address',
            methodDetails: [
                'Ivana Gorana Kovacica, Banja Luka, Bosna i Hercegovina'
            ],
            icon: locationicon
        }
    ];

    return (
        <div>
            <Heading heading="CONTACT ME" headingbackground="CONTACT" />
            <div className='contact_box'>

                <div className="contact_left contact_layout_box">
                    <h4 className='contact_header'>Contact information</h4>
                    <p className='contact_text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam autem deserunt officia blanditiis consequuntur neque nulla atque voluptatibus soluta eum cumque vitae aliquid, maxime quibusdam, dolorum impedit explicabo sit eligendi.</p>
                    <div className='contact_underline'></div>

                    {contactInformations.map((contactinfo) => {
                        return (
                            <ContactMethod
                                key={contactinfo.id}
                                method={contactinfo.method}
                                methodDetails={contactinfo.methodDetails}
                                methodIcon={contactinfo.icon}
                            />
                        )
                    })}
                </div>

                <div className="contact_right contact_layout_box">
                    <ContactInputField
                        displayName='Name'
                        name='contact_input_name'
                        id='contact_input_name'
                        type='text'
                        placeholder='Enter your name...'
                    />
                    <ContactInputField
                        displayName='Email'
                        name='contact_input_email'
                        id='contact_input_email'
                        type='text'
                        placeholder='Enter your email...'
                    />
                    <ContactInputField
                        displayName='Subject'
                        name='contact_input_subject'
                        id='contact_input_subject'
                        type='text'
                        placeholder='Enter subject...'
                    />
                    <textarea placeholder='Your Messange *' className='contact_input_field'></textarea>
                    <div>
                        <GlobalButton text="SEND MAIL" className='contact_button' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;