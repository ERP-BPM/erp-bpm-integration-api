export const handler = async (event: any) => {
  console.log('Hola desde lambda');

  return {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      hola: 'adios',
    }),
  }
}
