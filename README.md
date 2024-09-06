# Taskify Frontend

Welcome to Taskify. It is a task management application that offers Kanban boards for seamless task tracking, powerful dashboards with charts and graphs for insights, and a responsive UI to ensure accessibility on any device. This project uses Redux for user state management and follows a clean folder structure for easy maintainability.

## Features

- **Kanban Board**: Manage your tasks visually using drag-and-drop functionality.
- **Dashboard**: Track progress with charts and graphs, powered by Recharts.
- **Responsive Design**: A user-friendly interface that works seamlessly on all devices.
- **State Management**: Uses Redux for efficient state management across the application.
- **Task Modals**: Create, edit, and delete tasks with ease using modals powered by `react-modal`.
- **Formik & Yup**: Form validation with Formik and Yup ensures a smooth user experience.
- **Protected Routes**: Secure and authenticated routes for managing tasks and user data.

## User Roles

1. **Admin:** Full access to all features and settings.
2. **Employee:** View and manage own tasks.

## Dependencies

The project uses the following dependencies:

- `axios`: Promise-based HTTP client for API calls.
- `dnd-kit`: Drag-and-drop toolkit for creating kanban boards.
- `formik`: Form library for React.
- `redux`: For managing global application state.
- `redux-persist`: To persist the Redux state in local storage.
- `react-icons`: Collection of popular icons.
- `react-router-dom`: Declarative routing for React.
- `yup`: Schema validation for forms.
- `recharts`: Library for building charts.

## Folder Structure

```
taskify/
│
├── public/ # Static assets
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page components for routes
│ ├── services/ # API service calls (Axios)
│ ├── loaders/ # Data loader functions for fetching data before page load
│ ├── routes/ # Routing and protected route handling
│ ├── store/ # Redux store and slices
│ ├── features/ # Redux feature slices and related logic
│ └── App.js # Main application component
│
├── package.json # Dependencies and scripts
└── README.md # Project documentation
```

## Components

- **Header** Displays the logo and title of the application.
- **Navbar** Provides navigation links to different sections or pages within the application.
- **Bar Graph** Visualizes data using vertical or horizontal bars to compare different categories.
- **Pie Chart** Represents data as slices of a circular graph, showing proportions of a whole.

## Loaders

Functions that fetch data from various backend APIs for different routes, ensuring data is available when needed.

## Pages

Contains all the different pages that every route points to, providing a structured navigation flow.

## Routes

- **Router Instance:** Includes all routes for the application.
- **Protected Routes:** Ensure only authenticated users can access certain parts of the application.
- **Authenticated Routes:** Manage routes based on user authentication status.

## Services

Different services for API calls, split by category of entity. Also includes an `instance.js` file which exports two axios instances:

- **Protected Instance:** For authenticated API calls.
- **Normal Instance:** For unauthenticated API calls.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm

### Installation

1. Pull the repository to your local machine.

```
git pull
```

2. To install all the dependencies:

```
npm install
```

3. Once everything is installed successfully, now it's time to run the server.

```
npm run dev
```

## Sample Admin Credentials

```
email: vsvs2209@gmail.com
password: Admin@123
```
