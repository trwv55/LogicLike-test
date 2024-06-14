import { useEffect, useState, useCallback } from "react";
import useCourses from "../../hooks/useCourses";
import { LIST_KEYS, LIST_NAME } from "@config";
import { ListNameValues, TCoursesData } from "@types";
import BoardCourses from "@components/BoardCourses/BoardCourses";
import CoursesList from "@components/Courses/CoursesList";

const Board = () => {
  const { data: dataCourse, error, isLoading } = useCourses();
  const [filteredCourses, setFilteredCourses] = useState<TCoursesData[]>([]);

  const filterCourses = useCallback(
    (selectedItem: ListNameValues) => {
      if (!dataCourse) return;

      if (selectedItem === LIST_NAME.ALL || selectedItem === null) {
        setFilteredCourses(dataCourse); // Показываем все курсы
      } else {
        const keys = LIST_KEYS[selectedItem] || [];
        const filtered = dataCourse.filter((course) =>
          course.tags.some((tag) => keys.includes(tag)),
        ); // проверяем tags с LIST_KEYS
        setFilteredCourses(filtered);
      }
    },
    [dataCourse],
  );

  useEffect(() => {
    if (dataCourse) {
      setFilteredCourses(dataCourse);
    }
  }, [dataCourse]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading__spinner">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error loading courses: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="board">
        <CoursesList filterCourses={filterCourses} />
        <BoardCourses dataCourse={filteredCourses} />
      </div>
    </div>
  );
};

export default Board;
