export function checkEmptyFilterValues(state) {
  if (state.filteredValues.length == 0) return true;
}

export const sortData = (state) => (value) => {
  return value == "asc"
    ? state.rickMorty.resultCopy.sort(function (a, b) {
        return a.id - b.id;
      })
    : state.rickMorty.resultCopy.sort(function (a, b) {
        return b.id - a.id;
      });
};

export const setSearchedRickMorty = (state) => (keyword) => {
  if(state.filteredValues.length == 0){
    return state.rickMorty.result.filter((data) =>
    data.name.toLowerCase().includes(keyword.toLowerCase())
  );
  }else {
    return state.rickMorty.resultCopy.filter((data) =>
    data.name.toLowerCase().includes(keyword.toLowerCase())
  );
  }
  
};

export const coreFilterLogic = (result1, filterValue) => {
  return result1.filter((data) => {
    if (filterValue == "Male" || filterValue == "Female") {
      return data.gender == filterValue
    } else if (
      filterValue == "Human" ||
      filterValue == "Mytholog" ||
      filterValue == "Other Species..."
    ) {
      return filterValue == "Other Species..."
        ? data.species !== "Human" && data.species !== "Mytholog"
        : data.species == filterValue
    } else {
      return filterValue == "Other Origins..."
        ? data.origin?.name !== "unknown" &&
            data.origin?.name !== "Post-Apocalyptic Earth" &&
            data.origin?.name !== "Nupita 4"
        : data.origin?.name == filterValue
    }
  });
};

export const newLogic = (filters,data)=>{
 
  let speciesArray = data.filter(d=>{
    if(filters.includes(d.species)){
      return d
    }else if(d.species!=="Human" && d.species!=="Mytholog"  && filters.includes("Other Species...")){
      return d
    }else{
      return null
    }
  
  })

  let pastArray = speciesArray.length > 0 ? speciesArray : data
  let genderArray = pastArray.filter(d=>filters.includes(d.gender))



  let pastArray2 = genderArray.length > 0 ? genderArray : (pastArray.length > 0 ? pastArray : data ) 
  let originArray = pastArray2.filter(d=>{
    if(filters.includes(d.origin?.name)){
      return d
    }else if(d.origin?.name!=="unknown" && d.origin?.name!=="Post-Apocalyptic Earth" && d.origin?.name!=="Nupita 4" && filters.includes("Other Origins...")){
      return d
    }else{
      return null
    }
  })
    
    
    
  
  if(originArray.length > 0 ){
    return originArray
  }else{
    return pastArray2
  }
 
}
export const filtersLogic = (state) => {
  if (state.filteredValues.length == 0) return state.rickMorty.result;
  let result1 = state.rickMorty.result.slice();
  let result2;
  let localFilterValues = state.filteredValues.slice();
  // localFilterValues.forEach((filterValue) => {
  //   result2 = coreFilterLogic(result1, filterValue);
  //   result1 = [...result2,...result1];
  // });
 
  result2 = newLogic(localFilterValues,result1)
  return result2;
};
