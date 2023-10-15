export default function Home() {
  return (
    <>
      <h1 className='mt-20'>Login</h1>
      <form>
        <label>Username</label>
        <input type="text"/>
        <label>Password</label>
        <input type="password"/>
        <input type="Submit" value={"Login"}/>
      </form>
      </>
  )
}
