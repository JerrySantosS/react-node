import React, { useEffect } from "react";
import axios from "axios";

function Page() {
  const [product, setProduct] = React.useState([]);

  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    await axios
      .get("/api")
      .then((data) => {
        setProduct(data.data[0]);
      })
      .catch((err) => console.err(err));
  }

  return (
    <div>
      <ul>
        {!product
          ? "Loading..."
          : product.map((i) => <li key={i.id}>{i.name}</li>)}
      </ul>

      <p>
        Este projeto têm o objetivo de dar um norte sobre como usar react+node
      </p>
    </div>
  );
}

export default Page;
