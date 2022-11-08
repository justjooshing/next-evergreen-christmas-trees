import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { routes, keys } from "../constants/api";

const getBasePrice = async () =>
  axios.get(routes.basePrice).then(({ data }) => data.value);

export const useInitialBasePrice = (initialData) =>
  useQuery([keys.basePrice], getBasePrice, {
    staleTime: 1000 * 60,
    initialData,
  });

export const useBasePrice = () =>
  useQuery([keys.basePrice], getBasePrice, {
    staleTime: 1000 * 60,
  });

const getPricePerFoot = async () =>
  axios.get(routes.pricePerFoot).then(({ data }) => data.value);

export const useInitialPricePerFoot = (initialData) =>
  useQuery([keys.pricePerFoot], getPricePerFoot, {
    staleTime: 1000 * 60,
    initialData,
  });

export const usePricePerFoot = () =>
  useQuery([keys.pricePerFoot], getPricePerFoot, {
    staleTime: 1000 * 60,
  });

const getAlerts = async () => axios.get(routes.alerts).then(({ data }) => data);

export const useInitialAlerts = (initialData) => {
  useQuery([keys.alerts], getAlerts, {
    staleTime: 1000 * 60,
    initialData,
  });
};

export const useAlerts = () => {
  useQuery([keys.alerts], getAlerts, {
    staleTime: 1000 * 60,
  });
};

const getAnnouncements = async () =>
  axios.get(routes.announcements).then(({ data }) => data);

export const useInitialAnnouncements = (initialData) => {
  useQuery([keys.announcements], getAnnouncements, {
    staleTime: 1000 * 60,
    initialData,
  });
};

export const useAnnouncements = () => {
  useQuery([keys.announcements], getAnnouncements, {
    staleTime: 1000 * 60,
  });
};
