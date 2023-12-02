export const parseParams = (params) => {
  const keys = Object.keys(params);
  let options = "";

  keys.forEach((key) => {
    const isParamTypeString = typeof params[key] === "string";
    const isParamTypeObject = typeof params[key] === "object";
    const isParamTypeArray = Array.isArray(params[key]);
    const isRangeParam = ["min", "max"].every((a) =>
      params[key].hasOwnProperty(a)
    );

    if (isParamTypeString) {
      options += `${key}=${params[key]}&`;
    }

    if (isParamTypeObject && isRangeParam) {
      let lowerBound = parseInt(params[key].min);
      let upperBound = parseInt(params[key].max);

      if (!isNaN(lowerBound)) {
        options += `${key}Min=${lowerBound}&`;
      }

      if (!isNaN(upperBound)) {
        options += `${key}Max=${upperBound}&`;
      }
    }

    if (isParamTypeArray) {
      params[key].forEach((element) => {
        options += `${key}=${element}&`;
      });
    }
  });

  return options ? options.slice(0, -1) : options;
};
