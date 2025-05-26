import asyncHandler from '../utils/asyncHandler.js';
import Publisher from '../models/publishersModel.js';


const getPublishers= asyncHandler(async (req,res)=>{
    const publishers = await Publisher.find({});
    res.status(200).json(publishers);
})

const getPublisherById = asyncHandler(async (req, res) => {
    const publisher = await Publisher.findById(req.params.id);
    if (publisher) {
        res.status(200).json(publisher);
    } else {
        res.status(404).json({ message: 'Publisher not found' });
    }
});

const createPublisher = asyncHandler(async (req, res) => {
    const { name, address, contactNumber, email } = req.body;
    const publisher = new Publisher({
        name,
        address,
        contactNumber,
        email
    });
    const createdPublisher = await publisher.save();
    res.status(201).json(createdPublisher);
});

const updatePublisher = asyncHandler(async (req, res) => {
    const { name, address, contactNumber, email } = req.body;
    const publisher = await Publisher.findById(req.params.id);
    if (publisher) {
        publisher.name = name;
        publisher.address = address;
        publisher.contactNumber = contactNumber;
        publisher.email = email;
        const updatedPublisher = await publisher.save();
        res.status(200).json(updatedPublisher);
    } else {
        res.status(404).json({ message: 'Publisher not found' });
    }
});

const deletePublisher = asyncHandler(async (req, res) => {
    const publisher = await Publisher.findById(req.params.id);
    if (publisher) {
        await publisher.remove();
        res.status(200).json({ message: 'Publisher removed' });
    } else {
        res.status(404).json({ message: 'Publisher not found' });
    }
});

export {getPublishers, getPublisherById, createPublisher, updatePublisher, deletePublisher} 