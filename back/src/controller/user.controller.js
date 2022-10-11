const fs = require('fs');
const { HttpStatus } = require('../config/httpStatus');
const { cloudinaryAdd } = require('../helper/cloudinary');
const UserService = require('../services/user.service');

class UserController {
    async findAll(req, res, next) {
        try {
            const users = await UserService.findAll();
            res.json({
                messages: 'get all users success',
                users,
            });
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        const { id } = req.params;
        try {
            const user = await UserService.findById(id);
            if (!user) {
                res.status(HttpStatus.BAD_REQUEST).send('user not found');
            }
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async findByEmail(req, res) {
        const { email } = req.params;
        const user = await UserService.findByEmail(email);
        if (!user) {
            res.status(404).json({
                message: 'user by email not found',
            });
        }
        res.json({
            message: 'get user by email success',
            user,
        });
    }

    async update(req, res, next) {
        const { id } = req.params;
        try {
            if (!req.body)
                res.status(HttpStatus.BAD_REQUEST).sen('not content update');
            const user = await UserService.update(id, req.body);
            if (!user) res.status(HttpStatus.NOT_FOUND).send('not found');

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        const user = await UserService.delete(id);
        if (!user) {
            res.status(404).json({
                message: 'user not found',
            });
        }
        res.status(200).json({
            message: `delete ${user.name} success`,
        });
    }

    async updateAvatar(req, res, next) {
        const { id } = req.params
        const foundUser = await UserService.findById(id)
        if (!foundUser) return res.status(HttpStatus.NOT_FOUND).json('user not found')
        if (req.files) {
            const avatarCloud = await cloudinaryAdd(req.files.avatar.tempFilePath)
            if (!avatarCloud) {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                    errorMessage: 'error save image to cloudinary',
                });
            }
            const updateUser = await UserService.update(id, { avatar: avatarCloud.url })
            console.log(updateUser)
            fs.unlink(req.files.avatar.tempFilePath, () =>
                console.log('deleted files')
            );
            const user = {
                ...updateUser,
                avatar: avatarCloud.url
            }
            res.status(200).json(user)
        }
    }

    async findProfile(req, res, next) {
        try {
            if (!req.user)
                res.status(HttpStatus.UNAUTHORIZED).send('not authorized');
            res.status(HttpStatus.OK).send(req.user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
