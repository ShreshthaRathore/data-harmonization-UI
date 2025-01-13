import axios from 'axios';
import { Dispatch } from 'redux';

// Action Types
export const UPLOAD_FILE_REQUEST = 'UPLOAD_FILE_REQUEST';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';

// Action Interfaces
interface UploadFileRequestAction {
  type: typeof UPLOAD_FILE_REQUEST;
}

interface UploadFileSuccessAction {
  type: typeof UPLOAD_FILE_SUCCESS;
  payload: any; // Modify this type to match your CSV data structure
}

interface UploadFileFailureAction {
  type: typeof UPLOAD_FILE_FAILURE;
  payload: string;
}

export type FileUploadActionTypes =
  | UploadFileRequestAction
  | UploadFileSuccessAction
  | UploadFileFailureAction;

// Action creators
export const uploadFileRequest = (): UploadFileRequestAction => ({
  type: UPLOAD_FILE_REQUEST,
});

export const uploadFileSuccess = (data: any): UploadFileSuccessAction => ({
  type: UPLOAD_FILE_SUCCESS,
  payload: data,
});

export const uploadFileFailure = (error: string): UploadFileFailureAction => ({
  type: UPLOAD_FILE_FAILURE,
  payload: error,
});

// Thunk action to handle the file upload
export const uploadFile = (file: File) => {
    console.log('File Upload Action', file)
  return async (dispatch: Dispatch<FileUploadActionTypes>) => {
    dispatch(uploadFileRequest());

    const formData = new FormData();
    console.log(formData,file, 'FormData')
    console.log(formData.get('file'), 'FormData after append');
    
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch(uploadFileSuccess(response.data));
    } catch (error) {
      dispatch(uploadFileFailure(error.response ? error.response.data : 'Error uploading file'));
    }
  };
};
