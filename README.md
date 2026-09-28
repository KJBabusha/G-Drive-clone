# G-Drive-Clone

A Google Drive-inspired file management web application built with React and Firebase. It provides a basic Drive-style interface for user sign-in, uploading files, viewing uploaded items, and downloading them from a Firebase-backed storage backend.

## Purpose

This project is a lightweight clone of the core file-management workflow used in Google Drive:
- sign in with Google
- upload files
- list files in a Drive-like dashboard
- display file metadata
- download files directly from the app

The app is intended as a front-end prototype or learning project demonstrating React + Firebase integration for file storage and document listing.

## Features

- Google authentication via Firebase Auth
- Drive-style dashboard layout with header, sidebar, and main file panel
- File upload modal for selecting and uploading new files
- Firebase Storage integration for file persistence
- Firestore real-time file listing using `onSnapshot`
- Display of uploaded file names, timestamps, and file size
- Download links for stored files
- Material UI-based icons and visual components
- Responsive single-page interface built with Vite + React

## Technology Stack

- Frontend: React 19
- Build tool: Vite
- Language: JavaScript
- UI library: Material UI
- Authentication: Firebase Authentication
- Database: Firestore
- Storage: Firebase Storage
- Styling: CSS and component-specific style files
- Package manager: pnpm (lockfile included); npm also works
- Linting: ESLint

Major dependencies:
- `react`
- `react-dom`
- `firebase`
- `@mui/material`
- `@mui/icons-material`
- `@vitejs/plugin-react`
- `vite`
- `eslint`

## Project Structure

```text
G-Drive-clone/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── fileCard.jsx
│   │   ├── fileItem.jsx
│   │   ├── fileView.jsx
│   │   ├── header.jsx
│   │   ├── newFile.jsx
│   │   ├── sidebar.jsx
│   │   ├── sidebarItems.jsx
│   │   └── sideIcon.jsx
│   ├── media/
│   ├── styles/
│   ├── App.css
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── vite.config.js
└── public/
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 18+ or later
- pnpm installed globally, or use npm
- A Firebase project with:
  - Authentication enabled
  - Google sign-in enabled
  - Firestore enabled
  - Storage enabled

## Installation and Local Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd G-Drive-clone
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```
   If you are using npm instead:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project in the Firebase Console.
   - Enable Google authentication under Authentication > Sign-in method.
   - Enable Firestore Database.
   - Enable Cloud Storage.
   - Copy the Firebase config values and replace the hardcoded config in `src/firebase.js`.

4. Set up collections and storage:
   - The application expects a Firestore collection named `myFiles`.
   - Each uploaded document is stored with:
     - `caption`
     - `fileUrl`
     - `size`
     - `timestamp`

   Example document:
   ```js
   {
     caption: "report.pdf",
     fileUrl: "https://...",
     size: 2048,
     timestamp: serverTimestamp()
   }
   ```

5. Ensure Firebase Storage rules allow uploads and reads for development:
   ```js
   rules_version = '2';
   service firebase.storage {
     match /buckets/{bucket}/objects/{allPaths=**} {
       allow read, write: if true;
     }
   }
   ```
   This is for local development only. Use stricter rules in production.

## Running the Application

Start the development server:

```bash
pnpm dev
```

or:

```bash
npm run dev
```

Then open the URL printed in the terminal, typically:

```text
http://localhost:5173
```

## Usage

1. Launch the app.
2. Click the login button on the landing screen.
3. Sign in with Google.
4. Click the `New` button in the sidebar.
5. Choose a file to upload.
6. Confirm the upload.
7. The file appears in the file list and can be downloaded from the table row.

## Useful Commands

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run lint
pnpm lint
```

## Notes on Existing Implementation

The app is a frontend prototype and is tightly coupled to Firebase configuration. The current code uses a fixed Firebase config object in `src/firebase.js`, so the app will not work correctly until the Firebase project details are updated to match your own project.

The upload flow is implemented in `src/components/newFile.jsx` and writes to Firestore plus Firebase Storage. The file list is rendered from Firestore in `src/components/fileView.jsx`.

## Contribution Guidelines

Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Make focused changes with clear commit messages.
4. Run linting and validate behavior locally.
5. Open a pull request with a concise description of the change and test notes.

## License

This project is provided as-is for learning and development purposes. Add a license file and choose an appropriate license such as MIT before production use or distribution.

Example:

```md
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

## Summary

This repository is a functional starter for a Drive-like file manager built with React and Firebase. It is best suited for:
- learning Firebase Auth and Storage integration
- rapid UI prototyping
- building a simple cloud file browser with upload/download workflows

If you want to make it production-ready, the next priorities are:
- environment variable configuration
- secure Firebase rules
- file deletion, rename, and folder support
- improved user state handling
- stronger error handling and UX polish

## MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...