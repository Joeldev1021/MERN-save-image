const fs = require('fs');
const { HttpStatus } = require('../config/httpStatus');
const { cloudinaryAdd, cloudinaryDelete } = require('../helper/cloudinary');
const { isValidHttpUrlImage } = require('../helper/isValidHttpUrl');
const PostService = require('../services/post.service');

class PostController {
    // find all image
    async findAll(req, res, next) {
        try {
            const posts = await PostService.findAll();
            if (!posts)
                res.status(HttpStatus.NOT_FOUND).send({
                    errorMessage: 'posts not found',
                });

            return res.status(HttpStatus.OK).json(posts);
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        const { id } = req.params;
        try {
            const post = await PostService.findById(id);

            if (!post)
                res.status(HttpStatus.NOT_FOUND).send({
                    errorMessage: 'image find  not found',
                });
            return res.status(HttpStatus.OK).json(post);
        } catch (error) {
            next(error);
        }
    }

    async findCommentPost(req, res, next) {
        const { id } = req.params
        const post = await PostService.findCommentWithUser(id);
        res.send(post)
    }

    // get img by id user
    async findByUserId(req, res, next) {
        const { id } = req.user;
        try {
            const posts = await PostService.findByUserId({ userId: id });
            if (!posts)
                res.status(HttpStatus.NOT_FOUND).send({
                    errorMessage: 'posts by user not found',
                });
            res.status(HttpStatus.OK).json(posts);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            if (!req.files && !req.body.imgUrl)
                res.status(HttpStatus.NO_CONTENT).send({
                    errorMessage: 'not provided image',
                });
            if (!req.body.title || !req.body.description)
                res.status(HttpStatus.NO_CONTENT).send({
                    errorMessage: 'fill required',
                });

            let imgCloud;
            if (req.files) {
                imgCloud = await cloudinaryAdd(req.files.image.tempFilePath);
                if (!imgCloud)
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                        errorMessage: 'error save image to cloudinary',
                    });
            }
            /**
             * validate if url is valid
             */
            if (req.body.imgUrl) {
                if (isValidHttpUrlImage(req.body.imgUrl))
                    res.status(HttpStatus.NO_CONTENT).send({
                        errorMessage: 'url is not valid',
                    });
            }

            const post = {
                title: req.body.title,
                description: req.body.description,
                userId: req.user._id,
                imgUrl: imgCloud.url ? imgCloud.url : req.body.imgUrl,
            };
            const imgSave = await PostService.create(post);
            fs.unlink(req.files.image.tempFilePath, () =>
                console.log('deleted files')
            );
            res.status(HttpStatus.OK).json(imgSave);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { title, description } = req.body;
        try {
            if (!title || !description)
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                    errorMessage: 'fill is required',
                });
            const postFound = await PostService.findById(id);
            if (!postFound)
                res.status(HttpStatus.NOT_FOUND).send({
                    errorMessage: ' not found',
                });

            // parse id to string
            if (String(postFound.userId) !== String(req.user._id)) {
                res.status(HttpStatus.UNAUTHORIZED).send({
                    errorMessage: 'not authorizated',
                });
            }

            const postUpdate = await PostService.update(id, req.body);
            if (!postUpdate)
                res.status(HttpStatus.BAD_REQUEST).send({
                    errorMessage: 'image not updated',
                });

            return res.status(HttpStatus.OK).json(postUpdate);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const post = await PostService.delete(id);
            if (!post)
                res.status(HttpStatus.NOT_FOUND).send('post not deleted');
            // cut url
            const imgCut = post.imgUrl.split('/')[7].split('.')[0];
            await cloudinaryDelete(imgCut); // delete img cloudinary

            return res.status(HttpStatus.OK).json(post);
        } catch (error) {
            next(error);
        }
    }


}

module.exports = new PostController();
