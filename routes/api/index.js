const router = require('express').Router();
const TravellerRoutes = require('./travellerRoutes');
const LocationRoutes = require('./locationRoutes');
const TripRoutes = require('./tripRoutes');

router.use('/travellers', TravellerRoutes);
router.use('/locations', LocationRoutes);
router.use('/trips', TripRoutes);

module.exports = router;