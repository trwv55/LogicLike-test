import React from 'react';

interface IListItemProps {
    isActive: boolean;
    item: string;
    onClick: () => void;
    children: React.ReactNode;
}

// Раздел курсов
const ListItem: React.FC<IListItemProps> = ({  isActive, onClick, children, item }) => {

    return (
        <li
            className={`courses-item ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {children}
        </li>
    );
}

export default ListItem;