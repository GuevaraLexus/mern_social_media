VERIFICATION FOR 'smtp.gmail.com'

1. Add a 2-Factor authentication on your account.
2. Add an App Password and copy it
3. Paste it on .env file and put it on AUTH_PASSWORD
4. Get the account's email to get the AUTH_EMAIL
5. Add a JWT_SECRET_KEY for security
6. Inside the server folder, go to utils folder and select the sendEmail.js
7. Find the const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;
8. There you can find the code and change the host into 'smtp.gmail.com' and add a port = 465

const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASSWORD,
  },
});