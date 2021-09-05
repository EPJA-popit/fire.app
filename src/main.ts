import 'systemjs/dist/system'; 
import 'systemjs/dist/extras/amd';
import 'systemjs/dist/extras/named-register';
import 'systemjs/dist/extras/named-exports';
import 'systemjs/dist/extras/transform';

export default async ({apps, navigations, config}) => {
  const appName = location.pathname.replace('/', ''); 
  const appPath = `/static/${appName}/${apps[appName].version}/index.js`;

  console.log(appPath);

  const { default: componenet, mount, unmount } = await System.import(appPath);

  mount(componenet.default);
};

System.import('/js/main.js');