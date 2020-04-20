const mongoose = require('mongoose')
const Employee = require('../models/employee')

const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

// Delete employees when department is deleted using middlewares
// departmentSchema.pre('remove', function (next) {
//     console.log("inside middleware")
//     const department = this
//     Employee.deleteMany({ department: department })
//     next()
// })

const Department = mongoose.model('Department', departmentSchema)

module.exports = Department