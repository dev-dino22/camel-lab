export const api = {
  get: async () => {
    console.log("get함수 시작");
    const data = await timeout();
    return data;
  },
};

function timeout(): Promise<string> {
  // console.log("timeout 시작");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("timeout set시작");
      resolve("Mock API Data");
    }, 1000);
  });
}
