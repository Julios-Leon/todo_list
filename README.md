# Todo List App

## Proyecto de aprendizaje con React y TypeScript

Este es un proyecto simple de una lista de tareas (Todo List) que desarrollé para aprender y practicar React junto con TypeScript. Aunque es una aplicación básica, me ha permitido familiarizarme con conceptos fundamentales y ha sido muy divertido de construir.

## Tecnologías utilizadas

- React 19
- TypeScript
- Tailwind CSS
- Vite

## Características

- Añadir tareas con título y descripción
- Marcar tareas como completadas
- Eliminar tareas
- Interfaz responsiva con Tailwind CSS
- Vista de tarjetas para cada tarea

## Aprendizaje

Este proyecto me ha permitido dominar mejor el hook `useState` de React, que es fundamental para manejar el estado de la aplicación. Específicamente, he aprendido a:

- Crear y actualizar estados con arrays de objetos
- Modificar elementos específicos del estado sin mutar el estado original
- Pasar funciones como props entre componentes
- Implementar patrones para añadir/eliminar/actualizar items en una lista

```tsx
// Ejemplo de cómo utilicé useState para gestionar las tareas
const [tasks, setTasks] = useState<Task[]>([])

function completeTask(id: number) {
  const updatedTasks = tasks.map((task) => {
    if(task.id === id) {
      return {...task, status: "Done"}
    } else {
      return task
    }
  })
  setTasks(updatedTasks)
}
```

## Ejecución del proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

Aunque es una aplicación sencilla, me ha servido como excelente punto de partida para entender mejor cómo React maneja el estado y cómo TypeScript proporciona tipado estático para hacer el código más robusto y mantenible.

¡Me lo he pasado muy bien construyendo este proyecto y estoy emocionado por seguir aprendiendo y desarrollando aplicaciones más complejas!