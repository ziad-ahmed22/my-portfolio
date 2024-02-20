"use client";
import { useEffect, useState } from "react";

import { RepoCard } from "@/components/repo-card/RepoCard";
import { Title } from "@/components/title/Title";
import { Rebo } from "@/types/types";

export const Repos = () => {
  const url = "https://api.github.com/users/ziad-ahmed22/repos";
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setData(data);
        setError(false);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container">
        <Title title="𝓜𝔂 𝓡𝓮𝓹𝓸𝓼" />

        {!error ? (
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {data?.map(({ id, name, html_url }: Rebo) => (
              <RepoCard name={name} url={html_url} key={id} />
            ))}
          </div>
        ) : (
          <div className="bg-red-950 py-10 px-5 w-[600px] max-w-full flex flex-col justify-center items-center gap-5 mx-auto rounded-lg border-[3px] border-red-600 text-white-text font-semibold text-lg">
            <span className="error tracking-wide">
              Failed To Fetch Repos 😢{" "}
            </span>
            <a
              href="https://github.com/ziad-ahmed22"
              target="blank"
              className="tracking-wide hover:text-main"
            >
              Please Go To My Github 👉
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
