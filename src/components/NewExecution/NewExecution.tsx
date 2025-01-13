// // import React, { useState } from 'react';
// // import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// // import Grid from '@mui/material/Grid';
// // import Button from '@mui/material/Button';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { uploadFile } from '../utils/redux/newexecution/fileUploadAction.ts';
// // const Item = styled(Paper)(({ theme }) => ({
// //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //   ...theme.typography.body2,
// //   padding: theme.spacing(1),
// //   textAlign: 'center',
// //   color: theme.palette.text.secondary,
// // }));

// // export default function BasicGrid() {
// //   const [file, setFile] = useState(null);
// //   const dispatch = useDispatch();

// //   // Accessing Redux state
// //   // const { loading, file: uploadedFile, error } = useSelector((state:any) => state.fileUpload);

// //   // Handle file selection
// //   const handleFileChange = (e) => {
// //     console.log('eventss', e)
// //     const selectedFile = e.target.files[0];
// //     setFile(selectedFile);
  
// //   };
// //   // const handleFileUpload = () => {
// //   //   if (!file) {
// //   //     alert('Please select a file first.');
// //   //     return;
// //   //   }

// //   //   // Dispatch the upload file action
// //   //   dispatch(uploadFile(file));
// //   // };
// //   const handleFileUpload = () => {
// //     console.log('Handle File upload')
// //     if (!file) {
// //       alert('Please select a file first');
// //       return;
// //     }
// //     dispatch(uploadFile(file));
// //   };
// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       {/* <Grid container spacing={2}>
// //         <Grid item xs={8}>
// //           <input
// //                     onChange={handleFileChange}
// //                     id="csvInput"
// //                     name="file"
// //                     type="File"
// //                 />
// //         </Grid>
// //         <Grid item xs={4}>
// //           <Button variant="contained" onClick={handleFileUpload} style={{ background: '#5C76B8' }}>
// //         Upload CSV
// //       </Button>
// //         </Grid>
       
// //       </Grid> */}
// //      <div>
// //       <h2>Upload CSV File</h2>
// //       <input type="file" accept=".csv" onChange={handleFileChange} />
// //       <button onClick={handleFileUpload} >
// //        Upload
// //       </button>

// //       {/* {loading && <p>Uploading...</p>}
// //       {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
// //       {/* {fileData && (
// //         <div>
// //           <h3>File Data:</h3>
// //           <pre>{JSON.stringify(fileData, null, 2)}</pre>
// //         </div>
// //       )} */}
// //     </div>
// //     </Box>
// //   );
// // }

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { uploadFile } from '../utils/redux/newexecution/fileUploadAction.ts';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const dispatch = useDispatch();
//   const { loading, fileData, error } = useSelector((state) => state.fileUpload);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     if (!file) {
//       alert('Please select a file first');
//       return;
//     }
//     dispatch(uploadFile(file));
//   };

//   return (
//     <div>
//       <h2>Upload CSV File</h2>
//       <input type="file" accept=".csv" onChange={handleFileChange} />
//       <button onClick={handleFileUpload} disabled={loading}>
//         {loading ? 'Uploading...' : 'Upload'}
//       </button>

//       {loading && <p>Uploading...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {fileData && (
//         <div>
//           <h3>File Data:</h3>
//           <pre>{JSON.stringify(fileData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { uploadFile } from '../utils/redux/newexecution/fileUploadAction.ts';
// import  RootState  from '../utils/store.ts';

// const FileUpload: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const dispatch = useDispatch();
  
//   // const { loading, fileData, error } = useSelector((state: RootState) => state.fileUpload);
//   // const { loading, fileData, error } = useSelector((state: RootState) => state.fileUpload);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files ? e.target.files[0] : null;
//     setFile(selectedFile);
//   };

//   const handleFileUpload = () => {
//     if (!file) {
//       alert('Please select a file first');
//       return;
//     }
//     dispatch(uploadFile(file));
//   };

//   return (
//     <div>
//       <h2>Upload CSV File</h2>
//       <input type="file" accept=".csv" onChange={handleFileChange} />
//       <button onClick={handleFileUpload} >
//        Upload
//       </button>

//       {/* {loading && <p>Uploading...</p>}
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {fileData && (
//         <div>
//           <h3>File Data:</h3>
//           <pre>{JSON.stringify(fileData, null, 2)}</pre>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default FileUpload;
import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setMessage('Please select a file first');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', file); // Assuming `file` is the file object
  //   for (let [key, value] of formData.entries()) {
  //     console.log(` appended data${key}:`, value);
  // }
    // Check if the file is added properly
    console.log('File appended:', formData.get('file')); 
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error uploading file');
    }
  };
  console.log('upload dataa',file)
  return (
    <div>
      <h1>Upload CSV File to GCS</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default FileUpload;
