import { useEffect, useState } from 'react'
import { fetchData } from '../../api/api'
import { FETCH_URL, LIST_KEYS, LIST_NAME } from '../../config'
import { ListNameValues, TCoursesData } from '../../types/types'
import BoardCourses from '../BoardCourses/BoardCourses'
import ListCourses from '../ListCourses/ListCourses'

const Board = () => {
  const [dataCourse, setDataCourse] = useState<TCoursesData[]>([]) // Храним курсы
  const [listItem, setListItem] = useState(null) // Храним категорию курса
  const [filteredCourses, setFilteredCourses] = useState<TCoursesData[]>([]) // Храним отфильтрованные курсы
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  
  const loadData = async () => {
        setLoading(true)
        setError(null)

        try {
            const data = await fetchData(FETCH_URL)
            if (data) {
                setDataCourse(data)
                setFilteredCourses(data) // Изначально все курсы
            }
        } catch (error) {
            setError('Не удалось загрузить данные. Попробуйте еще раз позже.');
            console.error('Network response was not ok', error)
            throw error
        } finally {
            setLoading(false); 
        }
    };

    console.log('listItem', listItem)
  // Получаем все курсы 
  useEffect(() => {
        loadData();
    }, []);

  // Получаем курсы по категории
  const filterCourses = (selectedItem: ListNameValues) => {
    if (selectedItem === LIST_NAME.ALL || selectedItem === null) {
      setFilteredCourses(dataCourse) // Показать все курсы
    } else {
        const keys = LIST_KEYS[selectedItem] || []
        const filtered = dataCourse.filter(course => 
        course.tags.some(tag => keys.includes(tag)) // проверяем tags с LIST_KEYS
        )
      setFilteredCourses(filtered)
    }
  }

  if (loading) {
      return <div className="loading">Загрузка...</div>;
  }
  
  return (
    <div className='container'>
        <div className="board">
            <ListCourses setListItem={setListItem} filterCourses={filterCourses} />
            <BoardCourses dataCourse={filteredCourses} />
        </div>
    </div>
  )
}

export default Board