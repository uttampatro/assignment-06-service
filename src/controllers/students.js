const {
    addStudent,
    fetchAllStudent,
    updateStudent,
    deleteStudent,
} = require('../services/studentService');

const addingStudent = async (req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const age = req.body.age;
        const school = req.body.school;
        const std = req.body.std;
        const division = req.body.division;
        const status = req.body.status;
        const student = await addStudent({
            name,
            age,
            school,
            std,
            division,
            status,
        });

        return res.json(student);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
const getAllStudent = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 7;
        const studentList = await fetchAllStudent({ page, limit });
        return res.json(studentList);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
const updatingStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const name = req.body.name;
        const age = req.body.age;
        const school = req.body.school;
        const std = req.body.std;
        const division = req.body.division;
        const status = req.body.status;
        const student = await updateStudent(
            { _id: id },
            { name, age, school, std, division, status }
        );
        return res.json(student);
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
const deletingStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const student = await deleteStudent({ _id: id });
        return res.json('delete Student successfully');
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

module.exports = {
    addingStudent,
    getAllStudent,
    updatingStudent,
    deletingStudent,
};
