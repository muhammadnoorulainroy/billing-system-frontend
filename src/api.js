import axios from "axios";

const baseURL = "http://localhost:3000";

axios.defaults.headers.common["x-access-token"] = localStorage.getItem('token');

export const postLoginCredentials = credentials => axios.post(`${baseURL}/api/auth/login`, credentials);

export const postSignupData = data => axios.post(`${baseURL}/api/auth/signup`,data)

export const getPlanData = () => axios.get(`${baseURL}/api/plans/`);

export const getSubscriptionData = () =>
  axios.get("http://localhost:3000/admin_user/subscriptions");

export const getFeatureData = () =>
  axios.get("http://localhost:3000/admin_user/features");

export const postPlanData = (name, feature_ids) =>
  axios.post("http://localhost:3000/admin_user/plans", { name, feature_ids });

export const deletePlanData = (id) =>
  axios.delete(`http://localhost:3000/admin_user/plans/${id}`);
