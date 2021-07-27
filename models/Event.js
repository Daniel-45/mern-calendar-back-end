const { Schema, model } = require('mongoose');

const EventSchema = Schema({
    title: {
        type: String,
        required: [true, 'El título del evento es obligatorio']
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: [true, 'La fecha de inicio del evento es obligatoria']
    },
    end: {
        type: Date,
        required: [true, 'La fecha de finalización del evento es obligatoria']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

EventSchema.methods.toJSON = function () {
    const { _id, __v, ...event } = this.toObject();
    event.id = _id;
    return event;
}

module.exports = model('Event', EventSchema);