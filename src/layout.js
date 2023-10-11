const rfc = (name) => {
  const javascriptreact = `function ${name}({ title }) {
    return <div>{title}</div>;
}
          
export default ${name};`;

  const typescriptreact = `interface Props {
    title: string;
}
          
function ${name}({ title }: Props) {
    return <div>{title}</div>;
}
          
export default ${name};`;

  const indexExport = `import ${name} from "./${name}";
  
export default ${name};`;

  return {
    javascriptreact,
    typescriptreact,
    indexExport,
  };
};

const rnf = (name) => {
  const javascriptreact = `import { View, Text } from 'react-native'
function ${name}({ title }) {
    return (
        <View>
            <Text>Componet ${name}</Text>
        </View>
    );
}
            
export default ${name};`;

  const typescriptreact = `import { View, Text } from 'react-native'

interface Props {
    title: string;
}

function ${name}({ title }:Props) {
    return (
        <View>
            <Text>Componet ${name}</Text>
        </View>
    );
}
              
export default ${name};`;

  const indexExport = `import ${name} from "./${name}";
  
export default ${name};`;

  return {
    javascriptreact,
    typescriptreact,
    indexExport,
  };
};

const typeComponent = [
  {
    name: "reactNativeFunctionalComponent",
    value: "rnf",
  },
  {
    name: "reactFunctionalComponent",
    value: "rfc",
  },
];

const languagePrefer = [
  {
    name: "React with javaScritp",
    value: "javascriptreact",
  },
  {
    name: "React with typeScritp",
    value: "typescriptreact",
  },
];

const templates = {
  rfc,
  rnf,
};

const languages = {
  javascriptreact: {
    extComponent: ".jsx",
    extindex: ".js",
  },
  typescriptreact: {
    extComponent: ".tsx",
    extindex: ".ts",
  },
};

const choices = {
  typeComponent,
  languagePrefer,
  languages,
};

export { choices, languages, templates };
