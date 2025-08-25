# Blog Updater
A modern blog management application built with React JS and powered by Appwrite. It allows users to create, read, update, and delete (CRUD) blog posts with a rich text editor, along with secure authentication for sign-up and login.

🚀 Features : <br><br>
🔑 User Authentication – Sign up, log in, and manage sessions using Appwrite.<br>
📝 Post Management (CRUD) – Create, edit, update, and delete blog posts.<br>
✨ Rich Text Editing – Powered by TinyMCE.<br>
⚡ State Management – Implemented with Redux.<br>
🛣️ Client-Side Routing – Using React Router DOM.<br>
🌐 Public or Private Blog – Can be configured for personal or community use.<br>

🛠️ Tech Stack :<br><br>
Frontend: React JS, Redux, React Router DOM. <br>
Editor: TinyMCE. <br>
Backend: Appwrite (Authentication, Database, Storage) . <br> 

📂 Project Structure<br>
blog-updater/
│── src/
│   ├── components/   # UI Components
│   ├── pages/        # Page-level components (Login, Dashboard, PostEditor, etc.)
│   ├── redux/        # Redux slices & store
│   ├── services/     # Appwrite services (Auth, Database)
│   ├── App.js        # Main app with routing
│   └── index.js      # Entry point
│── public/           # Static assets
│── package.json
│── README.md

⚙️ Installation & Setup : <br>

#Clone the repository<br>
git clone https://github.com/your-username/blog-updater.git<br>
cd blog-updater
<br>

#Install dependencies

npm install<br>


#Configure Appwrite<br>

Create a project in Appwrite<br>
Set up Authentication (Email/Password).<br>
Create a Database collection for posts.<br>
<br>
Add your Appwrite credentials in src/config.js:<br>

export const APPWRITE_ENDPOINT = "https://[HOSTNAME_OR_IP]/v1";
export const PROJECT_ID = "your_project_id";
export const DATABASE_ID = "your_database_id";
export const COLLECTION_ID = "your_collection_id";


#Run the app locally <br>
npm start


#Build for production<br>
npm run dev
<br>

#🔐 Authentication Flow<br>
Users can sign up with email & password.<br>
Authenticated users can add, edit, or delete posts.<br>
Unauthenticated users can view posts only (if public mode is enabled).<br>
