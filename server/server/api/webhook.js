const stripeAPI = require("../stripe");

function webhook(req, res) {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripeAPI.webhooks.constructEvent(
      req["rawBody"],
      sig,
      process.env.WEB_HOOK_SECRET
    );
  } catch (error) {
    return req.status(400).send(`webhook error ${error.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("Event data", session);
  }
}
module.export = webhook;
