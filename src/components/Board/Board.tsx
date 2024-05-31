import React, { useState, useEffect } from 'react'
import ListCourses from '../ListCourses/ListCourses'
import BoardCourses from '../BoardCourses/BoardCourses'
import { fetchData } from '../../api/api'
import { FETCH_URL } from '../../config'

const Board = () => {
  const [dataCourse, setDataCourse] = useState({}) // Храним курсы
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  
  const loadData = async () => {
        setLoading(true)
        setError(null)

        try {
            const data = await fetchData(FETCH_URL)
            if (data) {
                setDataCourse(data)
            }
        } catch (error) {
            setError('Не удалось загрузить данные. Попробуйте еще раз позже.');
            console.error('Network response was not ok', error)
            throw error
        } finally {
            setLoading(false); 
        }
    };

  // Получаем все курсы 
  useEffect(() => {
        loadData();
    }, []);

  if (loading) {
      return <div className="loading">Загрузка...</div>;
  }
  
  return (
    <div className='container'>
        <div className="board">
            <ListCourses />
            <BoardCourses dataCourse={dataCourse} />
        </div>
    </div>
  )
}

export default Board