# js-router-core


```javascript

const pages = [{path:"/", html:"<b>Home</b>"}, {path:"/about", html:"<b>About</b>"}, {path:"/profile/:id", html:"<b>Profile</b>"}]

const pageRoutes = urlPatterns(pages)

let pathname = "/" // from url

let subdomain = "" // optional

const [routeHmtl, params] = router({routes:pageRoutes, pathname, subdomain } )



console.log(routeHtml, params)

  // /
  <b>Home</a>, {}
  
// /about
  <b>About</a>, {}
  
 // /profile/123
  <b>Profile</a>, {id:123}
  
  // /heh
  undefined, {}

```
