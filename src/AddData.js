import { FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import App from './App';


const Interaction = ({
    villagerName
    , 
})
function addData({villager}) {
    return (
        <FormGroup>
            <FormControlLabel
                label="Chat"
            />
            <FormControlLabel
                label="Gift–No Gift In Return"
            />
            <FormControlLabel
                label="Gift–Gift In Return (not a framed photo)"
            />
            <FormControlLabel
                label="Gift–Framed Photo In Return"
            />
        </FormGroup>
    )
}

export default addData;