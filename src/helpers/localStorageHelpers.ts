export const saveSecrets = (secrets: string[]) =>
  localStorage.setItem("secrets", JSON.stringify(secrets));

export const getSecrets = (): string[] =>
  JSON.parse(localStorage.getItem("secrets") || "[]");
