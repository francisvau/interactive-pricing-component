
import Billing from "./Billing"
import MoneySlider from "./MoneySlider"

const Payment = () => {
  return (
    <div className="pricecard--payment">
      <MoneySlider />
      <Billing />
    </div>
  )
}

export default Payment