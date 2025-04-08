import profile from '../../assets/profileimage.jpg'
import SocialNetwork from '../../components/SocialNetworks/SocialNetworks';
import '../Home/home.style.css'

const Home = () => {
    let socialnetwork = [
        {
            id: 1,
            facebookUrl: 'https://www.facebook.com/',
            twitterUrl: 'https://www.twitter.com',
            websiteUrl: 'https://www.mypage.com/',
            githubUrl: 'https://www.github.com',
            linkedinUrl: 'https://www.linkedin.com/',

        },
    ];

    return (
        <div className='home_wrapper'>
        <div>
            <img src={profile} alt="My profile image" className="profile_image" />
            <h1>Hi, I am Deda Slobo!</h1>
            <p>Majstor Deda, poznat i kao lokalni filozof, upravo rešava globalne probleme između dva dima i jednog zalogaja bureka koji ne vidiš ali znaš da je tu negde. Položaj ruke kaže: "Razmišljam duboko", ali pogled govori: "Zaboravio sam zašto sam ustao." Sve u svemu, čovek koji zna da uživa u malim stvarima... i još manjim pauzama.</p>
        </div>
        <div className='socialnetwork'>
                {socialnetwork.map((socialnetwork) => (
                    <SocialNetwork
                        key={socialnetwork.id}
                        facebookUrl={socialnetwork.facebookUrl}
                        twitterUrl={socialnetwork.twitterUrl}
                        githubUrl={socialnetwork.githubUrl}
                        linkedinUrl={socialnetwork.linkedinUrl}
                        websiteUrl={socialnetwork.websiteUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;

