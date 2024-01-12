# Nuxt boilerplate

This repository is a template built on Nuxt that makes use of different technologies to easily generate a SSR frontend as well as a complete backend focused on performing CRUD operations for various tables, presenting the information in a comfortable manner.

## Stack

- [**Nuxt**](https://nuxt.com/docs/getting-started/introduction): As the fullstack js framework

- [**Prisma**](https://www.prisma.io/docs/getting-started/quickstart): ORM for communication with the database

- [**Sidebase/nuxt-auth**](https://sidebase.io/nuxt-auth/v0.6/getting-started): User authentication and control of protected pages

- [**Vuetify**](https://vuetifyjs.com/en/introduction/why-vuetify/): Generic HTML elements such as forms, tables, or navbars (especially on the backend)

- [**Tailwindcss**](https://tailwindcss.com/docs/installation): Designing more complex elements without the need to generate custom CSS

## Getting Started

1. As a first step, it's essential to configure the `.env` file. You can take the file `.env.example` as a start.
2. Download the libraries with `npm install` (Note: `pnpm` may be required for some Sidebase dependencies).
3. Run Prisma migrations with `npx prisma migrate dev`.
4. Start coding with `npm run dev` running to see realtime changes.

> [!CAUTION]
> When testing your final product or deploying the project, it's necessary to pass the environment variables as server variables since Nuxt does not include the `.env` file in the production folder. For more information, refer to the following link: [Nuxt Directory Structure - Environment Variables](https://nuxt.com/docs/guide/directory-structure/env).

> [!CAUTION]
> Remember that due to the same reason there cannot be `.env` files in production, databases based on local files such as SQLite are not supported. To avoid this, it's recommended to use databases like PostgreSQL or MariaDB.

## Configuration

Key configuration files:

- **`nuxt.config.ts`**: This file contains your Nuxt.js configuration, including providers such as _authjs_ and the configuration for the styles libraries (Vuetify and Tailwind).
- **`tailwind.config.js`**: This is the basic Tailwind configuration for its customization.
- **`/plugins/vuetify.ts`**: This file provides a Vuetify configuration with customizable themes and icons.
- **`/assets/settings.scss`**: Global Vuetify styles can be customized here.
- **`/server/api/auth/[...].ts`**: The authentication setup with `@sidebase/nuxt-auth` resides here, where it uses Prisma to authorize users and manage JWT and sessions.
- **`/config/RouteRules.ts`**: This is the Nuxt route configuration; it is defined in this file and included in the framework's configuration file. This allows us to handle redirects or determine how pages are rendered from a single, easily readable location.

> [!NOTE]
> API routes that require protection should be placed in `/server/api/protected`.

## Environment Variables

The required environment variables:

        APPNAME: Your application name.
        AUTHOR: Your name or organization´s name.
        DATABASE_URL: Your database URL.
        AUTH_ORIGIN: Your application URL.
        AUTH_SECRET: Your JWT token secret.
        NEXTAUTH_URL: This is a Sidebase necessary variable, should be the same as AUTH_ORIGIN.

Please ensure that these variables are correctly set in your .env file. You can use the provided .env.example as a reference.

> [!WARNING]
> Remember that you'll need to pass these variables as server variables when starting the server in production. You can do it with a command similar to this one:
>
> ```bash
> DATABASE="YourDatabaseURL" AUTH_ORIGIN="YourAppURL" AUTH_SECRET="YourAppSecret" NEXTAUTH_URL="YourAppURL" node ./.output/server/index.mjs
> ```

## Credits

This project is based on the [Nux3-Vuetify-Prisma-Auth](https://github.com/ismaelcmajada/Nuxt3-Vuetify3-Prisma-Auth) repository by **[Ismael Cedrés Gil](https://github.com/ismaelcmajada)**, who originally developed the foundation of the Nuxt template with Prisma and authentication. In this repository, implementations with Tailwind have been added, adjustments to transition to a production environment, and the entire backend CRUD implementation based on the functionality of another repository by the same author, [Laravel-Inertia-Vuetify3](https://github.com/ismaelcmajada/Laravel-Inertia-Vuetify3).

## Contributors

- Ismael Cedrés Gil: Original template development
- Iago Senín Fernández: Additional development and customizations.
