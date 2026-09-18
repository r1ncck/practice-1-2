import { moveAnimal } from './task1-narrowing';
// Тип банковской транзакции (пока без interface, используем type)
export type Transaction = {
  id: string;
  amount: number;
  type: "deposit" | "withdrawal";
};

// Напишите функцию-предикат isTransaction
// Она должна проверить:
// 1. Что data - это объект и не null
// 2. Что у data есть поля id, amount, type
// 3. Что id - это строка, amount - число, type - одна из двух строк
export function isTransaction(data: unknown): data is Transaction {
  if (typeof data !== 'object') {
    return false;
  }
  if (data === null) {
    return false;
  }
  const obj = data as Record<string, unknown>;
  if (typeof obj.id !== 'string') {
    return false;
  }
  if (typeof obj.amount !== 'number') {
    return false;
  }
  if (obj.type !== 'deposit' && obj.type !== 'withdrawal') {
    return false;
  }
  return true;
}

// Функция обработки. 
// Если data это транзакция - вернуть "Обработана транзакция на сумму <amount>"
// Иначе вернуть "Неизвестные данные"
export function processTransaction(data: unknown): string {
  if (isTransaction(data)) {
    return "Обработана транзакция на сумму " + data.amount;
  }
  else {
    return "Неизвестные данные";
  }
}