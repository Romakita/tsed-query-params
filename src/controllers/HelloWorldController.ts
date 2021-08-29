import {Controller, Get, QueryParams} from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/camel")
  get1(@QueryParams("camelCase") test: string) {
    return `hello ${test}`;
  }

  @Get("/snake")
  get2(@QueryParams("snake_case") test: string) {
    return `hello ${test}`;
  }
}
