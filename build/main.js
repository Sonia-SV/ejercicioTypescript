System.register(["./persona", "./direccion", "./mail", "./telefono"], function (exports_1, context_1) {
    "use strict";
    var persona_1, direccion_1, mail_1, telefono_1, primeraResidenciaMaria, segundaResidenciaMaria, mailMaria, telefonoFijoMaria, telefonoMovilMaria, datosMaria, primeraResidenciaFederico, segundaResidenciaFederico, mailPersonalFederico, mailTrabajoFederico, telefonoFijoFederico, telefonoMovilFedericoPersonal, telefonoMovilFedericoTrabajo, datosFederico, primeraResidenciaIsmael, segundaResidenciaIsmael, mailPersonalIsmael, mailTrabajoIsmael, telefonoFijoIsmael, telefonoMovilIsmael, datosIsmael, agenda, dniABuscar, personaAEditar, nuevaDireccion, nuevoMail, nuevoTelefono;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (persona_1_1) {
                persona_1 = persona_1_1;
            },
            function (direccion_1_1) {
                direccion_1 = direccion_1_1;
            },
            function (mail_1_1) {
                mail_1 = mail_1_1;
            },
            function (telefono_1_1) {
                telefono_1 = telefono_1_1;
            }
        ],
        execute: function () {
            primeraResidenciaMaria = new direccion_1.Direccion("Calle Ángel Ganivet", 34, 4, "B", 50008, "Zaragoza", "Zaragoza");
            segundaResidenciaMaria = new direccion_1.Direccion("Calle Paciencia", 4, false, false, 50300, "Calatayud", "Zaragoza");
            mailMaria = new mail_1.Mail("personal", "aparicioMaria@gmail.com");
            telefonoFijoMaria = new telefono_1.Telefono("fijo", 976237898);
            telefonoMovilMaria = new telefono_1.Telefono("movil", 672890979);
            datosMaria = new persona_1.Persona('María', 'Aparicio Fernández', 48, '29367987N', new Date(1973, 5, 11), 'naranja', 'mujer', [primeraResidenciaMaria, segundaResidenciaMaria], [mailMaria], [telefonoFijoMaria, telefonoMovilMaria], "Trabaja en la localidad de la segunda residencia");
            console.log(datosMaria);
            primeraResidenciaFederico = new direccion_1.Direccion("Calle Hierbabuena", 2, 1, "A", 42190, "Las Camaretas", "Soria");
            segundaResidenciaFederico = new direccion_1.Direccion("Calle Merineros", 23, 1, "A", 42001, "Soria", "Soria");
            mailPersonalFederico = new mail_1.Mail("personal", "elfededesoria@hotmail.com");
            mailTrabajoFederico = new mail_1.Mail("personal", "federico@gonzalezasociados.com");
            telefonoFijoFederico = new telefono_1.Telefono("fijo", 9548978945);
            telefonoMovilFedericoPersonal = new telefono_1.Telefono("movil", 667262628);
            telefonoMovilFedericoTrabajo = new telefono_1.Telefono("movil", 676822411);
            datosFederico = new persona_1.Persona('Federico', 'González Hernán', 35, '19072912T', new Date(1986, 9, 20), 'negro', 'hombre', [primeraResidenciaFederico, segundaResidenciaFederico], [mailPersonalFederico, mailTrabajoFederico], [telefonoFijoFederico, telefonoMovilFedericoPersonal, telefonoMovilFedericoTrabajo], "Tiene la segunda residencia alquilada todo el año");
            console.log(datosFederico);
            primeraResidenciaIsmael = new direccion_1.Direccion("Calle Juan Ramón Jiménez", 19, 9, "C", 41011, "Sevilla", "Sevilla");
            segundaResidenciaIsmael = new direccion_1.Direccion("Calle Santiago Rusiñol", 8, 1, "A", 11520, "Rota", "Cádiz");
            mailPersonalIsmael = new mail_1.Mail("personal", "ismaeldelospuentes@gmail.com");
            mailTrabajoIsmael = new mail_1.Mail("trabajo", "ipuentes@ttds.es");
            telefonoFijoIsmael = new telefono_1.Telefono("fijo", 9556783214);
            telefonoMovilIsmael = new telefono_1.Telefono("movil", 600996521);
            datosIsmael = new persona_1.Persona('Ismael', 'De Los Puentes Velasco', 62, '02653789P', new Date(1959, 0, 9), 'azul', 'hombre', [primeraResidenciaIsmael, segundaResidenciaIsmael], [mailPersonalIsmael, mailTrabajoIsmael], [telefonoFijoIsmael, telefonoMovilIsmael], "La segunda residencia es de alquiler");
            console.log(datosIsmael);
            agenda = new Array(datosMaria, datosFederico, datosIsmael);
            dniABuscar = "29367987N";
            personaAEditar = agenda.find(persona => persona.dni === dniABuscar);
            nuevaDireccion = new direccion_1.Direccion("Calle Dr. Gómez Ferrer", 35, 1, false, 444000, "Mora de Rubielos", "Teruel");
            nuevoMail = new mail_1.Mail("trabajo", "turismodecalatayud@calatayud.org");
            nuevoTelefono = new telefono_1.Telefono("fijo", 976886322);
            personaAEditar.agregarNuevaDireccion(nuevaDireccion);
            personaAEditar.agregarNuevoMail(nuevoMail);
            personaAEditar.agregarNuevoTelefono(nuevoTelefono);
            console.log(datosMaria);
        }
    };
});
//# sourceMappingURL=main.js.map