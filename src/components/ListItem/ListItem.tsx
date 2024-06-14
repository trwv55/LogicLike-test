import React from "react";

interface IListItemProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// Раздел курсов
const ListItem: React.FC<IListItemProps> = ({
  isActive,
  onClick,
  children,
}) => {
  return (
    <li
      className={`courses-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default React.memo(ListItem);
