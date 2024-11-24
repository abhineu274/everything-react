import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface PostForm {
  title: string;
  content: string;
}

const CreatePost: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>();
  const navigate = useNavigate();

  const onSubmit = (data: PostForm) => {
    // In a real-world app, here you would send the data to an API to save it to a database.
    console.log("New Post:", data);

    // Redirect back to Home after submitting the form
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          label="Content"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          {...register("content", { required: "Content is required" })}
          error={!!errors.content}
          helperText={errors.content?.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
