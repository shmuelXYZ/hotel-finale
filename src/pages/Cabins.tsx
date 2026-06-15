import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showNewCabinForm, setShowNewCabinForm] = useState(false);
  return (
    <>
      <Row direction="row">
        <Heading type="h1">All cabins</Heading>
        <p>sort / filter</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowNewCabinForm(!showNewCabinForm)} />
        {showNewCabinForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
