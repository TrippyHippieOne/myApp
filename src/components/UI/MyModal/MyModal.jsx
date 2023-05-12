import React from "react";
import modalStyles from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible }) => {
    return (
        <div
            className={
                visible
                    ? [modalStyles.modal, modalStyles.active].join(" ")
                    : modalStyles.modal
            }
            onClick={() => setVisible(false)}
        >
            <div
                className={
                    visible
                        ? [modalStyles.modal__content, modalStyles.active].join(" ")
                        : modalStyles.modal__content
                }
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
