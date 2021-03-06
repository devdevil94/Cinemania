import React, { useEffect, useState } from "react";
import { stringify, parse } from "querystring";
import { useLocation } from "react-router-dom";

export default function SearchResults(props) {
  const [results, setResults] = useState([]);
  const searchParams = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const fetchData = async () => {
      const queryData = {
        api_key: process.env.REACT_APP_API_KEY,
        query: searchParams.get("query"),
        language: "en-US",
      };

      const res = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/search/movie?${stringify(
          queryData
        )}`,
        {
          method: "GET",
        }
      );

      if (res.status === 200) {
        const data = await res.json();
        setResults(data.results);
        console.log(data);
      }
    };

    fetchData();
  }, []);
  console.log(searchParams);
  return (
    <div className="app px-3 py-3">
      <div className="container">
        <div className="row row-cols-3">
          {(results || []).map(
            ({ title, poster_path }, i) =>
              poster_path && (
                <div key={i} className="col ">
                  <div className="card h-100">
                    <img
                      src={`${process.env.REACT_APP_IMAGE_BASE_URL}/w342${poster_path}`}
                      className="card-img-top"
                      alt={title}
                    />
                    <div className="card-body d-flex justify-content-between flex-column">
                      <h5 className="card-title">{title}</h5>
                      <a href="#!" className="btn btn-primary">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
