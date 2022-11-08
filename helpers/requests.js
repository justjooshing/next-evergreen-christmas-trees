import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import apiRoutes from "../constants/api";

const getBasePrice = async () =>
  axios.get(apiRoutes.basePrice).then(({ data }) => data.value);

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
  axios.get(apiRoutes.pricePerFoot).then(({ data }) => data.value);

export const useInitialPricePerFoot = (initialData) =>
  useQuery([keys.pricePerFoot], getPricePerFoot, {
    staleTime: 1000 * 60,
    initialData,
  });

export const usePricePerFoot = () =>
  useQuery([keys.pricePerFoot], getPricePerFoot, {
    staleTime: 1000 * 60,
  });

const getAlerts = async () =>
  axios.get(apiRoutes.alerts).then(({ data }) => data);

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
  axios.get(apiRoutes.announcements).then(({ data }) => data);

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
