import React from 'react';
import './Card.css'

const Card = ({ title, director, description, release, children }) => {
    return (
        <div className="card">
            {children}
            <div className="title-release">
                <h2 className="title">{title}</h2>
                <p className="release">{release}</p>
            </div>
            <p className="description">{description}</p>
            <p className="director">Director: {director}</p>
        </div>
    )
}

export default Card;