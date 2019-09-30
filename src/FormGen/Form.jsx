import React, { useState } from "react";
import Page from "./Page";

export default function Form({
  onChange,
  pages: pagesProp,
  loading,
  onSubmit,
  ...props
}) {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({});
  const [pages, setPages] = useState(pagesProp);
  const handleChange = obj => {
    const newData = { ...data, ...obj };
    setData(newData);
  };

  const submit = async () => {
    const pageCanChange = await checkPageChange();
    console.log(pageCanChange);
    if (
      //Get array containing required IDs
      Object.values(pages)
        .reduce(
          (acc, curr) =>
            acc.concat(
              curr.filter(input => input.required).map(input => input.id)
            ),
          []
        )
        //
        .filter(key => !Object.keys(data).includes(key)).length === 0 &&
      !pageCanChange
    )
      onSubmit(data);
  };

  /**
   * This function will check the form by executing all of the functions that are in the onPageChange argument of each input in the current page.
   * @returns {boolean} Whether the page may change or not
   */
  const checkPageChange = async () => {
    let isThereAnError = false;
    /**
     * Get all functions
     */
    const functions = pages[Object.keys(pages)[page]].reduce(
      (acc, cur) =>
        cur.onPageChange ? { ...acc, [cur.id]: cur.onPageChange } : acc,
      {}
    );
    //Checks if there are functions
    if (Object.keys(functions).length) {
      /**
       * Add the error message
       */
      const newPages = { ...pages };
      Array.prototype.asyncForEach = async function(callback) {
        for (let index = 0; index < this.length; index++) {
          await callback(this[index], index, this);
        }
      };
      await Object.keys(functions).asyncForEach(async (id, index) => {
        const err = await functions[id](data[id]);
        newPages[Object.keys(pages)[page]][index].pageError = err;
        if (err) isThereAnError = true;
      });
      /**
       * Add data to object
       */
      Object.keys(data).forEach(input =>
        pages[Object.keys(pages)[page]]
          .filter(inputObject => inputObject.id === input)
          .forEach(val => (val.value = data[input]))
      );
      if (isThereAnError) setPages(newPages);
    } else return true;
    return isThereAnError;
  };

  const changePage = async newPage => {
    const canPageChange = await checkPageChange();
    if (!canPageChange) setPage(newPage);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          margin: "3vw"
        }}
      >
        <Page
          key={JSON.stringify(pages)}
          name={Object.keys(pages)[page]}
          data={pages[Object.keys(pages)[page]]}
          onChange={handleChange}
        />
        {Object.keys(pages).length > 1 && (
          <div
            style={{
              display: "flex",
              height: "15vh",
              justifyContent: "space-evenly",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "90vw"
              }}
            >
              <button
                type="prev"
                disabled={page === 0}
                onClick={() => changePage(page - 1)}
                className="btn btn-primary"
                style={{
                  flexBasis: "auto"
                }}
              >
                Previous
              </button>
              <button
                type="next"
                className="btn btn-primary"
                disabled={page === Object.keys(pages).length - 1}
                onClick={() => changePage(page + 1)}
                style={{
                  flexBasis: "auto"
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {page === Object.keys(pages).length - 1 && (
          <div>
            <button
              type="btn"
              className="btn btn-primary"
              onClick={submit}
              style={{
                backgroundColor: "rgb(208,0,35)",
                border: "1px solid rgb(208,0,35)"
              }}
            >
              {props.submit || "Submit"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
