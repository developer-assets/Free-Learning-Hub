export const sucessCreator = (statusCode, message, data = {}) => {
  return {
    success: true,
    statusCode: statusCode,
    message: message,
    data: data,
  };
};
