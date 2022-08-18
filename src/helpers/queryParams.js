const getCurrentQueryParams = (urlSearchParams, arrParams) =>
  arrParams.filter((param) => urlSearchParams.has(param));

export { getCurrentQueryParams };
