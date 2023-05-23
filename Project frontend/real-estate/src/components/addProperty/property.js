const Property=(props)=>{
    return(
        <form className="form-addprop">
        <div>
        <label >Length</label><br></br>
        <input type="text" placeholder="Example: 10000" value={props.form.length} onChange={(e)=>props.setform({...props.form,length:e.target.value})}/>
        </div>
        <div>
        <label >Breath</label><br></br>
        <input type="text" placeholder="Example: 10000" value={props.form.breath} onChange={(e)=>props.setform({...props.form,breath:e.target.value})}/>
        </div>
        <div>
        <label >Toatal Area</label><br></br>
        <input required type="text" placeholder="Example: 7500 " value={props.form.toatalArea} onChange={(e)=>props.setform({...props.form,toatalArea:e.target.value})}/>
        </div>
        <div>
        <label >Area Unit</label><br></br>
        <input type={"text"}  required placeholder="Area Unit" value={props.form.areaUnit} onChange={(e)=>props.setform({...props.form,areaUnit:e.target.value})}/>
        </div>
        <div>
        <label >No of BHK</label><br></br>
        <select name="No of BHK" placeholder="Select No of BHK " value={props.form.noOfBhk} onChange={(e)=>props.setform({...props.form,noOfBhk:e.target.value})}>
        <option value="" disabled selected>Select No of BHK </option>
        <option value="1bhk">1BHk</option>
        <option value="2bhk">2BHk</option>
        <option value="3bhk">3BHk</option>
        <option value="morethan">Morethan</option>

        </select>
        </div>
        <div>
        <label >No of floor</label><br></br>
        <select name="No of floor" placeholder="Select No of Floor" value={props.form.noOfFloor} onChange={(e)=>props.setform({...props.form,noOfFloor:e.target.value})}>
        <option value="" disabled selected>Select No of Floor </option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="morethan">More than</option>


       </select>
       
        </div>
        <div>
        <label >Attached</label><br></br>
        <select name="Attached" placeholder="Select Attached" value={props.form.attached} onChange={(e)=>props.setform({...props.form,attached:e.target.value})}>
        <option value="" disabled selected>Select Attached </option>
        <option value="Yes">YES</option>
        <option value="No">NO</option>

        </select>
        </div>
        <div>
        <label >Western Toilet</label><br></br>
        <select name="Western Toilet" placeholder="select Western Toilet" value={props.form.westernToilet} onChange={(e)=>props.setform({...props.form,westernToilet:e.target.value})}>
        <option value="" disabled selected>Select Western Toilet</option>
        <option value="Yes">YES</option>
        <option value="No">NO</option>
        
        </select>
        </div>
        <div>
        <label >Furnished</label><br></br>
        <select name="Furnished" placeholder="Select Furnished " value={props.form.furnished} onChange={(e)=>props.setform({...props.form,furnished:e.target.value})}>
        <option value="" disabled selected>Select Furnished</option>
        <option value="Yes">YES</option>
        <option value="No">NO</option>
       </select>
        </div>
        <div>
        <label >Car Parking</label><br></br>
        <select name="Car Parking" placeholder="Select Car Parking " value={props.form.carParking} onChange={(e)=>props.setform({...props.form,carParking:e.target.value})}>
        <option value="" disabled selected>Select Car Parking</option>
        <option value="Yes">YES</option>
        <option value="No">NO</option>
        </select>
        </div>
        <div>
        <label >Lift</label><br></br>
        <select name="Lift" placeholder="Select Lift" value={props.form.lift} onChange={(e)=>props.setform({...props.form,lift:e.target.value})}>
        <option value="" disabled selected>Select Lift</option>
        <option value="Yes">YES</option>
        <option value="No">NO</option>
        </select>
        </div>
        <div>
        <label >Electricity</label><br></br>
        <input type="text" placeholder="Example:3 Phase" value={props.form.electricity} onChange={(e)=>props.setform({...props.form,electricity:e.target.value})}/>
        </div>
        <div>
        <label >Facing</label><br></br>
        <select  name="Facing" placeholder="select Facing" value={props.form.facing} onChange={(e)=>props.setform({...props.form,facing:e.target.value})}>
        <option value="" disabled selected>Select Facing</option>
        <option value="north">North</option>
        <option value="south">South</option>
        <option value="west">West</option>
        <option value="east">East</option>

        </select>
        </div>
        
        
                
    </form>
    )

}
export default Property;
