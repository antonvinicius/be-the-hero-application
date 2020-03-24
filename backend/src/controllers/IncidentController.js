const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const incidents = await connection.select('*').from('incidents');
        return res.json(incidents);
    },


    async create(req, res) {
        const { title, description, value } = req.body;
        const ong_id = req.headers.authorization;

        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        console.log(result)
        const id = result[0];
        return res.json({ id });
    }
}