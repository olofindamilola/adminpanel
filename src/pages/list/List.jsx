import Datatable from "../../components/datatable/Datatable"
import Navbarr from "../../components/navbar/Navbarr"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbarr />
        <Datatable />
      </div>
    </div>
  )
}

export default List