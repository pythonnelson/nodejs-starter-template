
# Node.js CLI with MongoDB and Prisma - Product CRUD Application

This is a Node.js CLI application built using TypeScript, Express, Prisma, and MongoDB. The application provides a fully functional REST API for managing products with Create, Read, Update, and Delete (CRUD) operations.

---

## Features

- Create a product with name, description, and price.
- Retrieve a list of all products.
- Fetch details of a single product by ID.
- Update a product's details by ID.
- Delete a product by ID.
- Utilizes **MongoDB** as the database with **Prisma ORM** for data handling.

---

## Prerequisites

- **Node.js** (v14+)
- **npm** or **yarn**
- **MongoDB** (Atlas or local instance)
- **Postman** or any API testing tool (optional, for testing)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```plaintext
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority"
```

Replace:
- `<username>`: MongoDB username
- `<password>`: MongoDB password
- `<cluster>`: Your MongoDB cluster (e.g., `cluster0.xxxxx.mongodb.net`)
- `<database>`: Name of the database

### 4. Push Prisma Schema to MongoDB
Run the following command to create the database schema:
```bash
npx prisma db push
```

### 5. Start the Application
```bash
npm run dev
```

The server will run on `http://localhost:5000`.

---

## API Endpoints

### Base URL
```
http://localhost:5000/api/products
```

### Routes

#### 1. Get All Products
**GET** `/api/products`

- **Response**:
  ```json
  [
    {
      "id": "63f82b7c2b9e1f7ad0c2ab34",
      "name": "Sample Product",
      "description": "This is a sample product.",
      "price": 99.99,
      "createdAt": "2024-11-23T10:00:00Z",
      "updatedAt": "2024-11-23T10:00:00Z"
    }
  ]
  ```

#### 2. Get Product by ID
**GET** `/api/products/:id`

- **Response**:
  ```json
  {
    "id": "63f82b7c2b9e1f7ad0c2ab34",
    "name": "Sample Product",
    "description": "This is a sample product.",
    "price": 99.99,
    "createdAt": "2024-11-23T10:00:00Z",
    "updatedAt": "2024-11-23T10:00:00Z"
  }
  ```

#### 3. Create a Product
**POST** `/api/products`

- **Request Body**:
  ```json
  {
    "name": "New Product",
    "description": "Description of the product",
    "price": 49.99
  }
  ```

- **Response**:
  ```json
  {
    "id": "63f82b7c2b9e1f7ad0c2ab35",
    "name": "New Product",
    "description": "Description of the product",
    "price": 49.99,
    "createdAt": "2024-11-23T10:05:00Z",
    "updatedAt": "2024-11-23T10:05:00Z"
  }
  ```

#### 4. Update a Product
**PUT** `/api/products/:id`

- **Request Body**:
  ```json
  {
    "name": "Updated Product",
    "description": "Updated description",
    "price": 59.99
  }
  ```

- **Response**:
  ```json
  {
    "id": "63f82b7c2b9e1f7ad0c2ab34",
    "name": "Updated Product",
    "description": "Updated description",
    "price": 59.99,
    "createdAt": "2024-11-23T10:00:00Z",
    "updatedAt": "2024-11-23T10:15:00Z"
  }
  ```

#### 5. Delete a Product
**DELETE** `/api/products/:id`

- **Response**:
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```

---

## Project Structure

```
├── prisma/
│   ├── schema.prisma          # Prisma schema for MongoDB
├── src/
│   ├── controllers/
│   │   ├── productController.ts  # Controller methods for CRUD operations
│   ├── routes/
│   │   ├── productRoutes.ts      # Routes for product CRUD
│   ├── app.ts                    # Main Express app setup
│   ├── server.ts                 # Entry point of the application
├── .env                          # Environment variables
├── package.json                  # Project metadata and scripts
└── README.md                     # Project documentation
```

---

## Tools & Libraries

- **Express**: Web framework for Node.js
- **Prisma**: ORM for database interactions
- **MongoDB**: Database
- **TypeScript**: Superset of JavaScript with type checking

---

## Running Tests

To run tests (if implemented), use:
```bash
npm test
```

---

## Future Enhancements

- Add user authentication and role-based access control.
- Implement pagination for product listings.
- Add unit and integration tests.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make changes and commit: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).
