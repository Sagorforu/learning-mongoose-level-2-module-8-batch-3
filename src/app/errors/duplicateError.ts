import { TErrorSource, TGenericErrorResponse } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];
  const errorSource: TErrorSource = [
    {
      path: '',
      message: `${extractedMessage} is already exits`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Already exits',
    errorSource,
  };
};

export default handleDuplicateError;
