export default async function (req, context) {
  const { name } = await req.json();
  return new Response(JSON.stringify({
    message: `Thank you ${name} for submitting the details.`
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
