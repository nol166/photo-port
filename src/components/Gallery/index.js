import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import photo from '../../assets/small/commercial/0.jpg'

export default function Gallery(props) {
    const { name, description } = {
        name: 'commercial',
        description:
            'Photos of grocery stores, food trucks, and other commercial projects',
    }

    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="produce section"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    )
}
