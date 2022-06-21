export default {
  useValue: {
    required: `Campo requerido`,
    minlength: ({
      requiredLength,
      actualLength,
    }: {
      requiredLength: number;
      actualLength: number;
    }) =>
      `Se esperaba por lo menos ${requiredLength} carácteres, pero se recibio ${actualLength}`,
    email: `Correo invalido`,
  },
};
