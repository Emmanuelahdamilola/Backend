import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";
// @desc Get all contacts
// @desc GET /api/contacts
// @access public

const getAllContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts );
});


// @desc create contacts
// @desc POST /api/contacts
// @access public
const createContact = asyncHandler(async(req, res) => {
    console.log(`The body request is ${JSON.stringify(req.body)}`);

    const {name, email, phone} = req.body;
    if(!name || !email || !phone || id){
        return res.status(400).json({message: "All fields are required"})
    }

    // create contact
    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).json(contact);
});

// @desc Get a contacts
// @desc GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Get a contact ${req.params.id}` })
});

// @desc Update contact
// @desc PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` })
});

// @desc Delete contact
// @desc DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` })
});


export { 
    getAllContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
};
