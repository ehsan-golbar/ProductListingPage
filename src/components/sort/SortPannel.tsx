import { useState } from "react";
import {  ButtonGroup, Dropdown, Stack, ToggleButton } from "react-bootstrap";
// import { Prev } from "react-bootstrap/esm/PageItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { toggleAscPrice, toggleAscRate } from "../../store/slices/SortSlice";

function SortPannel() {


    const [priceChecked, setPriceChecked] = useState(false);
    const [rateChecked, setRateChecked] = useState(false);


    // const [ascPrice, setAscPrice] = useState(true)
    // const [ascRate, setAscRate] = useState(true)

    const dispatch = useDispatch();
    const  ascPrice = useSelector((state: RootState)  => state.sort.ascPrice);
    const  ascRate = useSelector((state: RootState)  => state.sort.ascRate);

    

    const handleAscPrice = () =>{
       dispatch( toggleAscPrice())
    }
  

    
    const handleAscRate = () =>{
      dispatch(toggleAscRate())
  }



 return(
    <>
    <Stack direction="horizontal" className="d-flex justify-content-start align-items-center" gap={3} style={{ backgroundColor: "#d1d0d0", padding:'1rem'}}>

        <p>Sort by : </p>
        {/* <Button className="h-auto"  size="sm">
        <p>price</p>
        </Button>
        <Button>
        <p>rate</p>
        </Button> */}


        <ButtonGroup >
        <ToggleButton
          id="toggle-check-1"
          type="checkbox"
          variant="outline-primary"
          checked={priceChecked}
          value="1"
          onChange={(e) => setPriceChecked(e.currentTarget.checked)}
        >
          Price
        </ToggleButton>
      </ButtonGroup>


{ priceChecked &&
      <Dropdown>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        {ascPrice ? 'asc' : 'dsc'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleAscPrice}>{!ascPrice ? 'asc' : 'dsc'}</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>

}



      

      <ButtonGroup >
        <ToggleButton
          id="toggle-check-2"
          type="checkbox"
          variant="outline-primary"
          checked={rateChecked}
          value="2"
          onChange={(e) => setRateChecked(e.currentTarget.checked)}
        >
          Rate
        </ToggleButton>
      </ButtonGroup>



{  rateChecked &&    <Dropdown>
      <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
        {ascRate ? 'asc' : 'dsc'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleAscRate}>{!ascRate ? 'asc' : 'dsc'}</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>

}
        
        
    </Stack>
    </>
 )   
}


export default SortPannel;