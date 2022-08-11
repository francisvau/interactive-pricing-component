
const Billing = () => {
  return (
    <div className="payment--billing">
      <p className="billing--option">Monthly Billing</p>
      <label className="billing--switch"><input type="checkbox" /><div></div></label>
      <p className="billing--option">Yearly Billing</p>
      <p className="billing--discound">25% discount</p>
    </div>
  )
}

export default Billing