# SocioSync Deployment Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Environment variables configured

## Environment Variables
Create a `.env` file in the `backend` directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_here
PORT=3000
NODE_ENV=production
FRONTEND_URL=your_frontend_url_here
```

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode:
   ```bash
   npm run dev
   ```

## Production Build
1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Platform-Specific Deployment

### Render
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `node index.js`

### Heroku
- **Build Command**: `npm run heroku-postbuild`
- **Start Command**: `npm start`

### Vercel (Frontend only)
Deploy the frontend to Vercel and set the backend URL in environment variables.

### Digital Ocean App Platform
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

## Notes
- The backend serves both the API and the built frontend in production
- Make sure to set the `FRONTEND_URL` environment variable for CORS configuration
- The application uses Socket.IO for real-time chat functionality
- All environment variables should be kept secure and not committed to version control
