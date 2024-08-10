import "./App.css";
import { useForm } from "./use-form";

interface LoginForm {
  email: string;
  password: string;
}

interface LoginError {
  email: string[];
  password: string[];
}

interface ValidateResult extends LoginError {
  isValidating: boolean;
}
function validate(formData: LoginForm): ValidateResult {
  const { email, password } = formData;
  const errors: LoginError = {
    email: [],
    password: [],
  };

  if (email === "") {
    errors.email.push("이메일을 입력하세요");
  }

  if (!email.includes("@")) {
    errors.email.push("이메일에는 @가 포함되어야 합니다");
  }

  if (password === "") {
    errors.password.push("비밀번호를 입력하세요");
  }

  return {
    ...errors,
    isValidating: Object.values(errors).every((v) => v.length === 0),
  };
}

function App() {
  const { values, errors, handleValueChange, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validate,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          value={values.email}
          onChange={handleValueChange}
          type="text"
          id="email"
          name="email"
        />
        {errors && errors.email.map((error, i) => <div key={i}>{error}</div>)}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          value={values.password}
          onChange={handleValueChange}
          type="password"
          id="email"
          name="password"
        />
        {errors &&
          errors.password.map((error) => <div key={error}>{error}</div>)}
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default App;
