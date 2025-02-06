# Finance App

A personal finance management application to help users track income, expenses, and budgets while visualizing financial trends.

## Features

- **Onboarding**: Simple and intuitive tutorial for new users.
- **Authentication**: Login, registration, and password recovery.
- **Dashboard**:
  - Track income and expenses.
  - View balance calculations.
  - Manage transactions (add, edit, delete).
- **Advanced Features**:
  - Set monthly budgets for categories.
  - Define and track savings goals.
  - Visualize spending trends using charts and graphs.

## Tech Stack

### Frontend

- **React**: For building the user interface.
- **TypeScript**: Ensures type safety.
- **Vite**: Fast build tool.
- **Tailwind CSS**: For styling.

### Backend

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.

## Project Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB instance

### Getting Started

#### 1. Clone the repository

```bash
git clone <repository-url>
cd finance-app
```

#### 2. Install dependencies

##### Frontend

```bash
cd client
npm install
```

##### Backend

```bash
cd server
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the `server` directory and provide the following:

```
MONGO_URI=<your_mongodb_connection_string>
PORT=5000
```

#### 4. Run the Application

##### Frontend

```bash
cd client
npm run dev
```

##### Backend

```bash
cd server
npx nodemon server.js
```

### Deployment

- **Frontend**: Deploy on [Vercel](https://vercel.com/).
- **Backend**: Deploy on [Render](https://render.com/) or [Heroku](https://www.heroku.com/).

### Contributing

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy coding! 🚀
