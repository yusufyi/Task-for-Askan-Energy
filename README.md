# Task-For-Hexaware

# Task Management System

This project is a full-stack **Task Management System** built with a **Django REST API** for the backend and a **React** frontend using **TypeScript** and **Tailwind CSS**. It allows users to create, update, delete, and manage tasks and comments.

## Overview

## Backend Setup (Django REST API)

### Prerequisites

Make sure you have the following installed:

### Installation and Setup

1. **Clone the repository**:

   \`\`\`bash
   git clone https://github.com/your-username/task-management-backend.git
   cd task-management-backend
   \`\`\`

2. **Create a virtual environment**:

   \`\`\`bash
   python3 -m venv venv
   source venv/bin/activate # On macOS/Linux
   \`\`\`

3. **Install the required dependencies**:

   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. **Apply migrations** to set up the database:

   \`\`\`bash
   python manage.py migrate
   \`\`\`

5. **Create a superuser** to access the Django admin:

   \`\`\`bash
   python manage.py createsuperuser
   \`\`\`

### Running the Development Server

To start the Django development server, run:

\`\`\`bash
python manage.py runserver
\`\`\`

The API will be available at \`http://127.0.0.1:8000/\`.

### API Overview

The API uses **Token Authentication** to secure endpoints.

- **Authentication**: Obtain a token by sending a `POST` request to `/api/api-token-auth/` with a username and password.

#### Available Endpoints

- **Tasks**:
  - \`GET /api/tasks/\`: List all tasks.
  - \`POST /api/tasks/\`: Create a new task.
  - \`GET /api/tasks/{id}/\`: Retrieve a specific task.
  - \`PUT /api/tasks/{id}/\`: Update a task.
  - \`DELETE /api/tasks/{id}/\`: Delete a task.
- **Comments**:
  - \`GET /api/comments/\`: List comments for a specific task.
  - \`POST /api/comments/create/\`: Create a new comment.
  - \`GET /api/comments/{id}/\`: Retrieve a specific comment.
  - \`PUT /api/comments/{id}/\`: Update a comment.
  - \`DELETE /api/comments/{id}/\`: Delete a comment.

---

## Frontend Setup (React with TypeScript and Tailwind CSS)

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm**
- **Git**

### Frontend Installation and Setup

1. **Clone the repository**:

   \`\`\`bash
   git clone https://github.com/your-username/task-management-frontend.git
   cd task-management-frontend
   \`\`\`

2. **Install dependencies**:

   \`\`\`bash
   npm install
   \`\`\`

3. **Configure the backend API URL** in \`.env\`:

   \`\`\`bash
   REACT_APP_API_URL=http://127.0.0.1:8000/api
   \`\`\`

### Running the Development Server

To start the React development server, run:

\`\`\`bash
npm start
\`\`\`

The frontend will be available at \`http://localhost:3000/\`.
