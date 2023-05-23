const Location=(props)=>{
    return(
        <form className="form-addprop">
        <div>
        <label >Email</label><br></br>
        <input type="email" placeholder="Email" value={props.form.email} onChange={(e)=>props.setform({...props.form,email:e.target.value})}/>
        </div>
        <div>
        <label >City</label><br></br>
        <input type="text" placeholder="Select City " value={props.form.city} onChange={(e)=>props.setform({...props.form,city:e.target.value})}/>
        </div>
        <div>
        <label >Area</label><br></br>
        <input type="text" placeholder="select Area" value={props.form.area} onChange={(e)=>props.setform({...props.form,area:e.target.value})}/>
        </div>
        <div>
        <label >Pincode</label><br></br>
        <input type="text" placeholder="Select Pincode " value={props.form.pincode} onChange={(e)=>props.setform({...props.form,pincode:e.target.value})}/>
        </div>
        <div>
        <label >Address</label><br></br>
        <input type="text" placeholder="Address " value={props.form.address} onChange={(e)=>props.setform({...props.form,address:e.target.value})}/>
        </div>
        <div>
        <label >Landmark</label><br></br>
        <input type="text" placeholder="Landmark" value={props.form.landMark} onChange={(e)=>props.setform({...props.form,landMark:e.target.value})}/>
        </div>
        <div>
        <label >Latitude</label><br></br>
        <input type="text" placeholder="Latitude" value={props.form.latitude} onChange={(e)=>props.setform({...props.form,latitude:e.target.value})}/>
        </div>
        <div>
        <label >Longitude</label><br></br>
        <input type="text" placeholder="Longitude" value={props.form.longitude} onChange={(e)=>props.setform({...props.form,longitude:e.target.value})}/>
        </div>
        
                
    </form>
    )

}
export default Location;