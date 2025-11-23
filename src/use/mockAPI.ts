export const api = {
  get: async () => {
    console.log("api 요청 발생!");
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
    }, 400);
  });
}
