export function setFilteredValues(state, filteredValues) {
  state.filteredValues = filteredValues.value;
}

export function setRickMortyValues(state, { data }) {
  state.rickMorty.info = data.info;
  let previousData = state.rickMorty.result;
  let latestData = data.results;
  let updatedData = previousData.concat(latestData);
  state.rickMorty.result = updatedData;
  state.rickMorty.resultCopy = updatedData;
  state.pageNumber += 1;
}

export function setError(state, msg) {
  state.error = msg || "Something went wrong";
}

export function updateRickMortyArray(state, rickMortyData) {
  state.rickMorty.resultCopy = rickMortyData;
}

export function setSingleCharacter(state, { data }) {
  state.singleCharacter = data;
}

export function setSearchKeyword(state, keyword) {
  state.searchKeyword = keyword;
}

export function setRickMortyValuesInitial(state, { data }) {
  state.rickMorty.info = data.info;
  state.rickMorty.result = data.results;
  state.rickMorty.resultCopy = data.results;
  state.pageNumber = 1;
}
