import './about.style.css'
import about from '../../assets/aboutimage.png';
import AboutData from './components/Aboutdata';
import GlobalButton from '../../components/GlobalButton/GlobalButton';
import Heading from '../../components/Heading/Heading';

const handleDownload = () => {
    window.open('/resume.pdf', '_blank');
};

// const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/resume.pdf';
//     link.download = 'resume.pdf'; 
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

const About = () => {


    let user = {
        id: 1,
        name: 'Deda',
        lastName: 'Slobo',
        age: '100',
        nationality: 'Bosnian',
        languages: 'Serbian, German',
        address: 'Banja Luka',
        freelance: 'Available'

    };

    return (
        <div className='about_wrapper'>
            <Heading heading="ABOUT ME" headingbackground="ABOUT"/>
            <div className='about_page'>
                <div className="glow-frame">
                    <img src={about} alt="My profile image" />
                </div>
                <div className='about_data'>
                    <AboutData
                        key={user.id}
                        name={user.name}
                        lastName={user.lastName}
                        age={user.age}
                        nationality={user.nationality}
                        languages={user.languages}
                        address={user.address}
                        freelance={user.freelance}
                    />
                    <div className='button'>
                        <GlobalButton text="Download Resume" handleClick={handleDownload} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;