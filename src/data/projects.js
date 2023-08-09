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








]

export default projects;