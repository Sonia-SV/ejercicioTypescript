System.register([], function (exports_1, context_1) {
    "use strict";
    var Telefono;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Telefono = (function () {
                function Telefono(tipo, numero) {
                    this._tipo = tipo;
                    this._numero = numero;
                }
                Object.defineProperty(Telefono.prototype, "numero", {
                    get: function () {
                        return this._numero;
                    },
                    set: function (numero) {
                        this._numero = numero;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Telefono.prototype, "tipo", {
                    get: function () {
                        return this._tipo;
                    },
                    set: function (tipo) {
                        this._tipo = tipo;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Telefono;
            }());
            exports_1("Telefono", Telefono);
        }
    };
});
//# sourceMappingURL=telefono.js.map