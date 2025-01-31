# MONOREPO React using Nx

🤟 This monorepo is built with **React** and **Nx**, providing a modular and scalable structure. It utilizes a **shell** application that serves as the main container, allowing you to integrate multiple applications such as `appSecondary`. All applications within the shell can leverage shared components and utilities located in the `shared` library, promoting code reuse and maintainability.
iconem🤯.

[Learn more about this workspace setup and its capabilities](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/TcDYVZRzuT)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve shell
```

To create a production bundle:

```sh
npx nx build shell
```

To see all available targets to run for a project, run:

```sh
npx nx show project shell
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/react:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

## About this Monorepo

This monorepo is structured to maximize efficiency and maintainability by centralizing multiple applications and shared resources. Here's an overview of its components:

## Monorepo Structure

Shell: The primary application that acts as a container for various independent applications. It manages the layout and routing, providing a unified interface for the integrated apps.
Apps: Multiple applications (e.g., appSecondary) that operate independently within the shell. Each app can be developed, tested, and deployed separately, allowing for modular development workflows.
Shared: A library of shared components, utilities, and styles located in the shared folder. These shared resources can be utilized by any application within the monorepo, promoting code reuse and reducing duplication.

## Key Features

Modular Architecture: By separating applications and shared resources, the monorepo facilitates a clean and organized codebase, making it easier to manage and scale.
Efficient Code Reuse: Shared libraries enable developers to use common components and utilities across different applications, ensuring consistency and reducing the effort required to implement similar features.
Scalable Development: The structure supports the addition of new applications and shared libraries with minimal overhead, allowing the project to grow seamlessly as requirements evolve.
Consistent Tooling: Leveraging Nx provides powerful tools for task running, code generation, and dependency management, enhancing developer productivity and maintaining project quality.
This setup is ideal for large projects and multifunctional teams, enabling agile development practices and fostering collaboration through a well-organized codebase.

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
