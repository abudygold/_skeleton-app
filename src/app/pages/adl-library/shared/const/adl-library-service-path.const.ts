import { environment } from '../../../../../environments/environment';

const listPath = '/user';
const createPath = '/user/create';

export const UserViewListServicePathConst = `${environment.api.baseUrl}${listPath}`;
export const UserCreateServicePathConst = `${environment.api.baseUrl}${createPath}`;
