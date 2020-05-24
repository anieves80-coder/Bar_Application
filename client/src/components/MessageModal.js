import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap';

const MessageModal = props => {

    const [show, setShow] = useState(true);
    
    const handleClose = () => {
        if(props.cb)
            props.cb();
        if(props.setActive)
            props.setActive(false);
        setShow(false);
    }

    return ReactDOM.createPortal(
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <span className="font-weight-bold">Message</span>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <div>{props.msg}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-primary" onClick={handleClose}>OK</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>,
        document.querySelector("#modal")
    );
}

export default MessageModal;
