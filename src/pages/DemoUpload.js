import React from 'react';
import TopMenu from "../components/TopMenu/TopMenu";
import './DemoUpload.css';


function DemoUpload () {
    return (
        <>
            <TopMenu/>
            <div className="image-upload">
                <h1 className="upload-h1">Demo Upload</h1>
                <div className="mp3-container">
                    <h3 className="upload-h3">MP3 max 10MB</h3>
                    <button type="button" className="mp3-btn">
                        Choose file
                    </button>
                </div>
                <div className="upload">
                    <form>
                        <div className="formUpload-group">
                            <label htmlFor="artist"> Artist</label>
                            <input type="text" name="artist" id="artist"/>
                        </div>
                        <div className="formProfile-group">
                            <label htmlFor="title">Song title</label>
                            <input type="text" name="title" id="title"/>
                        </div>
                    </form>
                    <div className="submit-container">
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DemoUpload;