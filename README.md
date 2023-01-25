# FYW-Node-API

**Backend NodeJS - full API.**

Ce boilerplate expose une API Http et Websocket, basé sur express et socket.IO, avec tous les principes de base d'une API (middlewares, models, router…). 

Le starting du serveur Node autoload et parse tous les fichiers automatiquement, sans que vous ayez besoin de vous soucier de cette logique et que vous puissiez vous concentrer sur vos besoins pour votre application.

## Installation

Forker le dépot

## Usage

Compléter le *.env* grâce au template *cp.env*  

Lancer en dev : **yarn dev** ou **npm run dev**  
Lancer en production : **yarn start** ou **npm run start**

![App](https://i.ibb.co/sss2ZmN/Capture-d-e-cran-2023-01-25-a-19-47-15.png)


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

  middlewares: false, // false ou un [] de middleware

  method: 'GET', // GET / POST / PUT / DELETE

  route: 'hello-world', // path de la route

  fn: (ctx) => (req, res) => {
    /* Fn exécuté */
    return res.send('Hello world')
  }

}
```

L'objet **ctx** contient les objets nécessaires et est injecté dans les routes, peut accéder notamment aux modèles, helpers, connexion DB, server SocketIO…


#### Middlewares
Les middlewares sont a créer dans le dossier middlewares avec l'extension middleware.js, ils sont automatiquement importés et injectés dans le context (ctx).  
La propriété scope permet de définir de savoir si le middleware doit être appliqué sur une route ou sur l'app globalement. Le scope *app* appliquera le middleware à toute l'application à son chargement, le scope *route* permettra l'utilisation du mdlw dans une action (attribut *middlewares*).
L'attribut *order* permet de gérer l'ordre de déclaration des middlewares. Surtout utile pour les scopes *app*.  
Le nom du middleware (attribut *name*) sera le nom du middleware contenant sa fonction.  
Le template du fichier est le suivant :  
```
middlewares/test.middleware.js
module.exports = {

  name: 'Nom du middleware',

  description: '-',

  scope: 'route', // 'app' ou 'route'

  order: 0,

  fn: (req, res, next) => {
    console.log('req', req)
    next()
  }

}
```

De base, 3 middlewares sont basiquement implémenté (et peuvent/doivent être améliorer à votre guise).
Le middleware Auth qui récupére le token Bearer dans le header Authorization (à terminer avec votre config), un middleware de sécurité exigeant un token spécifique à l'API dans les headers et un middleware logger d'erreur.


#### Websockets
Les actions websocket sont a créer dans le dossier websockets avec l'extension ws.js, elles sont automatiquement importées et montées au niveau du serveur socketio pour être listen.
Le fichier peut / doit contenir les attributs suivants :
- event : Le nom de l'évenement écouté (`socket.io('event')`)
- name : Nom global 
- prefix : Si défini prefix de l'event, l'event sera accessible `prefix:event` (`socket.io('prefix:event')`)
- room : Room pour cloisonner les utilisateurs (`socket.join('room')`)
- fn : la fonction à exécuter

Le template du fichier est le suivant :  
```
websockets/users/initialisation.ws.js
module.exports = {

  event: 'initialisation',

  name: 'Initialisation of the user',

  prefix: 'users',

  room: false,

  fn: async (ctx, socket, payload) => {
    
    socket.emit("users:initialisation", 'COMPLETED')

  }

}
```


## Todo

- [x] Gestion des middleware
- [x] Gestion actions WS
- [x] Logger d'erreur à améliorer

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
