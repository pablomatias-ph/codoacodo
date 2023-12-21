const LicenceService = require("../services/licenceService");

module.exports = {
  homeView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    res.render("home", {
      view: {
        title: "Bienvenidos a la tienda | Funkoshop",
      },
      collections: licences.data,
      enableGlide: true,
    });
  },
  
  contactView: (req, res) =>
    res.render("contact", {
      view: {
        title: "Formulario de contacto con la tienda : Funkoshop",
      },
    }),

  aboutView: (req, res) => res.send("Vista sobre nosotros"),
  faqsView: (req, res) => res.send("Vista de Preguntas Frecuentes"),
};
