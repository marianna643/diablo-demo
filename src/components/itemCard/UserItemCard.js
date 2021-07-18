import React from "react";
import "./ItemCard.css"
import disc from "../../assets/newdisc.ico";

function ItemCard({ title, message,feedback, name, artist, titel}) {
    return (
        <>
            <div className="item-container">
                    <div className="uploader">
                            <p className="cardUser"> USER: {name}</p>
                    </div>
                    <div className="demo-container">
                        <label className="cardTitle-label">Demo</label>
                            <p className="cardTitle">{title}</p>
                    </div>
                    <div className="artist-container">
                        <label className="cardArtist-label">Artist</label>
                            <p className="cardArtist">{artist}</p>
                    </div>
                    <div className="songTitel-container">
                        <label className="cardSong-label">Song titel</label>
                            <p className="cardSongTitel">{titel}</p>
                    </div>
                    <div className="message-container">
                        <label className="cardMessage-label">Message:</label>
                            <p className="cardMessage">{message}</p>
                    </div>
                    <div className="feedback-container">
                            <p className="cardFeedback">Feedback: {feedback}</p>
                    </div>
                    {/*} <div className="itemCard-image-container">
                    <img src={disc}  alt= "" width="80" height="80" />
                </div>*/}
            </div>
        </>
    );
}

export default ItemCard;