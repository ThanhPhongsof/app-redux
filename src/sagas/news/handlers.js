import { call, put } from "redux-saga/effects";
import { setErrorMessage, setLoading, setNews } from "./newsSlice";
import requestGetNews from "./request";

export default function* handleGetNews({ payload, type }) {
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetNews, payload);
    const { hits } = response.data;
    // const hits = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
    yield put(setErrorMessage(error.message));
    console.log(error.message);
  }
}
