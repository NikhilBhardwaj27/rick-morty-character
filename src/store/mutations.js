export function setFilteredValues(state, filteredValues) {
  state.filteredValues = filteredValues.value;
}

export function setRickMortyValues(state, {data}) {
  state.rickMorty.info = data.info;
  state.rickMorty.result = data.results;
}

export function setError(state, msg) {
  state.error = msg || "Something went wrong";
}
