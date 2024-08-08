import  {Link,Outlet} from 'react-router-dom';
function App() {
  return (
    <>
    <h1>hello ia ma a home component </h1>
    <nav>
     <Link to="/invoices"> <span>invoice</span> </Link>
     <Link to="/expences"> <span>expences</span></Link>
    </nav>
    <Outlet></Outlet> 
    {/* this outlet  should be used in parent element  to render therir child route element  */}

    {/* <h1>i am after outlet </h1> */}
    </>
  )
}

export default App
