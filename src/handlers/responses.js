module.exports.success = (data) => {
  return {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
}

exports.badRequest = (data) => {
  return {
    statusCode: 400,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
}

exports.serverError = (data) => {
  return {
    statusCode: 500,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
}
