export default class UserModel {
  
email: string;
id: number;
lang: string;
name: string;

rights: RightsModel;

constructor(obj?: Partial<UserModel>) {
  if (obj) Object.assign(this, obj);
}
}

class RightsModel {
  catalog_access: boolean;
  catalog_rights: any;
  companies: RightsCategoriesModel;
  contacts: RightsCategoriesModel;
  custom_fields_rights: any;
  files_access: boolean;
  group_id: any;
  is_active: boolean;
  is_admin: boolean;
  is_free: boolean;
  leads: RightsCategoriesModel;
  mail_access: boolean;
  oper_day_reports_view_access: boolean;
  oper_day_user_tracking: boolean;
  role_id: any;
  status_rights:  StatusRightsModel[];
  tasks: RightsCategoriesModel;
  
  constructor(obj?: Partial<RightsModel>) {
    if (obj) Object.assign(this, obj);
  }
}
class RightsCategoriesModel {
  add: string;
  delete: string;
  edit: string;
  export: string;
  view: string;
    
  constructor(obj?: Partial<RightsCategoriesModel>) {
    if (obj) Object.assign(this, obj);
  }
}

class StatusRightsModel {
  entity_type: string;
  pipeline_id: number;
  rights: RightsCategoriesModel;
  status_id: number;
    
  constructor(obj?: Partial<StatusRightsModel>) {
    if (obj) Object.assign(this, obj);
  }
}