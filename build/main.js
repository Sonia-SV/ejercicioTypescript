System.register(["./persona", "./direccion", "./mail", "./telefono"], function (exports_1, context_1) {
    "use strict";
    var persona_1, direccion_1, mail_1, telefono_1, direccionMariaCiudad, direccionMariaPueblo, mailMaria, telefonoFijoMaria, telefonoMovilMaria, datosMaria;
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
            direccionMariaCiudad = new direccion_1.Direccion("Calle Ángel Ganivet", 34, 4, "B", 50008, "Zaragoza", "Zaragoza");
            direccionMariaPueblo = new direccion_1.Direccion("Calle Paciencia", 4, false, false, 50300, "Calatayud", "Zaragoza");
            mailMaria = new mail_1.Mail("personal", "aparicioMaria@gmail.com");
            telefonoFijoMaria = new telefono_1.Telefono("fijo", 976237898);
            telefonoMovilMaria = new telefono_1.Telefono("movil", 672890979);
            datosMaria = new persona_1.Persona('María', 'Aparicio Fernández', 48, '29367987N', new Date(1973, 5, 11), 'naranja', 'mujer', [direccionMariaCiudad, direccionMariaPueblo], [mailMaria], [telefonoFijoMaria, telefonoMovilMaria], "Pasa el verano en el pueblo y el invierno en la ciudad");
            console.log(datosMaria);
        }
    };
});
//# sourceMappingURL=main.js.map