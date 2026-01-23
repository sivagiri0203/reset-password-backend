import SibApiV3Sdk from "sib-api-v3-sdk";

const sendEmail = async (to, subject, html) => {
  const client = SibApiV3Sdk.ApiClient.instance;
  const apiKey = client.authentications["bskrOrC5s0BKRIC"];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  await apiInstance.sendTransacEmail({
    sender: { name: "Sivagiri", email: "sivagirimaster@gmail.com" },
    to: [{ email: to }],
    subject,
    htmlContent: html,
  });
};

export default sendEmail;
