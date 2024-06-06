import { useState } from 'react';
import { LIST_KEYS, LIST_NAME } from '../../config';
import ListItem from '../ListItem/ListItem';
import { ListNameValues, TListName } from '../../types/types';

type TListCoursesProps = {
    setListItem: (item: ListNameValues) => void
    filterCourses: (item: ListNameValues) => void
}

// Список курсов
const ListCourses = ({ setListItem, filterCourses }: TListCoursesProps) => {
    const list = LIST_NAME;
    const firstKey = Object.values(LIST_NAME)[0];
    const [activeItem, setActiveItem] = useState(firstKey); // Cостояние для отслеживания активного элемента

    const handleItemClick = (item: ListNameValues) => {
        setActiveItem(item)
        setListItem(item)
        filterCourses(item)
    }
   
  return (
    <div className='courses'>
      <ul className='courses__list'>
         {Object.values(list).map((value) => (
                    <ListItem
                        key={value}
                        item={value}
                        isActive={activeItem === value}
                        onClick={() => handleItemClick(value)}
                    >
                        {value}
                    </ListItem>
                ))}
      </ul>
    </div>
  )
}

export default ListCourses
