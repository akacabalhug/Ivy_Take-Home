const Collection = require("../models/collections.model");

const collectionsController = {
    addCollection: async (req, res) => {
        try {
            const collection = await new Collection(req.body).save();
            console.log(req.body);
            res.send(collection);
        } catch (error) {
            res.send(error);
        }
    },

}

module.exports = collectionsController;