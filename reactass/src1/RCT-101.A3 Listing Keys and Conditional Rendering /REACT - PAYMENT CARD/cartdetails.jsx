import { Cart } from "./cart";

const data = {
  date: "28/10/2020",
  heading: "Case Study",
  subheading: "Amazon Gift",
  payop: "Pay",
  lastname: "Desktop - Mobile",
  logourl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9zfsiW7635aiQX2NPZViQNoFEwQ82s1Q0g&usqp=CAU",
};

const data2 = {
  date: "28/10/2020",
  heading: "Case Study",
  subheading: "Amazon Gift",
  payop: "Pay",
  lastname: "Desktop - Mobile",
  logourl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9zfsiW7635aiQX2NPZViQNoFEwQ82s1Q0g&usqp=CAU",
};

const data3 = {
  date: "28/10/2020",
  heading: "Case Study",
  subheading: "Amazon Gift",
  payop: "Payment",
  lastname: "MacOs - Mobile",
  logourl: "https://cdn-icons-png.flaticon.com/128/1532/1532495.png",
};

function CartDetails() {
  return (
    <>
      <Cart {...data} />
      <br/>
      <Cart {...data2} />
      <br/>
      <Cart {...data3} />
    </>
  );
}

export { CartDetails };
