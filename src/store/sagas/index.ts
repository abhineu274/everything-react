// sagas/index.ts
import { all, fork } from "redux-saga/effects";
import postSaga from "./postSaga";
// Import your individual sagas here
// import userSaga from './userSaga';
// import projectSaga from './projectSaga';

export default function* rootSaga() {
  yield all([
    // Add your sagas here
    fork(postSaga),
    // fork(userSaga),
    // fork(projectSaga),
  ]);
}
