import React from 'react'
import axios from 'axios'
function Cart() {   
    var [arr, setarr] = React.useState([])
    React.useEffect(()=> {

        axios.get("https://restcountries.com/v3.1/all").then((res)=> {
        setarr([...res.data])
    }, [])
})
// console.log(arr)
  return (
    <div>
        <table border={2}>
            <tr>
                <th>NAME</th>
                <th>POPULATION</th>
                <th>REGION</th>
            </tr>
            
                {
                    arr?.map((e)=> {
                        return<tr>
                            <td>{e.name.common}</td>
                            <td>{e.population}</td>
                            <td>{e.region}</td>
                        </tr>

                    })
                }
        </table>
        
    </div>
  )
}

export default Cart