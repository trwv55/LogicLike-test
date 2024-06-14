import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@api/api";
import { FETCH_URL } from "@config";
import { TCoursesData } from "@types";

const useCourses = () => {
  return useQuery<TCoursesData[], Error>({
    queryKey: ["courses"],
    queryFn: () => fetchData<TCoursesData[]>(FETCH_URL),
  });
};

export default useCourses;
