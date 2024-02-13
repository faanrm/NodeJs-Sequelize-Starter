import User from "../models/UserModels.js";

export const getAllUser = async (req, res) => {
    try {
        const user = User.findAll()
        if (user) {
            return res.status(401).json({ msg: 'list of all users', data: user })
        }
        else {
            return res.status(404).json({ msg: 'np' })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const createUser = async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            console.log("name is required");
        }
        return res.status(201).json({ message: "User created!", data: newUser })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await User.destroy({
            where: { user_id: id }
        })
        if (deletedUser) {
            res.status(204).json({message : "user deleted"}).send();
          } else {
            res.status(404).json({ message: 'User not found ' });
          }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
export const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await User.update(req.body, {
        where: { user_id: id }
      });
      if (updated) {
        const updatedUser = await User.findByPk(id);
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };