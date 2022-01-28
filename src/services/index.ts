/* eslint-disable no-unreachable */
import React from "react";
import axios from "axios";

export const getShows = () => {
  return axios
    .get("https://api.tvmaze.com/shows")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const getDetailShow = (id: number) => {
  return axios
    .get(`https://api.tvmaze.com/shows/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};

export const getActros = (id: number) => {
  return axios
    .get(`https://api.tvmaze.com/shows/${id}/cast`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
