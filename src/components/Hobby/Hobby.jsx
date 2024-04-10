import './Hobby.css';

function Hobby({ titleEN, titleHU, descriptionEN, descriptionHU, language }) {
    const backgroundImageStyle = {
        backgroundImage: `url(${require(`../../Images/Hobbies/${titleEN}.jpg`)})`,
    };

    return (
        <div className='hobby-card' style={backgroundImageStyle}>
            <div className='hobby-card-overlay'></div>
            <p>{ language === "en" ? descriptionEN  : descriptionHU }</p>
            <h3>{ language === "en" ? titleEN.replace(/_/g, ' ') : titleHU.replace(/_/g, ' ')}</h3>
        </div>
    )
}

export default Hobby