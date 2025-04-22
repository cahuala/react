import { Routes, Route } from "react-router"
import { App } from "../App"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<App />} />
      {/* Add more routes here as needed */}
    </Routes>
  )
}

