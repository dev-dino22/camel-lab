import { useTestContext } from "./TestProvider";

function NotContext() {
  console.log("NotContext 렌더링!");
  return (
    <div>
      <h1>Not Context</h1>
      <p>This is a placeholder for the Not Context component.</p>
    </div>
  );
}
export default NotContext;
