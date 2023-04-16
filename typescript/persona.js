"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanos, colorFav, sexo, direcciones, correos, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos,
            this._edad = edad,
            this._dni = dni,
            this._cumpleanos = cumpleanos,
            this._colorfav = colorFav,
            this._sexo = sexo,
            this._direcciones = direcciones,
            this._correos = correos,
            this._telefonos = telefonos,
            this._notas = notas;
    }
    Persona.prototype.setnombre = function (nombre) {
        this._nombre = nombre;
    };
    Persona.prototype.getNombre = function () {
        return this._nombre;
    };
    Persona.prototype.setapellidos = function (apellidos) {
        this._apellidos = apellidos;
    };
    Persona.prototype.getapellidos = function () {
        return this._apellidos;
    };
    Persona.prototype.setedad = function (edad) {
        this._edad = edad;
    };
    Persona.prototype.getedad = function () {
        return this._edad;
    };
    Persona.prototype.setdni = function (dni) {
        this._dni = dni;
    };
    Persona.prototype.getdni = function () {
        return this._dni;
    };
    Persona.prototype.setcumpleanos = function (cumpleanos) {
        this._cumpleanos = cumpleanos;
    };
    Persona.prototype.getcumpleanos = function () {
        return this._cumpleanos;
    };
    Persona.prototype.setcolorfav = function (colorfav) {
        this._colorfav = colorfav;
    };
    Persona.prototype.getcolorfav = function () {
        return this._colorfav;
    };
    Persona.prototype.setsexo = function (sexo) {
        this._sexo = sexo;
    };
    Persona.prototype.getsexo = function () {
        return this._sexo;
    };
    Persona.prototype.setdirecciones = function (direcciones) {
        this._direcciones = direcciones;
    };
    Persona.prototype.getdirecciones = function () {
        return this._direcciones;
    };
    Persona.prototype.setcorreos = function (correos) {
        this._correos = correos;
    };
    Persona.prototype.getcorreos = function () {
        return this._correos;
    };
    Persona.prototype.settelefonos = function (telefonos) {
        this._telefonos = telefonos;
    };
    Persona.prototype.gettelefonos = function () {
        return this._telefonos;
    };
    Persona.prototype.setnotas = function (notas) {
        this._notas = notas;
    };
    Persona.prototype.getnotas = function () {
        return this._notas;
    };
    Persona.prototype.agregarDireccion = function (direccion) {
        this._direcciones.push(direccion);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this._telefonos.push(telefono);
    };
    Persona.prototype.agregarCorreo = function (correo) {
        this._correos.push(correo);
    };
    Persona.prototype.mostrarContacto = function () {
        var info = "\n            Nombre : ".concat(this.getNombre(), "\n            Apellidos : ").concat(this.getapellidos(), "\n            Edad : ").concat(this.getedad(), "\n            Dni : ").concat(this.getdni(), "\n            Sexo : ").concat(this.getsexo(), "\n            Cumplea\u00F1os : ").concat(this.getcumpleanos().getDate(), "/").concat(this.getcumpleanos().getMonth(), "/").concat(this.getcumpleanos().getFullYear(), "\n            Color favorito : ").concat(this.getcolorfav(), "\n            Direccion : ").concat(this.getdirecciones().map(function (direccion) { return direccion.getDireccion(); }), "\n            Correos : ").concat(this.getcorreos().map(function (correo) { return correo.getCorreo(); }), "\n            Telefonos : ").concat(this.gettelefonos().map(function (telefono) { return telefono.getTelefono(); }), "\n            Notas : ").concat(this.getnotas().map(function (nota) { return nota; }), "\n\n        ");
        return info;
    };
    return Persona;
}());
exports.Persona = Persona;
