# defra-hapi-change-answers
Hapi plugin to deal with changing answers within a defra hapi web application

## Installation

Via github:
```
npm install --save https://github.com/DEFRA/defra-hapi-change-answers.git#master
```

It is recommended that tie to a specific commit/version as follows:
```
npm install --save https://github.com/DEFRA/defra-hapi-change-answers.git#commit_or_version
```
## Usage
Please note:
 - this example is written using the standard linter (no semicolons)
 - example usage can be found within the unit tests 
```
const Hapi = require('hapi')
const server = hapi.server()

await server.register([{
 plugin: require('defra-hapi-change-answers'),
 options: {
   async init (server) {
     // Any intialisation if required
   },

   get checkYourAnswersPath () {
     // Return the path of the check your answers page
   },

   async validData (request) {
     // Return true if the data is valid and complete and false if not.
     // Note that returning true will override the redirect to the next route and will instead
     // redirect to the check your answers page.
   },

   async ignoreRoute ({ route }) {
     // Check the route and don't perform the validData test if the route is to be ignored.
     // Examples of routes to ignore would be the public route etc.
     // Typically tags on routes can be used for this purpose.
   },

   async setChanging (request, flag) {
     // Typically use a cookie to set or unset a changing flag
   },

   async isChanging (request) {
     // Return true if changing flag is set and false if not
   }
 }
}])
```

## Contributing to this project

Please read the [contribution guidelines](/CONTRIBUTING.md) before submitting a pull request.

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

>Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
