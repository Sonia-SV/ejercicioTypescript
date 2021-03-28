System.register([], function (exports_1, context_1) {
    "use strict";
    var Mail;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Mail = (function () {
                function Mail(tipo, direccion) {
                    this._tipo = tipo;
                    this._direccion = direccion;
                }
                Object.defineProperty(Mail.prototype, "direccion", {
                    get: function () {
                        return this._direccion;
                    },
                    set: function (direccion) {
                        this._direccion = direccion;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Mail.prototype, "tipo", {
                    get: function () {
                        return this._tipo;
                    },
                    set: function (tipo) {
                        this._tipo = tipo;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Mail;
            }());
            exports_1("Mail", Mail);
        }
    };
});
//# sourceMappingURL=mail.js.map