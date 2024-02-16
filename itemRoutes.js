const express = require("express");
const ExpressError = require("./ExpressError");
const router = new express.Router();
const items = require("./fakeBb");

/*
///////////////////// Methods to work on an item ///////////////////
*/

//  Add new item to the list
function AddItem(item) {
  // Check if the item object is empty or missing required fields
  if (!item || Object.keys(item).length === 0) {
    throw new ExpressError("Empty item cannot be added!", 400);
  }
  //  Check if item is missing a name
  if (!item.name) {
    throw new ExpressError("Item must have a name!", 400);
  }
  //  Set a defualt price if missing
  if (!item.price) {
    item.price = 0.0;
  }

  try {
    items.push(item);
    return item;
  } catch (error) {
    next(error);
  }
}

//  Get item
function getItem(name) {
  try {
    const item = items.find((item) => item.name === name);
    if (!item) {
      throw new ExpressError("Item not found!", 404);
    }
    return item;
  } catch (error) {
    throw error;
  }
}

// Update item
function updateItem(name, updates) {
  if (!updates || Object.keys(updates).length === 0) {
    throw new ExpressError("Empty request!", 404);
  }
  const itemToUpdate = getItem(name); // Get the item to update
  if (updates.name) {
    itemToUpdate.name = updates.name; // Update item name
  }
  if (updates.price) {
    itemToUpdate.price = updates.price; // Update item price
  }
  return itemToUpdate;
}

// Delete item
function deleteItem(name) {
  const index = items.findIndex((item) => item.name === name);
  if (index === -1) {
    // Item not found in the array
    throw new ExpressError("Item not found!", 404);
  }
  global.items.splice(index, 1);
  return {
    message: "Item removed!",
  };
}

/*
///////////////////// Item routes ///////////////////
*/

//  Get all items
router.get("/", (req, res, next) => {
  try {
    res.json(items);
  } catch (error) {
    return next(error);
  }
});

// Get item by name
router.get("/:name", (req, res, next) => {
  try {
    const item = req.params.name;
    const foundItem = getItem(item);
    return res.json(foundItem);
  } catch (error) {
    return next(error);
  }
});

// Update item's name and or price
router.patch("/:name", (req, res, next) => {
  try {
    const item = req.params.name;
    const updates = req.body;
    const updatedItem = updateItem(item, updates);
    res.status(200).json(updatedItem);
  } catch (error) {
    return next(error);
  }
});

// Add an item to the list
router.post("/", (req, res, next) => {
  try {
    const newItem = req.body;
    const addedItem = AddItem(newItem);
    return res.status(201).json(addedItem);
  } catch (error) {
    return next(error);
  }
});

//  Delete an item
// Delete an item
router.delete("/:name", (req, res, next) => {
  try {
    let item = req.params.name;
    let result = deleteItem(item);
    return res.status(200).json(result);
  } catch (error) {
    return next(error); // Pass the error to the error handling middleware
  }
});
/*
///////////////////// exports ///////////////////
*/
module.exports = router;
