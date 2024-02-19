import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import ListBook from "./components/ListBook"
import AddBook from "./components/AddBook"
import BookProvider from "./context/BookContext"
import EditBook from "./components/EditBook"

function App() {

  return (
    <>
    <BookProvider>
     <Header/>
     <Routes>
       <Route path="/" element={ <ListBook /> }/>
       <Route path="/add" element={ <AddBook /> }/>
       <Route path="/edit/:id" element={ <EditBook /> }/>
     </Routes>
     </BookProvider>
    </>
  )
}

export default App
