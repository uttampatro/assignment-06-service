const Student = require('../entity/Student');

const addStudent = async ({ name, age, school, std, division, status }) => {
    const student = new Student({ name, age, school, std, division, status });
    await student.save();
    return student;
};

const fetchAllStudent = async () => {
    const student = await Student.find();
    return student;
};

const updateStudent = async (
    _id,
    { name, age, school, std, division, status }
) => {
    const student = await Student.findById(_id);

    student.name = name || student.name;
    student.age = age || student.age;
    student.school = school || student.school;
    student.std = std || student.std;
    student.division = division || student.division;
    student.status = status || student.status;
    await student.save();
    return student;
};

const deleteStudent = async _id => {
    const student = await Student.findByIdAndDelete(_id);
    return student;
};

module.exports = { addStudent, fetchAllStudent, updateStudent, deleteStudent };
