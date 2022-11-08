import React, {useState, useRef} from "react"

export default function PlayWidget(props){
    const audioRef = useRef();
    const [audInterval, setAudInterval] = useState(0);

    return(
        <div>
            <audio controls 
                ref={audioRef} 
                src={props.currentTrack.url}
                onPlay={() => {
                    let audI = setInterval(() => {
                        let progress = audioRef.current.currentTime / audioRef.current.duration;
                        props.setCurProgress(progress);
                    }, 100);

                    setAudInterval(audI);
                }}
                onPause={() => {
                    clearInterval(audInterval)
                }} />
        </div>
    );
}