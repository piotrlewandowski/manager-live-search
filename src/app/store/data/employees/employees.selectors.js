import { WHITESPACE_REGEX } from '../../../_helpers/regexRules';

export const employees = (state, query) => {
  if (!query) return state.data.employees;

  const _query = query.toLowerCase().replace(WHITESPACE_REGEX, '');
  const filteredResults = state.data.employees.filter((employee) =>
    employee.attributes.name
      .toLowerCase()
      .replace(WHITESPACE_REGEX, '')
      .includes(_query),
  );

  return filteredResults;
};
