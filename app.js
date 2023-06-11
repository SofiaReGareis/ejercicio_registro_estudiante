const readlineSync = require("readline-sync"); //obtener libreria de npm

//Importamos el modulo
const { mostrarListaEstudiantes } = require("./lista_estudiantes"); //./nombre del archivo donde está el modulo
//Funcion que crea el registro de los estudiantes
const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingrese la cantidad de estudiantes a registrar: "
  );
  const estudiantes = [];

  //Ciclo for que carga los estudiantes en el array
  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(
      `Ingrese el nombre del estudiante ${i}: `
    );
    const edad = readlineSync.question(`Ingrese la edad de ${nombre}: `);
    //Objeto para guardar los datos en el array
    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }
  mostrarListaEstudiantes(estudiantes); //esta funcion está creada en el archivo que modularizamos
};

//Modularizamos la funcion para que se muestren desde otro archivo. aca solo creamos la lista.
/*//Funcion que imprime los datos de los alumnos cargados
const mostrarListaEstudiantes = (estudiantes) => {
    console.log("Lista de estudiantes registrados:");
    estudiantes.forEach(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
        
    });
}*/

//Iniciar el registro de estudiantes
registrarEstudiantes();
