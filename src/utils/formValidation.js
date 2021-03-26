export default function formValidation(obj) {
  return Object.keys(obj)
    .map((key) => propertyValidation(key, obj[key]))
    .includes(true);
}

const propertyValidation = (key, value) => {
  switch (typeof key) {
    case "string":
      return isEmpty(value);
    case "array":
      return isEmpty(value);
    case "number":
      return value > 0;
    default:
      return null;
  }
};

const isEmpty = (value) => (!value.length ? true : false);
