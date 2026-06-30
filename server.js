if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ quiet: true });
}

const express = require("express");
const path = require("path");
const { sendContactFormEmail, sendPartnerFormEmail } = require("./utils/sendMail");

const app = express();
const PORT = process.env.PORT || 3000;

const site = {
  name: "moovex",
  domain: "moovex.org",
  tagline: "Promoting entrepreneurship in Zambia",
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

function trim(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isFormValid(body) {
  return Boolean(trim(body.name) && trim(body.email) && trim(body.message));
}

function renderPage(page, title, activePage) {
  return (req, res) => {
    res.render(`pages/${page}`, {
      title,
      site,
      activePage,
      sent: req.query.sent === "true",
    });
  };
}

function contactFormValues(body) {
  return {
    name: trim(body.name),
    email: trim(body.email),
    message: trim(body.message),
    phone: trim(body.phone),
    organization: trim(body.organization),
  };
}

function partnerFormValues(body) {
  return {
    name: trim(body.name),
    email: trim(body.email),
    message: trim(body.message),
    organization: trim(body.organization),
    phone: trim(body.phone),
    country: trim(body.country),
    interest: trim(body.interest),
  };
}

app.get("/", renderPage("home", "moovex | Building Zambia's Entrepreneurship Ecosystem", "home"));
app.get("/about", renderPage("about", "About moovex", "about"));
app.get("/ecosystem", renderPage("ecosystem", "The moovex Ecosystem", "ecosystem"));
app.get("/portfolio", renderPage("portfolio", "moovex Portfolio", "portfolio"));
app.get("/impact", renderPage("impact", "Our Impact", "impact"));
app.get("/updates", renderPage("updates", "Updates | moovex Zambia", "updates"));
if (process.env.NODE_ENV !== "production") {
  app.get("/stitch-reference", renderPage("stitch-reference", "Stitch Reference", ""));
}

app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact moovex",
    site,
    activePage: "contact",
    sent: req.query.sent === "true",
    error: null,
    form: {},
  });
});

app.get("/partner", (req, res) => {
  res.render("pages/partner", {
    title: "Partner With moovex",
    site,
    activePage: "partner",
    sent: req.query.sent === "true",
    error: null,
    form: {},
  });
});

app.post("/contact", async (req, res) => {
  const form = contactFormValues(req.body);

  if (!isFormValid(form)) {
    return res.status(400).render("pages/contact", {
      title: "Contact moovex",
      site,
      activePage: "contact",
      sent: false,
      error: "Please complete the required fields.",
      form,
    });
  }

  try {
    const info = await sendContactFormEmail(form);
    console.log("Contact form email sent", {
      messageId: info.messageId,
      to: process.env.MAIL_TO,
      from: form.email,
      name: form.name,
    });
    res.redirect("/contact?sent=true");
  } catch (err) {
    console.error("Contact form email failed:", err.message);
    res.status(500).render("pages/contact", {
      title: "Contact moovex",
      site,
      activePage: "contact",
      sent: false,
      error: "We could not send your message right now. Please try again later or email us directly at info@moovex.org.",
      form,
    });
  }
});

app.post("/partner", async (req, res) => {
  const form = partnerFormValues(req.body);

  if (!isFormValid(form)) {
    return res.status(400).render("pages/partner", {
      title: "Partner With moovex",
      site,
      activePage: "partner",
      sent: false,
      error: "Please complete the required fields.",
      form,
    });
  }

  try {
    const info = await sendPartnerFormEmail(form);
    console.log("Partner form email sent", {
      messageId: info.messageId,
      to: process.env.MAIL_TO,
      from: form.email,
      name: form.name,
      interest: form.interest || "(not set)",
    });
    res.redirect("/partner?sent=true");
  } catch (err) {
    console.error("Partner form email failed:", err.message);
    res.status(500).render("pages/partner", {
      title: "Partner With moovex",
      site,
      activePage: "partner",
      sent: false,
      error: "We could not send your request right now. Please try again later or contact us directly.",
      form,
    });
  }
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

const server = app.listen(PORT, () => {
  console.log(`Moovex website running on port ${PORT}`);
});
