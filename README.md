# FYW-Node-API

Backend NodeJS - full API.

## Installation

Cloner le dépot

## Usage

Compléter le *.env* grâce au template *cp.env*  

Lancer en dev : **yarn dev** ou **npm run dev**  
Lancer en production : **yarn start** ou **npm run start**

### Explications

#### Modèles
Les modèles sont a créer dans le dossier models avec l'extension model.js, ils sont automatiquement importés et injectés dans le context (ctx).  
Il doit comporter le Schema et exporter le model directement.  
Le nom du fichier sera le nom du model avec la première lettre en majuscule.  
Exemple : ctx.models.User  
Le template du fichier est le suivant :  
```
models/user.model.js
const { mongoose } = require('../config/database')
const { Schema } = mongoose

const schema = new Schema({
  firstname: String,
  lastname: String,
  email: String
}, {
  timestamps: true
})

module.exports = mongoose.model('User', schema)
```

#### Helpers
Les helpers sont a créer dans le dossier helpers avec l'extension helper.js, ils sont automatiquement importés et injectés dans le context (ctx).  
Le nom du fichier sera le nom du helpers contenant ces fonctions.  
Exemple : ctx.helpers.string.$capitalize()  
Le template du fichier est le suivant :  
```
helpers/string.helper.js
module.exports = {
  '$capitalize': (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
```


#### Routes
Les routes sont automatiquement générées et importées dans le router dès lors que qu'un fichier est trouvé *{prefix}/{name}.action.js*.  
Exemple de route : /api/*v1*/test/hello-world  
Le *v1* ici correspond à l'API_VERSION du .env  
Le template du fichier est le suivant :  
```
actions/test/hello-world.action.js
module.exports = {

  name: 'Hello world',

  description: 'description',

  middleware: false, // false ou un [] de middleware

  method: 'GET', // GET / POST / PUT / DELETE

  route: 'hello-world', // path de la route

  fn: (ctx) => (req, res) => {
    /* Fn exécuté */
    return res.send('Hello world')
  }

}
```

L'objet **ctx** contient les objets nécessaires et est injecté dans les routes, peut accéder notamment aux modèles, helpers, connexion DB, server SocketIO…

## Todo

- [] Gestion des middleware
- [] Gestion actions WS
- [] Logger d'erreur à améliorer

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email yo instead of using the issue tracker.

## Credits

- [Yoan Fournier][link-author]

## License

license. Please see the [license file](license.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/yoan1005/admigen.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/yoan1005/admigen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/yoan1005/admigen/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos/12345678/shield

[link-packagist]: https://packagist.org/packages/yoan1005/admigen
[link-downloads]: https://packagist.org/packages/yoan1005/admigen
[link-travis]: https://travis-ci.org/yoan1005/admigen
[link-styleci]: https://styleci.io/repos/12345678
[link-author]: https://github.com/yoan1005
[link-contributors]: ../../contributors
