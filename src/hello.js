"use strict";

const hello = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Aula de Serverless! Olá Mundo!",
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports = {
    handler:hello
}


