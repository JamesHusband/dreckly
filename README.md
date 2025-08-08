![Dreckly Cover](.github/readme.webp)

# Dreckly

**Dreckly** is a Cornish-first food delivery platform, built to support local takeaways and food producers across **Cornwall, UK**.

> Think of it like "we'll get there dreckly"—but your food won't wait that long.

Built with [Nx](https://nx.dev) for a scalable, full-stack monorepo experience.

## Tech Stack

### Frontend

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Zustand](https://img.shields.io/badge/Zustand-4.5-764ABC?style=for-the-badge)
![Lucide React](https://img.shields.io/badge/Lucide_React-0.263-000000?style=for-the-badge)

### Backend

![Express.js](https://img.shields.io/badge/Express.js-4.18-000000?style=for-the-badge&logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

### Development & Testing

![Nx](https://img.shields.io/badge/Nx-17.0-143055?style=for-the-badge&logo=nx)
![Jest](https://img.shields.io/badge/Jest-29.0-C21325?style=for-the-badge&logo=jest)
![ESLint](https://img.shields.io/badge/ESLint-8.0-4B32C3?style=for-the-badge&logo=eslint)
![Playwright](https://img.shields.io/badge/Playwright-1.40-2EAD33?style=for-the-badge&logo=playwright)

## Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JamesHusband/dreckly.git
   cd dreckly
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

1. **Start the API Gateway**

   ```bash
   npx nx serve @dreckly/api-gateway
   ```

   The API will be available at `http://localhost:3333`

2. **Start the development server**

   ```bash
   npx nx serve @dreckly/dreckly
   ```

   The app will be available at `http://localhost:3000`

3. **Run tests**

   ```bash
   # Run all tests
   npx nx test

   # Run tests for specific project
   npx nx test @dreckly/dreckly
   ```

4. **Run linting**

   ```bash
   # Lint all projects
   npx nx lint

   # Lint specific project
   npx nx lint @dreckly/dreckly
   ```

5. **Build for production**
   ```bash
   npx nx build @dreckly/dreckly
   ```

### Available Commands

- `npx nx serve @dreckly/api-gateway` - Start API Gateway
- `npx nx serve @dreckly/dreckly` - Start development server
- `npx nx build @dreckly/dreckly` - Build for production
- `npx nx test` - Run all tests
- `npx nx lint` - Run linting
- `npx nx e2e @dreckly/dreckly-e2e` - Run end-to-end tests
