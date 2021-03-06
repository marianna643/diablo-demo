import React from "react";
import "./ItemCard.css"

function ItemCard({ children, title, message,link, name, artist, titel, feedback}) {
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
                        <label className="cardMessage-label">Message from uploader</label>
                            <p className="cardMessage">{message}</p>
                    </div>
                    <div className="feedback-container">
                            <p className="cardFeedback">Feedback: {feedback}</p>
                    </div>
                    <div className="button-container">
                        <a className="linkTo-details" href={link}>{children}</a>
                    </div>
            </div>
        </>
    );
}

export default ItemCard;