const formatErrorsValidation = (errors) => errors
  .reduce((acc, cur) => ({
    ...acc,
    [cur.param]: cur.msg
  }), []);

module.exports = { formatErrorsValidation };
