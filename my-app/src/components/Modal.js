import React, {useState} from "react";

//useState false because we dont want modal to display initially
function Modal(){
    const [modal, setModal] = useState(false);

    function toggleModal () {
        setModal(!modal)

    }


}

return (
<>
    <>
    <button onClick ={toggleModal}className="btn-modal">Open</button>
    </>
    <div className="modal">
        <div className="overlay"></div>
    <p>Hello! I would love to connect with you click contact to send me a private message.</p>
    
    </div>
    <>
    <button onClick ={toggleModal}className="close-modal">Close</button>
    </>
</>
);




export default Modal;