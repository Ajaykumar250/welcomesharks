export default async function (req, context) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { name = "Guest" } = await req.json();
  const responseHtml = `<p>Thanks, <strong>${name}</strong>, for submitting your details.</p>`;

  return new Response(responseHtml, {
    headers: { 'Content-Type': 'text/html' }
  });
}