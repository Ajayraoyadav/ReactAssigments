
function RestaurantDetails(item) {
    return(
      <>
        {item.details.map((e) => {      
          
          return (
              <div key={e.id} className="resDeateils" >
                <div>
                <img style={{width:"220px"}} src={e.imgURL}/>
                </div>
                <div>
                <p style={{color:"red",fontSize:"20px",fontWeight:"bolder"}} >{e.title}</p>
                <p>{e.mrp}</p>
                <p>{e.sellingPrice}</p>
                <p>Accept online payment only</p>
                </div>
                <div>
                <p style={{backgroundColor:"green",width:"30px"}}>  {e.rating}</p>
                </div>
                <button style={{color:"green",border:"0"}} >Order Online </button>
              </div>
          )
        })}
         </>
    )
      
    }
    
    export default RestaurantDetails;