import ContactModel from "./models/ContactModel";
import LeadModel from "./models/LeadModel";
import PipelineModel from "./models/PipelinesModel";
import StatusModel from "./models/StatusModel";
import UserModel from "./models/UserModel";
import {ref} from 'vue';

export default class Service {
  static instance: Service;

  client_id: "96360013-7613-4fe2-8ff9-c8e19b54219a";
  client_secret: "IqQ9IZrQjaSBzo2B61yKyG5sOvsz36ic2l9O2jZdLwn7QuLS5emoMru8B6059Woi";
  redirect_uri: "https://arnautnastena.amocrm.ru/";
  longToken: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIxZGYwNjI3MDdhZGRlMjk0OThkYzhiMmE2YmNjODcxYTViZjQyZGUwYTQ1ZjZmYjIyOTg2MDU1NDUwOGMyNTQ0MTc5YjQ5MWY2ZTZhODY5In0.eyJhdWQiOiI5NjM2MDAxMy03NjEzLTRmZTItOGZmOS1jOGUxOWI1NDIxOWEiLCJqdGkiOiJiMWRmMDYyNzA3YWRkZTI5NDk4ZGM4YjJhNmJjYzg3MWE1YmY0MmRlMGE0NWY2ZmIyMjk4NjA1NTQ1MDhjMjU0NDE3OWI0OTFmNmU2YTg2OSIsImlhdCI6MTcyMDcxNDA5MiwibmJmIjoxNzIwNzE0MDkyLCJleHAiOjE3MjE4NjU2MDAsInN1YiI6IjExMjU5MTc0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODQyMzU4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYmM1YzljZmQtNjk2Zi00ZWQ5LWFhNjUtZjVkMmIyNDdkNDBhIn0.MiZq_0kRNGjrCuIof9RniovphySI1fQlTz75FCIiiNEP7OQNSjFwFszERafTMv14OZCL8vsi9wtODGAXZiISpSPbo_CtwCSZjs5Qe94wbDIJXA5PfpY6pUhBQk7HYg9NY41SSojKGvjuaHo8-6bYwa104fKulFQFROAzFW_jxI_Foy3cZE1Yi6xaqGUsA4Gudlot_IYDqPCqQPcqf1Yl7YixpQR2HG2o_zng1eIUfkmP-W8q7RVbnQ_nVBBqgzZjwGZ9jrqQJcnsv3ilb0b1CB4gZh3g_WX_tYWTlg2KQNenoZQBhoaPAYhBJC0vYyv2EwUJn4pUH6Jp6T6FEC-AJQ';

