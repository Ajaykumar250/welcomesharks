exports.main = async (context) => {
  const name = context.req.body.name || "Guest";
  return {
    statusCode: 200,
    body: `Thanks, ${name}`
  };
};
