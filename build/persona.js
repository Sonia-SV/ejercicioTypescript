System.register([], function (exports_1, context_1) {
    "use strict";
    var Persona;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Persona = (function () {
                function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
                    this._nombre = nombre;
                    this._apellidos = apellidos;
                    this._edad = edad;
                    this._dni = dni;
                    this._cumpleanos = cumpleanos;
                    this._colorFavorito = colorFavorito;
                    this._sexo = sexo;
                    this._direcciones = direcciones;
                    this._mails = mails;
                    this._telefonos = telefonos;
                    this._notas = notas;
                }
                Object.defineProperty(Persona.prototype, "nombre", {
                    get: function () {
                        return this._nombre;
                    },
                    set: function (nombre) {
                        this._nombre = nombre;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "apellidos", {
                    get: function () {
                        return this._apellidos;
                    },
                    set: function (apellidos) {
                        this._apellidos = apellidos;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "edad", {
                    get: function () {
                        return this._edad;
                    },
                    set: function (edad) {
                        this._edad = edad;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "dni", {
                    get: function () {
                        return this._dni;
                    },
                    set: function (dni) {
                        this._dni = dni;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "cumpleanos", {
                    get: function () {
                        return this._cumpleanos;
                    },
                    set: function (cumpleanos) {
                        this._cumpleanos = cumpleanos;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "colorFavorito", {
                    get: function () {
                        return this._colorFavorito;
                    },
                    set: function (colorFavorito) {
                        this._colorFavorito = colorFavorito;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "sexo", {
                    get: function () {
                        return this._sexo;
                    },
                    set: function (sexo) {
                        this._sexo = sexo;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "direcciones", {
                    get: function () {
                        return this._direcciones;
                    },
                    set: function (direcciones) {
                        this._direcciones = direcciones;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "mails", {
                    get: function () {
                        return this._mails;
                    },
                    set: function (mails) {
                        this._mails = mails;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "telefonos", {
                    get: function () {
                        return this._telefonos;
                    },
                    set: function (telefonos) {
                        this._telefonos = telefonos;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Persona.prototype, "notas", {
                    get: function () {
                        return this._notas;
                    },
                    set: function (notas) {
                        this._notas = notas;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Persona;
            }());
            exports_1("Persona", Persona);
        }
    };
});
//# sourceMappingURL=persona.js.map