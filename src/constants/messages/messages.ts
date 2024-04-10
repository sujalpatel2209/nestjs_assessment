import { ErrorInterface, SuccessInterface } from './messages.interface';

export const MESSAGE: { SUCCESS: SuccessInterface; ERROR: ErrorInterface } = {
  ERROR: {
    RECORD_NOT_FOUND: 'Record not found.',
    TITLE_IS_NOT_UNIQUE: 'Title is already taken.',
  },
  SUCCESS: {
    FORM_CREATED: 'Form created successfully.',
    FORM_DATA_SAVED: 'Form data saved successfully.',
  },
};
