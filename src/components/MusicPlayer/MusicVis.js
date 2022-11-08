import React from "react";

export default function MusicVis(props){

    return (
        <div>
            <svg>
                <circle r={props.size} cx="100" cy="100" fill="#555" />
                <circle r={props.progress * props.size} cx="100" cy="100" fill="#ffbd38" />
            </svg>
        </div>
    );
}