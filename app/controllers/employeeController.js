const Employee = require('../models/employee')

module.exports.list = (req, res) => {
    Employee.find().populate('department')
        .then((employee) => {
            res.json(employee)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const employee = new Employee(data)
    employee.save()
        .then((employee) => {
            res.json(employee)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Employee.findById(id).populate('department')
        .then((employee) => {
            res.json(employee)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Employee.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then((employee) => {
            if (employee) {
                res.json({})
            } else {
                res.json(employee)
            }
        })
}

module.exports.destroy = async (req, res) => {
    const id = req.params.id
    Employee.findByIdAndDelete(id)
        .then(employee => {
            if (employee) {
                res.json(employee)
            } else {
                res.status('404').json({})
            }
        })
    await Ticket.deleteMany({ department: { _id: id } })
}