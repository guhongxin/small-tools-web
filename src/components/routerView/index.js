import React from 'react'
import { Route } from "react-router-dom"
const RouteWithSubRoutes = route => {
  return (<Route
    path={'/'+route.path}
    component={route.component}/>)
}
const RouterView = ({routes}) => {
  return (routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />))
}
export default RouterView