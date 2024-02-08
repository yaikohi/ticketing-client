import {
  AuthServiceBaseUrlType,
  AuthServiceParamsUsersType,
  AuthServicePathType,
  AuthServicePathUsersParamsType,
  ClientBaseUrlType,
} from "./types";

export const getBaseUrl = (): "" | ClientBaseUrlType => {
  "use server";
  if (typeof window !== "undefined") return "";
  if (process.env.NODE_ENV === "production") return "https://ticketing.dev";

  const baseUrl = `http://localhost:${process.env.PORT ?? 3000
    }` as ClientBaseUrlType;

  return baseUrl;
};

const getAuthBaseUrl = (): AuthServiceBaseUrlType => {
  "use server";
  if (process.env.NODE_ENV === "production") return "https://ticketing.dev";

  const baseUrl = `http://localhost:${process.env.AUTH_PORT ?? 5000
    }` as AuthServiceBaseUrlType;

  return baseUrl;
};

export const getAuthServiceUrl = (
  { purpose }: { purpose: AuthServiceParamsUsersType },
): AuthServicePathType => {
  "use server";
  const baseUrl = getAuthBaseUrl();

  switch (purpose) {
    case "sign-in": {
      const params: AuthServicePathUsersParamsType = "/api/users/sign-in";
      return `${baseUrl}${params}`;
    }
    case "sign-up": {
      const params: AuthServicePathUsersParamsType = "/api/users/sign-up";
      return `${baseUrl}${params}`;
    }
    case "all": {
      const params: AuthServicePathUsersParamsType = "/api/users/all";
      return `${baseUrl}${params}`;
    }

    case "current-user": {
      const params: AuthServicePathUsersParamsType = "/api/users/current-user";
      return `${baseUrl}${params}`;
    }
  }
};
