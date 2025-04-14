import './about.style.css'
import about from '../../assets/aboutimage.png';
import AboutData from './components/Aboutdata';
import GlobalButton from '../../components/GlobalButton/GlobalButton';

const About = () => {
    let teamdata = [
        {
            id: 1,
            name: 'Deda',
            lastName: 'Slobo',
            age: '100',
            nationality: 'Bosnian',
            languages: 'Serbian, German',
            address: 'Banja Luka',
            freelance: 'Available'

        }
    ]


    return (
        <div className='about_wrapper'>
            <h1>ABOUT ME</h1>
            <div className='about_page'>
            <div className="glow-frame">
                    <img src={about} alt="My profile image"/>
                </div>
                <div className='about_data'>
                    {teamdata.map((card) => (
                        <AboutData
                            key={card.id}
                            name={card.name}
                            lastName={card.lastName}
                            age={card.age}
                            nationality={card.nationality}
                            languages={card.languages}
                            address={card.address}
                            freelance={card.freelance}
                        />
                    ))}
                    <div className='button'>
                        <GlobalButton text="Download Resume" link="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;