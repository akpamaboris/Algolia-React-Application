export const Footer = () => {
  return (
    <section className="py-5 bg-blue-500">
      <div className="container  mx-auto">
        <div className="flex flex-wrap -mx-4 mb-16  border-gray-400"></div>
        <div className="md:flex justify-between">
          <p className="text-lg text-gray-200 ">
            © Akpama Boris. All rights reserved.
          </p>
          <div className="flex items-center">
            <a
              className="inline-block mr-2"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/akpamaboris"
            >
              <img
                className="h-12"
                src="https://static.shuffle.dev/uploads/files/6f/6f3c6791e097371df34d10e7272dfc12481bff5b/3345023101530077752-128.png"
                alt=""
              />
            </a>
            <a
              className="inline-block mr-2"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/borisakpama/"
            >
              <img
                className="h-12"
                src="https://static.shuffle.dev/uploads/files/6f/6f3c6791e097371df34d10e7272dfc12481bff5b/Daco-4071004.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
