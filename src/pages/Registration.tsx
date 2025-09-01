import { testSlice } from "../coursesSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

function Registration() {
    const purchasedCourses = useAppSelector((state) => state.courses.purchasedCourses)
    const dispatch = useAppDispatch()

    const clickHandler = () => {
        dispatch(testSlice())
    }

    return (
        <>
            <h1>Welcome!</h1>
            <ul>
                {purchasedCourses.map((course) => (
                    <li key={course}>{course}</li>
                ))}
            </ul>
            <button type="button" onClick={clickHandler}>Test slice</button>
        </>
    )
}

export default Registration;