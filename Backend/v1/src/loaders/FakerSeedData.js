const {faker, fa} = require("@faker-js/faker");
const {Appointments} = require("../models")

const createRandomAppointment = () => {
    const date = faker.date.between({from: '2025-01-01T00:00:00.000Z', to: '2025-12-31T00:00:00.000Z'})
    const data = new Appointments({
        date: faker.date.between({ from:'2025-03-01T00:00:00.000Z',to: '2025-03-31T00:00:00.000Z'}),
        time: faker.date.between({ from:'2025-03-01T00:00:00.000Z',to: '2025-03-31T00:00:00.000Z'}),
        name: faker.person.fullName(),
    })
    return data.save()
}

const AppointmentSeed = () => {
    faker.helpers.multiple(createRandomAppointment, {
        count: 3,
    })
}

module.exports = {
    AppointmentSeed
}