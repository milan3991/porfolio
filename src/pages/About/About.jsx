import './about.style.css'
import about from '../../assets/aboutimage.png';
import AboutData from './components/Aboutdata';
import GlobalButton from '../../components/GlobalButton/GlobalButton';

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
            <h1>ABOUT ME</h1>
            <div className='about_page'>
            <div className="glow-frame">
                    <img src={about} alt="My profile image"/>
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
                        <GlobalButton text="Download Resume" link="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;