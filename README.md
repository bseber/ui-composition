# ui composition

playground to learn how to compose ui stuff from various independent services.

## why?

to scale with multiple teams in a microservice landscape ¯\_(ツ)_/¯

**tl;dr**
* keep coupling small
  * children knows interface
  * container knows interface and children
  * composer knows (multiple) container

```
// install node8

git clone https://github.com/bseber/ui-composition.git
cd ui-composition
./setup.sh

// container
cd container
npm run dev

// composer
cd composer
npm run dev

-> http://localhost:8080
```

## mental model



```

 ---------                 ----------                -----------                ----------------
| browser | -- request -> |  (SSR)   | - getHTML -> |   (SSR)   | - getJSON -> | childComponent |
|         | <- response - | composer | <- - - - - - | container | <- - - - - - |    service     |
 ---------                 ----------                -----------                ----------------

```

one browser, one composer, more containers and much more childComponents

## playground project structure

```
.
├── api
│   ├── index.js
├── child1
│   ├── client
├── child2
│   ├── client
├── composer
│   └── server
└── container
    ├── client
    ├── dist
    ├── server
```

**api**:

interface for *childComponents* to subscribe to the container

```
subscribe({
  id: String,
  renderView: Function returning a component,
  renderTab: Function returning a component,
  fetchData: Function returning a Promise,
})
```

**child1, child2, ...**
* stuff which is mounted into the container
* imports *api* to subscribe itself to the container
* client
  * ui component rendering
  * progressive enhancement stuff
* (server)
  * (endpoint to provide data (called by *container* via subscribed fetchData method))

**container**:
* client
  * provides container stuff like rendering the tabs above the view
  * lazy loads data of not yet fetched data after SSR
  * takes care about dynamically subscribed children (rerenders container view)
* server
  * endpoint to provide rendered html and initialState (used by the composer)
    * initialState is required for client hydration as the SSR state would be lost after rerendering on the client
  * imports all required child components required for server side rendering
    * since the path is not known until runtime
    * and the container needs access to the callbacks to render stuff and to fetch data

**composer**:
* the central unit which receives the browser request and returns the final html document
* composes all containers
* includes all scripts
* may or may not fetch initial data and does server side rendering (client does it anyway due to script import)



