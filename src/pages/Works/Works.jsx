import React, { useState } from "react";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import Heading from "../../components/Heading/Heading";
import WorksItem from "./components/WorksData";
import './works.style.css'
import camera from '../../assets/camera.jpg';
import computer from '../../assets/computer.jpg';
import light from '../../assets/light.jpg';
import phone from '../../assets/phone.jpg';
import usb from '../../assets/usb.jpg';
import headphones from '../../assets/headphones.jpg';

const Works = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    let articles = [
        {
            id: 1,
            image: camera,
            category: 'camera',
            header: 'Camera',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 2,
            image: computer,
            category: 'camera',
            header: 'Computer',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 3,
            image: light,
            category: 'light',
            header: 'Light',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 4,
            image: phone,
            category: 'light',
            header: 'Phone',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 5,
            image: usb,
            category: 'usb',
            header: 'USB',
            text: 'Lorem ipsum dolor',
        },
        {
            id: 6,
            image: headphones,
            category: 'headphones',
            header: 'Headphones',
            text: 'Lorem ipsum dolor',
        },

    ];
    const filteredArticles = selectedCategory === 'all' ? articles : articles.filter(article => article.category === selectedCategory);

const handleFilter = (category) => {
    setSelectedCategory(category);
};

    return (
        <div className="works_wrapper">
            <Heading heading="MY WORKS" headingbackground="WORKS"/>
            <div className="filter">
                <GlobalButton text="All" className = 'global_button' handleClick={() => handleFilter('all')}/>
                <GlobalButton text="Camera"className = 'global_button' handleClick={() => handleFilter('camera')}/>
                <GlobalButton text="USB" className = 'global_button' handleClick={() => handleFilter('usb')}/>
                <GlobalButton text="Light"className = 'global_button' handleClick={() => handleFilter('light')}/>
                <GlobalButton text="Headphones" className = 'global_button' handleClick={() => handleFilter('headphones')}/>
            </div>
            <div className="works_page">
                {filteredArticles.map((article) => (
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