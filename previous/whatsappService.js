require("dotenv").config();

const axios = require("axios");

async function sendWhatsAppMessage(message) {

  try {

    const url =
      `https://graph.facebook.com/v22.0/${process.env.PHONE_NUMBER_ID}/messages`;

    const response = await axios.post(

      url,

      {
        messaging_product: "whatsapp",

        to: process.env.RECIPIENT_PHONE,

        type: "text",

        text: {
          body: message
        }
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("WhatsApp message sent!");

    console.log(response.data);

  } catch (error) {

    console.error(
      "Error sending WhatsApp message:"
    );

    console.error(
      error.response?.data || error.message
    );
  }
}

module.exports = {
  sendWhatsAppMessage
};