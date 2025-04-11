import '../SocialNetworks/socialnetwork.style.css'

const SocialNetwork = ( { facebookUrl,twitterUrl, githubUrl, websiteUrl, linkedinUrl} ) => {
    return (
            <div className='social_networks'>
                <a href={facebookUrl} target='_blank'><img src='src\assets\socialnetworkicons\facebook.svg'/></a>
                <a href={githubUrl} target='_blank'><img src='src\assets\socialnetworkicons\github.svg'/></a>
                <a href={twitterUrl} target='_blank'><img src='src\assets\socialnetworkicons\twitter.svg'/></a>
                <a href={websiteUrl} target='_blank'><img src='src\assets\socialnetworkicons\website.svg'/></a>
                <a href={linkedinUrl} target='_blank'><img src='src\assets\socialnetworkicons\linkedin.svg'/></a>
            </div>
    )
};

export default SocialNetwork;