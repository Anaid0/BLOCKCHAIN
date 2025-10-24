const mongoose = require('mongoose');

const uri = 'mongodb+srv://dvargasp_db_user:OHdpFbngAdIYKzCj@blockchain.bifruw7.mongodb.net/';

mongoose.connect(uri).then(() => console.log('Conexión exitosa a MongoDB Atlas')).catch((err) => console.error('Error al conectar a MongoDB Atlas:', err));

const blocksSchema = new mongoose.Schema({
  hash: String,
  height: Number,
  body: String,
  time: Date,
  previousBlockHash: String
});

const Blocks = mongoose.model('blocks', blocksSchema);

async function crearBloque() {
  const nuevoBloque = new Blocks({
    hash: '0000abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx',
    height: 5,
    body: 'Datos del bloque 5, insertado desde la API Javascript',
    time: new Date(),
    previousBlockHash: '0000wxyz9876vuts5432rqpo1098nmlk7654jihg3210fedc'
  });
  await nuevoBloque.save();
  console.log('Bloque guardado en la base de datos');
}

crearBloque();