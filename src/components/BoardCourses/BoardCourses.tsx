import { TCoursesData } from "@types";
import Course from "@components/Course/Course";

type TBoardCoursesProps = {
  dataCourse: TCoursesData[];
};

const BoardCourses = ({ dataCourse }: TBoardCoursesProps) => {
  return (
    <div className="board-courses">
      {dataCourse &&
        Array.isArray(dataCourse) &&
        dataCourse.map((course) => {
          return <Course key={course.id} item={course} />;
        })}
    </div>
  );
};

export default BoardCourses;
