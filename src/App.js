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

const PrimoData = [
  {
    imgLink:
      "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg1.svg",
    title: "1 of 5 buses qualify",
    description:
      "Primo’s strict safety qualification ensures a safer travel for you",
    backgroundColor: "#387A79",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/primoSection/primoSubImg2.svg",
    title: "Preferred by 90%",
    description:
      "90% of travellers re-book Primo buses for its punctuality and comfort",
    backgroundColor: "#387A79",
  },
  {
    imgLink:
      "https://s2.rdbuz.com/web/images/homeV2/primoSection/primoSubImg3.svg",
    title: "9 Lac+ monthly travellers",
    description: "In 2022, 9 Lac+ people traveled with Primo every month",
    backgroundColor: "#387A79",
  },
];

const PartneredRTCs = [
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/10283.png",
    title: "APSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/GSRTC.svg",
    title: "GSRTC",
  },
  {
    imgLink: "https://st.redbus.in/Images/carousel/TSRTC.png",
    title: "TSRTC",
  },
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/10823.png",
    title: "MSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/KERALA-RTC.svg",
    title: "Kerala RTC",
  },
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/16426.png",
    title: "SBSTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/RSRTC.svg",
    title: "RSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/UPSRTC.svg",
    title: "UPSRTC",
  },
];

const GlobalPresenceCountries = [
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Colombia.svg",
    title: "Colombia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/India.svg",
    title: "India",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Indonesia.svg",
    title: "Indonesia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Malaysia.svg",
    title: "Malaysia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Peru.svg",
    title: "Peru",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Singapore.svg",
    title: "Singapore",
  },
];

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar></Navbar>
      </nav>
      {/* <input type="search" /> */}
      <div className="SearchBuses">
        <div className="searchBusesElement element1">
          <img src="./Images/fromBus.png" alt="" />
          <p>From</p>
        </div>
        <div className="searchBusesElement element2">
          {" "}
          <img src="./Images/toBus.png" alt="" />
          To
        </div>
        <div className="searchBusesElement">
          <img src="./Images/dateImg.png" alt="" />
          Date
        </div>
        <div className="searchBusesElement searchBuses">SEARCH BUSES</div>
      </div>
      {/* Trending-Offers */}
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
      <div>
        <img src="https://st.redbus.in/Images/99/webreferal.png" alt="" />
      </div>
      {/* ******************* */}

      {/* Primo Cards Section */}

      <div
        className="TrendingOffers"
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        {PrimoData.map((x) => {
          return (
            <div className="card primoCard">
              <img src={x.imgLink} alt="" />
              <div className="card_content">
                <h3>{x.title}</h3>
                <p>{x.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ******************* */}

      {/* PARTNERED WITH RTC's Section  */}
      <div className="GlobalPresence">
        <h1>PARTNERED WITH</h1>
        <div>
          <h1>25 RTC'S</h1>
          <button>View All</button>
        </div>
        <div className="countries">
          {PartneredRTCs.map((x) => {
            return (
              <div className="country partneredRtc">
                <img src={x.imgLink} alt="" />
                <h3>{x.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      {/* ******************* */}

      {/* Global Presence  */}
      <div className="GlobalPresence">
        <h1>GLOBAL PRESENCE</h1>
        <div className="countries">
          {GlobalPresenceCountries.map((x) => {
            return (
              <div className="country">
                <img src={x.imgLink} alt="" />
                <h3>{x.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      {/* ******************* */}
    </div>
  );
}

export default App;
