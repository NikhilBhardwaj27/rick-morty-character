export default {
  rickMorty: {
    info: {},
    result: [],
    resultCopy: [],
  },
  pageNumber: 1,
  filters: [
    {
      name: "Species",
      values: ["Human", "Mytholog", "Other Species..."],
    },
    {
      name: "Gender",
      values: ["Male", "Female"],
    },
    {
      name: "Origin",
      values: [
        "unknown",
        "Post-Apocalyptic Earth",
        "Nupita 4",
        "Other Origins...",
      ],
    },
  ],
  filteredValues: [],
  errors: "",
  singleCharacter: {},
  searchKeyword: "",
};
