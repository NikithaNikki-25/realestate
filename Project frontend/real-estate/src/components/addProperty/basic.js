const Basic=(props)=>{
    return(
        <>
     
        <form className="form-addprop">
            <div>
            <label >Property Type</label><br></br>
            <select required name="propertyType"  placeholder="Select Property Type" value={props.form.propertyType} onChange={(e)=>props.setform({...props.form,propertyType:e.target.value})}>
            <option className="gray" value="" disabled selected>Select Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="land">Land</option>
            <option value="shop">Shop</option>
            </select></div>
            <div>
            <label >Negotiable</label><br></br>
            <select name="negotiable" placeholder="Select Negotiable " value={props.form.negotiable} onChange={(e)=>props.setform({...props.form,negotable:e.target.value})}>
            <option value="" disabled selected>Select Negotiable</option>
            <option value="Yes">YES</option>
            <option value="No">NO</option>

            </select>
            </div>
            <div>
            <label >Price</label><br></br>
            <input type="text" placeholder="Example: 10000 " value={props.form.price} onChange={(e)=>props.setform({...props.form,price:e.target.value})}/>
            </div>
            <div>
            <label >Ownership</label><br></br>
            <select name="Ownership" placeholder="Select Ownership " value={props.form.ownerShip} onChange={(e)=>props.setform({...props.form,ownerShip:e.target.value})}>
                <option value="" disabled selected>Select Ownership </option>
                <option value="Owner">Owner</option>
                <option value="Dealer">Dealer</option>
             </select>
            </div>
            <div>
            <label >Property Age</label><br></br>
            <select name="Property Age" placeholder="Select Property Age " value={props.form.propertyAge} onChange={(e)=>props.setform({...props.form,propertyAge:e.target.value})}>
            <option value="" disabled selected>Select Property Age </option>

            <option value="lessthan2years">less than 2 Years</option>
            <option value="lessthan5years">less than 5 Years</option>
            <option value="lessthan10years">less than 10 Years</option>
            <option value="morethan10years">More than 10 Years</option>
            
           
            </select>
            </div>
            <div>
            <label >Property Approved</label><br></br>
            <select name="Property Approved" placeholder="Property Approved" value={props.form.propertyApproved} onChange={(e)=>props.setform({...props.form,propertyApproved:e.target.value})}>
            <option value="" disabled selected> Property Approved </option>
            <option value="Yes">YES</option>
            <option value="No">NO</option>

            </select>
            </div>
            <div>
            <label >Property Description</label><br></br>
            <input type="text" required placeholder="" value={props.form.propertyDescription} onChange={(e)=>props.setform({...props.form,propertyDescription:e.target.value})}/>
            </div>
            <div>
            <label >Bank Loan</label><br></br>
            <select type="text" placeholder="Bank Loan" value={props.form.bankLoan} onChange={(e)=>props.setform({...props.form,bankLoan:e.target.value})}>
            <option value="" disabled selected>Bank Loan</option>
            <option value="available">Available</option>
            <option value="non-available">Non-Available</option>

            </select>
            </div>
            
                    
        </form>
        </>
    )
}
export default Basic;
