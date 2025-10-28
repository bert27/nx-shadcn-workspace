## Monorepo React usando Nx

🤟 Este monorepo está construido con React y Nx, proporcionando una estructura modular y escalable. Utiliza una **aplicación shell** que actúa como contenedor principal, permitiendo integrar múltiples aplicaciones como `appSecondary`. Todas las aplicaciones dentro del shell pueden aprovechar componentes y utilidades compartidas ubicadas en la biblioteca `shared`, promoviendo la reutilización de código y un mantenimiento más sencillo.
iconem🤯.

[Aprende más sobre esta configuración y sus capacidades](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) o ejecuta `npx nx graph` para explorar visualmente lo que se ha creado. ¡Ahora, pongámonos al día!

## Completa tu configuración de CI

[Haz clic aquí para completar la configuración de tu espacio de trabajo.](https://cloud.nx.app/connect/TcDYVZRzuT)

---

## Ejecutar tareas

Para ejecutar el servidor de desarrollo de tu aplicación, usa:

```sh
npx nx serve shell
```

Para crear un paquete de producción:

```sh
npx nx build shell
```

Para ver todos los objetivos disponibles para un proyecto, ejecuta:

```sh
npx nx show project shell
```

Estos objetivos se [infieren automáticamente](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) o se definen en los archivos `project.json` o `package.json`.

[Más sobre la ejecución de tareas en la documentación »](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Agregar nuevos proyectos

Si bien podrías agregar nuevos proyectos a tu espacio de trabajo manualmente, es recomendable aprovechar los [plugins de Nx](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) y su función de [generación de código](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects).

Usa el generador del plugin para crear nuevos proyectos.

Para generar una nueva aplicación, usa:

```sh
npx nx g @nx/react:app demo
```

Para generar una nueva biblioteca, usa:

```sh
npx nx g @nx/react:lib mylib
```

## Acerca de este Monorepo

Este monorepo está estructurado para maximizar la eficiencia y el mantenimiento al centralizar múltiples aplicaciones y recursos compartidos. A continuación se presenta una vista general de sus componentes:

## Estructura del Monorepo

**Shell:** La aplicación principal que actúa como contenedor para varias aplicaciones independientes. Gestiona el diseño y el enrutamiento, proporcionando una interfaz unificada para las aplicaciones integradas.
**Apps:** Varias aplicaciones (por ejemplo, `appSecondary`) que funcionan de forma independiente dentro del shell. Cada aplicación puede desarrollarse, probarse y desplegarse por separado, permitiendo flujos de trabajo modulares.
**Shared:** Una biblioteca de componentes, utilidades y estilos compartidos ubicada en la carpeta `shared`. Estos recursos pueden ser utilizados por cualquier aplicación dentro del monorepo, promoviendo la reutilización de código y reduciendo la duplicación.

## Características Clave

- **Arquitectura modular:** Al separar aplicaciones y recursos compartidos, el monorepo mantiene un código limpio y organizado, facilitando la gestión y la escalabilidad.
- **Reutilización eficiente del código:** Las bibliotecas compartidas permiten el uso de componentes y utilidades comunes entre diferentes aplicaciones, garantizando consistencia y reduciendo el esfuerzo de implementación.
- **Desarrollo escalable:** La estructura admite la adición de nuevas aplicaciones y bibliotecas con un esfuerzo mínimo, asegurando un crecimiento fluido a medida que el proyecto evoluciona.
- **Herramientas consistentes:** Nx proporciona potentes herramientas para la ejecución de tareas, generación de código y gestión de dependencias, mejorando la productividad del desarrollador y manteniendo la calidad del proyecto.

Este tipo de configuración es ideal para proyectos grandes y equipos multifuncionales, permitiendo prácticas de desarrollo ágiles y fomentando la colaboración mediante una base de código bien organizada.

Puedes usar `npx nx list` para obtener una lista de los plugins instalados. Luego, ejecuta `npx nx list <plugin-name>` para conocer más capacidades específicas de un plugin en particular.
Alternativamente, [instala Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) para explorar plugins y generadores directamente en tu IDE.

[Más sobre los plugins de Nx »](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Explora el registro de plugins »](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Aprende más sobre Nx en CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Instalar Nx Console

Nx Console es una extensión para editores que mejora tu experiencia de desarrollo. Te permite ejecutar tareas, generar código y mejora la autocompletación en tu IDE. Está disponible para VSCode e IntelliJ.

[Instalar Nx Console »](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

## Enlaces útiles

Aprende más:

- [Más sobre esta configuración del espacio de trabajo](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Nx en entornos CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Publicación de paquetes con Nx Release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Qué son los plugins de Nx](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

Únete a la comunidad de Nx:

- [Discord](https://go.nx.dev/community)
- [Síguenos en X](https://twitter.com/nxdevtools) o [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Nuestro canal de YouTube](https://www.youtube.com/@nxdevtools)
- [Nuestro blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
