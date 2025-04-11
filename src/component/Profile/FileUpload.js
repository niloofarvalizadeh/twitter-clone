import React from 'react';
import { Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const FileUpload = React.memo(
  ({ label, onChange, accept = "image/*", ...props }) => (
    <Button
      variant="outlined"
      component="label"
      fullWidth
      startIcon={<AttachFileIcon />}
      {...props}
    >
      {label}
      <input type="file" hidden onChange={onChange} accept={accept} />
    </Button>
  )
);

export default FileUpload;