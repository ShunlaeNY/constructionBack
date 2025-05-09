const checkApiKey = (req,res,next) => {
    const apiKey = req.headers["otmm-api-key"];
    const validKey = "KoaderMasters";

    if (apiKey && apiKey === validKey) {
        next();
    } else {
        res.status(401).json({message: "Invalid API key"});
    }
}

module.exports = checkApiKey;