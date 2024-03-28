import './Study.css';
import bmszc from "../../Images/bmszc.png";
import euroexam from "../../Images/euroexam.png";
import udemy from "../../Images/udemy.png";
import mqs from "../../Images/mqs.png";

const images = {
    bmszc: bmszc,
    euroexam: euroexam,
    udemy: udemy,
    mqs: mqs
};

function Study({image, children}) {
    const imagePath = images[image];

    return (
        <div className="study">
            <div className="study-image">
                <img src={imagePath} alt="" />
            </div>
            <div className="study-info">
                {children}
            </div>
        </div>
    )
}

export default Study
