import React, {useState} from "react";

//useState false because we dont want modal to display initially
function Modal(){
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);

    };
    if(modal){
        document.body.classList.add('active-modal')
    }
    else{
        document.body.classlist.remove('active-modal')
    }
return (
<>
    
    <button onClick ={toggleModal}className="btn-modal">Open</button>

    {modal && (
    <div className="modal">
        <div className="overlay"></div>
    <p>Hello! I would love to connect with you click contact to send me a private message.</p>
    

    <>
    <button onClick ={toggleModal}className="close-modal">Close</button>
    </>
    </div> )};
</>
)};




export default Modal;