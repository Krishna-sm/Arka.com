![image](https://github.com/user-attachments/assets/911191b6-56d3-44cd-becd-84382aea0907)
 
# Arka.com — Fintech Investment Website

> A responsive Spanish-language fintech website built with **Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit, Swiper, and modern component-driven UI patterns**.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.5-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.2.7-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/Headless_UI-2.1.2-1F2937?style=for-the-badge" alt="Headless UI">
</p>

---

## 📌 Overview

**Arka.com** is a responsive fintech website designed around a digital investment experience.

The application presents investment products, financial education, investment goals, trust and regulatory information, application download options, and contact/social channels through a modern, content-rich web experience.

The implementation focuses heavily on:

* Responsive layouts
* Component-based UI architecture
* Interactive navigation
* Investment product presentation
* Visual storytelling
* Carousel-driven content
* Video-based content cards
* Client-side state management
* Reusable UI components
* Mobile-first navigation

---

# 🎯 Product Experience

The website is structured around a simple user journey:

```text
Discover Arka
      ↓
Understand Investment Options
      ↓
Explore Goals & Products
      ↓
Learn About Investing
      ↓
Build Trust
      ↓
Download / Get Started
      ↓
Contact Arka
```

The homepage introduces Arka's investment proposition and continues into feature explanations, investment-oriented content, fund categories, app-download content, trust/regulatory messaging, and contact options.

---

# ✨ Key Features

## 🏠 Investment-Focused Homepage

The homepage combines multiple sections into a continuous financial-product experience:

* Full-screen hero section
* Investment messaging
* App download CTA
* Feature showcase
* Investment-potential visualization
* Investment product cards
* App promotion
* Trust/regulatory information
* Contact and social channels

The hero uses a looping video background and responsive content overlays, while the remainder of the page is composed from reusable React sections.

---

## 🧭 Responsive Navigation

The application implements a responsive navigation experience with:

* Desktop navigation
* Mobile navigation
* Sticky header
* Mega-menu interactions
* Investment category navigation
* Company/education navigation
* Mobile side navigation
* Active route handling

The navigation system uses **Headless UI**, React state, Next.js routing, and Redux-backed mobile navigation state.

---

# 💼 Investment Experience

The website contains dedicated investment-oriented routes and sections.

### Investment Page

The `/invest-page` experience introduces the investment journey through:

* Investment explanation
* Portfolio-oriented messaging
* Visual sections
* Investment goals
* Interactive carousels
* Feedback content

### Goals / Metas

The `/metas` experience presents investment goals such as:

* Retirement / golden years
* Travel
* Children
* Home
* Seasonal goals

The goal-oriented experience is intended to connect investment planning with personal financial objectives.

---

# 📊 Funds & Investment Products

The website includes an interactive funds section where users can filter products by category.

Current fund categories include examples such as:

```text
Todos los Fondos
Acciones
Bonos
Acciones y Bonos
Crypto
Letras del Tesoro US
```

The page renders investment cards dynamically based on the selected category and provides dedicated links for additional fund information.

Examples represented in the current implementation include:

* Letras del Tesoro US
* Renta Fija
* Renta Mixta
* Renta Variable
* Vision Tech
* Activos Digitales
* Bonus Panama

---

# 🎞️ Interactive Content

The project makes extensive use of interactive visual components.

### Swiper

Swiper is used for:

* Feature slides
* Investment content
* Fund/product presentation
* Goal-based content

The implementation includes:

* Autoplay
* Looping
* Pagination
* Navigation controls
* Responsive breakpoints
* Dynamic slide state

### Video-Based Cards

Several investment cards use autoplaying muted videos instead of static images, creating a more dynamic product presentation.

The implementation handles playback through React refs/effects and uses responsive card layouts.

---

# 📚 Financial Education

The website contains a dedicated `knowledge-page` focused on personal finance education.

The current content is organized around topics related to:

* Investing
* Saving
* Taxes
* Cryptocurrency
* Retirement

Each topic is presented through reusable slider-based content blocks.

This creates a second user journey beyond product discovery:

```text
Financial Education
        ↓
Understand Concepts
        ↓
Explore Investment Options
        ↓
Make Informed Decisions
```

---

# 📱 Mobile App Promotion

The homepage includes a dedicated application-download section with:

* App Store CTA
* Google Play CTA
* Mobile application mockup
* Product messaging

This section is integrated as a reusable homepage component.

---

# 🔐 Trust & Regulatory Section

The website includes a dedicated trust section presenting regulatory and supervision information associated with the service.

The homepage explicitly displays messaging around supervision by the **Superintendencia del Mercado de Valores de Panamá** and includes supporting visual content.

> Regulatory/legal statements shown by the application are product content and should not be interpreted as independent verification by this repository.

---

# 📞 Contact & Social Experience

The contact section includes:

* Contact CTA
* WhatsApp-oriented interaction
* Instagram
* LinkedIn
* Twitter
* YouTube

This section is designed to provide multiple customer-support and social touchpoints.

---

# 🏗️ Architecture

The project uses the **Next.js App Router** with a combination of server-rendered route components and client-side interactive components.

At the layout level:

```text
RootLayout
   │
   ├── ReduxProvider
   │
   ├── Header
   │
   ├── NextTopLoader
   │
   ├── Route Content
   │
   └── Footer
```

The root layout also configures typography and site metadata.

---

# 🧩 Component Architecture

The homepage is broken into independent feature sections rather than one large page component.

```text
Home
│
├── HeroSection
├── FeatureSection
├── BigFrameSection
├── CardImageSection
├── GetTheAppSection
├── TrustPanel
└── ContactSection
```

The implementation uses lazy/dynamic loading for selected sections, including the large frame and card sections.

This approach helps keep the page composition modular and allows individual sections to evolve independently.

---

# 🔄 Client-Side State Management

Redux Toolkit is used for shared UI state.

The current store includes a mobile-navigation slice:

```typescript
const initialState = {
  isOpen: false
};
```

Actions include:

```text
toggleNav()
closeNav()
```

The header consumes this state using `useSelector` and `useDispatch`.

The architecture therefore separates navigation state from individual header components.

---

# 🎨 Design System

The project uses:

### Tailwind CSS

Utility classes are used extensively throughout the interface for:

* Responsive spacing
* Typography
* Layout
* Breakpoints
* Cards
* Buttons
* Navigation
* Responsive stacking

### Typography

The application uses:

* Poppins
* Plus Jakarta Sans

with dedicated typography utilities such as:

```text
font-1
font-heading
font-1-wi
font-heading-wi
```

### Responsive Design

The UI adapts across:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
   ↓
Large Desktop
```

with dedicated responsive breakpoints for navigation, sliders, layout direction, typography, and content widths.

---

# 📁 Project Structure

```text
Arka.com/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── metas/
│   │   │   └── page.tsx
│   │   │
│   │   ├── invest-page/
│   │   │   └── page.tsx
│   │   │
│   │   ├── learn-page/
│   │   │   └── page.tsx
│   │   │
│   │   └── knowledge-page/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Home/
│   │   ├── invest-page/
│   │   ├── knowledge-page/
│   │   ├── metas/
│   │   ├── reuseable/
│   │   ├── Header.tsx
│   │   ├── Footer2.tsx
│   │   └── LoadingComponent.tsx
│   │
│   ├── redux/
│   │   ├── store.ts
│   │   ├── ReduxProvider.tsx
│   │   └── slice/
│   │
│   ├── assets/
│   │
│   └── styles/
│
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

# 🛠️ Tech Stack

| Technology            | Role                              |
| --------------------- | --------------------------------- |
| Next.js 14.2.5        | Application framework             |
| React 18              | UI layer                          |
| TypeScript 5          | Static typing                     |
| Tailwind CSS 3.4      | Styling                           |
| Redux Toolkit         | Shared state                      |
| React Redux           | Redux integration                 |
| Headless UI           | Accessible interactive primitives |
| Swiper                | Sliders / carousels               |
| React Flip Toolkit    | Animated transitions              |
| React Icons           | Iconography                       |
| Chart.js              | Charting capability               |
| Recharts              | Data visualization capability     |
| CanvasJS React Charts | Charting capability               |
| Sharp                 | Image processing                  |
| Next.js TopLoader     | Route loading feedback            |

The dependency stack is defined in the repository's `package.json`.

---

# 🚀 Getting Started

## Prerequisites

Install:

* Node.js
* npm

Verify:

```bash
node --version
npm --version
```

---

## Clone

```bash
git clone https://github.com/Krishna-sm/Arka.com.git
cd Arka.com
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 🏗️ Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

The available commands are defined in `package.json`.

---

# 🌐 Main Routes

The current application includes routes such as:

```text
/
├── /metas
├── /invest-page
├── /learn-page
└── /knowledge-page
```

The navigation connects these experiences through the application's responsive menu and content sections.

---

# 🧠 Engineering Highlights

This project demonstrates practical frontend engineering concepts including:

### Component Composition

Complex pages are assembled from focused reusable components.

### Responsive UI

Layouts adapt between mobile and desktop rather than relying on a single fixed layout.

### Client/Server Boundary

Interactive features use client components while route/layout composition remains within Next.js App Router architecture.

### Shared UI State

Mobile navigation state is centralized through Redux Toolkit.

### Lazy Loading

Selected heavy homepage sections use dynamic/lazy loading patterns to defer rendering where appropriate.

### Interactive Product Presentation

Swiper-based carousels and video cards are used to make investment content more visual and engaging.

---

# 📱 Responsive Strategy

The application is designed around multiple layout breakpoints.

```text
Mobile
┌───────────────────────┐
│ Hamburger Navigation  │
│ Single-column Content │
│ Stacked Sections      │
└───────────────────────┘

Tablet
┌────────────────────────────┐
│ Hybrid Navigation/Layout   │
│ Flexible Content Columns   │
└────────────────────────────┘

Desktop
┌─────────────────────────────────────┐
│ Mega Navigation                     │
│ Multi-column Sections               │
│ Sliders / Visual Product Cards      │
└─────────────────────────────────────┘
```

---

# 🧪 Current Scope

### Implemented

* ✅ Responsive fintech website
* ✅ Next.js App Router
* ✅ Spanish-language content experience
* ✅ Responsive desktop/mobile navigation
* ✅ Mega menu
* ✅ Redux-based mobile navigation state
* ✅ Investment pages
* ✅ Investment goals
* ✅ Fund-category filtering
* ✅ Financial education section
* ✅ Swiper carousels
* ✅ Video-based investment cards
* ✅ App download section
* ✅ Trust/regulatory content section
* ✅ Contact/social section
* ✅ Responsive Tailwind styling
* ✅ Dynamic/lazy-loaded homepage sections

---

# ⚠️ Project Status

This repository is best understood as a **frontend website / product experience implementation**.

The current codebase is primarily focused on:

```text
UI
+
Navigation
+
Content Presentation
+
Client-side Interaction
+
Responsive Experience
```

The repository should not be presented as a complete financial platform with production trading, account management, transaction processing, or backend investment execution unless those capabilities exist in a separate system.

---

# 🧭 Potential Production Evolution

A next-stage architecture could separate the presentation layer from financial product data and backend services:

```text
                    Next.js Frontend
                           │
              ┌────────────┴────────────┐
              │                         │
          UI / UX                  Client State
              │                         │
              └────────────┬────────────┘
                           ▼
                     API Layer
                           │
             ┌─────────────┼──────────────┐
             ▼             ▼              ▼
         User Data     Fund Data      Education
             │             │              │
             └─────────────┼──────────────┘
                           ▼
                     Backend Services
```

Possible future improvements:

* API-driven investment products
* Authentication
* User dashboards
* Portfolio data
* Transaction workflows
* Form validation
* Server-side data fetching
* Automated testing
* Accessibility audits
* Performance monitoring
* CI/CD
* Error tracking
* Structured analytics

---

# 🎨 Recommended Showcase Assets

For a portfolio/recruiter-facing repository, add:

```text
screenshots/
├── homepage-desktop.png
├── homepage-mobile.png
├── mega-menu.png
├── investment-page.png
├── funds-page.png
├── education-page.png
└── mobile-navigation.png
```

Also consider adding a short product walkthrough GIF:

```text
User Journey
    ↓
Homepage
    ↓
Investment Menu
    ↓
Funds
    ↓
Education
    ↓
Contact / App CTA
```

Visual proof will make the repository much stronger than a text-only README.

---

# 👨‍💻 Project Credit

**Repository:** `Krishna-sm/Arka.com`

**Project Type:** Fintech / Investment Web Experience

**Primary Stack:** Next.js + React + TypeScript + Tailwind CSS + Redux Toolkit

---

<p align="center">
  <strong>Next.js • React • TypeScript • Fintech UI • Responsive Web Engineering</strong>
</p>
