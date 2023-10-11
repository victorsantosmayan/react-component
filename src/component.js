import path from "node:path";
import process from "node:process";

import { createDir, createAndWriteFile } from "./file.js";
import { languages, templates } from "./layout.js";

export class CreateComponente {
  constructor({ name, type, language }) {
    this.name = name;
    this.type = type;
    this.language = language;
  }

  _getExtension() {
    const language = languages[this.language];
    return {
      extComponent: language.extComponent,
      extindex: language.extindex,
    };
  }

  _parse() {
    const language = this._getExtension();
    const fileComponent = `${this.name}${language.extComponent}`;
    const fileIndex = `index${language.extindex}`;

    const origin = process.cwd();
    const folder = path.join(origin, this.name);
    const component = path.join(folder, fileComponent);

    const index = path.join(folder, fileIndex);

    return {
      folder,
      component,
      index,
    };
  }

  async render() {
    const paths = this._parse();
    const isCreate = await createDir(paths.folder);

    if (!isCreate) {
      console.log("Ya existe un fichero con el componente");
      return;
    }

    let template = null;

    if (this.type === "rfc") {
      template = templates.rfc(this.name);
    } else if (this.type === "rnf") {
      template = templates.rnf(this.name);
    }

    if (this.language === "javascriptreact") {
      createAndWriteFile(paths.component, template.javascriptreact);
    } else if (this.language === "typescriptreact") {
      createAndWriteFile(paths.component, template.typescriptreact);
    }
    createAndWriteFile(paths.index, template.indexExport);
  }
}
