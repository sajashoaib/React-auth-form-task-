
const spiderman = process.env.PUBLIC_URL + '/assets/spiderman.png';
const man1 = process.env.PUBLIC_URL + '/assets/man2.png';
const Suicides = process.env.PUBLIC_URL + '/assets/Suicides.png';
const backgroundimgcard1 = process.env.PUBLIC_URL + '/assets/backgroundimgcard1.png';
const backgroundimgcard2 = process.env.PUBLIC_URL + '/assets/rr.png';
const backgroundimgcard3 = process.env.PUBLIC_URL + '/assets/backgroundcard3.png';
const logocard1 = process.env.PUBLIC_URL + '/assets/logo1.png';
const logocard3 = process.env.PUBLIC_URL + '/assets/logo3.png';




const CardData = [
    {
        img: man1,
        logocard: logocard1,
        description: "Join in the new DLC with Kratos to learn more about him and his future",
        backgroundImage: backgroundimgcard1,
        className: 'class-1', 

    }, {
        img: Suicides,
        description: 'Be part of the Suicide Squad and kill the Justice League-Amanda Waller',
        backgroundImage: backgroundimgcard2,
        className: 'class-2',


    },
    {
        logocard: logocard3,
        description: "Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks.",
        img: spiderman,
        backgroundImage: backgroundimgcard3,
        className: 'class-3',


    }
]

export default CardData
