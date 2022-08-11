
import { useState } from "react"

const MoneySlider = () => {

    const [amount, setAmount] = useState(50)

  return (
    <div className="payment--money-slider">
        <div className="money-slider--text">
            <p>100K PAGEVIEWS</p>
            <span>
                <h1>${amount}</h1>
                <p>/month</p>
            </span>
        </div>

        <div className="money-slider--slider">
            <input type="range" min="1" max="100" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
    </div>
  )
}

export default MoneySlider