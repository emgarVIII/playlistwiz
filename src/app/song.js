import Image from 'next/image'

export default function Song({ id }) {
    return (
    <div className="song-card">
        <div className="song-card-content">
            <div style={{display:"flex", flexDirection:"row"}}>
                <div><Image src="/babey.png"
                    width={512}
                    height={512}
                    alt="Picture of the author"
                    className="song-card-img"/></div>
                <div><strong>{id}</strong><br/>
                Dirtybird Miami 2020<br/>
                Lubelski, Various Artists<br/>
                4:04</div>
                
            </div>
            
            <div>
                cues here
            </div>
            <div style={{marginRight:"5vw"}}>
                135<br/>BPM<br/>
                8A<br/>key<br/>
            </div>
        </div>
        <input className="song-notes" placeholder="Add notes" style={{display:"block", width:"100%"}}/>
    </div>
    );
}
