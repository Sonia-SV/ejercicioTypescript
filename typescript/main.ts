import { Persona } from './persona';
import { Direccion } from './direccion';
import { Mail } from './mail';
import { Telefono } from './telefono';

const direccionMariaCiudad = new Direccion(
  "Calle Ángel Ganivet",
  34,
  4,
  "B",
  50008,
  "Zaragoza",
  "Zaragoza"
)

const direccionMariaPueblo = new Direccion(
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
  [direccionMariaCiudad, direccionMariaPueblo],
  [mailMaria],
  [telefonoFijoMaria, telefonoMovilMaria],
  "Pasa el verano en el pueblo y el invierno en la ciudad"
);

console.log(datosMaria);
