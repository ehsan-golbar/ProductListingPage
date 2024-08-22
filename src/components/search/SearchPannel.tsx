import {useState } from "react";
import { Form, Stack } from "react-bootstrap";
import { FormCheckType } from "react-bootstrap/esm/FormCheck";
import { AppDispatch } from "../../store/Store";
import { useDispatch } from "react-redux";
import {
  toggleCategory,
} from "../../store/slices/CategorySlice";

interface FilterItem {
  type: FormCheckType; // Ensuring type is one of the allowed FormCheckType
  cat: string;
}

function SearchPannel() {
  const dispatch: AppDispatch = useDispatch();
  // const selectedCategories = useSelector((state: RootState) => state.categories.selectedCategories);

  const [minPriceRange, setMinPriceRange] = useState<number>(50); // Default value
  const [maxPriceRange, setMaxPriceRange] = useState<number>(80); // Default value

  //   const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
  //     new Set()
  //   );

  const handleMinRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinPrice = parseInt(e.target.value, 10);
    if (newMinPrice < maxPriceRange) {
      setMinPriceRange(newMinPrice);
    } else {
      // If the new min price is greater than the max price, update both
      setMinPriceRange(maxPriceRange - 1);
    }
  };

  const handleMaxRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxPrice = parseInt(e.target.value, 10);
    if (newMaxPrice > minPriceRange) {
      setMaxPriceRange(newMaxPrice);
    } else {
      // If the new max price is less than the min price, update both
      setMaxPriceRange(minPriceRange + 1);
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

  //   useEffect(()=>{
  //         console.log(selectedCategories)
  //   }, [selectedCategories])
  return (
    <>
      <Stack
        className="d-flex justify-content-start"
        style={{ backgroundColor: "#d1d0d0", height: "100vh", gap: 0 }}
      >
        <p>Filter</p>

        <Stack style={{ marginLeft: "1rem" }} gap={3}>
          <p>Category</p>

          <Form style={{ marginLeft: "2rem" }}>
            {filterList.map((item) => (
              <div key={`default-${item.type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={item.type}
                  id={`default-${item.type}`}
                  label={`${item.cat}`}
                  onChange={() => handleCategoryChange(item.cat)}
                />
              </div>
            ))}
          </Form>

          <p>Price</p>

          <Stack
            style={{
              marginLeft: "2rem",
              marginRight: "2rem",
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
