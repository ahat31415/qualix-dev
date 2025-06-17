import React from 'react';
import { useNavigate } from "react-router-dom";
import {RequestData} from "../features/requests/requestsSlice";
export interface aaa extends Partial<RequestData>{
    formActionCallback: Function;
};

const RequestForm = (props:aaa) => {
    const [title, setTitle] = React.useState(props.title || '');
    const [description, setDescription] = React.useState(props.description || '');
    const [category, setCategory] = React.useState(props.category || '');
    const navigate = useNavigate();
    const onRequestSaving = () => {
        props.formActionCallback({title, description, category});
        navigate('/requests', { replace: true });
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Название заявки</label>
                <input type="text" className="form-control"
                       id="exampleInputEmail1"
                       value={title}
                       onChange={ (e) => {
                           setTitle(e.target.value)
                       } }/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Описание*</label>
                <input type="text" required className="form-control" id="exampleInputPassword1"
                       value={description}
                       onChange={ (e) => {
                           setDescription(e.target.value)
                       } }/>
            </div>
            <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">Выбор категории</label>

                <select className="form-check-input" id="exampleCheck1"
                        value={category}
                        onChange={ (e) => {
                            setCategory(e.target.value)
                        } }>
                    <option value="0">Категория 1</option>
                    <option value="1">Категория 2</option>
                    <option value="2">Категория 3</option>
                    <option value="3">Категория 4</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary" onClick={ onRequestSaving }>Создать заявку</button>

        </div>
    );
};

export default RequestForm;