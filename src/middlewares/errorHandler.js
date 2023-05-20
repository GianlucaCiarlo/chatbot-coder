import { response } from "express"

export default function errorHandler(error, req, res, next) {
    
    console.log(error)

    return res.json({
        status: 500,
        method: req.method, // el metodo del error
        path: req.url, //el endpoint del error
        response: error.message,
    })
}