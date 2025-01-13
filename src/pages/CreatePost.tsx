import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPostAction } from "../store/slices/postSlice";

export interface PostForm {
  title: string;
  content: string;
  imageUrl: string;
}

const CreatePost: React.FC = () => {
  const formMethods = useForm<PostForm>({
    defaultValues: { title: "", content: "", imageUrl: "" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: PostForm) => {
    //TRIGGERING THE ACTION TO CREATE A NEW POST, THIS WILL INVOKE THE SAGA
    dispatch(createPostAction(data));
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>
      <FormProvider {...formMethods}>
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
          <TextField
            label="Image URL"
            fullWidth
            margin="normal"
            {...register("imageUrl")}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
