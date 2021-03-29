import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const primeraResidenciaMaria = new Direccion(
  "Calle Ángel Ganivet",
  34,
  4,
  "B",
  50008,
  "Zaragoza",
  "Zaragoza"
)

const segundaResidenciaMaria = new Direccion(
  "Calle Paciencia",
  4,
  false,
  false,
  50300,
  "Calatayud",
  "Zaragoza"
)

const mailMaria = new Mail(
  "personal",
  "aparicioMaria@gmail.com"
)

const telefonoFijoMaria = new Telefono(
  "fijo",
  976237898
)

const telefonoMovilMaria = new Telefono(
  "movil",
  672890979
)

const datosMaria = new Persona(
  'María',
  'Aparicio Fernández',
  48,
  '29367987N',
  new Date(1973, 5, 11),
  'naranja',
  'mujer',
  [primeraResidenciaMaria, segundaResidenciaMaria],
  [mailMaria],
  [telefonoFijoMaria, telefonoMovilMaria],
  "Trabaja en la localidad de la segunda residencia"
);

const primeraResidenciaFederico = new Direccion(
  "Calle Hierbabuena",
  2,
  1,
  "A",
  42190,
  "Las Camaretas",
  "Soria"
)

const segundaResidenciaFederico = new Direccion(
  "Calle Merineros",
  23,
  1,
  "A",
  42001,
  "Soria",
  "Soria"
)

const mailPersonalFederico = new Mail(
  "personal",
  "elfededesoria@hotmail.com"
)

const mailTrabajoFederico = new Mail(
  "personal",
  "federico@gonzalezasociados.com"
)

const telefonoFijoFederico = new Telefono(
  "fijo",
  9548978945
)

const telefonoMovilFedericoPersonal = new Telefono(
  "movil",
  667262628
)

const telefonoMovilFedericoTrabajo = new Telefono(
  "movil",
  676822411
)

const datosFederico = new Persona(
  'Federico',
  'González Hernán',
  35,
  '19072912T',
  new Date(1986, 9, 20),
  'negro',
  'hombre',
  [primeraResidenciaFederico, segundaResidenciaFederico],
  [mailPersonalFederico, mailTrabajoFederico],
  [telefonoFijoFederico, telefonoMovilFedericoPersonal, telefonoMovilFedericoTrabajo],
  "Tiene la segunda residencia alquilada todo el año"
);

const primeraResidenciaIsmael = new Direccion(
  "Calle Juan Ramón Jiménez",
  19,
  9,
  "C",
  41011,
  "Sevilla",
  "Sevilla"
)

const segundaResidenciaIsmael = new Direccion(
  "Calle Santiago Rusiñol",
  8,
  1,
  "A",
  11520,
  "Rota",
  "Cádiz"
)

const mailPersonalIsmael = new Mail(
  "personal",
  "ismaeldelospuentes@gmail.com"
)

const mailTrabajoIsmael = new Mail(
  "trabajo",
  "ipuentes@ttds.es"
)

const telefonoFijoIsmael = new Telefono(
  "fijo",
  9556783214
)

const telefonoMovilIsmael = new Telefono(
  "movil",
  600996521
)

const datosIsmael = new Persona(
  'Ismael',
  'De Los Puentes Velasco',
  62,
  '02653789P',
  new Date(1959, 0, 9),
  'azul',
  'hombre',
  [primeraResidenciaIsmael, segundaResidenciaIsmael],
  [mailPersonalIsmael, mailTrabajoIsmael],
  [telefonoFijoIsmael, telefonoMovilIsmael],
  "La segunda residencia es de alquiler"
);

console.log("Contactos antes del cambio:");
console.log(datosMaria);
console.log(datosFederico);
console.log(datosIsmael);

const agenda: Array<Persona> = new Array(datosMaria, datosFederico, datosIsmael);

const dniABuscar: string = "29367987N";

const personaAEditar: Persona = agenda.find(persona => persona.dni === dniABuscar) as Persona;

const nuevaDireccion = new Direccion(
  "Calle Dr. Gómez Ferrer",
  35,
  1,
  false,
  444000,
  "Mora de Rubielos",
  "Teruel"
)

const nuevoMail = new Mail(
  "trabajo",
  "turismodecalatayud@calatayud.org"
)

const nuevoTelefono = new Telefono(
  "fijo",
  976886322
)

personaAEditar.agregarNuevaDireccion(nuevaDireccion);
personaAEditar.agregarNuevoMail(nuevoMail);
personaAEditar.agregarNuevoTelefono(nuevoTelefono);

console.log("Contactos después del cambio:");
console.log(datosMaria);
console.log(datosFederico);
console.log(datosIsmael);
