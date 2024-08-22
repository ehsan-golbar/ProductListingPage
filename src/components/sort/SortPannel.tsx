import { useState } from "react";
import {  ButtonGroup, Stack, ToggleButton } from "react-bootstrap";

function SortPannel() {


    const [priceChecked, setPriceChecked] = useState(false);
    const [rateChecked, setRateChecked] = useState(false);

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
      { name: 'asc', value: '1' },
      { name: 'dsc', value: '2' }
    ];
  


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

      

      <ButtonGroup >
        <ToggleButton
          id="toggle-check-2"
          type="checkbox"
          variant="outline-primary"
          checked={rateChecked}
          value="1"
          onChange={(e) => setRateChecked(e.currentTarget.checked)}
        >
          Rate
        </ToggleButton>
      </ButtonGroup>


      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx === parseInt( radioValue )?  'outline-primary' : 'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>


        
        
    </Stack>
    </>
 )   
}


export default SortPannel;