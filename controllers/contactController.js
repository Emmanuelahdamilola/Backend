// @desc Get all contacts
// @desc GET /api/contacts
// @access public

const getAllContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" });
};

// @desc create contacts
// @desc POST /api/contacts
// @access public
const createContact = (req, res) => {
    console.log("The request body:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required")
    }
    res.status(201).json({ message: "Contact created!" });
};

// @desc Get a contacts
// @desc GET /api/contacts/:id
// @access public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get a contact ${req.params.id}` })
}

// @desc Update contact
// @desc PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` })
}

// @desc Delete contact
// @desc DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` })
}


export { 
    getAllContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
};
