import './worksdata.style.css'

const WorksItem = ({ image, header, text }) => {
    return (
        <div className='work_part'>
            <img src={image} />
            <h2>{header}</h2>
            <p>{text}</p>
        </div>
    )
};

export default WorksItem;