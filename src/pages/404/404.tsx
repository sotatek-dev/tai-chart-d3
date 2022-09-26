import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();

  return (
    <div className="Page404">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        }
      />
    </div>
  );
}
