declare namespace HandlebarsTemplate {
  export function template(context: any, options?: any): string;
}

declare module '*.hbs' {
  export = HandlebarsTemplate.template;
}
