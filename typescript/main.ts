import { Correo } from './correo'
import { Direccion } from './direccion'
import { Telefono } from './telefono'
import { Persona } from './persona'


/* Creamos una variable donde vamos a guardas las nuevas personas */
let agenda = []

let persona1 = new Persona(
    'Celia',
    'Puerta',
    56,
    "09913690T",
    new Date(1995, 6, 12),
    'verde',
    'mujer',
    [new Direccion("Plaça Omar", 24, 6, "IZQ", 32009, "Las Pardo", "Bilzen"), new Direccion("Camiño Olivia", 8, 6, "D", 99369, "Valencia del Pozo", "Bilzen")],
    [new Correo("trabajo", "correocelia@hotmail.com"), new Correo("privado", "correocelia2@hotmail.com")],
    [new Telefono("movil", 654987321), new Telefono("movil", 654321987)],
    [5, 6])

let persona2 = new Persona(
    'Andrea',
    'Rosales',
    32,
    "01036050S",
    new Date(1992, 3, 10),
    'verde',
    'mujer',
    [new Direccion("Ruela Carlos", 95, 6, "IZQ", 54071, "O Menéndez Baja", "Bilzen")],
    [new Correo("trabajo", "correoandrea@hotmail.com"), new Correo("privado", "correoandrea2@hotmail.com")],
    [new Telefono("movil", 321987654), new Telefono("movil", 654321987)],
    [5, 6])

let persona3 = new Persona(
    'Aitor',
    'Cuesta',
    21,
    "78463590X",
    new Date(1995, 4, 15),
    'verde',
    'hombre',
    [new Direccion("Paseo Pol", 44, 89, "F", 73155, "La Carrasquillo Alta", "Bilzen")],
    [new Correo("trabajo", "correoaitor@hotmail.com"), new Correo("privado", "correoaitor1@hotmail.com")],
    [new Telefono("movil", 321987654), new Telefono("movil", 654321987)],
    [5, 6])



/* Añadimos a estas personas a la agenda */
agenda.push(persona1, persona2, persona3)

/* Creamos los nuevos objetos que queremos añadir a las personas indicadas */
let new_direccion = new Direccion("Avinguda Lidia", 20, 63, "F", 64067, "Los Granado del Bages", "Bilzen")
let new_telefono = new Telefono("fijo", 987654321)
let new_correo = new Correo("tercer correo", "nuevocorreo@hotmail.com")

/* Creamos la función para buscar la persona a través del dni y le añadimos los parametros necesarios para añadir una nueva direccion, telefono y correo. */
function buscarDniCambiar(agenda: Array<Persona>, dni: string, newDirec: Direccion, newTel: Telefono, newCorreo: Correo): Persona {

    const persona_encontrada = agenda.filter(contacto => contacto.getdni() === dni)

    persona_encontrada[0].agregarDireccion(newDirec)
    persona_encontrada[0].agregarTelefono(newTel)
    persona_encontrada[0].agregarCorreo(newCorreo)
    console.log(persona_encontrada[0].mostrarContacto())
    return persona_encontrada[0]
}


buscarDniCambiar(agenda, "01036050S", new_direccion, new_telefono, new_correo)

