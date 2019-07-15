declare interface UJsonRespond<T = any>{
  data: T;
  error: boolean;
  msg: string;
  method?:string;
}
