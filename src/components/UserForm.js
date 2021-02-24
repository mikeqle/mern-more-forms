import React, { useState } from 'react';

const UserForm = props => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    return(
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) }></input>
                {
                    (firstName.length > 0 && firstName.length < 2) ?
                    <p>First name must have at least 2 characters!</p> :
                    null
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) }></input>
                {
                    (lastName.length > 0 && lastName.length < 2) ?
                    <p>Last name must have at least 2 characters!</p> :
                    null
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) }></input>
                {
                    (email.length > 0 && email.length < 5) ?
                    <p>Email must have at least 5 characters!</p> :
                    null
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) }></input>
                {
                    (password.length > 0 && password.length < 8) ?
                    <p>First name must have at least 8 characters!</p> :
                    null
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) }></input>
                {
                    confirmPassword === password ?
                    null :
                    <p>Password needs to match!</p>
                }
            </div>
        </form>
    )
};

export default UserForm;