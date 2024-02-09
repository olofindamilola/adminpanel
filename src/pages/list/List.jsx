import Navbarr from "../../components/navbar/Navbarr"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbarr />
      </div>
    </div>
  )
}

export default List