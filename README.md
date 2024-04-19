# Ink-Well

Welcome to Ink-Well! This project aims to provide users with a platform to publish and discover insightful articles on various topics. Built with modern technologies, it offers a seamless blogging experience for both writers and readers.

## Features

- **User Authentication**: Users can sign up, log in, and manage their profiles.
- **Create and Publish Articles**: Writers can create, edit, and publish articles with rich text formatting.
- **Search and Discover**: Readers can easily search for articles and discover new content based on interests.
- **Engagement**: Users can like, comment, and share articles to engage with the community.
- **Responsive Design**: The website is responsive and optimized for various devices.

## Technologies Used

### Backend

- **Language**: TypeScript
- **Framework**: Hono
- **Database**: Prisma with PostgreSQL
- **Dependencies**:
  - `@prisma/client`: ORM for database interactions
  - `@prisma/extension-accelerate`: Prisma extension for performance improvements
  - `@shushant0810/medium-common`: Custom package for common utilities
  - `hono`: Framework for serverless functions on Cloudflare Workers
  - `prisma`: Prisma CLI for database migrations
- **Deployment**: Serverless deployment on Cloudflare Workers

### Frontend

- **Language**: TypeScript
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Dependencies**:
  - `@shushant0810/medium-common`: Custom package for common utilities
  - `axios`: HTTP client for API requests
  - `react`: JavaScript library for building user interfaces
  - `react-dom`: React package for DOM rendering
  - `react-router-dom`: Routing library for React applications

## Installation and Usage

1. Clone the repository.
2. Install dependencies for both backend and frontend using npm or yarn.
3. Start the backend server using `npm run dev`.
4. Start the frontend development server using `npm run dev`.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to help improve this project.

---

This project is maintained by Shushant! 🚀
