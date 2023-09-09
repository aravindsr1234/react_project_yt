import React from "react";

const ContactCard = (props) => {
    const {id, email, name} = props.contact;
    return (
        <div>
            <div>
                <div>{name}</div>
                <div>{email}</div>
            </div>
        </div>
    )
};

export default ContactCard;