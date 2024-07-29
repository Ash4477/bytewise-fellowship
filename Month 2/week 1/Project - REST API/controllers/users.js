import {v4 as uuidv4} from "uuid";


let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User with the username ${user.firstName} added to the database!`);
};

export const getUserById = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteUserById  = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id: ${id} is deleted from database!`);
};

export const updateUserById = (req, res) => {
    const { id } = req.params;
    const userToBeUpdated = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;

    if (firstName) {
        userToBeUpdated.firstName = firstName;
    }
    if (lastName) {
        userToBeUpdated.lastName = lastName;
    }
    if (age) {
        userToBeUpdated.age = age;
    }

    res.send(`User with id: ${id} has been updated in database!`);
};