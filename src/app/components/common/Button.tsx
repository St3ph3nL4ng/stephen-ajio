import React from 'react';
import {Button} from '@mui/material';

interface ButtonComponentProps {
    name?: string;
    type?: "submit" | "reset" | "button";
    className?: string;
    style?: Record<string, any>;
    onClickButton?: (id?: any) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({onClickButton, name, className, type}) => {
    return (
        <React.Fragment>
            <Button type={type} onClick={onClickButton} className={className}>
                {name}
            </Button>
        </React.Fragment>
    );
};

export default ButtonComponent;
