const dbConn = require('../../config/db.config');

const Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

/** get all employees */
Employee.getAllEmployees = (callback) => {

    const query = 'SELECT * FROM employees WHERE is_deleted = 0';

    dbConn.query(query, (error, results) => {
        if (error) {
            console.error('Error while fetching employees:', error);
            callback(error, null);
        } else {
            console.log('Employees fetched successfully');
            callback(null, results);
        }
    });
};

/** get employee by ID from DB */
Employee.getEmployeeByID = (id, callback) => {
    const query = 'SELECT * FROM employees WHERE id = ?';

    dbConn.query(query, id, (error, results) => {
        if (error) {
            console.error('Error while fetching employee by ID:', error);
            callback(error, null);
        } else {
            if (results.length === 0) {
                console.log('Employee not found');
                callback(null, null);
            } else {
                console.log('Employee fetched successfully');
                callback(null, results[0]);
            }
        }
    });
};


/** create new employee */
Employee.createEmployee = (employeeReqData, callback) => {
    const query = 'INSERT INTO employees SET ?';

    dbConn.query(query, employeeReqData, (error, results) => {
        if (error) {
            console.error('Error while inserting data:', error);
            callback(error, null);
        } else {
            const createdEmployeeId = results.insertId;
            console.log('Employee created successfully');
            callback(null, createdEmployeeId);
        }
    });
};


/** update employee */
Employee.updateEmployee = (id, employeeReqData, callback) => {
    const query = `UPDATE employees
                   SET first_name   = ?,
                       last_name    = ?,
                       email        = ?,
                       phone        = ?,
                       organization = ?,
                       designation  = ?,
                       salary       = ?
                   WHERE id = ?`;
    const {
        first_name,
        last_name,
        email,
        phone,
        organization,
        designation,
        salary
    } = employeeReqData;
    const values = [first_name, last_name, email, phone, organization, designation, salary, id];

    dbConn.query(query, values, (error, results) => {
        if (error) {
            console.error('Error while updating the employee:', error);
            callback(error, null);
        } else {
            console.log("Employee updated successfully");
            callback(null, results);
        }
    });
};

/** delete employee */
Employee.deleteEmployee = (id, callback) => {
    const query = `UPDATE employees SET is_deleted = ? WHERE id = ?`;

    const values = [1, id];

    dbConn.query(query, values, (error, results) => {
        if (error) {
            console.error('Error while deleting the employee:', error);
            callback(error, null);
        } else {
            console.log("Employee deleted successfully");
            callback(null, results);
        }
    });
};
module.exports = Employee;