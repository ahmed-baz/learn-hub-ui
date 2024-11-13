export class AppResponse<T> {
  data?: object;
  responseDate?: string;
  statusCode: number = 200;
  validationErrors: { [key: string]: string } = {};
}
