import Joi from 'joi'

export default {
    "new": Joi.object().keys({
        message: Joi.string().required(),
        article_id: Joi.string().required(),
        upvotes: Joi.number(),
        downvotes: Joi.number(),
    }),
    "update": Joi.object().keys({
        message: Joi.string(),
        article_id: Joi.string(),
        upvotes: Joi.number(),
        downvotes: Joi.number(),
    })
}