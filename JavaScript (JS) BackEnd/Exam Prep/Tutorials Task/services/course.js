// the actions performed on the model
const Course = require('../models/Course')

async function getAllCourses() {
    return await Course.find({}).sort({createdAt: 1}).lean() //w/o getters, setters, etc
}

async function getCourseById(id) {
    return await Course.findById(id).populate('usersEnrolled').lean()
}
async function createCourse(courseData) {
    const pattern = new RegExp(`/^${courseData.title}$/`, 'i')
    const existing = await Course.findOne({title: {$regex: pattern}})
    console.log(existing)
    if (existing) {
        throw new Error('A course with this name already exists!')
    }
    const course = new Course(courseData)
    await course.save();
    return course;

}
async function editCourse(id,courseData) {
    const course = await Course.findById(id)
    course.title = courseData.title
    course.description = courseData.description
    course.imageUrl = courseData.imageUrl
    course.duration = courseData.duration

    return await course.save();

}
async function deleteCourse(id) {
    return  Course.findByIdAndDelete(id)
}
async function enrollCourse(id, userId) {
    const course = await Course.findById(id)
    course.usersEnrolled.push(userId)

    return course.save();
}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    editCourse,
    deleteCourse,
    enrollCourse
}