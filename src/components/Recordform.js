import React, { useState, useEffect } from 'react';

const Recordform = (props) => {
    const initialFieldValues = {
        plates: '',
        fullName: ''
    }

    const handleInputChange = e => {
        let { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    let [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.recordObjects[props.currentId]
            })
    }, [props.currentId, props.recordObjects])

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div>
                <input className="Input-field" maxLength="6" pattern="\b[a-pr-vy-zA-PR-VY-Z]{3}\d{3}\b" title="3 lithuanian/latin letters and 3 digits" placeholder="Plates" name="plates" value={values.plates} onChange={handleInputChange} required/>
                <input className="User-name" /*pattern="/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g"*/ title="User name and surname" placeholder="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange} required/>

                {/*<input type="submit" value={props.currentId=''?"Save":"Update"}/>*/}
                <input type="submit" className="Create-new-record-button" value="Create" />
            </div>
        </form>

    );

}

export default Recordform;