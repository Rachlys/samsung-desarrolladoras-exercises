"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(_tipo, _numero) {
        this._tipo = _tipo;
        this._numero = _numero;
    }
    Telefono.prototype.setTipo = function (tipo) {
        this._tipo = tipo;
    };
    Telefono.prototype.getTipo = function () {
        return this._tipo;
    };
    Telefono.prototype.setNumero = function (numero) {
        this._numero = numero;
    };
    Telefono.prototype.getNumero = function () {
        return this._numero;
    };
    Telefono.prototype.getTelefono = function () {
        var telefono = ' Mi numero es ' + this.getNumero() + ' y es un ' + this.getTipo() + ' ';
        return telefono;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
