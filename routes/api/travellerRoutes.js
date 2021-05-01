const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

router.get('/', async (req, res) => {
    try {
    
    // const travellerData = await Traveller.findAll({
    //     include: [{ model: Location, model: Trip }],
    //     attributes: {
    //         include: [
    //             [
    //                 sequelize.literal(
    //                     '(SELECT'
    //                 )
    //             ]
    //         ]
    //     }
    // })
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
    const travellerData = await Traveller.findByPk(req.params.id, {
        include: [{ model: Location, through: Trip, as: 'planned_trips' }],
    });
    if (!travellerData) {
        res.status(400).json({ message: 'No traveller with that id found '});
        return;
    }
    res.status(200).json(travellerData);


    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async(req, res) => {
    try {
    const travellerData = await Traveller.create(req.body);
    res.status(200).json(travellerData);


    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!travellerData) {
            res.status(400).json({ message: 'No traveller with that id found' });
            return;
        }
        res.status(200).json(travellerData);


    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
