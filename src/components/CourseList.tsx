import { useFetch } from "../hooks/useFetch";
import reactLogo from '../assets/react.svg'
import './CourseList.css'
import CourseCard from "./CourseCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import { purchaseCourse } from "../coursesSlice";

export interface Course {
    id: string
    title: string
    description: string
    videoUrl: string
    price: number
}

const MOCK_DATA: Course[] = [
    {
        id: "1",
        title: "Introduction to JavaScript",
        description: "Learn the fundamentals of JavaScript, the programming language of the web.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 29.99
    },
    {
        id: "2",
        title: "React for Beginners",
        description: "Build modern user interfaces with React. Covers hooks, state management, and JSX.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 49.99
    },
    {
        id: "3",
        title: "Advanced TypeScript",
        description: "Deep dive into TypeScript with generics, decorators, and advanced typing patterns.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 59.99
    },
    {
        id: "4",
        title: "Node.js & Express Crash Course",
        description: "Learn how to build scalable backends using Node.js and Express framework.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 34.99
    },
    {
        id: "5",
        title: "Fullstack Development Bootcamp",
        description: "Master frontend and backend with React, Node.js, and databases in this intensive bootcamp.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 99.99
    },
    {
        id: "6",
        title: "Python for Data Science",
        description: "Explore Python libraries like NumPy, Pandas, and Matplotlib for data analysis.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 39.99
    },
    {
        id: "7",
        title: "Machine Learning Basics",
        description: "Understand core ML concepts such as regression, classification, and model evaluation.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 79.99
    },
    {
        id: "8",
        title: "UI/UX Design Principles",
        description: "Learn how to design intuitive and engaging user interfaces with real-world examples.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 44.99
    },
    {
        id: "9",
        title: "Cloud Computing with AWS",
        description: "Get hands-on with Amazon Web Services and learn to deploy scalable cloud applications.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 89.99
    },
    {
        id: "10",
        title: "DevOps with Docker & Kubernetes",
        description: "Automate deployments and orchestrate containers using Docker and Kubernetes.",
        videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        price: 69.99
    }
]

function CourseList() {
    const { data, error, loading } = useFetch<Course[]>(
        "https://jsonplaceholder.typicode.com/posts",
        {
            mockData: MOCK_DATA,
        }
    );
    const dispatch = useAppDispatch()
    const purchasedCourses = useAppSelector((state) => state.courses.purchasedCourses)

    function handlePurchase(courseId: string) {
        dispatch(purchaseCourse(courseId))
        alert('Added course, id:' + courseId)
    }


    if (loading) return <div className="loader">
        <img src={reactLogo} className="logo loader-logo react" alt="React logo" />
        <p>Loading...</p>
    </div>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <main>
            <div className="course-list">
                {data?.map((course) => (
                    <CourseCard
                        key={course.id}
                        disabled={purchasedCourses.includes(course.id)}
                        course={course}
                        onClick={() => handlePurchase(course.id)}
                    />
                ))}
            </div>
        </main>
    )
}

export default CourseList