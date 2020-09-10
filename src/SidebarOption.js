import React from 'react';
import "./SidebarOption.scss";

function SidebarOption(props) {
    return (
        <div className="sidebarOption" tabindex="0">
            <props.Icon/>
            <h2>{props.text}</h2>
        </div>
    );
}

export default SidebarOption
