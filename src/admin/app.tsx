import { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    head: {
      title: "Arrak Admin Panel",
    },
    translations: {
      en: {
        // Tab name (browser title)
        "app.title": "Arrak Admin Panel",

        // Sidebar branding
        "app.components.LeftMenu.navbrand.title": "Arrak Admin Panel",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",

        // Home page
        "app.components.HomePage.welcome": "Welcome to Arrak Admin Panel",

        // Content Manager
        "content-manager.header.name": "Arrak Admin Panel Content",

        // Settings page
        "Settings.title": "Arrak Admin Panel Settings",

        // Login page
        "Auth.form.welcome.title": "Arrak Admin Panel",
        "Auth.form.welcome.subtitle": "Login To your account",
        "Auth.logo":
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    // Custom bootstrap logic if needed
  },
};
