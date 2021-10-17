# Map Object

Map Object is a Javascript library for dealing format of the array object.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm i map-object
```

## Usage

```javascript
const mapObject = require('filter-map')

const objectSet = [
    {
      "userId": 2,
      "id": 1,
      "title": "sunt aut facere"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "qui est esse",
}]
 console.log(mapObject(objectSet,['id','title']))

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)