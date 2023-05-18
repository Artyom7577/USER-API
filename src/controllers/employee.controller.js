const Employee = require("../models/employee.model");

/** get all employee list */
exports.getEmployeeList = (req, res) => {
    Employee.getAllEmployees((error, employees) => {
        if (error) {
            res.status(500).json({success: false, message: 'Error while fetching employees.'});
        } else {
            console.log('Employees', employees);
            res.json(employees);
        }
    });
};


/** get employee by ID */
exports.getEmployeeByID = (req, res) => {
    const employeeId = req.params.id;

    Employee.getEmployeeByID(employeeId, (error, employee) => {
        if (error) {
            res.status(500).json({success: false, message: 'Error while fetching employee by ID.'});
        } else {
            if (!employee) {
                res.status(404).json({success: false, message: 'Employee not found.'});
            } else {
                console.log('Single employee data', employee);
                res.json(employee);
            }
        }
    });
};


/** create new employee */
exports.createNewEmployee = (req, res) => {
    const employeeReqData = req.body;

    /** Check if employeeReqData is empty */
    if (Object.keys(employeeReqData).length === 0) {
        res.status(400).json({success: false, message: 'Please fill all fields'});
    } else {
        Employee.createEmployee(employeeReqData, (error, createdEmployeeId) => {
            if (error) {
                res.status(500).json({success: false, message: 'Error while creating the employee.'});
            } else {
                res.json({success: true, message: 'Employee created successfully!', data: createdEmployeeId});
            }
        });
    }
};


/** update employee */
exports.updateEmployee = (req, res) => {
    const employeeReqData = req.body;
    const employeeId = req.params.id;

    /** Check if employeeReqData is empty */
    if (Object.keys(employeeReqData).length === 0) {
        res.status(400).json({success: false, message: 'Please fill all fields'});
    } else {
        Employee.updateEmployee(employeeId, employeeReqData, (error, result) => {
            if (error) {
                res.status(500).json({success: false, message: 'Error while updating the employee.'});
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({success: false, message: 'Employee not found.'});
                } else {
                    res.json({success: true, message: 'Employee updated successfully!'});
                }
            }
        });
    }
};


/** delete employee */
exports.deleteEmployee = (req, res) => {
    const employeeId = req.params.id;

    Employee.deleteEmployee(employeeId, (error, result) => {
        if (error) {
            res.status(500).json({success: false, message: 'Error while deleting the employee.'});
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({success: false, message: 'Employee not found.'});
            } else {
                res.json({success: true, message: 'Employee deleted successfully!'});
            }
        }
    });
};
