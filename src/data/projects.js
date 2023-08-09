import image1 from '../img/covidTravel_img.jpg';
import image2 from '../img/friendCard_img.png';
import image3 from '../img/first_website_img.png';
import image4 from '../img/MIPS_img.png';
import image5 from '../img/covid.jpg';
import image6 from '../img/wildlife.jpg';
import image7 from '../img/cheers.jpg';





const projects = [

    {
        id: 1,
        title: 'Personal Locator Beacon',
        date: 'May, 2023',
        category: 'Python, C/C++, ArcGIS, AWS, ReactJS, Ubuntu',
        description: 'With a team designed an end to end personal locator beacon service. Included multiple battery powered, portable beacons designed to collect beacon data, form LoRa packets, and transmit by RF to a receiver. The receiver on a Raspberry Pi with Ubuntu would demodulate and parse packets to display user location, data, and history, through an ARCGIS application on AWS.',
        image: image7,
        link: 'https://github.com/bcdduffy/MDE-PLB',
        buttonName: 'Github Repository'
    },
    {
        id: 1,
        title: 'Micronet Weather Network',
        date: 'Feb, 2017',
        category: 'C/C++, MongoDB, ExpressJS, NodeJS, Google Maps API',
        description: 'Designed a Micronet, a dense system of self powered, communicating, weather stations that interface by Bluetooth with a server to display weather data. Consisted of fourteen weather nodes displaying climate data through a Google Maps API to generate a 2D visualization of local weather in a web interface using a MERN tech stack.',
        image: image6,
        link: '',
        buttonName: 'Private'
    },
    {
        id: 1,
        title: 'CovidTravel Application',
        date: 'May 5, 2021',
        category: 'iOS, Xcode, Swift',
        description: 'This app aims to provide various resources and extend access to the various COVID-19 information for our community by educating the users about preventing the continuous spread of COVID-19, state regulations on domestic traveling, and encouraging travelers to make informed decisions.',
        image: image1,
        link: 'https://drive.google.com/file/d/1AejkB-oECHbPFnlj_aRC1vRemeAmnMb3/view?usp=sharing',
        buttonName: 'Watch Demo'
    },
    {
        id: 1,
        title: 'Glassmorphism Friend Cards',
        date: 'August 5, 2021',
        category: 'React.js, JavaScript',
        description: '3D Hover Glassmorphism Cards made with React.js to showcase the personalities and quirks of my close friends.',
        image: image2,
        link: 'https://friend-id-cards.netlify.app/',
        buttonName: 'View Application'
    },
    {
        id: 1,
        title: 'MIPS Assembler',
        date: 'November 21, 2020',
        category: 'C, Linux',
        description: 'This program resembles an assembler that supports a subset of the MIPS32 assembly language. It takes an input of a file written in assembly language and outputs a file that contains the corresponding machine code.',
        image: image4,
        link: 'https://github.com/320james',
        buttonName: 'Github Repository'
    },
    {
        id: 1,
        title: 'Coronavirus Tracker',
        date: 'June 22, 2020',
        category: 'Spring Boot, Java',
        description: 'This is a simple application made to track the number of COVID-19 cases reported around the globe using Spring Boot framework.',
        image: image5,
        link: 'https://github.com/320james/CoronavirusTracker',
        buttonName: 'Github Repository'
    },
    {
        id: 1,
        title: 'First Portfolio Website',
        date: 'July 13, 2019',
        category: 'HTML, CSS',
        description: 'First About Me website build using HTML and CSS to explain a little bit about myself and highlight some of my experiences.',
        image: image3,
        link: 'https://github.com/320james/first-website',
        buttonName: 'Github Repository'
    },







]

export default projects;