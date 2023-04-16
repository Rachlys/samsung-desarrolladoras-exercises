"use strict";
exports.__esModule = true;
var correo_1 = require("./correo");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var persona_1 = require("./persona");
/* Creamos una variable donde vamos a guardas las nuevas personas */
var agenda = [];
var persona1 = new persona_1.Persona('Celia', 'Puerta', 56, "09913690T", new Date(1995, 6, 12), 'verde', 'mujer', [new direccion_1.Direccion("Plaça Omar", 24, 6, "IZQ", 32009, "Las Pardo", "Bilzen"), new direccion_1.Direccion("Camiño Olivia", 8, 6, "D", 99369, "Valencia del Pozo", "Bilzen")], [new correo_1.Correo("trabajo", "correocelia@hotmail.com"), new correo_1.Correo("privado", "correocelia2@hotmail.com")], [new telefono_1.Telefono("movil", 654987321), new telefono_1.Telefono("movil", 654321987)], [5, 6]);
var persona2 = new persona_1.Persona('Andrea', 'Rosales', 32, "01036050S", new Date(1992, 3, 10), 'verde', 'mujer', [new direccion_1.Direccion("Ruela Carlos", 95, 6, "IZQ", 54071, "O Menéndez Baja", "Bilzen")], [new correo_1.Correo("trabajo", "correoandrea@hotmail.com"), new correo_1.Correo("privado", "correoandrea2@hotmail.com")], [new telefono_1.Telefono("movil", 321987654), new telefono_1.Telefono("movil", 654321987)], [5, 6]);
var persona3 = new persona_1.Persona('Aitor', 'Cuesta', 21, "78463590X", new Date(1995, 4, 15), 'verde', 'hombre', [new direccion_1.Direccion("Paseo Pol", 44, 89, "F", 73155, "La Carrasquillo Alta", "Bilzen")], [new correo_1.Correo("trabajo", "correoaitor@hotmail.com"), new correo_1.Correo("privado", "correoaitor1@hotmail.com")], [new telefono_1.Telefono("movil", 321987654), new telefono_1.Telefono("movil", 654321987)], [5, 6]);
/* Añadimos a estas personas a la agenda */
agenda.push(persona1, persona2, persona3);
/* Creamos los nuevos objetos que queremos añadir a las personas indicadas */
var new_direccion = new direccion_1.Direccion("Avinguda Lidia", 20, 63, "F", 64067, "Los Granado del Bages", "Bilzen");
var new_telefono = new telefono_1.Telefono("casa", 987654321);
var new_correo = new correo_1.Correo("tercer correo", "nuevocorreo@hotmail.com");
/* Creamos la función para buscar la persona a través del dni y le añadimos los parametros necesarios para añadir una nueva direccion, telefono y correo. */
function buscarDniCambiar(agenda, dni, newDirec, newTel, newCorreo) {
    var persona_encontrada = agenda.filter(function (contacto) { return contacto.getdni() === dni; });
    persona_encontrada[0].agregarDireccion(newDirec);
    persona_encontrada[0].agregarTelefono(newTel);
    persona_encontrada[0].agregarCorreo(newCorreo);
    console.log(persona_encontrada[0].mostrarContacto());
    return persona_encontrada[0];
}
buscarDniCambiar(agenda, "01036050S", new_direccion, new_telefono, new_correo);
