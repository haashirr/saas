import { defer } from "@defer/client";

async function helloWorld(name: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Hello ${name}!`);
      resolve("done");
    }, 5000);
  });
}

export default defer(helloWorld);
