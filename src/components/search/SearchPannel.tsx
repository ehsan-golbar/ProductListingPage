import { Container, Form, Row, Stack } from "react-bootstrap";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../store/slices/CategorySlice";
import {
  setMaxPriceRange,
  setMinPriceRange,
} from "../../store/slices/PriceSlice";

interface FilterItem {
  type: FormCheckType;
  cat: string;
}

function SearchPannel() {
  const dispatch: AppDispatch = useDispatch();
  const minPriceRange = useSelector(
    (state: RootState) => state.price.minPriceRange
  );
  const maxPriceRange = useSelector(
    (state: RootState) => state.price.maxPriceRange
  );

  const handleMinRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = parseInt(e.target.value, 10);
    if (newMinPrice < maxPriceRange) {
      dispatch(setMinPriceRange(newMinPrice));
    } else {
      dispatch(setMinPriceRange(maxPriceRange - 1));
    }
  };

  const handleMaxRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value, 10);
    if (newMaxPrice > minPriceRange) {
      dispatch(setMaxPriceRange(newMaxPrice));
    } else {
      dispatch(setMaxPriceRange(minPriceRange + 1));
    }
  };

  const filterList: FilterItem[] = [
    { type: "checkbox", cat: "Electronics" },
    { type: "checkbox", cat: "Jewelery" },
    { type: "checkbox", cat: "Men's clothing" },
    { type: "checkbox", cat: "Women's clothing" },
  ];

  const handleCategoryChange = (cat: string) => {
    dispatch(toggleCategory(cat));
  };

  return (
    <>
      <Stack
        className="d-flex justify-content-start mt-3 py-2 shadow d-none d-md-flex px-xl-5 px-md-4 px-lg-4"
        style={{
          backgroundColor: "#FFFFFF",
          height: "100vh",
          borderRadius: "10px",
          position: "fixed",
          top: "50px",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "23px" }}>Filter</p>

        <Stack style={{ marginLeft: "1rem" }} gap={3}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Category</p>

          <Form style={{ marginLeft: "1.5rem" }}>
            {filterList.map((item) => (
              <div key={`default-${item.cat}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={item.type}
                  id={`default-${item.cat}`}
                  label={`${item.cat}`}
                  onChange={() => handleCategoryChange(item.cat)}
                  style={{ fontWeight: "bold" }}
                />
              </div>
            ))}
          </Form>

          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Price</p>

          <Stack
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              padding: 0,
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Form.Label style={{ fontWeight: "bold" }}>
              min : ${minPriceRange}
            </Form.Label>
            <Form.Range
              value={minPriceRange}
              onChange={handleMinRangeChange}
              min={0}
              max={1000}
            />

            <Form.Label style={{ fontWeight: "bold" }}>
              max : ${maxPriceRange}
            </Form.Label>
            <Form.Range
              value={maxPriceRange}
              onChange={handleMaxRangeChange}
              min={0}
              max={1000}
            />
          </Stack>
        </Stack>
      </Stack>

      <Container
        className="pe-5 shadow d-md-none"
        style={{
          backgroundColor: "#FFFFFF",
          maxWidth: "100%",
          borderRadius: "10px",

          marginTop: "5rem",
        }}
      >
        <Row>
          <p style={{ fontWeight: "bold", fontSize: "23px" }}>Filter</p>
        </Row>

        <Row>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Category</p>
          <Form style={{ marginLeft: "1.5rem" }} className="d-flex gap-4">
            <Row xs={2} sm={4}>
              {filterList.map((item) => (
                <div key={`default-${item.cat}`} className="mb-3">
                  <Form.Check // prettier-ignore
                    type={item.type}
                    id={`default-${item.cat}`}
                    label={`${item.cat}`}
                    onChange={() => handleCategoryChange(item.cat)}
                    style={{ fontWeight: "bold" }}
                  />
                </div>
              ))}
            </Row>
          </Form>
        </Row>

        <Row>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Price</p>
        </Row>
        <Row>
          {" "}
          <Stack
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              padding: 0,
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Form.Label style={{ fontWeight: "bold" }}>
              min : ${minPriceRange}
            </Form.Label>
            <Form.Range
              value={minPriceRange}
              onChange={handleMinRangeChange}
              min={0}
              max={1000}
            />

            <Form.Label style={{ fontWeight: "bold" }}>
              max : ${maxPriceRange}
            </Form.Label>
            <Form.Range
              value={maxPriceRange}
              onChange={handleMaxRangeChange}
              min={0}
              max={1000}
            />
          </Stack>
        </Row>
      </Container>
    </>
  );
}

export default SearchPannel;
