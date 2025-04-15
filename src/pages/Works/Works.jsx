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
            header: 'Paint',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 2,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
            category: 'html',
            header: 'Sample',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 3,
            image: 'https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU',
            category: 'css',
            header: 'Candle',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 4,
            image: 'https://play-lh.googleusercontent.com/s4AnA0RrLKhVMKDBSBTjNvPBBK2wQk3-4ZP2RONGxK_VqnMNXWTmPy-6f8J64GxDgyU',
            category: 'javascript',
            header: 'Packet',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 5,
            image: 'https://149860134.v2.pressablecdn.com/wp-content/uploads/pythoned.png',
            category: 'php',
            header: 'Cream',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 6,
            image: 'https://play-lh.googleusercontent.com/cyTI43JCjc4L-e1m7FvJhI1VhmTSJ4AMNZoqhkp0Xm6_NOtHbaewp9UPVLw5R3-tZIU',
            category: 'php',
            header: 'Packet',
            text: 'Lorem ipsum dolor',
        },

    ]
    return (
        <div className="works_wrapper">
            <Heading heading="MY WORKS" headingbackground="WORKS"/>
            <div className="filter">
                <GlobalButton text="All" />
                <GlobalButton text="Desing"/>
                <GlobalButton text="HTML&CSS" />
                <GlobalButton text="React JS"/>
                <GlobalButton text="Node JS" />
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