
# Full Stack Web Development Portfolio

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue.svg)](https://tailwindcss.com/)

A comprehensive full-stack web application featuring a modern landing page and robust admin panel for managing projects, client testimonials, and user interactions. Built with React.js, Node.js, and MongoDB Atlas.

## 🌟 Project Overview

This full-stack application demonstrates modern web development practices with a clean, professional design. The project consists of two main components:

- **Landing Page**: A responsive, modern website showcasing projects, client testimonials, and contact capabilities
- **Admin Panel**: A comprehensive dashboard for content management and user interaction tracking

## 🚀 Features

### Landing Page Features
- **Modern Hero Section**: Eye-catching introduction with call-to-action buttons
- **Project Showcase**: Dynamic display of portfolio projects with filtering capabilities
- **Client Testimonials**: Professional testimonial section with star ratings
- **Contact Form**: Full-featured contact form with validation
- **Newsletter Subscription**: Email collection system for marketing
- **Responsive Design**: Mobile-first approach ensuring compatibility across all devices
- **Smooth Animations**: Professional micro-interactions and hover effects

### Admin Panel Features
- **Dashboard Overview**: Real-time statistics and recent activity summaries
- **Project Management**: Complete CRUD operations for portfolio projects
- **Client Management**: Add, edit, and remove client testimonials
- **Contact Submissions**: View and manage all contact form submissions
- **Newsletter Management**: Track and manage newsletter subscriptions
- **Responsive Interface**: Fully responsive admin interface

## 🛠️ Tech Stack

### Frontend
- **React.js 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn/UI**: High-quality, accessible component library
- **Lucide React**: Beautiful, customizable icons
- **React Router DOM**: Client-side routing and navigation
- **React Hook Form**: Efficient form handling and validation

### Backend Ready
- **Node.js**: Runtime environment for server-side development
- **Express.js**: Web application framework
- **MongoDB Atlas**: Cloud-based NoSQL database
- **Mongoose**: ODM for MongoDB integration

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and quality assurance
- **TypeScript**: Static type checking

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components (Shadcn/UI)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configurations
├── pages/
│   ├── Index.tsx     # Landing page component
│   ├── Admin.tsx     # Admin panel component
│   └── NotFound.tsx  # 404 error page
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and design system
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- MongoDB Atlas account (for backend integration)

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd [your-project-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Backend Setup (When Ready)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install backend dependencies**
   ```bash
   npm install express mongoose cors dotenv
   ```

3. **Create environment variables**
   ```bash
   cp .env.example .env
   # Add your MongoDB Atlas connection string
   ```

4. **Start backend server**
   ```bash
   npm start
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔌 API Endpoints (Backend Ready)

### Projects
- `GET /api/projects` - Fetch all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Clients
- `GET /api/clients` - Fetch all clients
- `POST /api/clients` - Create new client
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Contact Forms
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Fetch all submissions (Admin)

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Fetch all subscriptions (Admin)

## 📱 Screenshots

### Landing Page
```
[Hero Section Screenshot]
- Modern gradient background
- Clear call-to-action buttons
- Professional typography

[Projects Section Screenshot]
- Card-based layout
- Image previews
- Category badges

[Client Testimonials Screenshot]
- Client photos
- Star ratings
- Professional testimonials
```

### Admin Panel
```
[Dashboard Overview Screenshot]
- Statistics cards
- Recent activity feed
- Quick action buttons

[Project Management Screenshot]
- CRUD interface
- Form modals
- Data tables
```

## 🌐 Deployment

### Frontend Deployment
**Platform**: Vercel/Netlify
- **Live URL**: https://dev-stack-task.vercel.app/
- **Status**: ✅ Active



## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/UI** for the beautiful component library
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for the icon set
- **Vercel** for deployment platform
- **MongoDB Atlas** for database hosting

## 🎯 Future Enhancements

- [ ] Authentication system
- [ ] Real-time notifications
- [ ] Advanced analytics
- [ ] Email integration
- [ ] Image upload with cropping
- [ ] SEO optimization
- [ ] Dark mode support

---

**Built with ❤️ using modern web technologies**

*This project demonstrates proficiency in full-stack web development, modern design principles, and professional software development practices.*
