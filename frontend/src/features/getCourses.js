import axios from "axios";

//const API_URL = 'http://localhost:5000/api/courses/'
const API_URL = `https://odysseybackend-8zy5.onrender.com/api/courses/`;
// console.log(process.env.BACKEND)

export const getCourses = async (category) => {
    const response = await axios.get(API_URL + category);

    return response.data;
};

export const getCoursesById = async (id) => {
    const response = await axios.get(API_URL + id);

    return response.data;
};
