import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const TrendingOffers = [
  {
    imgLink:
      "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#1D4DA5",
  },
  {
    imgLink: "http://st.redbus.in/Images/INDOFFER/SUPERHIT/80x80_SUPERHIT.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#387A79",
  },
  {
    imgLink: "https://st.redbus.in/Images/INDOFFER/BUS200/80x80_BUS200.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#72171C",
  },
  {
    imgLink: "https://st.redbus.in/Images/INDOFFER/RB200/80x80_RB200.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#2F95AE",
  },
  {
    imgLink: "https://st.redbus.in/Images/APSRTC/new/APSRTC_3.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#1D4DA5",
  },
];

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar></Navbar>
      </nav>
      {/* <input type="search" /> */}

      <div className="TrendingOffersContainer">
        <h1>TRENDING OFFERS</h1>
        <div
          className="TrendingOffers"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          {TrendingOffers.map((x) => {
            return (
              <div
                className="card"
                style={{ backgroundColor: x.backgroundColor }}
              >
                <img src={x.imgLink} alt="" />
                <div className="card_content">
                  <p>{x.vehicle}</p>
                  <h3>{x.title}</h3>
                  <p>{x.validUpto}</p>
                  <p>{x.couponCode}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
