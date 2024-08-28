import { useState } from "react";
import {
  ButtonGroup,
  Dropdown,
  Row,
  Stack,
  ToggleButton,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import {
  setBestRate,
  toggleAscPrice,
  toggleBestRate,
} from "../../store/slices/SortSlice";

function SortPannel() {
  const [priceChecked, setPriceChecked] = useState(false);

  const dispatch = useDispatch();
  const ascPrice = useSelector((state: RootState) => state.sort.ascPrice);
  const bestRate = useSelector((state: RootState) => state.sort.bestRate);

  const handleAscPrice = () => {
    dispatch(toggleAscPrice());
  };

  return (
    <>
      <Row className="mt-5">
        <Stack
          direction="horizontal"
          className="d-flex justify-content-start align-items-center mt-3 rounded-3  d-none d-md-flex shadow "
          gap={3}
          style={{
            backgroundColor: "#FFFFFF",

            position: "fixed",
            top: "50px",
            zIndex: "999",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginTop: "0.5rem",
              width: "fit-content",
            }}
          >
            Sort by :
          </p>

          <ButtonGroup>
            <ToggleButton
              id="toggle-check-1"
              type="checkbox"
              variant="outline-primary"
              checked={priceChecked}
              value="1"
              onChange={(e) => {
                dispatch(setBestRate(false));
                setPriceChecked(e.currentTarget.checked);
              }}
            >
              Price
            </ToggleButton>
          </ButtonGroup>

          {priceChecked && (
            <Dropdown>
              <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                {ascPrice ? "asc" : "dsc"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleAscPrice}>
                  {!ascPrice ? "asc" : "dsc"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}

          <ButtonGroup>
            <ToggleButton
              id="toggle-check-2"
              type="checkbox"
              variant="outline-primary"
              checked={bestRate}
              value="2"
              onChange={() => {
                setPriceChecked(false);
                dispatch(toggleBestRate());
              }}
            >
              Best Rate
            </ToggleButton>
          </ButtonGroup>
        </Stack>
      </Row>

      <Stack
        direction="horizontal"
        className="d-flex justify-content-start align-items-center mt-3 rounded-3 d-md-none shadow"
        gap={3}
        style={{
          backgroundColor: "#FFFFFF",

          top: "50px",
          zIndex: "999",
        }}
      >
        <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>Sort by : </p>

        <ButtonGroup>
          <ToggleButton
            id="toggle-check-1"
            type="checkbox"
            variant="outline-primary"
            checked={priceChecked}
            value="1"
            onChange={(e) => {
              dispatch(setBestRate(false));
              setPriceChecked(e.currentTarget.checked);
            }}
          >
            Price
          </ToggleButton>
        </ButtonGroup>

        {priceChecked && (
          <Dropdown>
            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
              {ascPrice ? "asc" : "dsc"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleAscPrice}>
                {!ascPrice ? "asc" : "dsc"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}

        <ButtonGroup>
          <ToggleButton
            id="toggle-check-2"
            type="checkbox"
            variant="outline-primary"
            checked={bestRate}
            value="2"
            onChange={() => {
              setPriceChecked(false);
              dispatch(toggleBestRate());
            }}
          >
            Best Rate
          </ToggleButton>
        </ButtonGroup>
      </Stack>
    </>
  );
}

export default SortPannel;
