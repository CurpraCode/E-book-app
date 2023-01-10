import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Routes } from "../utils/constants";

export type RootStackParamList = {
  [Routes.HOME]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
