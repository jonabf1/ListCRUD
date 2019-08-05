const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

mongoose.connect('mongodb+srv://appnode:appnode@cluster0-vxghe.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

productSchema.plugin(paginate);

mongoose.model('Product', productSchema);

