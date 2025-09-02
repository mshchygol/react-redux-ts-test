import { useFetch } from "../hooks/useFetch";
import reactLogo from '../assets/react.svg'
import './CourseList.css'

interface Course {
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
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        price: 29.99
    },
    {
        id: "2",
        title: "React for Beginners",
        description: "Build modern user interfaces with React. Covers hooks, state management, and JSX.",
        videoUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", // HLS
        price: 49.99
    },
    {
        id: "3",
        title: "Advanced TypeScript",
        description: "Deep dive into TypeScript with generics, decorators, and advanced typing patterns.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4",
        price: 59.99
    },
    {
        id: "4",
        title: "Node.js & Express Crash Course",
        description: "Learn how to build scalable backends using Node.js and Express framework.",
        videoUrl: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8", // HLS
        price: 34.99
    },
    {
        id: "5",
        title: "Fullstack Development Bootcamp",
        description: "Master frontend and backend with React, Node.js, and databases in this intensive bootcamp.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
        price: 99.99
    },
    {
        id: "6",
        title: "Python for Data Science",
        description: "Explore Python libraries like NumPy, Pandas, and Matplotlib for data analysis.",
        videoUrl: "https://test-streams.mux.dev/test_001/stream.m3u8", // HLS
        price: 39.99
    },
    {
        id: "7",
        title: "Machine Learning Basics",
        description: "Understand core ML concepts such as regression, classification, and model evaluation.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4",
        price: 79.99
    },
    {
        id: "8",
        title: "UI/UX Design Principles",
        description: "Learn how to design intuitive and engaging user interfaces with real-world examples.",
        videoUrl: "https://test-streams.mux.dev/dai-discontinuity-daterange/dai.m3u8", // HLS
        price: 44.99
    },
    {
        id: "9",
        title: "Cloud Computing with AWS",
        description: "Get hands-on with Amazon Web Services and learn to deploy scalable cloud applications.",
        videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4",
        price: 89.99
    },
    {
        id: "10",
        title: "DevOps with Docker & Kubernetes",
        description: "Automate deployments and orchestrate containers using Docker and Kubernetes.",
        videoUrl: "https://moqups-hls.mux.dev/tears_of_steel/playlist.m3u8", // HLS
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


    if (loading) return <div className="loader">
        <img src={reactLogo} className="logo loader-logo react" alt="React logo" />
        <p>Loading...</p>
    </div>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    return (
        <main>
            <ul>
                {data?.map((course) => (
                    <li key={course.id}>{course.title}</li>
                ))}
            </ul>
        </main>
    )
}

export default CourseList