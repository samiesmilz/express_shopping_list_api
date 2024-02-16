# Express Shopping App API

This project implements a simple REST API for managing items. It provides endpoints for adding, retrieving, updating, and deleting items.

## Technologies Used

- Node.js
- Express.js
- Jest (for testing)
- Supertest (for testing)

## Project Structure

The project consists of the following files and directories:

- **app.js**: Entry point of the application. Initializes the Express app and sets up middleware.
- **itemRoutes.js**: Defines the routes for handling item-related operations such as adding, retrieving, updating, and deleting items.
- **fakeDb.js**: Contains a fake in-memory database (`global.items`) to store items.
- **ExpressError.js**: Custom error class to handle Express errors.
- **tests**: Directory containing test files for testing the API endpoints.
- **server.js**: Starts the Express server.

## Installation

1. Clone the repository:

```bash
git clone <https://github.com/samiesmilz/express_shopping_list_api.git>
cd <express_shopping_list_api>
```

2. Install dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
node server.js
```

2. The server will start running at `http://localhost:3000`.

## API Endpoints

### Get all items

- **URL**: `/items`
- **Method**: `GET`
- **Response**: Returns an array of all items stored in the database.

### Get an item by name

- **URL**: `/items/:name`
- **Method**: `GET`
- **Response**: Returns the item with the specified name.

### Add a new item

- **URL**: `/items`
- **Method**: `POST`
- **Request Body**: JSON object representing the new item.
- **Response**: Returns the added item.

### Update an item

- **URL**: `/items/:name`
- **Method**: `PATCH`
- **Request Body**: JSON object containing the fields to be updated.
- **Response**: Returns the updated item.

### Delete an item

- **URL**: `/items/:name`
- **Method**: `DELETE`
- **Response**: Returns a message indicating the item has been removed.

## Testing

To run the tests, execute:

```bash
npm test
```

This will run all the tests defined in the `tests` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
