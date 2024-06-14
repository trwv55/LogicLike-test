import React from "react";
import { useCallback, useState } from "react";
import { LIST_NAME } from "@config";
import ListItem from "@components/ListItem/ListItem";
import { ListNameValues } from "@types";

type TCoursesListProps = {
  filterCourses: (item: ListNameValues) => void;
};

// Список курсов
const CoursesList = ({ filterCourses }: TCoursesListProps) => {
  const list = LIST_NAME;
  const firstKey = Object.values(LIST_NAME)[0];
  const [activeItem, setActiveItem] = useState(firstKey); // Cостояние для отслеживания активного элемента

  const handleItemClick = useCallback(
    (item: ListNameValues) => {
      setActiveItem(item);
      filterCourses(item);
    },
    [filterCourses],
  );

  return (
    <div className="courses">
      <ul className="courses__list">
        {Object.values(list).map((value) => (
          <ListItem
            key={value}
            isActive={activeItem === value}
            onClick={() => handleItemClick(value)}
          >
            {value}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(CoursesList);
