import { select } from "@inquirer/prompts";
import { CreateComponente } from "./component.js";
import { choices } from "./layout.js";

export async function cmdCreateComponent(name) {
  const typeComponent = await select({
    message: "What type of component do you prefer?",
    choices: choices.typeComponent,
  });

  const languagePrefer = await select({
    message: "What language are you using?",
    choices: choices.languagePrefer,
  });

  const newComponent = {
    name,
    type: typeComponent,
    language: languagePrefer,
  };

  const component = new CreateComponente(newComponent);

  component.render();
}
