export interface ICustomersResponse {
  listZellerCustomers: {
    items: ICustomer[];
  };
}

export interface ICustomer {
  email: string;
  id: string;
  name: string;
  role: string;
}

export type ICustomers = Array<ICustomer>;

export interface IZRadioBtnGroup {
  roles: string[];
  onRoleChanged: (r: string) => void;
}

export interface IZCustomersList {
  customers: ICustomers;
  role: string;
}
