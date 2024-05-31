import { TCoursesData } from '../../types/types'
import Course from '../Course/Course'

interface IBoardCoursesProps {
    dataCourse: TCoursesData[]
}

const BoardCourses = ({ dataCourse }) => {
    console.log('dataCourse', dataCourse)
    
  return (
    <div className='board-courses'>
        {dataCourse && Array.isArray(dataCourse) && dataCourse.map((course) => {
            return <Course key={course.id} item={course} />;
        })}
    </div>
  )
}

export default BoardCourses