"use strict";
exports.__esModule = true;
exports.Correo = void 0;
var Correo = /** @class */ (function () {
    function Correo(_tipo, _direccion) {
        this._tipo = _tipo;
        this._direccion = _direccion;
    }
    Correo.prototype.setTipo = function (tipo) {
        this._tipo = tipo;
    };
    Correo.prototype.getTipo = function () {
        return this._tipo;
    };
    Correo.prototype.setDireccion = function (direccion) {
        this._direccion = direccion;
    };
    Correo.prototype.getDireccion = function () {
        return this._direccion;
    };
    Correo.prototype.getCorreo = function () {
        var correo = ' Mi correo es ' + this.getTipo() + ' y es ' + this.getDireccion() + ' ';
        return correo;
    };
    return Correo;
}());
exports.Correo = Correo;
