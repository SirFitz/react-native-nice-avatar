# react-native-nice-avatar

[![Version](http://img.shields.io/npm/v/react-nice-avatar.svg)](https://www.npmjs.org/package/react-nice-avatar)
[![npm download][download-image]][download-url]
[![Build Status](https://app.travis-ci.com/dapilab/react-nice-avatar.svg?branch=main)](https://app.travis-ci.com/github/dapilab/react-nice-avatar)
[![Netlify Status](https://api.netlify.com/api/v1/badges/df23baf6-daac-4ce5-a0b6-5baade2cb822/deploy-status)](https://app.netlify.com/sites/gracious-turing-db4aa3/deploys)

[download-image]: https://img.shields.io/npm/dm/react-nice-avatar.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-nice-avatar

<div align="center">
    <a href="https://nice-avatar.chilllab.io/">
        <img src="https://user-images.githubusercontent.com/5305874/131275587-a6f44325-cb18-4a1c-8a1c-785942e751e7.png" 
             width="600" alt="imagewall" />
    </a>
</div>

## Credits 

- This is a port of React Native Nice Avatar from [@dapilab](https://github.com/dapilab/react-nice-avatar)

## Online editor / preview

- https://nice-avatar.dapiok.com/

## Assets

- Designer: [@Micah](https://www.figma.com/@Micah) on Figma
- Figma files: [Avatar Illustration System](https://www.figma.com/community/file/829741575478342595)

## Installation

```sh
npm install react-nice-avatar
```

or

```sh
yarn add react-nice-avatar
```

## Usage

1. Import the component.
    ```js
    import Avatar, { genConfig } from 'react-nice-avatar'
    ```
2. Generate a random configuration, save it so that you can always rendering a same avatar with the configuration.
    ```js
    const config = genConfig(AvatarConfig?) 
    ```
    
    `tip`: AvatarConfig is an Object, plz check the **Options** below for what attributes can be passed in
    
3. Render the component with specific width / height and configuration.
    ```jsx
    <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
    ```
    or
    
    ```jsx
    <Avatar className="w-32 h-32" {...config} />
    ```

## Options

The options can be passed into genConfig or as React props

| key            | type   | default | accept                                       | tips                 |
| -------------- | ------ | ------- | -------------------------------------------- | -------------------- |
| `id`           | string |         |                                              | Only for React Props |
| `className`    | string |         |                                              | Only for React Props |
| `style`        | object |         |                                              | Only for React Props |
| `shape`        | string | circle  | circle, rounded, square                      | Only for React Props |
| `sex`          | string |         | man, woman                                   |                      |
| `faceColor`    | string |         |                                              |                      |
| `earSize`      | string |         | small, big                                   |                      |
| `hairColor`    | string |         |                                              |                      |
| `hairStyle`    | string |         | normal, thick, mohawk, womanLong, womanShort |                      |
| `hairColorRandom` | boolean |  false   |                           | thick,mohawk default only be black |
| `hatColor`     | string |         |                                              |                      |
| `hatStyle`     | string |         | none, beanie, turban                         | Usually is none      |
| `eyeStyle`     | string |         | circle, oval, smile                          |                      |
| `glassesStyle` | string |         | none, round, square                          | Usually is none      |
| `noseStyle`    | string |         | short, long, round                           |                      |
| `mouthStyle`   | string |         | laugh, smile, peace                          |                      |
| `shirtStyle`   | string |         | hoody, short, polo                           |                      |
| `shirtColor`   | string |         |                                              |                      |
| `bgColor`      | string |         |                                              |                      |
| `isGradient`   | boolean |   false   |                                           |                      |

## Development

1. Clone the repo:
    ```sh
    $ git clone git@github.com:chilllab/react-nice-avatar.git
    $ cd react-nice-avatar
    ```
2. Install dependencies:
    ```sh
    $ yarn
    ```
    Or
    ```sh
    $ npm install
    ```
3. Start the server for the demo:
    ```sh
    $ make dev
    ```
4. Open the browser to reivew the demo:
    ```sh
    $ open http://localhost:8080
    ```
5. Edit the files inside [src](/src).

## Test

1. Lint test:
    ```sh
    $ make lint-test
    ```

2. code test:
    ```sh
    $ make test
    ```

## License

Released under [MIT](/LICENSE) by [@dapilab](https://github.com/dapilab).

---

<br />

<div align="center">
   <a href="https://dapiok.com">
      <img src="https://user-images.githubusercontent.com/5305874/131276202-ee5f6941-531c-4c01-bbc4-3ff8aca0e629.png" width="260" alt="dapi">
   </a>
</div>

<br />
