import { convertToReadableDate } from "../utils/date";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Tags from "./Tags";

import devto_articles from "../datas/devto_articles.json";

// interface MyArticlesProps {
//   articles: Pick<
//     DevToArticle,
//     "id" | "title" | "url" | "tag_list" | "published_at"
//   >[];
// }

const MyArticles = () => {
  return (
    <div className=" h-[800px] overflow-auto">
      <div className="bg-slate-950 p-6 sticky top-0 shadow-2xl">
        <h2 className="text-2xl font-bold text-blue-100 leading-snug">
          Latest blog
        </h2>

        <h3 className="mt-2">
          <a
            href="https://dev.to/alfism1"
            rel="noreferrer"
            target="_blank"
            className="text-slate-100 font-bold"
          >
            See all my posts here{" "}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </h3>
      </div>

      <div className="flex flex-col gap-3 bg-slate-950 p-6 pt-0">
        {devto_articles.map((article) => {
          return (
            <div className="border-t border-slate-900 pt-3">
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-200 font-semibold hover:underline"
              >
                {article.title}
              </a>

              <Tags
                tags={article.tag_list}
                className="bg-green-900 border border-green-700"
              />

              <span className="block text-slate-400 text-sm mt-2">
                <b>{convertToReadableDate(article.published_at)}</b>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyArticles;
