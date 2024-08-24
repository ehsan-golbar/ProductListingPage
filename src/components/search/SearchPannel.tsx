// import { useState } from "react";
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
  type: FormCheckType; // Ensuring type is one of the allowed FormCheckType
  cat: string;
}

function SearchPannel() {
  const dispatch: AppDispatch = useDispatch();
  // const selectedCategories = useSelector((state: RootState) => state.categories.selectedCategories);
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
      // If the new min price is greater than the max price, update both
      dispatch(setMinPriceRange(maxPriceRange - 1));
    }
  };

  const handleMaxRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value, 10);
    if (newMaxPrice > minPriceRange) {
      dispatch(setMaxPriceRange(newMaxPrice));
    } else {
      // If the new max price is less than the min price, update both
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
          // paddingInline: "3.2rem",
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
              max={1000} // Assuming the max price is 100, adjust this according to your needs
            />

            <Form.Label style={{ fontWeight: "bold" }}>
              max : ${maxPriceRange}
            </Form.Label>
            <Form.Range
              // disabled
              value={maxPriceRange}
              onChange={handleMaxRangeChange}
              min={0}
              max={1000} // Assuming the max price is 100, adjust this according to your needs
            />
          </Stack>
        </Stack>

        {/* <p>Sort</p> */}

        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return (
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  omnis velit totam saepe, minima placeat quasi iure blanditiis
                  delectus amet ad? Dolorem, molestiae. Et corrupti nihil
                  cupiditate nisi eius fugiat.
                </p>
              );
            })} */}
      </Stack>

      <Container
        className="pe-5 shadow d-md-none"
        style={{
          backgroundColor: "#FFFFFF",
          // width: "100vw",
          maxWidth: "100%",
          // height: "100vh",
          borderRadius: "10px",
          // position: "fixed",
          // top: "150px",
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
              max={1000} // Assuming the max price is 100, adjust this according to your needs
            />

            <Form.Label style={{ fontWeight: "bold" }}>
              max : ${maxPriceRange}
            </Form.Label>
            <Form.Range
              // disabled
              value={maxPriceRange}
              onChange={handleMaxRangeChange}
              min={0}
              max={1000} // Assuming the max price is 100, adjust this according to your needs
            />
          </Stack>
        </Row>
      </Container>
      {/* <Stack
        direction="horizontal"
        className="d-flex justify-content-start mt-3 p-4 shadow d-md-none"
        style={{
          backgroundColor: "#FFFFFF",
          // height: "100vh",
          borderRadius: "10px",
          position: "fixed",
          top: "110px",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "23px" }}>Filter</p>

        <Stack direction="horizontal">
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>Category</p>

          <Form style={{ marginLeft: "1.5rem" }} className="d-flex">
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
        </Stack>
      </Stack> */}
    </>
  );
}

export default SearchPannel;
