const  shortid  = require("shortid");
const URL = require('../models/url');


async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
     if(!body.url) 
        return res.status(400).json({ error: "url is required" });

    const shortID = shortid.generate();
    const result = await URL.create({
        shortId:shortID,
        redirectURL: body.url,
        visitHistory: [],
    });
   console.log(result);
    return res.json({ res: shortID });
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    
    const result = await URL.findOne({ shortId });
    
    if (!result) {
        return res.status(404).json({ error: 'URL not found' });
    }

    return res.status(200).json({ totalClicks: result.visitHistory.length,
         analytics: result.visitHistory });
}


async function getShortId(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitHistory:{
                    timestamp: Date.now(),
                },
            },
        },
        {new: true}
        );
        
        if (!entry) {
            return res.status(404).json({ error: 'Url not found' });
        }
        //redirect to the original url
        res.redirect(entry.redirectURL);
}


module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    getShortId,
}