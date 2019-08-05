const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async showAll(req, res) {
        const { page = 1 } = req.query;
        const showll = await Product.paginate({}, { page, limit: 5 });
        return res.json(showll);
    },

    async showOne(req, res) {
        const showOne = await Product.findById(req.params.id);
        return res.json(showOne);
    },

    async updating(req, res) {
        const update = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(update); //definir o NEW para renderizar novos dados
    },
    async delete(req, res) {
        await Product.findByIdAndDelete(req.params.id);
        return res.send();
    },

}



