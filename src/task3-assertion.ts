// Тип конфигурации приложения
export type AppConfig = {
  apiUrl: string;
  timeout: number;
};

// Напишите Assertion Function assertValidConfig
// Если данные не соответствуют AppConfig - бросить Error("Invalid config")
// Используйте синтаксис: asserts data is AppConfig
export function assertValidConfig(data: unknown): asserts data is AppConfig {
  if (typeof data !== "object") {
    throw new Error ("Invalid config");
  }
  if (data === null) {
    throw new Error ("Invalid config");
  }
  const obj = data as Record<string, unknown>;
  if (typeof obj.apiUrl !== "string") {
    throw new Error ("Invalid config");
  }
  if (typeof obj.timeout !== "number") {
    throw new Error ("Invalid config");
  }
}

// Функция инициализации.
// Сначала вызывает assertValidConfig(config).
// Если проверка прошла - вернуть "API: <apiUrl>, Timeout: <timeout>"
export function initApp(config: unknown): string {
  assertValidConfig(config);
  return `API: ${config.apiUrl}, Timeout: ${config.timeout}`;
}