// import React from "react"
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from "./Home"
// import ViewAll from "./ViewAll"
// import PageNotFound from "./PageNotFound"
// import Layout from "./Layout"
// import SingleEmp from "./SingleEmp"
// import Edit from "./Edit"
// import "./global.css"



// const App=()=>{
//     return(
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element = {<Layout/>}>
//                         <Route index element= {<Home/>} />
//                         <Route path="/viewall" element={<ViewAll/>}/>
//                         <Route path="/singleemp/:id" element={<SingleEmp/>}/>
//                         <Route path="/edit/:id" element={<Edit/>}/>
//                         <Route path= "*" element={<PageNotFound/>}/>
//                     </Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default App


// ! object way of  routing

import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./Home"
import ViewAll from "./ViewAll"
import PageNotFound from "./PageNotFound"
import Layout from "./Layout"
import SingleEmp from "./SingleEmp"
import Edit from "./Edit"
import "./global.css"
import { Toaster } from 'react-hot-toast'

let routing = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true,
                element :<Home/>
            },
            {
                path :"/viewall",
                element :<ViewAll/>
            },
            {
                path :"/singleemp/:id",
                element :<SingleEmp/>
            },
            {
                path:"/edit/:id",
                element :<Edit/>
            },
            {
                path :"*",
                element :<PageNotFound/>
            },
        ],
    }
])

const App = () => {
  return (
    <>
        <div><Toaster/></div>
      <RouterProvider router={routing}/>
    </>
  )
}

export default App








// install --> npm install -g json-server   -- > -g = global ,so it will not show in package.json

// create json in root folder---> i created db.json


// to run server --> npx json-server --watch db.json --port=5000


// slug -->extra content added to url ---based upon slug we can get diff data on webpage

// ? dynamic Routing -- > path/url will be changed for all the content (for each content path will be changed based upon slug)

// ?static routing --> path/url will remain constant for all content (no change in url)


// ? 'react-icons'---this is the library for icons--> icons are stored in the form of component --> apply icons
// install --> npm add react-icons

// ! react-hot-toast --> library form which we can toast the message
// ? popup message like this 

// 1 install -->npm add react-hot-toast 
// 2 Add Toaster to your app ,Make sure it's placed at the top,<div><Toaster/></div>

// ! favicon (favourite icon) --> https://favicon.io/
// ? 
