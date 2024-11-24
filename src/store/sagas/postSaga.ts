// sagas/postSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../slices/postSlice";

import { AxiosResponse } from "axios";
import { fetchPosts } from "../../services/PostServices";

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

export default function* postSaga() {
  yield takeLatest(fetchPostsStart.type, fetchPostsSaga);
}
