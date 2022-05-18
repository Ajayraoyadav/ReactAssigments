function Cart(props) {
  console.log("props:", props);
  return (
    <div
      style={{ width: "50%", margin: "auto", background: "orange" ,padding:"10px"}}
      className="parentdiv"
    >
      <div className="right_content">
        <h3>{props.date}</h3>
        <button className="button">{props.heading}</button>
        <h1>{props.subheading} </h1>
        <h1>{props.payop}</h1>
        <h3>{props.lastname}</h3>
      </div>
      <div className="left_content">
        <img className="imga" src={props.logourl}></img>
      </div>
    </div>
  );
}

export { Cart };
