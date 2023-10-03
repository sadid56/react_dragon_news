import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  const { title, thumbnail_url, details, image_url, author,total_view, _id } = news;
  return (
    <div className="mb-5">
      <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <div class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
          <img
            src={author.img}
            class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
          />
          <div class="flex w-full flex-col gap-0.5">
            <div class="flex items-center justify-between">
              <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {author.name}
              </h5>
              <div className="flex items-center gap-2">
                <h2>a</h2>
                <h3>b</h3>
              </div>
            </div>
            <p class="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
              {author.published_date}
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <img className="w-full my-3 h-[250px]" src={image_url} alt="" />
      {
        details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="link link-secondary ">Read more...</Link></p> 
        :
        <p>{details}</p>
        
      }
      <hr className="my-5"/>

      <div className="flex justify-between items-center">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="flex items-center gap-2">
            <h1>View</h1>
            <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
