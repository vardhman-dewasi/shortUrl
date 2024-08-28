const express = require('express');
const router = express.Router();

const { handleGenerateNewShortURL, handleGetAnalytics, getShortId } = require("../controllers/url");

router.post("/create", handleGenerateNewShortURL);

router.get('/analytics/:shortId', handleGetAnalytics);
router.get('/:shortId', getShortId);

module.exports = router;