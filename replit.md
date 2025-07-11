# Replit Configuration

## Overview

This is a full-stack web application built as a Japanese corporate website. The project uses a modern tech stack with React for the frontend, Express.js for the backend, and includes a comprehensive UI component library. The application is designed to be a professional corporate website with Japanese language support and modern design principles.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom Japanese corporate color scheme
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Key Design Decisions
1. **Monorepo Structure**: Single repository with separate client, server, and shared directories
2. **TypeScript Throughout**: Full TypeScript implementation for type safety
3. **Modern CSS**: CSS custom properties for theming with Japanese corporate colors
4. **Component-Based Architecture**: Reusable UI components following atomic design principles
5. **Responsive Design**: Mobile-first approach with professional Japanese aesthetic

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Professional landing area with call-to-action buttons
- **Services**: Three-column service showcase
- **About**: Company information with animated counters
- **Projects**: Image gallery with lightbox functionality
- **Contact**: Form with validation and toast notifications
- **Footer**: Corporate footer with links and social media

### Backend Components
- **Contact API**: Form submission endpoint with validation
- **User Management**: Basic user schema and storage interface
- **Session Management**: PostgreSQL-based session handling
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user authentication schema with username and password fields
- **Sessions**: Handled by connect-pg-simple for session persistence

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **Server Processing**: Express routes handle requests with validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **Database**: Neon Database for serverless PostgreSQL
- **UI Library**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS for utility-first styling
- **Animation**: Framer Motion for smooth transitions
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date operations

### Development Dependencies
- **Build Tools**: Vite for bundling and development server
- **Type Checking**: TypeScript for static type checking
- **Database Tools**: Drizzle Kit for database migrations
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Static Assets**: Built frontend is served by Express in production

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Single Express server serves both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm start`: Production server
- `npm run db:push`: Push database schema changes

## Technical Notes

### Japanese Localization
- All UI text is in Japanese
- Custom CSS variables for Japanese corporate color scheme
- Professional Japanese corporate aesthetic with modern design principles

### Performance Optimizations
- React Query for efficient data fetching and caching
- Framer Motion for hardware-accelerated animations
- Vite for fast development builds and optimized production bundles
- Image optimization with responsive loading

### Security Considerations
- Input validation on both client and server
- CSRF protection through session management
- Secure headers and error handling
- Database parameterized queries through Drizzle ORM