import React, { useState, useEffect } from 'react'
import './App.css'
import api from './services/api';
import Card  from './components/Card'
import Header  from './components/Header'


function App() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        api.get('films').then(response => {
            const movies = response.data;
            setFilms([...movies])
        })
    }, [])

    return (
        <>
        <Header/>
        <div className="app">

            {
                films.map(film => (
                    <Card 
                    title={film.title}
                    release={film.release_date}
                    director={film.director}
                    description={film.description}>
                    </Card>
                ))
            }
        </div>
        </>

    );
}

export default App;
