import { useState } from 'react';
import { LIST_KEYS } from '../../config';
import ListItem from '../ListItem/ListItem';

// Список курсов
const ListCourses = () => {
    const list = LIST_KEYS;
    const firstKey = Object.keys(LIST_KEYS)[0];
    const [activeItem, setActiveItem] = useState(firstKey); // Cостояние для отслеживания активного элемента

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    }
   
  return (
    <div className='courses'>
      <ul className='courses__list'>
         {Object.entries(list).map(([key]) => (
                     <ListItem
                        key={key}
                        // itemKey={key} 
                        isActive={activeItem === key}
                        onClick={() => handleItemClick(key)}
                    >
                        {key}
                    </ListItem>
                ))}
      </ul>
    </div>
  )
}

export default ListCourses
