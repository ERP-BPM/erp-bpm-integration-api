export const success = (data: any) => {
  return {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
}

export const badRequest = (data: any) => {
  return {
    statusCode: 400,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
}

export const serverError = (data: any) => {
  return {
    statusCode: 500,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
}
