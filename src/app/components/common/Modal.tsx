import React, {ReactNode} from 'react';
import {Box, Modal} from '@mui/material';
import Button from "@/app/components/common/Button";

interface FunctionsProps {
    title?: string;
    description?: string | ReactNode;
    onClickClose?: (id?: any) => {};
    onClickDelete?: (id?: any) => {};
    open: boolean;
}

const ModalComponent: React.FC<FunctionsProps> = ({open = false, onClickClose, onClickDelete, title, description}) => {
    // @ts-ignore
    return (
        <React.Fragment>
            <Modal
                open={open}
                onClose={onClickClose}
            >
                <Box className={'modalBody'}>
                    <h2 id="child-modal-title" className="modal-title">
                        {title}
                    </h2>
                    <Box>
                        {description}
                    </Box>
                    <Box sx={{width: "100%", display: "flex", justifyContent: "right"}}>
                        <Button name={"取消"} className={"cancelColor"} onClickButton={(id) => onClickClose?.(id)}/>
                        <Button name={"消去"} className={"deleteColor"} onClickButton={(id) => onClickDelete?.(id)}/>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default ModalComponent
;
