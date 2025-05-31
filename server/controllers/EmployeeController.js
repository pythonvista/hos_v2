const Employee = require('../models/Employee');
const Role = require('../models/Role')
const responseHandler = require('../utils/response-handler');

async function createEmployee(req, res, next) {
    try {
        let newEmployee = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role,
            dob: req.body.dob,
            hospital: req.user._id,
            joiningdate: req.body.joiningdate,
            salary: req.body.salary
        }
        let employee = new Employee(newEmployee);
        employee.save()
        if (employee) {
            responseHandler(res, 200, employee);
        }
    } catch (err) {
        responseHandler(res, 500);
    }
}

function search(req, res, next) {

    let query = {};
    if (req.query.searchQuery) {

        let searchQuery = (req.query.searchQuery).toLowerCase();
        searchQuery = new RegExp("^" + searchQuery, "i");
        query.$or = [
            { email: { $regex: searchQuery } },
            { name: { $regex: searchQuery } },
            { phone: { $regex: searchQuery } },
        ];
    }

    if (req.query.role) {
        query.role = req.query.role;
    }
    query.hospital = req.user._id;

    console.log(query)
    Employee.find(query)
        .skip(+req.query.limit * +req.query.page)
        .limit(+req.query.limit)
        .exec(
            function(err, doc) {
                if (err) { responseHandler(res, 500, err); return; };
                responseHandler(res, 200, doc);
            })
}

async function deleteEmployee(req, res, next) {
    const id = req.params.employeeId;
    Employee.findByIdAndRemove({ _id: id }, (error, document) => {
        if (error) {
            responseHandler(res, 500, error);
        }
        responseHandler(res, 200, { msg: `Employee ${document.name} deleted` })
    })
}

async function createRole(req, res, next) {
    try {
        role = { name: req.body.name, hospital: req.user._id };
        console.log('Creating Role', role)
        let newrole = await new Role(role);
        newrole.save();
        if (newrole) {
            responseHandler(res, 200, newrole);
        }
    } catch (error) {
        responseHandler(res, 500, error)
    }
}

async function deleteRole(req, res, next) {
    try {
        const id = req.params.roleId;
        Role.findByIdAndRemove({ _id: id }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error);
            }
            responseHandler(res, 200, { msg: `Employee deleted` })
        })
    } catch (error) {
        responseHandler(res, 500, error.msg)
    }

}

async function getAllRoles(req, res, next) {
    try {
        Role.find({ hospital: req.user._id }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error);
            }
            responseHandler(res, 200, document)
        })
    } catch (error) {
        responseHandler(res, 500, error.msg)
    }
}
module.exports = {
    createEmployee,
    search,
    deleteEmployee,
    createRole,
    deleteRole,
    getAllRoles
}