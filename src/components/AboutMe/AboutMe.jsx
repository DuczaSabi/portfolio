import './AboutMe.css';
import Hobby from "../Hobby/Hobby";

function AboutMe({language}) {
    return (
        <div className='about-me'>
            <h2>{language === "en" ? "About Me" : "Rólam"}</h2>
            <div className='hobby-container'>
                <Hobby
                titleEN="Development"
                titleHU="Fejlesztés"
                descriptionEN="My journey into coding began in technical school, igniting a passion that has persisted ever since. Whether crafting simple websites or diving into the complexities of game development, I find joy in every line of code."
                descriptionHU="A szakközép iskolában belekeveredtem a kódolás világába, és az ez iránti szenvedélyem azóta sem hagyott alább. Legyen szó egyszerű weboldalak létrehozásáról vagy a játékfejlesztés bonyolultságainak felfedezéséről, minden kódsorban örömöt találok."
                language={language} />
                <Hobby
                titleEN="Music"
                titleHU="Zene"
                descriptionEN="When time allows, I immerse myself in the creative process of music-making. With the help of FL Studio and a synthesizer I can witness the evolution of a simple melody become a complete song which is incredibly fulfilling."
                descriptionHU="Amikor időm engedi, szeretek belemerülni a zenealkotás kreatív folyamatába. Az FL Studio és egy szintetizátor segítségével láthatom, hogyan válik egy egyszerű dallam teljes értékű zeneszámmá, ami rendkívüli érzés."
                language={language} />
                <Hobby
                titleEN="Sim_Racing"
                titleHU="Szimulátor"
                descriptionEN="My fascination with cars traces back to my earliest memories. While the dream of becoming a professional racer proved daunting, sim racing emerged as a thrilling alternative. Harnessing cutting-edge technology, I indulge in the exhilaration of virtual competition, all while exploring my passion for automotive excellence."
                descriptionHU="Mióta az eszemet tudom, rajongok az autókért és az autóversenyzésért. Miután az álmaim hogy profi versenyző legyen belőlem lehetetlenné váltak, a szimulációs versenyzés izgalmas alternatívának bizonyult. A legújabb technológiák segítségével élvezhetem a virtuális versenyek izgalmát, és megélhetem az autókkal kapcsolatos szenvedélyemet."
                language={language} />
                <Hobby
                titleEN="Gym"
                titleHU="Edzés"
                descriptionEN="Recently, I've shifted my attention to personal health and fitness, opting for gym workouts over home exercises. This change has led to significant improvements in strength and well-being. Now, my gym routine is a vital part of my daily life, enhancing both physical and mental resilience."
                descriptionHU="Az utóbbi időben az egészségem és fizikai állapotom érdekében, otthoni gyakorlatok helyett elkezdtem egy konditeremben edzeni. Ez jelentős javulást eredményezett az erőnlétemben, és nélkülözhetetlen része lett mindennapi életemnek, javítva mind a fizikai, mind a mentális egészségemet."
                language={language} />
                <Hobby
                titleEN="Tennis"
                titleHU="Tenisz"
                descriptionEN="My family and I have always valued the occasional chance to gather for a game of tennis. Finding a time that works for everyone isn't always simple, but when schedules align, we eagerly take to the court for some cherished family time."
                descriptionHU="A családommal gyerekkorom óta rendszeresen kerítünk arra lehetőséget, hogy összegyűljünk egy teniszmeccsre. Nem mindig egyszerű megtalálni az időpontot, ami mindenkinek megfelel, de egy szabad hétvégén sosem hagynánk ki az alkalmat hogy eltöltsünk pár órát a pályán."
                language={language} />
                <Hobby
                titleEN="Friendship_Bracelets"
                titleHU="Barátság_Karkötők"
                descriptionEN='Delving into the vast realm of music, I stumbled upon Taylor Swift and her vibrant community of "Swifties." As I explored her diverse artistry, I got turned into a fan, and I discovered a haven of warmth and humor, expressed through the creation of friendship bracelets adorned with cherished lyrics and inside jokes.'
                descriptionHU='Elmerülve a hatalmas zenei világban, rátaláltam Taylor Swiftre és az őt körülvevő „Swiftie” közösségére. Amint felfedeztem ezt a sokszínű előadót, rajongóvá váltam, és belekerültem egy nagyon különleges társaságba, akiknél gyakori szokás úgynevezett "barátság karkötőket" készíteni, majd ezeket elcserélni egymással.'
                language={language} />
            </div>
        </div>
    )
}

export default AboutMe

