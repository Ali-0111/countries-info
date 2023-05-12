function FilterBySearch(array, value) {
  const filteredArray = array.filter((item) => (
    item.name.toLowerCase().includes(value.toLowerCase())));
  return filteredArray;
}

export default FilterBySearch;
