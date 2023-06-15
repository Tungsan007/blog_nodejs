class SitesController {
   index(req, res) {
      res.render('home');
   }

   search(req, res) {
      res.render('search');
   }
}

module.exports = new SitesController;