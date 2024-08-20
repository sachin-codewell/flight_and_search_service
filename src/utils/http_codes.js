const clientErrorsResponse = Object.freeze({
    BadRequest: 400,
    Forbidden: 403,
    NotFound: 404
})

const successfulResponses = Object.freeze({
    OK: 200,
    Created: 201,
    Accepted: 202
})

serverErrorResponses = Object.freeze({
    internalServerError: 500
})

module.exports = {
    clientErrorsResponse,
    successfulResponses,
    serverErrorResponses
}