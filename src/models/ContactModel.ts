export default class ContactModel {
  account_id: number;
  closest_task_at: any;
  created_at: number;
  created_by: number;
  custom_fields_values: FielsValuesModel[];
  first_name: string;
  group_id: number;
  id: number;
  is_deleted: boolean;
  is_unsorted: boolean;
  last_name: string;
  name: string;
  responsible_user_id: number;
  updated_at: number;
  updated_by: number;

  constructor(obj?: Partial<ContactModel>) {
    if (obj) Object.assign(this, obj);
  }
}

class FielsValuesModel {
  field_code: string;
  field_id: number;
  field_name: string;
  field_type: string;

  constructor(obj?: Partial<FielsValuesModel>) {
    if (obj) Object.assign(this, obj);
  }
}