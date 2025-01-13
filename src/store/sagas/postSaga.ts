// sagas/postSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../slices/postSlice";

import { AxiosResponse } from "axios";
import { createPost, fetchPosts } from "../../services/PostServices";
import { createPostAction } from "../slices/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchPostsSaga(): Generator<any, void, AxiosResponse> {
  try {
    const response = yield call(fetchPosts);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchPostsFailure(error.message));
    } else {
      yield put(fetchPostsFailure("An unknown error occurred"));
    }
  }
}

function* createPostSaga(action: PayloadAction) {
  try {
    yield call(createPost, action.payload);
    yield put(fetchPostsStart());
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchPostsFailure(error.message));
    } else {
      yield put(fetchPostsFailure("An unknown error occurred"));
    }
  }
}

export default function* postSaga() {
  yield takeLatest(fetchPostsStart.type, fetchPostsSaga);
  yield takeLatest(createPostAction.type, createPostSaga);
}
