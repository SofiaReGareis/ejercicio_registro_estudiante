//Funcion que imprime los datos de los alumnos cargados
const mostrarListaEstudiantes = (estudiantes) => {
  console.log("Lista de estudiantes registrados:");
  estudiantes.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
  });
};

module.exports = { mostrarListaEstudiantes };
