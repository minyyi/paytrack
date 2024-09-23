import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigator = useNavigate();

  const clickLogo = () => {
    navigator("/");
  };

  return (
    <div className="h-16 border-b shadow-md sticky top-0">
      <div className="h-full px-6 flex justify-between">
        <div className="flex items-center space-x-8 hover:cursor-pointer hover:text-[#808080]">
          <p
            className="font-logo font-bold text-3xl tracking-wider text-center"
            onClick={clickLogo}
          >
            Paytrack
          </p>
        </div>
        <div className="flex items-center space-x-8 text-center">
          <p
            className="text-md font-menu hover:cursor-pointer hover:text-[#808080] hover:opacity-100"
            //   onClick={() => clickMenu()}
          >
            달력
          </p>
          <p
            className="text-md font-menu hover:cursor-pointer hover:text-[#808080] hover:opacity-100"
            //   onClick={() => clickMenu(`section${index + 1}`)}
          >
            등록
          </p>
          <p
            className="text-md font-menu hover:cursor-pointer hover:text-[#808080] hover:opacity-100"
            //   onClick={() => clickMenu(`section${index + 1}`)}
          >
            통계
          </p>
          <p
            className="text-md font-menu hover:cursor-pointer hover:text-[#808080] hover:opacity-100"
            //   onClick={() => clickMenu(`section${index + 1}`)}
          >
            로그아웃
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
