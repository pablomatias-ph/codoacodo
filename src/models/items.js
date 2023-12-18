const { conn } = require("../config/conn.js");

const getAll = async () => {
    const [rows] = await conn.query('SELECT * FROM product;');

    return rows;
}

const getOne = async (params) => {
  
  const [rows] = await conn.query('SELECT * FROM product WHERE ?;', params);

  return rows;
}


module.exports = {
  getAll,
  getOne,
};
