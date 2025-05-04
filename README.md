# Virtual Pet Adoption Center

## About the Project

The Virtual Pet Adoption Center is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with TailwindCSS for modern and responsive UI design. It allows users to create, view, update, adopt, and delete pet profiles while also dynamically managing each pet’s mood based on how long they've been in the system.

## 📂 Backend (Node.js + Express)

All backend logic is organized in a modular way.

### `/backend/routes/petRoutes.js`

Defines RESTful API endpoints:

- `POST /pets` - Add a new pet
- `GET /pets` - View all pets with current mood
- `GET /pets/:id` - View a single pet
- `PUT /pets/:id` - Update pet profile
- `DELETE /pets/:id` - Delete a pet

## Install the project from GitHub and run it

git clone <https://github.com/sahanas1998/Virtual-Pet-Adoption-Center.git>
cd Virtual-Pet-Adoption-Center

cd frontend
npm install
npm install react-router-dom react-icons
npm start

cd backend
npm install
node server.js
