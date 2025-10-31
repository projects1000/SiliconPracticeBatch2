# Copilot Instructions for SiliconNew (Angular)

## Project Overview
- This is an Angular 15+ application generated with Angular CLI.
- Main source code is in `src/app/`.
- Routing is managed in `app-routing.module.ts`.
- The root component is `app.component.ts`.
- Global styles are in `src/styles.css`.

## Architecture & Patterns
- Follows standard Angular module/component structure.
- Components, services, and modules are generated using Angular CLI (`ng generate ...`).
- Routing is centralized in `app-routing.module.ts`.
- Assets are stored in `src/assets/`.
- No custom state management detected; use Angular services for cross-component communication.

## Developer Workflows
- **Start Dev Server:** `ng serve` (or use npm script: `npm start`).
- **Build:** `ng build` (outputs to `dist/`).
- **Unit Tests:** `ng test` (uses Karma).
- **E2E Tests:** `ng e2e` (add a platform if not present).
- **Generate Components/Services:** `ng generate component|service <name>`.

## Conventions & Integration
- Use Angular CLI for scaffolding and builds.
- TypeScript is the primary language; configuration in `tsconfig*.json`.
- No custom linting or formatting rules detected beyond Angular defaults.
- No backend integration or API service patterns found in the current codebase.
- No custom environment files or advanced configuration detected.

## Key Files & Directories
- `src/app/`: Main application code (components, routing, module).
- `src/assets/`: Static assets.
- `angular.json`: Angular workspace configuration.
- `package.json`: NPM dependencies and scripts.
- `README.md`: Basic project instructions.

## Example Patterns
- To add a new route, update `app-routing.module.ts` and create a new component in `src/app/`.
- For shared logic, create a service with `ng generate service <name>` and inject it into components.

---

**If you need more details on custom patterns, backend integration, or environment configuration, ask the user for clarification.**
