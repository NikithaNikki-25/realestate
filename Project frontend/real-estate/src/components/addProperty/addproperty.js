import Sidebar from "../sidebar"
import Header from "../header"
import MainForm from "./mainForm"
const Addproperty=(props)=>{
    const {token,settoken,id,setid,name}=props
    return(
        <>
        <div className='property'>
        <div className='child1'>
        <Sidebar/>
        </div>
        <div className='child2'>
        <Header token={token} settoken={settoken} id={id} setid={setid} name={name}/>
        <MainForm token={token} settoken={settoken}/>
        </div>
        </div>
        </>
    )
}
export default Addproperty;