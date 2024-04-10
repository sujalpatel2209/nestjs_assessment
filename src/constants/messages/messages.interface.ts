export interface SuccessInterface {
  FORM_CREATED: string;
  FORM_DATA_SAVED: string;
}

export interface ErrorInterface {
  RECORD_NOT_FOUND: string;
  TITLE_IS_NOT_UNIQUE: string;
}

export interface ResponseMessage {
  status: string;
  message: string;
}
