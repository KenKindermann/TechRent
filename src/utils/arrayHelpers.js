export const isObjectInArray = (array, object) => {
  return array.some((element) => element.id === object.id);
};

export const deleteObjectInArray = (array, object) => {
  return array.filter((element) => element.id !== object.id);
};

export const findIndexInArray = (array, object) => {
  return array.findIndex((element) => element.id === object.id);
};