  token_type: "Bearer";
  expires_in: 86400;
  access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ1MzY4NjVmOTE5NjY2NjcxMzM1MjRkOWJlOTk1MDg2MDI3N2Q2MjdiYWViNGFlZWI2MTU1YjkyMDhkNDZmOTNlZTg2MjUwNTg3ZDMwNTA3In0.eyJhdWQiOiI5NjM2MDAxMy03NjEzLTRmZTItOGZmOS1jOGUxOWI1NDIxOWEiLCJqdGkiOiI0NTM2ODY1ZjkxOTY2NjY3MTMzNTI0ZDliZTk5NTA4NjAyNzdkNjI3YmFlYjRhZWViNjE1NWI5MjA4ZDQ2ZjkzZWU4NjI1MDU4N2QzMDUwNyIsImlhdCI6MTcyMDcxNDExNCwibmJmIjoxNzIwNzE0MTE0LCJleHAiOjE3MjA4MDA1MTQsInN1YiI6IjExMjU5MTc0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODQyMzU4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiODUxZGNiMTEtZGRjMi00ODRjLWI3NGItOWQyMTkyMWQ5ZGFkIn0.awIqHaKhs3fEf8IOjxCsqnH-77069UOa15a5ZSqzgAqyqEJ_DZ2MeCf_WLeD5yHXtmFP8Ou9N86_OJ5i7vvRfA1293lmR6Y69urjrM3fWF06vPgNG0ZXZ6Agucw8956vILtiK66NVQOlRguligdEAZUk46KK_HEW4TITdKR03dYXc2Yg9jjRfrwKsZ8uGFEPoZF-5jSs1EFIj65thfEEXkjYd05fEseXCKWJ9mUq2-ysu93vaNuqlqCcJUGcJ3vxXJMrC7lc22F3KeIMpkOXwB-nB1XeS0r9ceQ4c9etS7eJMD4St7OZGiepWhTeyuJsaofonj_ojVC2aEjxcdoz_Q";
  refresh_token: "def50200a50308458afe046abc044a298992704eb5b819a91b7b0f599c4dacdf0b6c2e3e86b59834a76dc696e48ee6db1e31d28e51307abe764b83eea057ccff6b0fc9c5ba9dfc5b944678f73e20fa768ce28a6098988da5d3ab89555e702a880ef01300e4615070362bf2ad229036663071dedbfc024ab68a38da73cf8835c721bb703c010b17af13814c8881403e6d932ab2db27c4c04700d527a3a4a397e77cda6ecfde2f2f5078dc6c57f64582230a4fbedf5e6c92932fc2ad1f8de169834779b86a154d17d4b2e34fecbb9e148716ea919ce6f7133fb6f6a5c67319216a70a53260ec18627cd8f2504722971caefc915238234cecedcc20b47b20ad84897d3344bcb5f7abb03cf50ffd65c9468953c8956ee46887b656bb0de77e91a5fb51b43425f629b79e9dfc20cb70d4f7b23eb6704dfe391d0cb0a5e8d7868f755db59c7d8769aa5fcfebe490425582dcf55c04193104ec026dae379af0f38b7c142f2efae3e5812a0f90f42377904be8ff9e2548ed329fbc7ff25b14f75c3dd8d37da1b5bcee467f73994fc31780bb369103cebf3c9f61b231d7c38e88efba85c49bfe756b75384a30ab83d1bc3b42347ee2e9ce5ddbd2c67f42475ff597730c8aaca9dbc9b5091843a44a84e4bbc601380dc2c1f1446b6c2075197376fb76e1c15e39c013fa8dd1b759b4e5b14a00";

  /** сделки */
  leads: LeadModel[] = [];
  /** воронки */
  pipelines: PipelineModel[] = [];
  /** статусы */
  statuses: StatusModel[] = [];
  /** пользователи */
  users: UserModel[] = [];
  /** контакты */
  contacts: ContactModel[] = [];

  async GetInfo() {
    await this.GetLeadsList();
    await this.GetPipelinesList();
    await this.GetUsersList();
    await this.GetContactsList();
  }

  GetUsersList(filter: string = '') {
    let self = this;
    this._getRequest('users').then(info => {
      this.users = info._embedded.users.map(user => new UserModel(user));
    })
  }
  GetContactsList(filter: string = '') {
    let self = this;
    this._getRequest('contacts').then(info => {
      self.contacts = info._embedded.contacts.map(contact => new ContactModel(contact));
      console.log('contacts', this.contacts, this.leads);
    })
  }
  GetLeadsList(filter: string = '') {
    let self = this;
    let data: {
      page: 1,
      limit: 250,
      query: filter,
    }
    this._getRequest('leads', data).then(info => {
      if (!info) return;
      self.leads = info._embedded.leads.map(lead => {
        let res = new LeadModel(lead);
        res.company_id = lead._embedded.companies[0]?.id ?? undefined;
        return res;
      });
    })
  }

  GetPipelinesList(filter: string = '') {
    let self = this;
    this._getRequest('leads/pipelines').then(info => {
      if (!info) return;
      self.pipelines = info._embedded.pipelines.map(pipeline => new PipelineModel(pipeline));
      self.statuses = info._embedded.pipelines[0]?._embedded.statuses.map(status => new StatusModel(status)) ?? [];
    })
  }

  private _getRequest(param: string, body?: Object) {
    return new Promise<any>(resolve => {
      let request: RequestInit = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
      }
      if (!!body) request.body = JSON.stringify(body)
       fetch(`/api/api/v4/` + param, request)
        .then(response => response.json())
        .then(info => {
          resolve(info);
        })
        .catch(error => {
            console.error('Ошибка при отправке GET запроса: ', error);
            resolve(null);
        });
    })
  }

  static getInstance(): Service {
    if (!Service.instance) {
      Service.instance = new Service();
    }
    return Service.instance;
  }
}