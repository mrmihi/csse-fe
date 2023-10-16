const PageTitle = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between -px-2 pt-2 pb-2">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
