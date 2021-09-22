import "systemjs/dist/system";
import "systemjs/dist/extras/amd";
import "systemjs/dist/extras/named-register";
import "systemjs/dist/extras/named-exports";
import "systemjs/dist/extras/transform";

export default async ({ apps, navigation, config }) => {
  const appName = location.pathname.replace("/", "");
  if (!(appName in apps)) {
    console.log(
      `WARNING: app ${appName} is not provided in apps: ${JSON.stringify(apps)}`
    );
  }
  const appPath = `/static/${appName}/${apps[appName].version}/index.js`;

  console.log("in fire.app, appPath=", appPath);

  const { default: component, mount, unmount } = await System.import(appPath);
  console.log("in fire.app, component, mount=", component, mount);

  mount(component.default);
};

// System.import("/src/main.ts");
