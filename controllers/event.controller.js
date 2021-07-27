const Event = require("../models/Event");

const getEvents = async (req, res) => {

    const events = await Event.find().populate('user', 'name');

    return res.status(200).json({
        ok: true,
        events
    });
}

const createEvent = async (req, res) => {

    const event = new Event(req.body)

    try {
        event.user = req.uid;

        const eventSaved = await event.save();

        return res.status(201).json({
            ok: true,
            event: eventSaved
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: '500 Internal Server Error'
        });
    }

}

const updateEvent = async (req, res) => {

    const eventId = req.params.id;

    const uid = req.uid;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                message: `No existe ningún evento con id ${eventId}`
            })
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                message: 'No está autorizado para editar este evento'
            });
        }

        const data = {
            ...req.body,
            user: uid
        }

        const eventUpdated = await Event.findByIdAndUpdate(eventId, data, { new: true });

        return res.status(200).json({
            ok: true,
            event: eventUpdated
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: '500 Internal Server Error'
        });
    }

}

const deleteEvent = async (req, res) => {

    const eventId = req.params.id;

    const uid = req.uid;

    try {
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                message: `No existe ningún evento con id ${eventId}`
            })
        }

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                message: 'No está autorizado para eliminar este evento'
            });
        }

        await Event.findByIdAndDelete(eventId);

        return res.status(200).json({
            ok: true,
            message: 'Evento eliminado correctamente',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: '500 Internal Server Error'
        });
    }

}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}