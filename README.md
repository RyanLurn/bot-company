# Bot Company

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An internal, multi-agent conversational workspace designed to prototype the operational core of Bot Company.

## 1. Project Vision & Core Context

**This is not a public-facing product.** This repository contains the source code for an internal R&D environment—a "digital office" where the founder (the sole user) can collaborate with a team of specialized AI agents.

The primary goal is to rapidly prototype and discover the optimal workflows for an AI-native company. Think of it as a "ChatGPT for our specific team of bots." It's a lab for building the machine that _is_ the business.

This initial version is intentionally a throwaway prototype. The focus is on speed of iteration and exploration, not on creating a scalable or production-ready architecture.

## 2. Tech Stack

This project is a CSR Single-Page Application (SPA) built with the following technologies:

- **Language:** TypeScript
- **Frontend:** React (Vite), Tailwind CSS, shadcn/ui
- **Routing:** TanStack Router
- **Backend:** Convex
- **Authentication:** Clerk (Invite-only, Google OAuth)
- **AI Integration:** Vercel AI SDK, Google Gemini Models
- **Deployment:** Vercel
- **Tooling:**
  - **Build Tool:** Vite
  - **Package Manager:** pnpm
  - **Code Quality:** ESLint, Prettier
  - **Git Hooks:** Lefthook
  - **CI/CD:** GitHub Actions

## 3. Getting Started

To get the development environment running locally, follow these steps.

### Prerequisites

- Node.js (v18 or newer)
- pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/RyanLurn/bot-company.git
    cd bot-company
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project by copying the example file:

    ```bash
    cp .env.example .env.local
    ```

    Populate `.env.local` with your keys for Convex, Clerk, and any other required services.

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The application should now be running on `http://localhost:5173`.

## 4. License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
