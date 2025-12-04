export interface Task {
  id: number;
  title: string;
  description?: string;//le ? sert à "nullifié, ce qui rend description non nécessaire.
}