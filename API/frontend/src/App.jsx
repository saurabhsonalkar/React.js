import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  // const [products, error, loading]= customReactQuery('/api/products')

  const[products, setProducts] = useState([])
  const[error, setError] =useState(false)
  const[loading, setLoading] = useState(false)
  const[search, setSearch] = useState('')

  useEffect(()=>{
    const controller = new AbortController()
    ;(async()=>{
      try {
        setLoading(true)
        setError(false);
        const response = await axios.get('/api/products?search='+search,{
          signal: controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error))
        {
          console.log('Request canceled', error.message);
          return;
          
        }
        setError(true)
        setLoading(false)
      }
      
    })()

    //cleanup
    return ()=> {
      controller.abort()
    }
  },[search])
  
  // if(error)
  // {
  //   return <h1>Hey somthing went wrong</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
    <h1>Chai aur API in react</h1>
    <input type="text" placeholder='Search' 
    value={search}
    onChange={(e)=> setSearch(e.target.value)}/>

    {loading && (<h1>Loading...</h1>)}
    {error &&(<h1>Something went wrong</h1>)}



    <h2>Numbers of products are: {products.length}</h2>
    </>
  )
}

export default App

// const customReactQuery = ( urlPath)=>{
//   const[products, setProducts] = useState([])
//   const[error, setError] =useState(false)
//   const[loading, setLoading] = useState(false)

//   useEffect(()=>{
//     ;(async()=>{
//       try {
//         setLoading(true)
//         setError(false);
//         const response = await axios.get(urlPath)
//         console.log(response.data);
//         setProducts(response.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }
      
//     })()
//   },[])

//   return [products, error, loading]
 
// }
