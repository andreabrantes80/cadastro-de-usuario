# User Registration Application

> This application provides a full-stack solution for managing user registrations with a Node.js/Express backend and an HTML/CSS/JavaScript frontend.

## Overview

This application enables CRUD (Create, Read, Update, Delete) operations for user records stored in a MongoDB database, with filtering capabilities by name or email.

> **Note**: Ensure MongoDB is running locally before starting the application.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: HTML, CSS, JavaScript
- **Dependencies**:
  - `express`: Web framework for Node.js
  - `mongoose`: MongoDB object modeling
  - `cors`: Enable Cross-Origin Resource Sharing

## Features

- Register new users with name, email, and age
- List all users in a table
- Edit existing user details
- Delete users with confirmation
- Filter users by name or email
- Responsive frontend with basic styling

## Project Structure

```
project/
├── serve.js              # Backend server with Express and MongoDB
├── public/
│   ├── index.html       # Main page with user list
│   ├── cadastro.html    # User registration/edit form
│   ├── script.js        # Frontend JavaScript logic
│   ├── style.css        # Frontend CSS styling
├── package.json         # Node.js project configuration
└── README.md            # Project documentation
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on `mongodb://localhost:27017`)

> **Important**: Verify MongoDB is running on the default port before proceeding.

### Installation Steps

1. Clone the repository or copy the code to your local machine.
2. Navigate to the project directory and run:
   ```bash
   npm install
   ```
   to install dependencies (`express`, `mongoose`, `cors`).

### Running the Backend

1. Start the Express server:
   ```bash
   node serve.js
   ```
2. The server will run on `http://localhost:3000`.

> **Tip**: Add `app.use(express.static('public'))` to `serve.js` to serve static files.

### Serving the Frontend

- Place the `public` folder in the same directory as `serve.js`.
- Access the application at `http://localhost:3000/index.html`.

## Backend (serve.js)

### Overview

The backend uses Express.js and Mongoose to connect to a MongoDB database, providing RESTful API endpoints for user management.

### Key Components

- **Database**: MongoDB with a `usuarios` collection storing user documents (`nome`, `email`, `idade`).
- **Functionality**:
  - Connects to `mongodb://localhost:27017/cadastro_usuarios`
  - Defines a Mongoose schema for users
  - Handles CORS for cross-origin requests
  - Supports CRUD operations and filtering

> **Note**: Ensure the MongoDB connection string matches your local setup.

## Frontend

### JavaScript (script.js)

#### Functionality

- **Event Listeners**:
  - Initializes form or filter input based on page content
  - Handles form submissions and filter input changes
- **Key Functions**:
  - `carregarUsuarios()`: Fetches and displays users, applying filters
  - `editarUsuario(id)`: Redirects to the edit form
  - `excluirUsuario(id)`: Deletes a user and refreshes the table
  - `prepararFormulario()`: Manages form population and submission

### HTML

- **index.html**: Displays a user table with filter input and action buttons
- **cadastro.html**: Provides a form for creating or editing users

> **Note**: HTML files require a `public` folder served by Express.

### CSS

The `style.css` file styles the table, form, and buttons for a clean UI.

> **Todo**: Add specific CSS details if the `style.css` file is provided.

## How It Works

### Backend Flow

- The Express server listens on port 3000 and interacts with MongoDB.
- API endpoints handle user data operations (see [API Endpoints](#api-endpoints)).

### Frontend Flow

- `index.html` loads the user list and supports filtering.
- `cadastro.html` handles user creation and editing.
- JavaScript sends HTTP requests to the backend and updates the UI.

### Data Flow

- Frontend communicates with backend via HTTP requests (GET, POST, PUT, DELETE).
- Backend processes requests and returns JSON responses.
- Frontend updates dynamically based on responses.

## API Endpoints

| Method | Endpoint                   | Description                              |
|--------|----------------------------|------------------------------------------|
| POST   | `/usuarios`                | Create a new user                        |
| GET    | `/usuarios`                | Retrieve all users                       |
| PUT    | `/usuarios/:id`            | Update a user by ID                      |
| DELETE | `/usuarios/:id`            | Delete a user by ID                      |
| GET    | `/usuarios/filtro/:termo`  | Filter users by name or email (regex)    |

## Usage

### Viewing Users

- Open `http://localhost:3000/index.html`
- Use the filter input to search by name or email

### Adding a User

- Navigate to `http://localhost:3000/cadastro.html`
- Fill and submit the form

### Editing a User

- Click "Editar" in the user table
- Update the form in `cadastro.html` and submit

### Deleting a User

- Click "Excluir" and confirm the deletion

## Future Improvements

- Add input validation (e.g., email format, age range)
- Implement server-side filtering for performance
- Use a CSS framework (e.g., Bootstrap, Tailwind)
- Add error handling for duplicate emails
- Implement pagination for large user lists
- Secure the API with authentication

> **Next Steps**: Share `style.css` or HTML files for more detailed documentation.



### Changes Made
- **Headings (`#`)**:
  - Added `###` for sub-sections like "Prerequisites", "Installation Steps", "Running the Backend", etc., to deepen the hierarchy.
  - Used `####` for specific sub-sections like "Functionality" under JavaScript.
- **Blockquotes (`>`)**:
  - Added blockquotes for key notes, tips, and todos to highlight important information, such as MongoDB setup, static file serving, and missing CSS details.
- **Preserved Content**:
  - Kept all original content intact, only restructuring with additional Markdown elements.
- **Artifact ID**:
  - Reused the same `artifact_id` (`8bd87022-1207-4cc7-b90a-6565b22ce97e`) as the previous artifact, as this is an update.

