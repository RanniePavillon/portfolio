import React from 'react'

function Tittle({title, span}) {
    return (
        <div className="Title c-black">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    )
}

export default Tittle;
