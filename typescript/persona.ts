
import { Direccion } from './direccion'

class Persona{
    nombre : string;
    apellidos : string;
    edad : number;
    dni : string;
    cumpleaños : Date;
    colorFavorito : string;
    sexo : string;
    direcciones : Direccion[];
    // mails : Mail[];
    // telefono : Telefono[];
    notas : number;

    constructor( nombre : string, apellidos : string, edad : number, dni : string, cumpleaños : Date, 
        colorFavorito : string, sexo : string, direcciones : Direccion[], mails : Mail[],  telefono : Telefono[], notas : number ){

            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.dni = dni;
            this.cumpleaños = cumpleaños;
            this.colorFavorito = colorFavorito;
            this.sexo = sexo;
            this.direcciones = direcciones;
            this.mails = mails;
            this.telefono = telefono;
            this.notas = notas;
        }


    
}