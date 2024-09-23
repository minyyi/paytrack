const Card = () => {
  return (
    <>
      <div className="">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col space-y-6 p-6">
            <h3 className="font-semibold tracking-tight text-x1 mb-2">
              파트너 관리
            </h3>
            <p className="text-sm text-gray-600">
              다양한 대상을 등록하고 관리하세요.
            </p>
          </div>
          <div className="p-6 mt-auto"></div>
        </div>
      </div>

      <div className="">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm h-full flex flex-col hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col space-y-6 p-6">
            <h3 className="font-semibold tracking-tight text-x1 mb-2">
              파트너 관리
            </h3>
            <p className="text-sm text-gray-600">
              다양한 대상을 등록하고 관리하세요.
            </p>
          </div>
          <div className="p-6 mt-auto"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
