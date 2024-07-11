export default class LeadModel {
  account_id: number;
  closed_at: any;
  closest_task_at: any;
  created_at: number;
  created_by: number;
  custom_fields_values: any;
  group_id: number;
  id: number;
  is_deleted: false
  labor_cost: any;
  loss_reason_id: any;
  name: string;
  pipeline_id: number;
  price: number;
  responsible_user_id: number;
  score: any;
  status_id: number;
  updated_at: number;
  updated_by: number;
  company_id: number;
  showDetails: boolean = false;

  constructor(obj?: Partial<LeadModel>) {
    if (obj) Object.assign(this, obj);
  }
  formatDate(): string {
    let date = new Date(this.created_at);
    // Получаем компоненты даты
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы в JS начинаются с 0
    const year = date.getFullYear();
    
    // Получаем компоненты времени
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    // Форматируем строку
    return `${day}:${month}:${year} ${hours}:${minutes}`;
}
}