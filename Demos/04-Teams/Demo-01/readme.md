# Getting Started

Installation:

```
npm i -g yo gulp-cli typescript
npm i -g generator-teams@2.17.1
npm i -g generator-teams
```

> Note: `generator-teams@2.17.1` creates a class based structure that corresponds to the lab guides, the current generator (V3.x) creates a React Hooks based structure. Read [more](https://developer.microsoft.com/en-us/office/blogs/announcing-microsoft-teams-app-generator-yo-teams-version-3/)

Scaffolding:

```
yo teams
```

Interpolates env to manifest & create `./package/*.zip`:

```
gulp manifest
```

> Note: Usually .env is inclued in `.gitignore`

Build the project:

```
gulp build
```

Serve the project

```
gulp serve
```

Establish a secure tunnel to test:

```
gulp ngrok-serve
```

### Ngrok

[ngrok](https://ngrok.com)

> Note: To avoid having the ngrok name changed all the time use from within a Teams project in two seperate terminals, or even better run gulp start-ngrok in a seperate standalone console window.

Replace `gulp ngrok-serve` with:

To start the ngrok tunnel:

```
gulp start-ngrok (from within a Teams proj)
```

To start the app [after update]:

```
gulp manifest
gulp serve --debug
```

![ngrok](_images/ngrok.jpg)

### Enable Upload of custom apps in tenant

Go to teams admin:

![setup-pol](_images/setup-pol.jpg)

Enable upload of custom apps:

![enable-upload](_images/enable-upload.jpg)
