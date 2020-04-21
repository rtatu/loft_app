import * as Yup from "yup";

function uniqueValidation(store, path, name) {
  return this.test(`unique-validation`, "VALUE SHOULD BE UNIQUE", function (
    val
  ) {
    let data = store[path];
    for (let item of Object.values(data)) {
      if (item[name] == val) {
        return false;
      }
    }
    return true;
  });
}

function uniqueWithValidation(store, path, name, ref) {
  return this.test(
    "uniqueWithValidation",
    `Value should be unique with ${ref}.`,
    function (val) {
      let data = store[path];
      let uniqueWithValue = this.resolve(Yup.ref(ref));
      for (let item of Object.values(data)) {
        if (item[name] == val && item[ref] == uniqueWithValue) {
          return false;
        }
      }
      return true;
    }
  );
}

Yup.addMethod(Yup.string, "uniqueValidation", uniqueValidation);

Yup.addMethod(Yup.string, "uniqueWithValidation", uniqueWithValidation);

const ValidationType = (type, fn, errorMessage, path, store, name, ref) => {
  switch (type) {
    case "REQUIRED":
      return fn.required(errorMessage);

    case "STRING":
      return fn.string(errorMessage);

    case "EMAIL":
      return fn.email(errorMessage);

    case "DEFAULT_REQUIRED":
      return fn.string().required(errorMessage);

    case "UNIQUE_VALIDATION":
      return fn.uniqueValidation(store, path, name);

    case "UNIQUE_WITH_VALIDATION":
      return fn.uniqueWithValidation(store, path, name, ref);

    default:
      return fn.string();
  }
};

const generateValidationSchema = (vc, store, name) => {
  let fn = Yup;
  vc.map((item) => {
    fn = ValidationType(
      item.type,
      fn,
      item.errorMessage,
      item.path,
      store,
      name,
      item.ref
    );
  });

  return fn;
};

export default function YupValidationSchema(header, store, editMode) {
  let tabs = Object.keys(header);
  let MainSchema = {};

  for (let tab of tabs) {
    let tabSchema = {};
    header[tab].map((item) => {
      if (item.validation) {
        // get schema
        tabSchema[item.name] = generateValidationSchema(
          item.validation,
          store,
          item.name
        );
      } else {
        tabSchema[item.name] = Yup.mixed().notRequired();
      }
    });

    MainSchema[tab] = Yup.object().shape({
      ...tabSchema,
    });
  }
  return Yup.object().shape({
    ...MainSchema,
  });
}
