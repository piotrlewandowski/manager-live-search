import { employees } from './employees.selectors';

const state = {
  data: {
    employees: [
      {
        id: '323',
        attributes: {
          name: 'Harriet McKinney',
          email: 'harriet.mckinney@kinetar.com',
          initials: 'HM',
        },
      },
      {
        id: '139',
        attributes: {
          name: 'Harriet Banks',
          email: 'harriet.banks@kinetar.com',
          initials: 'HB',
        },
      },
      {
        id: '323',
        attributes: {
          name: 'Donald Butler',
          email: 'donald.butler@kinetar.com',
          initials: 'DB',
        },
      },
    ],
  },
};

const stateCopy = { ...state };

describe('Employees selectors', function () {
  it('Should return the employees from the state', () => {
    expect(employees(state)).toEqual(stateCopy.data.employees);
  });

  it('Should return employees filtered by phrase "har"', () => {
    expect(employees(state, 'har')).toEqual([
      stateCopy.data.employees[0],
      stateCopy.data.employees[1],
    ]);
  });

  it('Should return employees filtered by phrase "tmc"', () => {
    expect(employees(state, 'tmc')).toEqual([stateCopy.data.employees[0]]);
  });
});
