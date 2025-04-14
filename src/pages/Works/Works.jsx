import GlobalButton from "../../components/GlobalButton/GlobalButton";
import WorksItem from "./components/WorksData";
import './works.style.css'

const Works = () => {

    let articles = [
        {
            id: 1,
            image: 'https://static-cse.canva.com/blob/1949168/1600w-B-cRyoh7b98.jpg',
            header: 'Paint',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 2,
            image: 'https://static-cse.canva.com/blob/1949168/1600w-B-cRyoh7b98.jpg',
            header: 'Sample',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 3,
            image: 'https://static-cse.canva.com/blob/1949168/1600w-B-cRyoh7b98.jpg',
            header: 'Candle',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 4,
            image: 'https://static-cse.canva.com/blob/1949168/1600w-B-cRyoh7b98.jpg',
            header: 'Candle',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 5,
            image: 'https://static-cse.canva.com/blob/1949168/1600w-B-cRyoh7b98.jpg',
            header: 'Candle',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 6,
            image: 'https://static-cse.canva.com/blob/1949168/1600w-B-cRyoh7b98.jpg',
            header: 'Candle',
            text: 'Lorem ipsum dolor',
        },

    ]
    return (
        <div className="works_wrapper">
            <h1>MY WORKS</h1>
            <div className="filter">
                <GlobalButton text="All" link="/" />
                <GlobalButton text="Desing" link="/" />
                <GlobalButton text="HTML&CSS" link="/" />
                <GlobalButton text="React JS" link="/" />
                <GlobalButton text="Node JS" link="/" />
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