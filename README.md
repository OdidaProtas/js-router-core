# js-router-core


```javascript

const pages = [{path:"/", html:"<b>Home</b>"}, {path:"/about", html:"<b>About</b>"}, {path:"/profile/:id", html:"<b>Profile</b>"}]

const pageRoutes = urlPatterns(pages)

const [routeHmtl, params] = router(pageRoutes)



console.log(routeHtml, params)

HOME URL -> // /
  <b>Home</a>, {}
  
HOME URL -> // /about
  <b>About</a>, {}
  
 HOME URL -> // /profile/123
  <b>Profile</a>, {id:123}
  
  HOME URL -> // /heh
  undefined, {}

```
