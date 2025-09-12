# FoodChow Menu Widget

A React-based web application that fetches restaurant menu data from the FoodChow API and displays it in a clean, responsive UI, replicating the design of the reference site.

🔗 **Live Demo:** [https://foodchow-menu-widget.vercel.app/](https://foodchow-menu-widget.vercel.app/)  
💻 **GitHub Repository:** [https://github.com/SujitSingh521/foodchow-menu-widget](https://github.com/SujitSingh521/foodchow-menu-widget)

---

## Features

- Fetches menu data from FoodChow API.
- Displays categories and items dynamically.
- Supports search functionality to filter dishes.
- Deals section with promotional offers.
- Sidebar for category selection.
- Sticky cart component for added items.
- Responsive design for mobile and desktop.
- Tabs for Main Menu and Breakfast menu.

---

## Technologies Used

- **Frontend:** React.js (create-react-app), Tailwind CSS, React Icons
- **HTTP Requests:** Axios
- **Version Control:** Git
- **Deployment:** Vercel

---

## Project Structure

foodchow-frontend/
│
├─ public/
│ ├─ images/ # Images used in the project
│ └─ index.html
│
├─ src/
│ ├─ api/
│ │ └─ fetchMenuData.js # API call functions
│ │
│ ├─ components/
│ │ ├─ Header.jsx # Header component with service modal
│ │ ├─ Sidebar.jsx # Sidebar with category list
│ │ ├─ Cart.jsx # Cart component
│ │ ├─ MenuCard.jsx # Single menu item card
│ │ └─ Footer.jsx # Footer component
│ │
│ ├─ App.jsx # Main App component
│ ├─ index.js
│ └─ index.css
│
├─ package.json
├─ tailwind.config.js
└─ README.md



---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SujitSingh521/foodchow-menu-widget.git



Navigate to the project directory:
cd foodchow-menu-widget


Install dependencies:
npm install


Start the development server:
npm start



