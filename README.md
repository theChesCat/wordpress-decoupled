# Wordpress decoupled test project

Example at http://paloma.sedeau.com/wordpress_decoupled/

## Disclamer :

Using Wordpress as a Decoupled / Headless CMS is not the easiest solution, nor is it the most logical one.
Services such as [Contentful](https://www.contentful.com/) or [Built.io](https://www.built.io/) do that just fine.

However, if you want, *if you really really want*, to use Wordpress, or if you just want to avoid using a SaaS, and to benefit from an open source project and keep your data on your own server, it might be for you.



## About this project :

This project is just a test giving an example of what a decoupled CMS can look like, using Wordpress (for the CMS part) REST API, ReactJS and Flux.

It was highly inspired by Ustwo incredible work : https://github.com/ustwo/ustwo.com-frontend

Some documentation about the Wordpress Rest API :
https://developer.wordpress.org/rest-api/
https://developer.wordpress.com/docs/api/



## What's in :

[webpack](https://github.com/webpack/webpack), [webpack-dev-server](https://github.com/webpack/webpack-dev-server) and [Babel](https://babeljs.io/)

[React](https://github.com/facebook/react), [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) and [Flux](https://github.com/facebook/flux)

[Eslint](https://github.com/eslint/eslint) and [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

[Jest](https://facebook.github.io/jest/) tests



## Workaround :

#### 1. Clone this repository


#### 2. Install your Wordpress site in a different directory

I recommand creating an empty theme making a redirection to your decoupled front-end directory.
Just create a theme with an index.php file in it, containing this line :

```php
<?php header( "Location: http://www.yourdomainlinkingtoyourfrontendbuild.com"); ?>
```

#### 3. Add your Wordpress site path

Locate the `config.sample.js` `in your_front_directory_path/app` , copy and rename it `config.sample.js` and change the path to your own.


#### 4. You're good to go

To run a development server :
```
$ yarn install
$ yarn start
```

or
```
$ npm install
$ npm start
```

To get a production build :
```
$ yarn build
```
or
```
$ npm build
```

To launch tests :
```
$ yarn test
```
or
```
$ npm test
```
