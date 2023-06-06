'use strict';

/* Crear un objeto con las propiedades que vamos a usar */
const fields = {
  nombre: {
    /* Seleccionamos el elemento html */
    node: document.querySelector('#nombre'),
    /* Creamos la función validate para que nos devuelva true/false */
    validate: (value) => value.length >= 2,
    /* Seleccionamos el elemento "label" */
    input_container : document.querySelector('.nombre'),
    /* Mensaje del error del input */
    error : 'El nombre tiene que tener más de dos letras',
    /* Contenedor del error del input */
    error_node : document.querySelector('.error_name'),
  },
  primer_apellido: {
    node: document.querySelector('#primer-apellido'),
    validate: (value) => value.length >= 2,
    input_container : document.querySelector('.primer_apellido'),
    error : 'El primer apellido tiene que tener más de dos letras',
    error_node : document.querySelector('.error_primer_apellido'),

  },
  segundo_apellido: {
    node: document.querySelector('#segundo-apellido'),
    validate: (value) => value.length >= 2,
    input_container : document.querySelector('.segundo_apellido'),
    error: 'El segundo apellido tiene que tener más de dos letras',
    error_node : document.querySelector('.error_segundo_apellido'),

  },
  login: {
    node: document.querySelector('#login'),
    validate: (value) => value.length >= 3 && value.length <= 8,
    input_container : document.querySelector('.login'),
    error: 'El nickname tiene que tener más de 3 letras y menos o igual a 8 letras',
    error_node : document.querySelector('.error_login'),

  },
  email: {
    node: document.querySelector('#email'),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    input_container : document.querySelector('.email'),
    error : 'Tienes que ingresar un email valido',
    error_node : document.querySelector('.error_email'),

  },
  password: {
    node: document.querySelector('#password'),
    validate: (value) => value.length >= 8,
    input_container : document.querySelector('.password'),
    error: 'Tiene que tener minimo 8 letras',
    error_node : document.querySelector('.error_password'),

  },
};

/* Seleccionamos el botón */
const nodo_btn = document.querySelector('.button');

/* Mediante el objeto creamos el addEventListener para cada elemento del objeto */
Object.values(fields).forEach((field) => {
  field.node.addEventListener('keyup', () => {

    /* Seleccionamos el valor del input */
    const value = field.node.value;

    /* Recogemos el valor true/false de cada función/propiedad */
    const isValid = field.validate(value);
    
    /* Añadimos mensaje de error */
    addError( field.error_node , field.error , isValid)
    
    /* Hacemos una desestructuración y dependiendo si es true/false será un orden o el otro */
    const [correctClass, wrongClass] = isValid ? ['correct_label', 'wrong_label'] : ['wrong_label', 'correct_label'];
    
    /* Pasamos los parametros del nodo y las clases */
    validateStyle(field.input_container, wrongClass, correctClass);

    /* Creamos una nueva propiedad de cada elemento y le damos el valor de isValid */
    field.isValid = isValid;

    buttonValidate();
  });
});

/* Función para validar constantemente si todos los inputs son correctos o no */
function buttonValidate() {

  /* Con every evaluamos si alguno de los inputs es false pero si todos son true, nos devolverá true. */
  const isValid = Object.values(fields).every((field) => field.isValid);

  /* Dependiendo si es true o false el bóton dinamicamente agregará o eliminara la clase 'active' */
  if (isValid) {
    nodo_btn.classList.add('active');
  } else {
    nodo_btn.classList.remove('active');
  }
}
/* Función para eliminar o agregar a cada input la clase wrong o correct */
function validateStyle(node, removeClass, addClass) {
  node.classList.remove(removeClass);
  node.classList.add(addClass);
}

/* Función para añadir el mensaje de error en cada span */
function addError( error_node , error_message, isValid){
  console.log(error_message)
  if(isValid){
    error_node.innerHTML = ''
  }else{
    error_node.innerHTML = error_message
    
  }
}