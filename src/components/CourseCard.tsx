
import "./CourseCard.css";
import type { Course } from "./CourseList";

interface CourseCardProps {
    course: Course
    disabled: boolean
    onClick?: () => void
}

function CourseCard({ course, disabled, onClick }: CourseCardProps) {
    return (
        <div className="course-card">
            <div className="course-card-video">
                <video src={course.videoUrl} controls />
            </div>
            <div className="course-card-info">
                <h2 className="course-card-title">{course.title}</h2>
                <p className="course-card-description">{course.description}</p>
                <div className="course-card-footer">
                    <span className="course-card-price">${course.price.toFixed(2)}</span>
                    <button className="course-card-button" disabled={disabled} onClick={onClick}>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
