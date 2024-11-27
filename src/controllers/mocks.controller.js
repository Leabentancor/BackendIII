import MockingService from "../service/mocking.js";

const getMockingPets = async (req, res) => {
    const pet = await MockingService.generateMockingPets(100);
    res.send({status: "success", payload: user});
}

const getMockingUsers = async (req, res) =>{
    const user = await MockingService.generateMockingUsers(50);
    res.send({status: "success", payload: users});
}

export default { 
    getMockingPets,
    getMockingUsers
}