const mongoose = require('mongoose');

// Definicion del esquema de superheroes
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    nombreSociedad: { type: String },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creados: [String], 
    createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-07' });

// Modelo de superheroe
const Superhero = mongoose.model('Superhero', superheroSchema);

// Conexion a la base de datos
mongoose.connect('mongodb+srv://Grupo-07:grupo07@cursadanodejs.ls9ii.mongodb.net/Node-js', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado a la base de datos correctamente');
})
.catch(error => {
    console.error('Error al conectar a la base de datos:', error);
});

// Inserta un superheroe
async function insertSuperHero() {
    const hero = new Superhero({ 
        nombreSuperHeroe: 'Thor',
        nombreReal: 'Thor Odinson',
        nombreSociedad: "Dios del Trueno",
        edad: 1000,
        planetaOrigen: 'Asgard',
        debilidad: 'Destruir su martillo',
        poderes: ['Controla el trueno', 'Inmortal', 'Super fuerza'],
        aliados: ['Loki'],
        enemigos: ['Hela'],
        creados: ['Matias'] 
    });

    await hero.save();
    console.log('Superhéroe insertado:', hero);
}

insertSuperHero();


/* Actualiza un superheroe
async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    {nombreSuperHeroe: nombreSuperHeroe},
    { $set: { edad: 26 } }
  );
  console.log('Resultado de la actualización:', result);
}

updateSuperHero('Spiderman');

// Elimina un superheroe
async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({nombreSuperHeroe: nombreSuperHeroe});
  console.log('Superhéroe eliminado:', result);
}

deleteSuperHero('Spiderman');

//Funcion para buscar superheroes cuyo planeta sea "Tierra"
async function findSuperHeroes() {
  const heroes = await SuperHero.find({ planetaOrigen: 'Tierra'});
  console.log('Superheroes encontrados:', heroes);  
}

findSuperHeroes(); */

