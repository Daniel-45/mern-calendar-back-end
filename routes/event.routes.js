/** 
 * Auth routes
 * /api/events
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/event.controller');

const router = Router();

router.use(validateJWT);

router.get('/', getEvents);

router.post('/', [
    check('title', 'El título del evento es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio del evento es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización del evento es obligatoria').custom(isDate),
    validateFields
], createEvent);

router.put('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('title', 'El título del evento es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio del evento es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización del evento es obligatoria').custom(isDate),
    validateFields
], updateEvent);

router.delete('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    validateFields
], deleteEvent);

module.exports = router;