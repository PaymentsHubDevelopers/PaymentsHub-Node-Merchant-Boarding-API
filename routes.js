const express = require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const applicationController = require('./applicationController')

const app = express();

// Set Render Engine to EJS
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

// Use Body-parser to handle JSON responses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

// GET: Home Route
router.get('/', async (req, res) => {
    res.render('newMerchantApplication');
});

// POST: Create Application
router.post('/create-application', async (req, res, next) => {
    applicationController.createApplication(req, res, next);
});

// POST: Update Application
router.post('/update-application', async (req, res, next) => {
    applicationController.updateApplication(req, res, next);
});

// POST: Send Application to Merchant
router.post('/send-application', async (req, res, next) => {
    applicationController.sendApplication(req, res, next);
});

// POST: Submit Application
router.post("/submit-application", (req, res, next) => {
  applicationController.submitApplication(req, res, next);
});

module.exports = router;
