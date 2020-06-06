const Ship = (length, positions) => {
  const Length = length;
  const Positions = [...positions];
  const hitPositions = [];
  let isSunk = false;

  const sink = () => {
    if (hitPositions.length === Positions.length) {
      isSunk = true;
    }
    return isSunk;
  };

  const hit = number => {
    if (Positions.includes(number) === true) {
      hitPositions.push(number);
      sink();
      return true;
    }
    return false;
  };

  const getLength = () => Length;
  const getPositions = () => Positions;
  const getHitPositions = () => hitPositions;

  return { hit, getLength, sink, getPositions, getHitPositions };
};

// eslint-disable-next-line import/prefer-default-export
export { Ship };
