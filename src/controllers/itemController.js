const { getAllItems } = require('../services/itemServices');

const getItems = async (req, res) => {
   const items = await getAllItems();

   res.send(items);
}

async function getItem(req, res) {
   const id = req.params.id;
   const item = await getOne({product_id: id});
   
   res.send(item);
}

function createItem (req, res) {
    res.send("items");
}

module.exports = {
    getItems,
    getItem,
    createItem,
}