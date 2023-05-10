import Popover from "../popover";
import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
import "@testing-library/jest-dom";

describe("Popover JSDOM tests", () => {
  let button;

  beforeEach(() => {
    button = document.createElement("button");
    document.body.appendChild(button);
  });

  test("popover class added", () => {
    new Popover(
      button,
      "Title",
      "Sed ut perspiciatis, us et iusto odio  fdgfg  fdg dfgsga dignissimos sdfdsf sfsfg sfdff ducimus, unde omnis iste natus"
    );
    button.click();
    expect(document.body.children[1]).toHaveClass("popover");
  });

  test("title class added", () => {
    new Popover(
      button,
      "Title",
      "Sed ut perspiciatis, us et iusto odio  fdgfg  fdg dfgsga dignissimos sdfdsf sfsfg sfdff ducimus, unde omnis iste natus"
    );
    button.click();
    expect(document.body.children[2]).toHaveClass("title");
  });

  test("popover text check", () => {
    new Popover(
      button,
      "Title",
      "Sed ut perspiciatis, us et iusto odio fdgfg fdg dfgsga dignissimos sdfdsf sfsfg sfdff ducimus, unde omnis iste natus"
    );
    button.click();
    expect(document.body.children[1]).toHaveTextContent(
      "Sed ut perspiciatis, us et iusto odio fdgfg fdg dfgsga dignissimos sdfdsf sfsfg sfdff ducimus, unde omnis iste natus"
    );
  });

  test("title text check", () => {
    const button = document.createElement("button");
    document.body.appendChild(button);
    new Popover(
      button,
      "Title",
      "Sed ut perspiciatis, us et iusto odio  fdgfg  fdg dfgsga dignissimos sdfdsf sfsfg sfdff ducimus, unde omnis iste natus"
    );
    button.click();
    expect(document.body.children[2]).toHaveTextContent("Title");
  });
});
