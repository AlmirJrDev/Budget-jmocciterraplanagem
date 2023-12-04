import { Budget } from "./components/HeaderBudget"
import { Header } from "./components/Header"
import { BudgetSheet } from "./components/Budget"
import { TableService } from "./components/TableService"

function App() {
  
  return (
    <>
     <Header/>
     <Budget />
     <BudgetSheet /> 
     <TableService/>
    </>
  )
}

export default App
