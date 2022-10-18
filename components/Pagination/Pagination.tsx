interface props {
  currentPage: string;
  prevPageHandler: () => void;
  nextPageHandler: () => void;
}

export const Pagination = ({
  currentPage,
  prevPageHandler,
  nextPageHandler,
}: props) => {
  return (
    <div className="flex justify-center m-6">
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li
          className={currentPage === "1" ? "hidden" : ""}
          onClick={prevPageHandler}
        >
          <a className=" cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a className=" block h-8 w-8 rounded border border-gray-100 text-center leading-8">
            {currentPage}
          </a>
        </li>

        <li
          className={currentPage === "10" ? "hidden" : ""}
          onClick={nextPageHandler}
        >
          <a className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  );
};
