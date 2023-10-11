#!/usr/bin/env node

import { program } from "commander";
import { cmdCreateComponent } from "./cmd.js";

program
  .name("React Components")
  .description("Programa de cli para crear componentes de ficheros con react")
  .version("1.0.0");

program
  .command("component")
  .argument("<name>", "Nombre del componente a crear")
  .action(cmdCreateComponent);

program.parse(process.argv);
