import React from 'react';
import {categories, RequestData} from "../index";
import Form from 'react-bootstrap/Form';

export interface formProps extends Partial<RequestData> {
    formActionCallback: Function;
}

const RequestForm = (props: formProps) => {
    const [title, setTitle] = React.useState(props.title || '');
    const [description, setDescription] = React.useState(props.description || '');
    const [category, setCategory] = React.useState(props.category || '0');
    const onRequestSaving = (e: any) => {
        e.preventDefault();
        console.log(e)
        props.formActionCallback({title, description, category});
    }
    const selectOptions = categories.map((el, count) =>
        <option value={count}>{el}</option>)
    return (
        <form onSubmit={onRequestSaving}>
            <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">Название заявки*</label>
                <input type="text" className="form-control"
                       required
                       id="titleInput"
                       value={title}
                       onChange={(e) => {
                           setTitle(e.target.value)
                       }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="descriptionInput" className="form-label">Описание*</label>
                <input type="text"
                       required
                       className="form-control"
                       id="descriptionInput"
                       value={description}
                       onChange={(e) => {
                           setDescription(e.target.value)
                       }}/>
            </div>
            <div className="mb-3 ">
                <label className="form-select-label" htmlFor="select-category">Выбор категории</label>
                <Form.Select value={category || 0} id="select-category"
                             onChange={(e) => {
                                 setCategory(e.target.value)
                             }}>

                    {selectOptions}
                </Form.Select>
            </div>
            <button type="submit" className="btn btn-primary">Сохранить</button>
        </form>
    );
};

export default RequestForm;