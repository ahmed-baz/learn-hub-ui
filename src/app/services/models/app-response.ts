export class AppResponse<T> {
  data?: object;
  responseDate?: string;
  statusCode: number = 200;
  validationErrors: Map<string, string> = new Map<string, string>();
}
