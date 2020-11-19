import { reducer } from '../store/reducer';

test('Increase counter', () => {
  const state = {
    counter: 0,
  };
  expect(reducer(state, { type: 'increase' })).toStrictEqual({ counter: 1 });
});

test('Decrease counter to min', () => {
  const state = {
    counter: 0,
  };
  expect(reducer(state, { type: 'decrease' })).toStrictEqual({ counter: 0 });
});

test('Decrease counter', () => {
  const state = {
    counter: 1,
  };
  expect(reducer(state, { type: 'decrease' })).toStrictEqual({ counter: 0 });
});
