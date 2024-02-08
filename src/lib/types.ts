// ---- Auth service
export type AuthServiceBaseUrlType =
  | `http://127.0.0.1:5000`
  | `http://localhost:5000`
  | `https://ticketing.dev`;

export type AuthServiceParamsUsersType =
  | "sign-in"
  | "sign-up"
  | "all"
  | "current-user";

export type AuthServicePathUsersParamsType =
  `/api/users/${AuthServiceParamsUsersType}`;

export type AuthServicePathType =
  `${AuthServiceBaseUrlType}/api/users/${AuthServiceParamsUsersType}`;

export type AuthDialogConfigTableType = {
  [Property in AuthServiceParamsUsersType]: {
    title: string;
    description: string;
  };
};

export type AuthServicePurposeType = Exclude<
  AuthServiceParamsUsersType,
  "all" | "current-user"
>;
// --- Client service (this one)
export type ClientBaseUrlType =
  | `http://localhost:3000`
  | `http://127.0.0.1:3000`
  | `https://ticketing.dev`;
