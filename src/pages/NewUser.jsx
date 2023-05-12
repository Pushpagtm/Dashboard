import React from 'react';
import New from '../Components/newUser/New';
import {  userInputs } from '../formSource';

function NewUser(props) {
    return (
        <div>
            <New inputs={userInputs}/>
        </div>
    );
}

export default NewUser;