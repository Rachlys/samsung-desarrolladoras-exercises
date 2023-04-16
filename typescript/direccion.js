"use strict";
exports.__esModule = true;
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(_calle, _numero, _piso, _letra, _codigoPostal, _poblacion, _provincia) {
        this._calle = _calle;
        this._numero = _numero;
        this._piso = _piso;
        this._letra = _letra;
        this._codigoPostal = _codigoPostal;
        this._poblacion = _poblacion;
        this._provincia = _provincia;
    }
    Direccion.prototype.setCalle = function (calle) {
        this._calle = calle;
    };
    Direccion.prototype.getCalle = function () {
        return this._calle;
    };
    Direccion.prototype.setNumero = function (numero) {
        this._numero = numero;
    };
    Direccion.prototype.getNumero = function () {
        return this._numero;
    };
    Direccion.prototype.setPiso = function (piso) {
        this._piso = piso;
    };
    Direccion.prototype.getPiso = function () {
        return this._piso;
    };
    Direccion.prototype.setLetra = function (letra) {
        this._letra = letra;
    };
    Direccion.prototype.getLetra = function () {
        return this._letra;
    };
    Direccion.prototype.setCodigoPostal = function (codigo) {
        this._codigoPostal = codigo;
    };
    Direccion.prototype.getCodigoPostal = function () {
        return this._codigoPostal;
    };
    Direccion.prototype.setPoblacion = function (poblacion) {
        this._poblacion = poblacion;
    };
    Direccion.prototype.getPoblacion = function () {
        return this._poblacion;
    };
    Direccion.prototype.setProvincia = function (provincia) {
        this._provincia = provincia;
    };
    Direccion.prototype.getProvincia = function () {
        return this._provincia;
    };
    Direccion.prototype.getDireccion = function () {
        var direccion = ' Mi calle es ' + this.getCalle() + ' con el numero ' + this.getNumero() + ' ' + this.getPiso() + ' ' + this.getLetra() + ' con el codigo postal ' + this.getCodigoPostal() + ' en la población ' + this.getPoblacion() + ' en ' + this.getProvincia() + ' ';
        return direccion;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
