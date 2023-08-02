export function checkEmptyFilterValues(state) {
  if (state.filteredValues.length == 0) return true;
}

export const sortData = (state) => (value) => {
  return value == "asc"
    ? state.rickMorty.result.sort(function (a, b) {
        return a.id - b.id;
      })
    : state.rickMorty.result.sort(function (a, b) {
        return b.id - a.id;
      });
};