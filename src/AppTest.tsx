function AppTest() {
  console.log("UsePage 리렌더링!");
  // const navigate = useNavigate();
  // const [count, setCount] = useState(0);
  throw new Promise((resolve) => {
    console.log("1");
    setTimeout(() => {
      console.log("2");
      resolve("Mock API Data");
    }, 1000);
  });
}

export default AppTest;
