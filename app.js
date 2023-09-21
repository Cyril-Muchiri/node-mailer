
const nodeMailer = require("nodemailer")
const dotenv = require("dotenv")

const visitorEmail="abcd@gmail.com"
const visitorMsg ="abcdefgh"

// const visitorEmail=document.querySelector('.Email').value;
// console.log("clicked");
// const visitorMsg=document.querySelector('.Message').value;

    // localStorage.setItem("email",visitorEmail)
    // localStorage.setItem("message",visitorMsg)

    dotenv.config();

const html = `
<h1>New INQUIRY ALERT </h1>
<span>Visitors email: ${visitorEmail}</span>
<span>Visitors message: ${visitorMsg}</span>

`;


    async function main() {
        const transporter = nodeMailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: true,
      
          auth: {
            user: process.env.USER,
            pass: process.env.PASS,
          },
        });
      
        const message = await transporter.sendMail({
          from: process.env.USER,
          to: "cyrilmuchiri11@gmail.com",
          subject: "Testing nodemailer server",
          html: html,
        });
      
        console.log("Message sent successfully");
      }
      
      main().catch(err=>console.log(err));





