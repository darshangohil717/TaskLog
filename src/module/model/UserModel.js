import path from "path"
import UserCollection from "../../collection/UserCollection"
class userModel {
    constructor() {

    }
    index = async (req, res) => {
        try {
            const userCreate = await  new UserCollection({name: "darshan"}).save();
            return userCreate;
        } catch (e) {
            console.log("error:",e)
        }
    }

}

export default new userModel();