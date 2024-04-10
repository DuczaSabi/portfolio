import Study from '../Study/Study';
import './StudiesSection.css';

function StudiesSection({language}) {
    return (
        <div className="studies-section">
            <h2 className='studies-title'>
                {language === "en" ? "My studies" : "Tanulmányaim"}
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
            </h2>

            <Study image="bmszc">
            {language === "en" ?
                <h2>BMSZC Bolyai János Technical Vocational School and College</h2> :
                <h2>BMSZC Bolyai János Műszaki Technikum és Kollégium</h2> }
                <h3>2017-2023</h3>
            </Study>

            <Study image="euroexam">
                <h2>Euroexam</h2>
                <h3>2022</h3>
            </Study>

            <Study image="udemy">
                <h2>Udemy (
                    <span onClick={() => window.open('https://www.udemy.com/course/the-web-developer-bootcamp/?couponCode=ST8MT40924', '_blank')}>Web Development </span> 
                    - <span onClick={() => window.open('https://www.udemy.com/course/git-and-github-bootcamp/?couponCode=ST8MT40924', '_blank')}>Git & Github </span> 
                    - <span onClick={() => window.open('https://www.udemy.com/course/the-ultimate-react-course/?couponCode=ST8MT40924', '_blank')}>React</span>) </h2>
                <h3>2023-2024</h3>
            </Study>

            <Study image="mqs">
                <h2>Molecular Quantum Solutions</h2>
                <h3>2024-Present</h3>
            </Study>
        </div>
    )
}

export default StudiesSection
