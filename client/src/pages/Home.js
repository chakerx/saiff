
import React from 'react';
import Categorie from '../components/Categorie';
import Footer from '../components/Footer';
import Listproduct from '../components/Listproduct';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

function Home(props) {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Categorie/>
            <Listproduct/>
            <Footer/>
            
        </div>
    );
}

export default Home;