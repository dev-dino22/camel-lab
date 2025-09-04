export async function baseAPI<T>({
  method,
  path,
  body,
}: {
  method: string;
  path: string;
  body?: Record<string, unknown>;
}): Promise<T | null> {
  const baseURL = `http://techcourse-lv2-alb-974870821.ap-northeast-2.elb.amazonaws.com`;
  const result = await fetch(`${baseURL}${path}`, {
    method,
    headers: {
      Authorization: `Basic ${btoa(
        `${import.meta.env.VITE_USER_ID}:${import.meta.env.VITE_PASSWORD}`
      )}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });
  if (!result.ok) {
    throw new Error("서버에서 에러가 발생했습니다.");
  }

  if (method === "GET") return result.json();
  return null;
}
