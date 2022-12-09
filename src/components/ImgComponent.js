import img from "../logo.svg";

function ImgComponent() {
  return (
    <div>
      <img src={img} alt="이미지" />
    </div>
  );
}

export default ImgComponent;
