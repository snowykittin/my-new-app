import React, {useState, useEffect} from "react";
import MusicList from "./MusicList";
import PlayWidget from "./PlayWidget";
import MusicVis from "./MusicVis";

export default function MusicPlayer(props){
    const [tracks, setTracks] = useState([]);
    const [curPlaying, setCurPlaying] = useState({});
    const [curProgress, setCurProgress] = useState(0);

    useEffect(() => {
        fetch("data/music.json").then((response) => response.json()).then((data) => {
            setTracks(data);
        })
    }, []);

    return (
        <div>Music Player 
            <div>Now playing: {curPlaying.title}</div>
        <MusicList 
            tracks={tracks} 
            curPlaying={curPlaying}
            onSelected={ 
                (id) => {trackSelected(id)}
            }/>
        <PlayWidget currentTrack={curPlaying} setCurProgress={setCurProgress} />
        <MusicVis size={50} progress={curProgress} />
        </div>
    );

    function trackSelected(id){
        //find the track
        const foundTrack = tracks.find((track) => track.id  === id);
        //set it as currently selected track in this component
        setCurPlaying(foundTrack);
    }

}