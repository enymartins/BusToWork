const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "BusToWork",
        "version": "1.0.0",
        "mensagem": "Projeto em parceria com a {reprograma} com o objetivo de facilitar o acesso dos colaboradores ao transporte fretado de sua empresa."
    })
})
module.exports = router
