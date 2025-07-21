
function App() {
  // create a state member for keeping user details
  const [user, setUser] = useState(null)

  return (
    <>
      <AuthContext value={{ user, setUser }}>
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />
        </Routes>
      </AuthContext>

      <ToastContainer />
    </>
  )
}

export default App

