export default class PipelineModel {
  account_id: number;
  id: number;
  is_archive: boolean;
  is_main: boolean;
  is_unsorted_on: boolean;
  name: string;
  sort: number;
  
  constructor(obj: Partial<PipelineModel>) {
    if (obj) Object.assign(this, obj);
  }
}