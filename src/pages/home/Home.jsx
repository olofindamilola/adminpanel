import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbarr from "../../components/navbar/Navbarr";
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget";
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbarr />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
        </div>
      </div>
        
    </div>
  )
}

export default Home