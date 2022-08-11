
const MoneySlider = () => {
  return (
    <div className="payment--money-slider">
        <div className="money-slider--text">
            <p>100K PAGEVIEWS</p>
            <span>
                <h1>$16.00</h1>
                <p>/month</p>
            </span>
        </div>

        <div className="money-slider--slider">
            <input type="range" min="1" max="100" />
        </div>
    </div>
  )
}

export default MoneySlider