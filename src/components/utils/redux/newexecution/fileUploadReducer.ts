import {
    UPLOAD_FILE_REQUEST,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILURE,
    FileUploadActionTypes,
  } from '../newexecution/fileUploadAction.ts';
  
  interface FileUploadState {
    loading: boolean;
    fileData: any | null; // Modify this type to match your CSV data structure
    error: string | null;
  }
  
  const initialState: FileUploadState = {
    loading: false,
    fileData: null,
    error: null,
  };
  
  const fileUploadReducer = (state = initialState, action: FileUploadActionTypes): FileUploadState => {
    switch (action.type) {
      case UPLOAD_FILE_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case UPLOAD_FILE_SUCCESS:
        return {
          ...state,
          loading: false,
          fileData: action.payload,
        };
      case UPLOAD_FILE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default fileUploadReducer;
  