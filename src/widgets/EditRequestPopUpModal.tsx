import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import RequestForm from "./RequestForm";
import {useAppDispatch} from "../app/hooks";
import {editRequest, RequestData} from '../features/requests/requestsSlice';

function EditRequestPopUpModal(props: RequestData) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {id, title, description, category} = props;
    const dispatch = useAppDispatch();
    const formActionCallback = (request: RequestData) => {
        if (id) {
            dispatch(editRequest({id, ...request}));
            setShow(false);
        }
    }

    let requestForm = <div>
                                      <h1>Редактирование заявки</h1>
                                      <RequestForm title={title} description={description} category={category}
                                                   formActionCallback={formActionCallback}/>
                                   </div>;
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Редактировать заявку
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование заявки</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {requestForm}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditRequestPopUpModal;



