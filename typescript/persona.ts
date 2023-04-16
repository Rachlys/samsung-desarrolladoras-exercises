
import { Direccion } from './direccion'
import { Telefono  } from './telefono';
import { Correo } from './correo'

export class Persona{

    private _nombre : string;
    private _apellidos : string;
    private _edad : number;
    private _dni : string;
    private _cumpleanos : Date;
    private _colorfav : string;
    private _sexo : string;
    private _direcciones : Array<Direccion>;
    private _correos : Array<Correo>;
    private _telefonos : Array<Telefono>;
    private _notas : Array<number>

    constructor( nombre : string , 
                apellidos : string, 
                edad : number, 
                dni : string, 
                cumpleanos : Date, 
                colorFav : string, 
                sexo : string,
                direcciones : Array<Direccion>,
                correos :  Array<Correo>,
                telefonos : Array<Telefono>,
                notas : Array<number>
    ){
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
                this._notas = notas
    }

    public setnombre(nombre : string){
        this._nombre = nombre
    }

    public getNombre() : string{
        return this._nombre
    }

    public setapellidos( apellidos : string){
        this._apellidos = apellidos
    }

    public getapellidos() : string{
        return this._apellidos
    }

    public setedad( edad : number){
        this._edad = edad
    }

    public getedad() : number{
        return this._edad
    }

    public setdni( dni : string){
        this._dni = dni
    }

    public getdni() : string{
        return this._dni
    }
    
    public setcumpleanos( cumpleanos : Date){
        this._cumpleanos = cumpleanos
    }

    public getcumpleanos() : Date{
        return this._cumpleanos
    }

    public setcolorfav( colorfav : string){
        this._colorfav = colorfav
    }

    public getcolorfav() : string{
        return this._colorfav
    }

    public setsexo( sexo : string){
        this._sexo = sexo
    }

    public getsexo() : string{
        return this._sexo
    }

    public setdirecciones( direcciones : Array<Direccion>){
        this._direcciones = direcciones
    }

    public getdirecciones() : Array<Direccion>{
        return this._direcciones
    }

    public setcorreos( correos : Array<Correo>){
        this._correos = correos
    }

    public getcorreos() : Array<Correo>{
        return this._correos
    }

    public settelefonos( telefonos : Array<Telefono>){
        this._telefonos = telefonos
    }

    public gettelefonos() : Array<Telefono>{
        return this._telefonos
    }

    public setnotas( notas : Array<number>){
        this._notas = notas
    }

    public getnotas() : Array<number>{
        return this._notas
    }

    /* Definimos los metodos para añadir otras direcciones, telefonos y correos */
    agregarDireccion(direccion : Direccion) : void{
        this._direcciones.push(direccion)
    }

    agregarTelefono(telefono : Telefono) : void{
        this._telefonos.push( telefono)
    }

    agregarCorreo(correo : Correo):void{
        this._correos.push(correo)
    }


    mostrarContacto() : string{

        let info = `
            Nombre : ${this.getNombre()}
            Apellidos : ${this.getapellidos()}
            Edad : ${this.getedad()}
            Dni : ${this.getdni()}
            Sexo : ${this.getsexo()}
            Cumpleaños : ${this.getcumpleanos().getDate()}/${this.getcumpleanos().getMonth()}/${this.getcumpleanos().getFullYear()}
            Color favorito : ${this.getcolorfav()}
            Direccion : ${this.getdirecciones().map((direccion)=>direccion.getDireccion())}
            Correos : ${this.getcorreos().map(( correo)=> correo.getCorreo())}
            Telefonos : ${this.gettelefonos().map((telefono)=>telefono.getTelefono())}
            Notas : ${this.getnotas().map((nota)=> nota)}

        `
        return info
    }

}



