import {Controller, Get, QueryParams} from "@tsed/common";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get(@QueryParams("camelCase") test: string) {
    return `hello ${test}`;
  }
}
