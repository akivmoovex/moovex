const nodemailer = require("nodemailer");

let transporter;

function isMailConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.MAIL_FROM &&
      process.env.MAIL_TO
  );
}

function getSmtpPort() {
  const port = Number(process.env.SMTP_PORT);
  return Number.isFinite(port) && port > 0 ? port : 587;
}

function getTransporter() {
  if (!isMailConfigured()) {
    throw new Error("Mail is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_FROM, and MAIL_TO.");
  }

  if (!transporter) {
    const port = getSmtpPort();
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function optionalLine(label, value) {
  return value ? `${label}: ${value}\n` : "";
}

function optionalHtmlRow(label, value) {
  return value ? `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value)}</td></tr>` : "";
}

async function sendMail({ subject, text, html, replyTo }) {
  const info = await getTransporter().sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject,
    text,
    html,
    replyTo: replyTo || undefined,
  });

  return info;
}

async function sendContactFormEmail(form) {
  const subject = `Moovex contact form: ${form.name}`;
  const text = [
    "New contact form submission",
    "",
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    optionalLine("Phone", form.phone).trimEnd(),
    optionalLine("Organization", form.organization).trimEnd(),
    "",
    "Message:",
    form.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(form.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(form.email)}</td></tr>
      ${optionalHtmlRow("Phone", form.phone)}
      ${optionalHtmlRow("Organization", form.organization)}
    </table>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(form.message).replace(/\n/g, "<br>")}</p>
  `;

  return sendMail({
    subject,
    text,
    html,
    replyTo: form.email,
  });
}

async function sendPartnerFormEmail(form) {
  const subject = `Moovex partner form: ${form.name}`;
  const text = [
    "New partner / donation interest form",
    "",
    `Name: ${form.name}`,
    optionalLine("Organization", form.organization).trimEnd(),
    `Email: ${form.email}`,
    optionalLine("Phone", form.phone).trimEnd(),
    optionalLine("Country", form.country).trimEnd(),
    optionalLine("Interest", form.interest).trimEnd(),
    "",
    "Message:",
    form.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <h2>New partner / donation interest form</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(form.name)}</td></tr>
      ${optionalHtmlRow("Organization", form.organization)}
      <tr><td><strong>Email</strong></td><td>${escapeHtml(form.email)}</td></tr>
      ${optionalHtmlRow("Phone", form.phone)}
      ${optionalHtmlRow("Country", form.country)}
      ${optionalHtmlRow("Interest", form.interest)}
    </table>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(form.message).replace(/\n/g, "<br>")}</p>
  `;

  return sendMail({
    subject,
    text,
    html,
    replyTo: form.email,
  });
}

module.exports = {
  isMailConfigured,
  sendMail,
  sendContactFormEmail,
  sendPartnerFormEmail,
};
