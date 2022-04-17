import Joi from 'joi';

export default {
    "new": Joi.object().keys({
        article_url: Joi.string().required(),
        img_url: Joi.string(),
        desc: Joi.string(),
        publishedAt: Joi.string(),
        title: Joi.string(),
        content: Joi.string(),
        upvotes: Joi.number(),
        downvotes: Joi.number(),
        author: Joi.string(),
    })
}