import { FormEvent, useEffect, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"


const AllLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@$%^&*()_+";

const Coupon = () => {

  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeChracters, setIncludeChracters] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopide] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");


  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopide(true);
  }


  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!includeNumbers && !includeChracters && !includeSymbols) return alert("Please Selects One At Least");

    let result: string = prefix || "";
    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (includeChracters) entireString += AllLetters;
      if (includeNumbers) entireString += allNumbers;
      if (includeSymbols) entireString += allSymbols;

      const randomNumber: number = ~~(Math.random() * entireString.length)

      result += entireString[randomNumber];
    }

    setCoupon(result);
  }

  useEffect(() => {
    setIsCopide(false);
  }, [coupon])

  return (
    <div className="adminContainer">

      {/* <!-- sidebar --> */}
      <AdminSidebar />

      {/* <!-- main --> */}
      <main className="appContainer">
        <h1>Coupon</h1>
        <section>
          <form className="couponform" onSubmit={submitHandle}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={e => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />

            <fieldset>
              <legend>Include</legend>

              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(prev => !prev)}
              />
              <span>Numbers</span>

              <input
                type="checkbox"
                checked={includeChracters}
                onChange={() => setIncludeChracters(prev => !prev)}
              />
              <span>Characters</span>

              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(prev => !prev)}
              />
              <span>Symbols</span>

            </fieldset>

            <button type="submit">Generate</button>
          </form>

          {
            coupon && <code>{coupon} <span onClick={() => copyText(coupon)}>{isCopied ? "Copied" : "Copy"}</span></code>
          }
        </section>
      </main>
    </div>
  )
}

export default Coupon