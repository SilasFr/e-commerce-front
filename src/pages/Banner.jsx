import { BannerContainer, Button } from "./Components";
import logo from "../assets/transparent-logo.png";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <BannerContainer>
      <div>
        <img src={logo} alt="" />
      </div>
      <Button onClick={handleClick}>Entrar</Button>
    </BannerContainer>
  );
}
