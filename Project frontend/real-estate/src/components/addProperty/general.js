import {useState} from "react"
const General=(props)=>{
    const[type,settype]=useState(true)
    // const file=(e)=>{
    //     e.preventDefault()
    //     settype(!type)
    // }
    const upload=()=>{
        if(type){
        return(
            <>
              <div id="camera" onClick={()=>settype(!type)}>
                
                <span>Add photo</span>
                <i id="facam" className="fa-solid fa-camera"></i>
                
            
                </div>
            </>
        )}
        else{
            return(
                <>
                
                                      
                <input type="file" name="file"/>
                <br></br>
                <input type="submit" onClick={()=>settype(!type)}/>
               
              
            </>

            )
        }
    }
    return(
        <form className="form-addprop">
            <div>
            <label >Name</label><br></br>
            <input type="text" placeholder="Owner" value={props.form.name} onChange={(e)=>props.setform({...props.form,name:e.target.value})}/>
            </div>
            <div>
            <label >Mobile</label><br></br>
            <input   type={"text"}  required placeholder="Enter Mobile Number" value={props.form.mobile} onChange={(e)=>props.setform({...props.form,mobile:e.target.value})}/>
            </div>
            <div>
            <label >Posted By</label><br></br>
            <input type="text" placeholder="Posted By " value={props.form.postedBy} onChange={(e)=>props.setform({...props.form,postedBy:e.target.value})}/>
            </div>
            <div>
            <label >Sale Type</label><br></br>
            <select name="Sale Type" placeholder="Please Select " value={props.form.saleType} onChange={(e)=>props.setform({...props.form,saleType:e.target.value})}>
            <option value="" disabled selected>Please Select </option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>

            </select>
            </div>
            <div>
            <label >Featured Package</label><br></br>
            <select name="Featured Package" placeholder="Please Select " value={props.form.featuredPackage} onChange={(e)=>props.setform({...props.form,featuredPackage:e.target.value})}>
            <option value="" disabled selected>Please Select </option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
            
            </select>
            </div>
            <div>
            <label >PPD Package</label><br></br>
            <select type="text" placeholder="Please Select" value={props.form.ppdPackage} onChange={(e)=>props.setform({...props.form,ppdPackage:e.target.value})}>
            <option value="" disabled selected>Please Select </option>
            <option value="Yes">YES</option>
            <option value="No">NO</option>

            </select>
            </div>
            <div className="camupload">
                {upload()}
            </div>
          
            
            
                    
        </form>
    )
}
export default General;