import React, { useEffect, useRef, useState } from "react";
import '../css/ProjectContainer.css'
import { ProjectList } from "./ProjectList";
import Popup from "./Popup";

export default function App() {
    const [showModal, setShowModal] = useState();
    const [selectedFileText1, setselectedFileText1] = useState([]);
    const [selectedFileText2, setselectedFileText2] = useState([]);
    const [selectedFileText3, setselectedFileText3] = useState([]);
    const [selectedFileText4, setselectedFileText4] = useState([]);
    const [selectedFileText5, setselectedFileText5] = useState([]);
    const [selectedFileImage, setselectedFileImage] = useState([]);
    const [selectedFileVideo, setselectedFileVideo] = useState([]);
    const [selectedFileName, setselectedFileName] = useState([]);
    let menuRef = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (document.contains(event.target)) {
                setShowModal(false);
            }
        });
    });
    return (
        <div className='project-grid'>
            {ProjectList.map(file => {
                return (
                    <div className="project">
                            <h2 className='box-text'> {file.name} </h2>
                            <img src={file.image} className='project-image' alt="Project" onClick={() => {
                                setselectedFileText1(file.text1);
                                setselectedFileText2(file.text2);
                                setselectedFileText3(file.text3);
                                setselectedFileText4(file.text4);
                                setselectedFileText5(file.text5);
                                setselectedFileImage(file.image);
                                setselectedFileVideo(file.video);
                                setselectedFileName(file.name);
                                setShowModal(true);
                            }} />
                    </div>
                );
            })}
            <Popup innerRef={menuRef} trigger={showModal} setTrigger={setShowModal}>
                <h3>{selectedFileName}</h3>
                {selectedFileVideo? <iframe className="" src={selectedFileVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :  <img alt="Project" className='pop-image' src={selectedFileImage} />}
                <p>{selectedFileText1}</p>
                <p>{selectedFileText2}</p>
                <p>{selectedFileText3}</p>
                <p>{selectedFileText4}</p>
                <p>{selectedFileText5}</p>
            </Popup>
        </div>
    );
    
}