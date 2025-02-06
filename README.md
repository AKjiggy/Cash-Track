# Cash Track

A personal finance management application designed to help users track income, expenses, and budgets while visualizing financial trends.

## Features

### Core Features

- **Onboarding**: Guided introduction for new users.
- **Authentication**: Secure login, registration, and password recovery.
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
- **Express**: Web framework for APIs.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM library for MongoDB.

## Project Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB instance

### Getting Started

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd cash-track
```

#### 2. Install Dependencies

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

```env
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

## Deployment

- **Frontend**: Hosted on [Vercel](https://vercel.com/).
- **Backend**: Hosted on [Render](https://render.com/) or [Heroku](https://www.heroku.com/).

## Project Information

### Team Members

- **ADEYEMO MUBARAK ADEMOLA** - LCU/UG/21/19403 (Computer Science)
- **Ojeniyi Adebayo Samuel** - LCU/UG/21/20753 (Computer Science)
- **Madu Brandon** - LCU/UG/22/24049 (Information Technology)
- **Flora Ogedengbe** - LCU/UG/22/22707 (Information Technology)
- **Alimi Aleem Babatunde** - LCU/UG/22/22126 (Computer Science)
- **Okunola Oluwaseun Emmanuel** - LCU/UG/22/21485 (Computer Science)
- **Odediran Israel Obadare** - LCU/UG/20/17881 (Software Engineering)
- **Okanlawon Mariam Oyebola** - LCU/UG/22/24404 (Computer Science)

### Course Information

- **Course Code**: GST 306
- **Project Title**: Cash Track - Personal Finance Tracker

## Contribution Guidelines

1. Fork the repository and create a new branch for your feature:

```bash
git checkout -b feature-name
```

2. Commit your changes:

```bash
git commit -m "Add feature"
```

3. Push to the branch:

```bash
git push origin feature-name
```

4. Create a pull request for review.

## License

This project is licensed under the MIT License.

## Acknowledgments

Special thanks to our lecturer for the project guidelines and to our team for their dedication and effort.

---

Built with ❤️ by the Cash Track team.
