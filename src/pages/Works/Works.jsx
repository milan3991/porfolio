import GlobalButton from "../../components/GlobalButton/GlobalButton";
import Heading from "../../components/Heading/Heading";
import WorksItem from "./components/WorksData";
import './works.style.css'

const Works = () => {

    let articles = [
        {
            id: 1,
            image: 'https://img.uxcel.com/courses/html-for-designers-1663154927334.svg',
            category: 'html',
            header: 'HTML',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 2,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
            category: 'html',
            header: 'Another HTML',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 3,
            image: 'https://cdn-icons-png.freepik.com/512/919/919826.png',
            category: 'css',
            header: 'CSS',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 4,
            image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
            category: 'javascript',
            header: 'Javascript',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 5,
            image: 'https://149860134.v2.pressablecdn.com/wp-content/uploads/pythoned.png',
            category: 'php',
            header: 'Python',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 6,
            image: 'https://play-lh.googleusercontent.com/cyTI43JCjc4L-e1m7FvJhI1VhmTSJ4AMNZoqhkp0Xm6_NOtHbaewp9UPVLw5R3-tZIU',
            category: 'php',
            header: 'PHP',
            text: 'Lorem ipsum dolor',
        },

    ]
    return (
        <div className="works_wrapper">
            <Heading heading="MY WORKS" headingbackground="WORKS"/>
            <div className="filter">
                <GlobalButton text="All" className = 'global_button'/>
                <GlobalButton text="Desing"className = 'global_button'/>
                <GlobalButton text="HTML&CSS" className = 'global_button'/>
                <GlobalButton text="React JS"className = 'global_button'/>
                <GlobalButton text="Node JS" className = 'global_button'/>
            </div>
            <div className="works_page">
                {articles.map((article) => (
                    <WorksItem
                        key={article.id}
                        image={article.image}
                        header={article.header}
                        text={article.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Works;