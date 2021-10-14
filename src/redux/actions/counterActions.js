import { INCREMENT, DECREMENT } from '../constans/counterConstants';

export const incrememnt = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
