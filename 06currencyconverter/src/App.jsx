import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './Components'
import {useState} from 'react'
 
function App() {
  const[amount, setAmount] = useState(0)
  const[from , setFrom] = useState('inr')
  const[to , setTo] = useState('usd')
  const[conertedAmount, setConvertAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(conertedAmount)
  }

   const convert = () => {
    setConvertAmount(amount*currencyInfo[to])

   }
  
  return (
    <>
     <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?t=st=1731842163~exp=1731845763~hmac=834bdf0ac9a403d3291ba3378ef63d9a6304e53efa220b957c04808753d18d7b&w=740')`,
                
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(amount)=>setAmount(amount)}
                                onCurrencyChange={(options)=>setFrom(options)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={conertedAmount}
                                currencyOptions = {options}
                                onCurrencyChange={(options)=> setTo(options)}
                                selectCurrency={to}
                                
                                 
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} To {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
