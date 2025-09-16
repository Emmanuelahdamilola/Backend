import express from "express";
import  { 
    getAllContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
} from "../controllers/contactController.js";

const router = express.Router();

// Get all contacts
router.route("/").get(getAllContacts);

// Create contact 
router.route("/");

// Get a contact
router.route("/:id").get(getContact);

// Update contact 
router.route("/:id").put(updateContact);

// Delete contact
router.route("/:id").delete(deleteContact);



export default router;

// Or this method
// router.route("/").get(getAllContacts).post(createContact);
// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
