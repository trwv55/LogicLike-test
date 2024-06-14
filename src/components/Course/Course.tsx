import React from "react";
import { TCoursesData } from "@types";

type TCourseProps = {
  item: TCoursesData;
};

const Course = ({ item }: TCourseProps) => {
  return (
    <a className="course-item" href="#">
      <div
        className="course-item__top"
        style={{ backgroundColor: item.bgColor }}
      >
        <div className="course-item__img">
          <img src={item.image} alt="" />
        </div>
      </div>
      <div className="course-item__name">
        <p>{item.name}</p>
      </div>
    </a>
  );
};

export default React.memo(Course);
