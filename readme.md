# Express Shopping App API

This project implements a simple REST API for managing items. It provides endpoints for adding, retrieving, updating, and deleting items.

## Technologies Used

- Node.js
- Express.js
- Jest (for testing)
- Supertest (for testing)

## Overview

**Purpose:** Manage a shopping list through CRUD operations on items.  
**Technology Stack:** Node.js, Express, Supertest (testing)  
**Data Storage:** In-memory array (fakeDb.js) for simplicity. Consider persistent storage options for production.

## Files

- **app.js:** Main entry point, defines routes and error handling.
- **itemRoutes.js:** CRUD functions for items.
- **fakeDb.js:** In-memory array to store items.
- **expressError.js:** Custom error class for consistent handling.
- **tests:** Folder containing unit tests for various functionalities.
- **server.js:** Starts the server and listens on port 3000.

## Functionalities

1. **Get all items:** `/items` (GET) - Retrieve all items.
2. **Get a specific item:** `/items/:name` (GET) - Retrieve details by name.
3. **Create a new item:** `/items` (POST) - Add a new item.
4. **Update an item:** `/items/:name` (PATCH) - Modify existing item properties.
5. **Delete an item:** `/items/:name` (DELETE) - Remove an item.

### Getting Started

1. Run `npm install`.
2. Start the server: `node server.js`.
3. Access the app at http://localhost:3000.

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

## Error Handling

- `ExpressError` class for standardized messages and status codes.
- Global error handler logs errors and sends informative responses.

## Tests

- Unit tests cover various edge cases and scenarios for each endpoint.
- Supertest simulates requests and verifies responses.

## Testing

To run the tests, execute:

```bash
jest
```

## Further Enhancements

- Implement authentication and authorization.
- Integrate with a persistent database.
- Add features like price comparison, filtering, search.
- Consider user interface development.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

```
