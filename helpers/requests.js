import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { routes, keys, staleTimes } from "../constants/api";

const getBasePrice = async () =>
  axios.get(routes.basePrice).then(({ data }) => data.value);

export const useInitialBasePrice = (initialData) =>
  useQuery([keys.basePrice], getBasePrice, {
    staleTime: staleTimes.DAYS_1,
    initialData,
  });

export const useBasePrice = () =>
  useQuery([keys.basePrice], getBasePrice, {
    staleTime: staleTimes.DAYS_1,
  });

const getPricePerFoot = async () =>
  axios.get(routes.pricePerFoot).then(({ data }) => data.value);

export const useInitialPricePerFoot = (initialData) =>
  useQuery([keys.pricePerFoot], getPricePerFoot, {
    staleTime: staleTimes.DAYS_1,
    initialData,
  });

export const usePricePerFoot = () =>
  useQuery([keys.pricePerFoot], getPricePerFoot, {
    staleTime: staleTimes.DAYS_1,
  });
