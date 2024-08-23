// import { useState } from "react";
import { Form, Stack } from "react-bootstrap";
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
    { type: "checkbox", cat: "electronics" },
    { type: "checkbox", cat: "jewelery" },
    { type: "checkbox", cat: "men's clothing" },
    { type: "checkbox", cat: "women's clothing" },
  ];

  const handleCategoryChange = (cat: string) => {
    dispatch(toggleCategory(cat));
  };

  return (
    <>
      <Stack
        className="d-flex justify-content-start m-3 p-3"
        style={{
          backgroundColor: "#FFFFFF",
          height: "100vh",
          borderRadius: "10px",
          position: "fixed",
          top: "50px",
        }}
      >
        <p>Filter</p>

        <Stack style={{ marginLeft: "1rem" }} gap={3}>
          <p>Category</p>

          <Form style={{ marginLeft: "2rem" }}>
            {filterList.map((item) => (
              <div key={`default-${item.cat}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={item.type}
                  id={`default-${item.cat}`}
                  label={`${item.cat}`}
                  onChange={() => handleCategoryChange(item.cat)}
                />
              </div>
            ))}
          </Form>

          <p>Price</p>

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
            <Form.Label>min : ${minPriceRange}</Form.Label>
            <Form.Range
              value={minPriceRange}
              onChange={handleMinRangeChange}
              min={0}
              max={100} // Assuming the max price is 100, adjust this according to your needs
            />

            <Form.Label>max : ${maxPriceRange}</Form.Label>
            <Form.Range
              // disabled
              value={maxPriceRange}
              onChange={handleMaxRangeChange}
              min={0}
              max={100} // Assuming the max price is 100, adjust this according to your needs
            />
          </Stack>
        </Stack>

        {/* <p>Sort</p> */}
      </Stack>
    </>
  );
}

export default SearchPannel;
