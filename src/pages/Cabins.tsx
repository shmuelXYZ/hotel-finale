import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(() => {
    const data = getCabins();
    console.log(data);
  }, []);

  return (
    <Row direction="row">
      <Heading type="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
