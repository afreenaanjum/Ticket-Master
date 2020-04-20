const Department = require('../models/department')
const Employee = require('../models/employee')
const Ticket = require('../models/ticket')



module.exports.list = (req, res) => {
    Department.find()
        .then((department) => {
            res.json(department)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const department = new Department(data)
    department.save()
        .then((department) => {
            res.json(department)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Department.findById(id)
        .then((department) => {
            res.json(department)
        })
}

module.exports.update = async (req, res) => {
    const id = req.params.id
    const body = req.body
    Department.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then((department) => {
            if (department) {
                res.json({})
            } else {
                res.json(department)
            }
        })
}

module.exports.destroy = async (req, res) => {
    const id = req.params.id
    Department.remove({ _id: id })
        .then(department => {
            if (department) {
                res.json(department)
            } else {
                res.status('404').json({})
            }
        })

    await Employee.deleteMany({ department: { _id: id } })
    await Ticket.deleteMany({ department: { _id: id } })
}