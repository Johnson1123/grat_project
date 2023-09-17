import * as yup from "yup";

const carShema = yup.object().shape({
  make: yup.string().required("make is required"),
  generation: yup.string().required("genearation is required"),
  model: yup.string().required("model is required"),
  engine: yup.string().required("engine is required"),
});

export default carShema;
