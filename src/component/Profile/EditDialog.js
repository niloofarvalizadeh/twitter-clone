import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
  Avatar,
  Box,
} from "@mui/material";
import FileUpload from "./FileUpload";

const fields = [
  { name: "name", label: "Name" },
  { name: "bio", label: "Bio", maxLength: 160 },
  { name: "location", label: "Location" },
  { name: "website", label: "Website" },
  { name: "birth_year", label: "Birth Year", type: "number" },
];

const EditProfile = React.memo(
  ({ open, onClose, profile, loading, onChange, onFileUpload, onSubmit }) => (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogContent>
        <FileUpload
          label="Upload Background Image"
          onChange={(e) => onFileUpload(e, "background_image")}
          disabled={loading.submit}
          sx={{ mb: 2 }}
        />

        {profile.background_image && (
          <img
            src={profile.background_image}
            alt="User profile image preview"
            style={{
              width: "100%",
              marginBottom: 16,
              maxHeight: 150,
              objectFit: "cover",
              borderRadius: 4,
              maxWidth: "100%",
            }}
          />
        )}

        <FileUpload
          label="Upload Profile Image"
          onChange={(e) => onFileUpload(e, "profile_image")}
          disabled={loading.submit}
          sx={{ mb: 2 }}
        />
        {profile.profile_image && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src={profile.profile_image}
              alt="User profile image preview"
              sx={{ width: 100, height: 100, mb: 2 }}
            />
          </Box>
        )}

        {fields.map(({ name, label, type, maxLength }) => (
          <TextField
            key={name}
            margin="dense"
            name={name}
            label={label}
            type={type || "text"}
            fullWidth
            variant="standard"
            onChange={onChange}
            value={profile[name] || ""}
            sx={{ mb: 1 }}
            inputProps={{
              maxLength: maxLength,
            }}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading.submit}>
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          disabled={loading.submit}
          variant="contained"
        >
          {loading.submit ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  )
);

export default EditProfile;
