import path from "path";
import UserModel from "../model/UserModel";

class UserController {
    constructor() {
        this.file_path = path.join(__dirname, path.basename(__filename));
    }

    index = async (req, res) => {
        try {
            const createUSer = await UserModel.index(req, res);
            res.status(200).send(createUSer);
        } catch (e) {
            console.error("error:",e)
        }
    }
}

export default new UserController();